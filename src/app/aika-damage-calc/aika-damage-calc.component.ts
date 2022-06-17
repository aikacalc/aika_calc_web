import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AttrType } from '../model/attr-type';
import { AttrTypeId } from '../model/attr-type-id.enum';


const attrDamageRate = {
    Volt: {
        Volt: 0,
        Gravity: 2.2,
        Fire: 1.6,
        Ice: 1,
        None: 1,
    },
    Gravity: {
        Volt: 2.2,
        Gravity: 0,
        Fire: 1,
        Ice: 1.6,
        None: 1,
    },
    Fire: {
        Volt: 1.6,
        Gravity: 1,
        Fire: 0,
        Ice: 2.2,
        None: 1,
    },
    Ice: {
        Volt: 1,
        Gravity: 1.6,
        Fire: 2.2,
        Ice: 0,
        None: 1,
    },
};

class DMGRateCase {
    name: string;
    atk: number = 0;
    attr: number = 0;
    minDmg: number = 0;
    maxDmg: number = 0;
    extraCalc: { value: number, type: string }[] = [];
    damageRate: number;
    // ----
    avgDmg: number = 0;
    atkDmg: number = 0;
    attrDmg: number = 0;
    // 訓練所的百級電鍋DEF
    enemyDef: number = 870;

    static getAika(): DMGRateCase {
        const c = new DMGRateCase();
        c.name = 'フラワーポットMk3 立射 一般彈';
        c.atk = 1340;
        c.attr = 1105;
        c.minDmg = 1529;
        c.maxDmg = 1621;
        c.extraCalc = [];

        c.update();

        // c.avgDmg = Math.floor((c.minDmg + c.maxDmg) / 2);
        // >1575

        // c.attrDmg = c.attr;
        // c.atkDmg = c.avgDmg - c.attr;
        // >470

        return c;
    }
    static clone(dmgr: DMGRateCase): DMGRateCase {
        const n = Object.assign(new DMGRateCase(), dmgr);
        n.extraCalc = [];
        dmgr.extraCalc.forEach(v => n.extraCalc.push(Object.assign({}, v)));
        return n;
    }
    update(): void {
        this.avgDmg = Math.floor((this.minDmg + this.maxDmg) / 2);
        this.attrDmg = this.attr;
        this.atkDmg = this.avgDmg - this.attr;
        let expectDmg = (this.atk - this.enemyDef) + this.attr;
        for (let i = 0; i < this.extraCalc.length; i++) {
            const element = this.extraCalc[i];
            if (element.type == '+') { expectDmg += element.value; }
            else if (element.type == '-') { expectDmg -= element.value; }
            else if (element.type == '×') { expectDmg *= element.value; }
            else if (element.type == '÷') { expectDmg /= element.value; }
        }
        this.damageRate = Number((this.avgDmg / expectDmg).toFixed(4));
    }
    addExtraCalc(): void {
        this.extraCalc.push({ value: 0, type: '+' });
    }
    deleteExtraCalc(item): void {
        const i = this.extraCalc.findIndex(v => v == item);
        this.extraCalc.splice(i, 1);
    }
}

class DMGCalcPlan {
    name: string = '';
    atk: number = 0;
    atkTypeId: AttrTypeId.Impact | AttrTypeId.Slash | AttrTypeId.Physical | AttrTypeId.Energy = AttrTypeId.Physical;
    attr: number = 0;
    attrTypeId: AttrTypeId.Volt | AttrTypeId.Gravity | AttrTypeId.Fire | AttrTypeId.Ice = AttrTypeId.Volt;
    damageRate: number = 1;
    damageRatePercent: number;

    enemyDef: number = 870;
    enemyAttrTypeId: AttrTypeId.None | AttrTypeId.Volt | AttrTypeId.Gravity | AttrTypeId.Fire | AttrTypeId.Ice = AttrTypeId.None;
    enemyResist: AttrTypeId.None | AttrTypeId.Impact | AttrTypeId.Slash | AttrTypeId.Physical | AttrTypeId.Energy = AttrTypeId.None;
    enemyDebuff: { attrTypeId: AttrTypeId, value: number }[] = [];

    finalDamageBuff: number = 0;

    outputAtkDamage: number;
    outputAttrDamage: number;
    outputDamage: number;
    outputDamageMin: number;
    outputDamageMax: number;

    static getAika(): DMGCalcPlan {
        const p = new DMGCalcPlan();
        p.name = 'フラワーポットMk3';
        p.atk = 1340;
        p.atkTypeId = AttrTypeId.Physical;
        p.attr = 1105;
        p.attrTypeId = AttrTypeId.Volt;
        p.damageRatePercent = 100;
        p.damageRate = p.damageRatePercent / 100;
        p.enemyDef = 870;
        p.enemyAttrTypeId = AttrTypeId.None;
        p.enemyResist = AttrTypeId.None;
        p.enemyDebuff = [];
        p.finalDamageBuff = 0;
        p.update();

        return p;
    }
    static clone(dmgc: DMGCalcPlan): DMGCalcPlan {
        const n = Object.assign(new DMGCalcPlan(), dmgc);
        n.enemyDebuff = [];
        dmgc.enemyDebuff.forEach(v => { n.enemyDebuff.push(Object.assign({}, v)) });
        return n;
    }
    update(): void {
        this.damageRate = this.damageRatePercent / 100;

        let baseAtkDamgeRate_ = this.damageRate;
        let atkDamgeRate_ = baseAtkDamgeRate_;
        this.enemyDebuff
            .filter(v => v.attrTypeId == this.atkTypeId)
            .forEach(v => {
                atkDamgeRate_ -= (v.value / 100);
            });
        if (atkDamgeRate_ < 0) {
            atkDamgeRate_ = 0;
        }

        this.outputAtkDamage = this.atk - this.enemyDef;
        if (this.outputAtkDamage <= 0) {
            this.outputAtkDamage = 1;
        }
        this.outputAtkDamage *= atkDamgeRate_;
        this.outputAtkDamage = Math.floor(this.outputAtkDamage);




        const attrName = AttrTypeId[this.attrTypeId];
        const enemyAttrName = AttrTypeId[this.enemyAttrTypeId];
        let baseAttrDamageRate_ = attrDamageRate[attrName][enemyAttrName];
        let attrDamageRate_ = baseAttrDamageRate_;
        this.enemyDebuff
            .filter(v => v.attrTypeId == this.attrTypeId)
            .forEach(v => {
                attrDamageRate_ -= (v.value / 100);
            });
        if (attrDamageRate_ < 0) {
            attrDamageRate_ = 0;
        }




        this.outputAttrDamage = Math.floor(this.attr * attrDamageRate_);
        this.outputAttrDamage *= this.damageRate;
        this.outputAttrDamage = Math.floor(this.outputAttrDamage);

        this.outputDamage = Math.floor((this.outputAtkDamage + this.outputAttrDamage) * (1 + (this.finalDamageBuff / 100)));
        this.outputDamageMin = Math.floor(this.outputDamage * 0.97);
        this.outputDamageMax = Math.floor(this.outputDamage * 1.03);
    }

    // addEnemyResist(): void {
    //     this.enemyResist.push(AttrTypeId.None);
    // }
    // deleteEnemyResist(item: AttrTypeId): void {
    //     const i = this.enemyResist.findIndex(v => v == item);
    //     this.enemyResist.splice(i, 1);
    // }
    addEnemyDebuff(): void {
        let attrTypeId = AttrTypeId.Volt;
        let value = 0;
        if (this.enemyDebuff.length > 0) {
            const debuff_ = this.enemyDebuff[this.enemyDebuff.length - 1];
            attrTypeId = debuff_.attrTypeId;
            value = debuff_.value;
        }
        this.enemyDebuff.push({ attrTypeId: attrTypeId, value: value });
    }
    deleteEnemyDebuff(item: any): void {
        const i = this.enemyDebuff.findIndex(v => v == item);
        this.enemyDebuff.splice(i, 1);
    }
}

@Component({
    selector: 'app-aika-damage-calc',
    templateUrl: './aika-damage-calc.component.html',
    styleUrls: ['./aika-damage-calc.component.scss']
})
export class AikaDamageCalcComponent implements OnInit {

    dmgrList: DMGRateCase[] = [];
    dmgcList: DMGCalcPlan[] = [];

    help = {
        atk: `角色版面atk`,
        attr: `角色版面屬性
例如，愛花是電屬性，那麼打怪的屬性影響：
打重力屬性(弱電擊)，屬性傷害220%
打電擊屬性(弱重力)，屬性傷害0%(沒有屬性傷害)
打燒夷屬性(弱冷擊)，屬性傷害160%
打冷擊屬性(弱燒夷)，屬性傷害100%(1:1)`,
        dmgRate: `單一攻擊的傷害比率, 可以用上面的比率計算器算
用愛花原版步槍做個栗子：
一般子彈
  站立:    100%
  衝刺-前: 65%
  衝刺-後: 65% 
  衝刺-側: 90%
蓄力-子彈: 57.5%
蓄力-榴彈頭:   100%
蓄力-榴彈爆炸: 150%`,
        finalDmgBuff: `愛花AN槍的KISS3詞條是最終傷害+10%`,
        enemyDef: `訓練場的100級靶子DEF是870
其他BOSS的DEF簡單參照
Lv50: 450
Lv60: 530
Lv70: 640
Lv80: 720
Lv90: 800
Lv100:880
Lv150:1280
Lv200:1680`,
        enemyResist: ``,
        enemyDebuff: `ATK耐性：
皮皮蛇身體：近戰-80% 射擊-50% 全屬性-80%
蠍子：近戰+50% 射擊-50%
9頭蛇：射擊-100%
土偶：近戰-15%
王八頭：近戰+50%
王八身體：打擊實彈-30% 斬擊光彈-50% 全屬性-80%
普通、屬性鱟正面：打擊實彈-30% 斬擊光彈-50% 全屬性-80%
特異鱟：打擊實彈-30% 斬擊光彈-50% 全屬性-90%
大VW：近戰-30% 射擊+30%
3筒子：近戰-40% 射擊+30%
豬籠草：近戰-40% 射擊+30%
刺蝟核心：所有ATK傷害+100%
花園本體：射擊-90%
花園種子：近戰+30% 射擊-30%

屬性debuff：
愛花ANSP 電屬性 -100%
綾香火炷 火屬性 -80%
睦海冰柱 冷屬性 -80%
...應該除了愛花以外的屬性debuff都是80%`,
        calcDmgAtk: ``,
        calcDmgAttr: ``,
        outputDmg: ``,
    }




    constructor() { }

    ngOnInit(): void {
        this.dmgrList.push(DMGRateCase.getAika());
        this.dmgcList.push(DMGCalcPlan.getAika());
    }
    removeRate(item: DMGRateCase): void {
        const i = this.dmgrList.findIndex(v => v == item);
        this.dmgrList.splice(i, 1);
    }
    addRate(): void {
        if (this.dmgrList.length > 0) {
            this.dmgrList.push(
                DMGRateCase.clone(this.dmgrList[this.dmgrList.length - 1])
            );
        } else {
            this.dmgrList.push(new DMGRateCase());
        }
    }

    removeCalc(item: DMGCalcPlan): void {
        const i = this.dmgcList.findIndex(v => v == item);
        this.dmgcList.splice(i, 1);
    }
    addCalc(): void {
        if (this.dmgcList.length > 0) {
            this.dmgcList.push(
                DMGCalcPlan.clone(this.dmgcList[this.dmgcList.length - 1])
            );
        } else {
            this.dmgcList.push(new DMGCalcPlan());
        }
    }

}
