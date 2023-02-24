import { AikaSkillModule } from './aika-skill/aika-skill.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AikaCalcModule } from './aika-calc/aika-calc.module';
import { AikaFanReachCalcModule } from './aika-fan-reach-calc/aika-fan-reach-calc.module';
import { AikaDamageCalcModule } from "./aika-damage-calc/aika-damage-calc.module";
import { AppService } from './app.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
// import { AikaBattleSimulatorModule } from './aika-battle-simulator/aika-battle-simulator.module';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AikaCalcModule,
        AikaFanReachCalcModule,
        AikaDamageCalcModule,
        AikaSkillModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        // RouterModule.forRoot([
        //     { path: 'abs', loadChildren: () => import('./aika-battle-simulator/aika-battle-simulator.module').then(m => m.AikaBattleSimulatorModule) },
        //     { path: 'afrc', loadChildren: () => import('./aika-fan-reach-calc/aika-fan-reach-calc.module').then(m => m.AikaFanReachCalcModule) },
        //     { path: 'adc', loadChildren: () => import('./aika-damage-calc/aika-damage-calc.module').then(m => m.AikaDamageCalcModule) },
        //     { path: '', loadChildren: () => import('./aika-calc/aika-calc.module').then(m => m.AikaCalcModule) },
        //     { path: '**', redirectTo: '' }
        // ])
    ],
    providers: [
        AppService
    ],
    bootstrap: [
        AppComponent
    ],
})
export class AppModule { }
