import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';
import { environment } from '../environments/environment.prod';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { AikaCalcComponent } from './aika-calc/aika-calc.component';
import { AikaFanReachCalcComponent } from './aika-fan-reach-calc/aika-fan-reach-calc.component';
import { AikaDamageCalcComponent } from './aika-damage-calc/aika-damage-calc.component';
// import { AikaEnigmaComponent } from './aika-enigma/aika-enigma.component';
import { AikaTimelineComponent } from "./aika-timeline/aika-timeline.component";
import { AikaEnigmaTxtComponent } from "./aika-enigma-txt/aika-enigma-txt.component";
// import { AikaCalc2Component } from "./aika-calc2/aika-calc2.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
    CommonModule,
    RouterOutlet,
    AikaCalcComponent,
    AikaFanReachCalcComponent,
    AikaDamageCalcComponent,
    // AikaEnigmaComponent,
    AikaTimelineComponent,
    AikaEnigmaTxtComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title = 'aika_calc_web';
    page: string = '';
    buildTimeString: string = '';

    constructor(
        public service: AppService,
        private swUpdate: SwUpdate
    ) {
        this.buildTimeString = environment.buildTime;
    }

    ngOnInit(): void {
        this.swUpdate.versionUpdates.subscribe((versionEvent: VersionEvent) => {
            if(versionEvent.type == 'VERSION_READY'){
                this.service.hasNewUpdate = true;
            }
        });

        console.log(location.href);
        const url = new URL(location.href);
        if (url.searchParams.has('page')) {
            const page_ = url.searchParams.get('page');
            this.page = page_;
            // if (page_ == 'adc') {
            //     this.page = 'adc';
            // }
        }
    }

    selectPage(page: string) {
        this.page = page;
        const url = new URL(location.href);
        url.searchParams.set('page', page);
        history.pushState({}, '', url.toString());
        this.service.onPageChange(page);
    }
}
