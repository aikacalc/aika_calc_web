import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AikaCalcModule } from './aika-calc/aika-calc.module';
import { AikaFanReachCalcModule } from './aika-fan-reach-calc/aika-fan-reach-calc.module';
import { AppService } from './app.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
// import { AikaBattleSimulatorModule } from './aika-battle-simulator/aika-battle-simulator.module';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule
        , AikaCalcModule
        , AikaFanReachCalcModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
        // , AikaBattleSimulatorModule,
        // , AppRoutingModule
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
