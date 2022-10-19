import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AttrType, AttrTypeColor, getTypeColor } from '../model/attr-type';
import { AttrTypeId } from '../model/attr-type-id.enum';


const attrDamageRate = {
    Volt: {
        Volt: -1,
        Gravity: 1.2,
        Fire: 0.6,
        Ice: 0,
        None: 0,
    },
    Gravity: {
        Volt: 1.2,
        Gravity: -1,
        Fire: 0,
        Ice: 0.6,
        None: 0,
    },
    Fire: {
        Volt: 0.6,
        Gravity: 0,
        Fire: -1,
        Ice: 1.2,
        None: 0,
    },
    Ice: {
        Volt: 0,
        Gravity: 0.6,
        Fire: 1.2,
        Ice: -1,
        None: 0,
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


        let baseAtkDmg = this.atk - this.enemyDef;
        if (baseAtkDmg < 0) { baseAtkDmg = 1; }

        let atkResist = 0;
        this.enemyDebuff
            .filter(v => {
                if (v.attrTypeId == this.atkTypeId) {
                    return true;
                }
                else if (v.attrTypeId == AttrTypeId.Close) {
                    return this.atkTypeId == AttrTypeId.Impact || this.atkTypeId == AttrTypeId.Slash;
                }
                else if (v.attrTypeId == AttrTypeId.Shot) {
                    return this.atkTypeId == AttrTypeId.Physical || this.atkTypeId == AttrTypeId.Energy;
                }
                return false;
            })
            .forEach(v => {
                atkResist += (v.value / 100);
            });

        baseAtkDmg = baseAtkDmg * this.damageRate * (1 - atkResist);
        let minAtkDmg = baseAtkDmg * 0.97;
        let maxAtkDmg = baseAtkDmg * 1.03;

        this.outputAtkDamage = Math.floor(baseAtkDmg);



        const attrName = AttrTypeId[this.attrTypeId];
        const enemyAttrName = AttrTypeId[this.enemyAttrTypeId];
        let attrResist = -attrDamageRate[attrName][enemyAttrName];
        this.enemyDebuff
            .filter(v => v.attrTypeId == this.attrTypeId)
            .forEach(v => {
                attrResist += (v.value / 100);
            });

        let baseAttrDmg = this.attr;
        baseAttrDmg = baseAttrDmg * this.damageRate * (1 - attrResist);
        let minAttrDmg = baseAttrDmg * 0.97;
        let maxAttrDmg = baseAttrDmg * 1.03;

        this.outputAttrDamage = Math.floor(baseAttrDmg);


        const finalDmgPercent = this.finalDamageBuff / 100;

        this.outputDamage = (baseAtkDmg + baseAttrDmg) * (1 + finalDmgPercent);
        this.outputDamage = Math.max(0, this.outputDamage);
        this.outputDamage = Math.floor(this.outputDamage);

        this.outputDamageMin = (minAtkDmg + minAttrDmg) * (1 + finalDmgPercent);
        this.outputDamageMin = Math.max(0, this.outputDamageMin);
        this.outputDamageMin = Math.floor(this.outputDamageMin);

        this.outputDamageMax = (maxAtkDmg + maxAttrDmg) * (1 + finalDmgPercent);
        this.outputDamageMax = Math.max(0, this.outputDamageMax);
        this.outputDamageMax = Math.floor(this.outputDamageMax);
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

class ViceAARCalcCase {
    chrDef: number = 0;
    chrAttrResist: number = 0;
    minDamage: number = 0;
    maxDamage: number = 0;
    viceAttrType: number = 0;

    outputAtk: number;
    outputAttr: number;
    outputRatio: number;

    calc(): void {
        const baseDamage = (this.maxDamage - this.minDamage) / 2 + this.minDamage;

        if (this.chrAttrResist >= 100) {
            baseDamage
        }
    }
}

@Component({
    selector: 'app-aika-damage-calc',
    templateUrl: './aika-damage-calc.component.html',
    styleUrls: ['./aika-damage-calc.component.scss']
})
export class AikaDamageCalcComponent implements OnInit {
    AttrTypeColor = AttrTypeColor;
    AttrTypeId = AttrTypeId;
    getTypeColor = getTypeColor;

    dmgrList: DMGRateCase[] = [];
    dmgcList: DMGCalcPlan[] = [];
    viceAARList: ViceAARCalcCase[] = [];

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
        finalDmgBuff: `例如：愛花AN槍的KISS3詞條是最終傷害+10%`,
        enemyDef: `訓練場的100級靶子DEF是872
其他怪DEF大約參照，不是每個怪的DEF都一樣
Lv10: 152
Lv50: 472
Lv60: 552
Lv70: 632
Lv80: 712
Lv90: 792
Lv100:872
Lv110:952
Lv120:1032
Lv150:1272
Lv200:1672`,
        enemyResist: ``,
        enemyDebuff: `各種BOSS的耐性/弱點：
皮皮蛇身體
    耐性：近戰80% 射擊50% 全屬性80%
蠍子
    耐性：射擊50%
    弱點：近戰50％
9頭蛇
    耐性：射擊100%
土偶：
    耐性：近戰15%
王八頭
    弱點：近戰50%
王八身體
    耐性：打擊實彈30% 斬擊光彈50% 全屬性80%
普通、屬性鱟正面
    耐性：打擊實彈30% 斬擊光彈50% 全屬性80%
特異鱟
    耐性：打擊實彈30% 斬擊光彈50% 全屬性90%
大型VW
    耐性：近戰30%
    弱點：射擊30%
3筒子
    耐性：近戰40%
    弱點：射擊30%
豬籠草
    耐性：近戰40%
    弱點：射擊30%
刺蝟核心
    弱點：近戰100% 射擊100%
花園本體
    耐性：射擊90%
花園種子
    耐性：射擊30%
    弱點：近戰30%

!------------------------------
例如:
蠍子有射擊耐性50%、弱近戰50%，那麼在敵人弱點這邊填入
射擊50%(射擊傷害少50%)
近戰-50%(近戰傷害多50%)
------------------------------!

屬性debuff：
愛花ANSP 電屬性 -100%
綾香火炷 火屬性 -80%
睦海冰柱 冷屬性 -80%
...應該除了愛花以外的屬性debuff都是80%`,
        calcDmgAtk: ``,
        calcDmgAttr: ``,
        outputDmg: ``,
    }




    constructor(
        public service: AppService,
    ) { }

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

    showMsg(msg): void {
        this.service.message(msg);
    }

}
