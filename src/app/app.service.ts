import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    hasNewUpdate: boolean = false;

    showMessage: boolean = false;
    messageWindowContent: string = '';

    constructor() { }

    message(msg: string): void {
        this.showMessage = true;
        this.messageWindowContent = msg;
    }
}
