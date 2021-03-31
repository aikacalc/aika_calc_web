import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { SwUpdate } from '@angular/service-worker';

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

    public ngOnInit(): void {
        this.swUpdate.available.subscribe(() => {
            this.service.hasNewUpdate = true;
        });
    }


}
