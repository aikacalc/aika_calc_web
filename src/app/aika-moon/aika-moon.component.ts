import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

class MoonAge {
    age: number;
    name: string;
    cycleStartMs: number;
    cycleEndMs: number;

    // 最大月齡
    static maxAge = 29;
    // 月齡變化全部週期
    static fullCycleMs = 2551442876.9; // 2551442876.9
    static fullCycleDays = MoonAge.fullCycleMs / 86400000; // 29.530588853 days
    // 月齡變化單一週期
    static singleCycleMs = MoonAge.fullCycleMs / MoonAge.maxAge; // 87980788.31034483
    static singleCycleDays = MoonAge.singleCycleMs / 86400000; // 1.017606167 days

    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
        this.cycleStartMs = MoonAge.singleCycleMs * age;
        this.cycleEndMs = MoonAge.singleCycleMs * (age + 1) - 1;
    }
}


class MoonAgeChangeResult {
    prevAge: MoonAge;
    newAge: MoonAge;
    baseStartTime: Date;
    baseEndTime: Date;
    startTime: Date;
    endTime: Date;
    startTimeStr: string;
    endTimeStr: string;
    isToday: boolean;
    isStartToday: boolean;
    isEndToday: boolean;
    isCurrentAge: boolean;
}


// 月齡更新時間，以服務器時間為: UTC+9
@Component({
    selector: 'app-aika-moon',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
    ],
    templateUrl: './aika-moon.component.html',
    styleUrl: './aika-moon.component.scss'
})
export class AikaMoonComponent implements OnInit {

    timeZones: { label: string, value: number }[] = [
        { label: 'UTC-12', value: -12 },
        { label: 'UTC-11', value: -11 },
        { label: 'UTC-10', value: -10 },
        { label: 'UTC-9', value: -9 },
        { label: 'UTC-8', value: -8 },
        { label: 'UTC-7', value: -7 },
        { label: 'UTC-6', value: -6 },
        { label: 'UTC-5', value: -5 },
        { label: 'UTC-4', value: -4 },
        { label: 'UTC-3', value: -3 },
        { label: 'UTC-2', value: -2 },
        { label: 'UTC-1', value: -1 },
        { label: 'UTC+0', value: 0 },
        { label: 'UTC+1', value: 1 },
        { label: 'UTC+2', value: 2 },
        { label: 'UTC+3', value: 3 },
        { label: 'UTC+4', value: 4 },
        { label: 'UTC+5', value: 5 },
        { label: 'UTC+6', value: 6 },
        { label: 'UTC+7', value: 7 },
        { label: 'UTC+8', value: 8 },
        { label: 'UTC+9', value: 9 },
        { label: 'UTC+10', value: 10 },
        { label: 'UTC+11', value: 11 },
        { label: 'UTC+12', value: 12 },
    ];
    timeZonesDict: { [key: string]: number } = this.timeZones.reduce((dict, tz) => {
        dict[tz.label] = tz.value;
        return dict;
    }, {});
    selectedTimeZone: string = 'UTC+8';

    // 已經是UTC+9時間，把上面C# DateTime ticks轉成JavaScript的毫秒
    baseStartMs = 1758484440000; // 1758513240000
    baseStartDate = new Date(this.baseStartMs); // 已經是UTC+9時間
    maxMoonAge = MoonAge.maxAge;

    moonAgeNames = {
        0: '🌑新月',
        1: '🌒娥眉月',
        2: '🌒娥眉月',
        3: '🌒娥眉月',
        4: '🌒娥眉月',
        5: '🌒娥眉月',
        6: '🌒娥眉月',
        7: '🌓上弦月',
        8: '🌔盈凸月',
        9: '🌔盈凸月',
        10: '🌔盈凸月',
        11: '🌔盈凸月',
        12: '🌔盈凸月',
        13: '🌔盈凸月',
        14: '🌕滿月',
        15: '🌕全滿月',
        16: '🌕滿月',
        17: '🌖虧凸月',
        18: '🌖虧凸月',
        19: '🌖虧凸月',
        20: '🌖虧凸月',
        21: '🌖虧凸月',
        22: '🌗下弦月',
        23: '🌘殘月',
        24: '🌘殘月',
        25: '🌘殘月',
        26: '🌘殘月',
        27: '🌘殘月',
        28: '🌘殘月',
        29: '🌘殘月',
    }

    // 現在月齡
    currentMoonAge: MoonAge = new MoonAge(0, this.moonAgeNames[0]);
    todayMoonAgeChanges: MoonAgeChangeResult[] = [];
    futureMoonAgeChanges: MoonAgeChangeResult[] = [];

    futureCountBefore: number = 5;
    futureCountAfter: number = 30;

    // moonAgeChangeTimes

    constructor() { }


    ngOnInit(): void {
        this.setTimeZoneToLocal();
        this.currentMoonAge = this.getMoonAgeAtTime(this.getMainTimeDateNow());
        this.todayMoonAgeChanges = this.getMoonAgeChangesAroundDate(this.getMainTimeDateNow(), 1, 1);
        this.futureMoonAgeChanges = this.getMoonAgeChangesAroundDate(this.getMainTimeDateNow(), 5, 30);
        console.log('Current Moon Age:', this.currentMoonAge);
    }

    setTimeZoneToLocal(): void {
        const offset = -new Date().getTimezoneOffset() / 60;
        const tzLabel = `UTC${offset >= 0 ? '+' : ''}${offset}`;
        if (this.timeZonesDict.hasOwnProperty(tzLabel)) {
            this.selectedTimeZone = tzLabel;
        }
    }

    onTimeZoneChange(): void {
        const offset = this.timeZonesDict[this.selectedTimeZone];
        // console.log(`Selected time zone: ${this.selectedTimeZone}, Offset: ${offset}`);
        this.updateMoonAgeTimeZone();
    }
    updateFutureMoonAgeChanges(): void {
        this.futureMoonAgeChanges = this.getMoonAgeChangesAroundDate(this.getMainTimeDateNow(), this.futureCountBefore, this.futureCountAfter);
        this.updateMoonAgeTimeZone();
    }
    // 獲取當前主時間，時區固定為UTC+9
    getMainTimeMsNow(): number {
        return Date.now() + 9 * 3600000;
    }
    getMainTimeDateNow(): Date {
        const timeMs = this.getMainTimeMsNow();
        return new Date(timeMs);
    }
    newMoonAgeAtIndex(ageIndex: number): MoonAge {
        const index = ageIndex % MoonAge.maxAge;
        return new MoonAge(index, this.moonAgeNames[index]);
    }
    getMoonAgeIndexAtTime(date: Date): number {
        const timeMs = date.getTime();
        const elapsedMs = timeMs - this.baseStartMs;
        const elapsedDays = Math.floor(elapsedMs / 86400000);
        const cycleDays = elapsedDays % MoonAge.fullCycleDays;
        const ageIndex = Math.floor(cycleDays / MoonAge.singleCycleDays);
        return ageIndex;
    }
    // 取特定時間的月齡
    getMoonAgeAtTime(date: Date): MoonAge {
        return this.newMoonAgeAtIndex(this.getMoonAgeIndexAtTime(date));
    }
    // 取特定日期的月齡週期起始時間
    getMoonAgeFullCycleStartTime(date: Date): Date {
        const timeMs = date.getTime();
        const elapsedMs = timeMs - this.baseStartMs;
        const cycleMs = elapsedMs % MoonAge.fullCycleMs;
        const cycleStartMs = timeMs - cycleMs;
        return new Date(cycleStartMs);
    }


    // 將毫秒轉換為天數，類似C#的TimeSpan.TotalDays
    totalDays(timeMs: number): number {
        return timeMs / (24 * 60 * 60 * 1000);
    }

    // 檢查某時間是否為今天
    checkTimeIsToday(time: number): boolean {
        const now = new Date();
        const checkDate = new Date(time);
        return now.getFullYear() === checkDate.getFullYear() &&
            now.getMonth() === checkDate.getMonth() &&
            now.getDate() === checkDate.getDate();
    }
    checkDateIsToday(date: Date): boolean {
        const now = new Date();
        return now.getFullYear() === date.getFullYear() &&
            now.getMonth() === date.getMonth() &&
            now.getDate() === date.getDate();
    }

    getTimeString(date: Date): string {
        return date.getFullYear()
            + '-' + String(date.getMonth() + 1).padStart(2, '0')
            + '-' + String(date.getDate()).padStart(2, '0')
            + ' ' + String(date.getHours()).padStart(2, '0')
            + ':' + String(date.getMinutes()).padStart(2, '0')
            // + ':' + String(date.getSeconds()).padStart(2, '0')
            ;
    }

    // 取特定日期前後數次的月齡變化時間
    getMoonAgeChangesAroundDate(date: Date, countBefore: number, countAfter: number): MoonAgeChangeResult[] {
        const results: MoonAgeChangeResult[] = [];

        const targetTimeMs = date.getTime();
        const targetDate = new Date(targetTimeMs);
        const targetMoonAgeIndex = this.getMoonAgeIndexAtTime(targetDate);
        const targetMoonAge = this.newMoonAgeAtIndex(targetMoonAgeIndex);
        const targetMoonAgeStartMs = this.baseStartMs + targetMoonAge.cycleStartMs
            + Math.floor((targetTimeMs - this.baseStartMs) / MoonAge.fullCycleMs) * MoonAge.fullCycleMs;




        let handleIndex = 0;
        for (let i = -countBefore; i <= countAfter; i++) {
            const ageIndex = (targetMoonAge.age + i + MoonAge.maxAge) % MoonAge.maxAge;
            const currentAge = this.newMoonAgeAtIndex(ageIndex);
            const prevAge = this.newMoonAgeAtIndex((ageIndex - 1 + MoonAge.maxAge) % MoonAge.maxAge);

            // 計算週期起始和結束時間
            let cycleStartMs = targetMoonAgeStartMs + MoonAge.singleCycleMs * i;
            let cycleEndMs = cycleStartMs + MoonAge.singleCycleMs - 1;
            let baseStartTime = new Date(cycleStartMs);
            let baseEndTime = new Date(cycleEndMs);

            // const cycleStartMs = this.baseStartMs + currentAge.cycleStartMs + Math.floor((targetTimeMs - this.baseStartMs) / MoonAge.fullCycleMs) * MoonAge.fullCycleMs;
            // const cycleEndMs = this.baseStartMs + currentAge.cycleEndMs + Math.floor((targetTimeMs - this.baseStartMs) / MoonAge.fullCycleMs) * MoonAge.fullCycleMs;
            // const baseStartTime = new Date(cycleStartMs);
            // const baseEndTime = new Date(cycleEndMs);

            // 轉為選擇的時區時間
            const offsetHours = this.timeZonesDict[this.selectedTimeZone];
            const offsetMs = offsetHours * 3600000;
            const adjustedCycleStartMs = cycleStartMs + offsetMs - 9 * 3600000;
            const adjustedCycleEndMs = cycleEndMs + offsetMs - 9 * 3600000;
            const startTime = new Date(adjustedCycleStartMs);
            // 減1分鐘
            const endTime = new Date(adjustedCycleEndMs - 60000);
            const isToday = this.checkDateIsToday(startTime) || this.checkDateIsToday(endTime);

            const result = new MoonAgeChangeResult();
            result.prevAge = prevAge;
            result.newAge = currentAge;
            result.baseStartTime = baseStartTime;
            result.baseEndTime = baseEndTime;
            result.startTime = startTime;
            result.endTime = endTime;
            result.startTimeStr = this.getTimeString(startTime);
            result.endTimeStr = this.getTimeString(endTime);
            result.isToday = isToday;
            result.isStartToday = this.checkDateIsToday(startTime);
            result.isEndToday = this.checkDateIsToday(endTime);
            result.isCurrentAge = (currentAge.age == this.currentMoonAge.age) && result.isToday;
            results.push(result);

            handleIndex++;
        }

        return results;
    }

    updateMoonAgeTimeZone(): void {
        const moonAges = [
            ...this.todayMoonAgeChanges,
            ...this.futureMoonAgeChanges
        ]
        for (const element of moonAges) {
            const offsetHours = this.timeZonesDict[this.selectedTimeZone];
            const offsetMs = offsetHours * 3600000;
            const adjustedCycleStartMs = element.baseStartTime.getTime() + offsetMs - 9 * 3600000;
            const adjustedCycleEndMs = element.baseEndTime.getTime() + offsetMs - 9 * 3600000;
            element.startTime = new Date(adjustedCycleStartMs);
            element.endTime = new Date(adjustedCycleEndMs);
            element.startTimeStr = this.getTimeString(element.startTime);
            element.endTimeStr = this.getTimeString(element.endTime);
            element.isToday = this.checkDateIsToday(element.startTime) || this.checkDateIsToday(element.endTime);
            element.isStartToday = this.checkDateIsToday(element.startTime);
            element.isEndToday = this.checkDateIsToday(element.endTime);
            element.isCurrentAge = (element.newAge.age == this.currentMoonAge.age) && element.isToday;
        }

    }
}
