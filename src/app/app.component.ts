import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SwUpdate } from '@angular/service-worker';
import { range } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

    constructor(
        public service: AppService,
        private swUpdate: SwUpdate
    ) { }

    ngOnInit(): void {
        this.swUpdate.available.subscribe(() => {
            this.service.hasNewUpdate = true;
        });
    }

    temphpcalc(): void {
        // chara
        let charaLv = 0;
        let charaGradeup = 0;
        let charaMinHP = 0;
        let charaMaxHP = 0;

        // gears
        let shotGears = [];
        let closeGears = [];
        let topGears = [
            {
                minLv: 0,
                maxLv: 0,
                minHP: 0,
                maxHP: 0,
                minQuality: 0,
                maxQuality: 0,
            }
        ]
        let bottomGears = [
            {
                minLv: 0,
                maxLv: 0,
                minHP: 0,
                maxHP: 0,
            }
        ]
        let shotcustomKits = [
            0.3, 0.5, 0.7
        ];

        const calcSet = {
            charaBaseHP: 0,
            topGearBaseHP: 0,
            topGearQuality: 0,
            topGearCustomKit: 0,
            bottomGearBaseHP: 0,
            bottomGearCustomKit: 0,
        }
    }
    *combinations(arrOfArr) {
        let [head, ...tail] = arrOfArr
        let remainder = tail.length ? this.combinations(tail) : [[]];
        for (let r of remainder) for (let h of head) yield [h, ...r];
    }
}
