import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    pageIndex: number = 0;
    hasNewUpdate: boolean = false;
    constructor() { }
}
