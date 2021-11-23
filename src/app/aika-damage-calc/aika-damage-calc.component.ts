import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { AttrType } from '../model/attr-type';
import { AttrTypeId } from '../model/attr-type-id.enum';

class DMGRateCase {
    name: string;
    atk: number = 0;
    attr: number = 0;
    minDmg: number = 0;
    maxDmg: number = 0;
    addonCalc: { value: number, type: string }[] = [];
    damageRate: number;
    // ----
    avgDmg: number = 0;
    atkDmg: number = 0;
    attrDmg: number = 0;
    // 訓練所的百級電鍋DEF
    enemyDef: number = 870;

    static getAika(): DMGRateCase {
        const c = new DMGRateCase();
        c.name = 'フラワーポットMk3--立射--一般彈';
        c.atk = 1340;
        c.attr = 1105;
        c.minDmg = 1529;
        c.maxDmg = 1621;
        c.addonCalc = [];

        c.update();

        // c.avgDmg = Math.floor((c.minDmg + c.maxDmg) / 2);
        // >1575

        // c.attrDmg = c.attr;
        // c.atkDmg = c.avgDmg - c.attr;
        // >470

        return c;
    }
    update(): void {
        this.avgDmg = Math.floor((this.minDmg + this.maxDmg) / 2);
        this.attrDmg = this.attr;
        this.atkDmg = this.avgDmg - this.attr;
        const expDmg = (this.atk - this.enemyDef) + this.attr;
        this.damageRate = Number((this.avgDmg / expDmg).toFixed(4));
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

    calcDamageAtk: number;
    calcDamageAttr: number;
    finalDamageBuff: number;
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


        // p.enemyDef = 

        // 1579, 494
        // ~470~
        // 1530, 445
        // 870


        return p;
    }

}

@Component({
    selector: 'app-aika-damage-calc',
    templateUrl: './aika-damage-calc.component.html',
    styleUrls: ['./aika-damage-calc.component.scss']
})
export class AikaDamageCalcComponent implements OnInit {

    dmgrList: DMGRateCase[] = [];

    constructor() { }

    ngOnInit(): void {
        this.dmgrList.push(DMGRateCase.getAika());
    }
    removeRate(item: DMGRateCase): void {
        const i = this.dmgrList.findIndex(v => v == item);
        this.dmgrList.splice(i, 1);
    }
    addRate(): void {
        if (this.dmgrList.length > 0) {
            this.dmgrList.push(
                Object.assign(
                    new DMGRateCase(),
                    this.dmgrList[this.dmgrList.length - 1]
                )
            );
        } else {
            this.dmgrList.push(new DMGRateCase());
        }
    }

}
