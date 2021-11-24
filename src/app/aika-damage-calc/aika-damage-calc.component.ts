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
}

class DMGCalcPlan {
    index: number;
    name: string;
    atk: number;
    atkTypeId: AttrTypeId.None | AttrTypeId.Impact | AttrTypeId.Slash | AttrTypeId.Physical | AttrTypeId.Energy;
    attr: number;
    attrTypeId: AttrTypeId.None | AttrTypeId.Volt | AttrTypeId.Gravity | AttrTypeId.Fire | AttrTypeId.Ice;
    damageRate: number;

    enemyDef: number;
    enemyAttrTypeId: AttrTypeId.None | AttrTypeId.Volt | AttrTypeId.Gravity | AttrTypeId.Fire | AttrTypeId.Ice;
    enemyResist: AttrTypeId.None | AttrTypeId.Impact | AttrTypeId.Slash | AttrTypeId.Physical | AttrTypeId.Energy;
    enemyDebuff: { attrTypeId: AttrTypeId, value: number }[];

    finalDamageBuff: number;

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
        p.damageRate = 1;
        p.enemyDef = 870;
        p.enemyAttrTypeId = AttrTypeId.None;
        p.enemyResist = AttrTypeId.None;
        p.enemyDebuff = [];
        p.finalDamageBuff = 0;


        // p.enemyDef = 

        // 1579, 494
        // ~470~
        // 1530, 445
        // 870
        p.update();

        return p;
    }
    clone(dmgc: DMGCalcPlan): DMGCalcPlan {
        const n = Object.assign(new DMGCalcPlan(), dmgc);
        n.enemyDebuff = [];
        return n;
    }
    update(): void {
        this.outputAtkDamage = this.atk - this.enemyDef;
        if (this.outputAtkDamage <= 0) {
            this.outputAtkDamage = 1;
        }
        const attrName = AttrTypeId[this.attrTypeId];
        const enemyAttrName = AttrTypeId[this.enemyAttrTypeId];
        const attrDamageRate_ = attrDamageRate[attrName][enemyAttrName];
        this.outputAttrDamage = Math.floor(this.attr * attrDamageRate_);

        this.outputDamage = (this.outputAtkDamage + this.outputAttrDamage) * (1 + this.finalDamageBuff);
        this.outputDamageMin = this.outputDamage * 0.97;
        this.outputDamageMax = this.outputDamage * 1.03;
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

}
