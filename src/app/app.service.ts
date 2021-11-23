import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    hasNewUpdate: boolean = false;
    constructor() { }
}
