import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

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
    getBuildDate(): Date {
        return new Date(environment.buildDate);
    }
}
