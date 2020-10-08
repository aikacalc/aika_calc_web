import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AikaCalcModule } from './aika-calc/aika-calc.module';
import { AliceAutoModule } from './alice-auto/alice-auto.module';
import { AikaFanReachCalcModule } from './aika-fan-reach-calc/aika-fan-reach-calc.module';
import { AppService } from './app.service';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule
        // , AppRoutingModule
        , AikaCalcModule
        , AliceAutoModule
        , AikaFanReachCalcModule
    ],
    providers: [
        AppService
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
