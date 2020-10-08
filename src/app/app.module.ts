import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AikaCalcModule } from './aika-calc/aika-calc.module';
import { AliceAutoModule } from './alice-auto/alice-auto.module';
import { AikaFanReachCalcModule } from './aika-fan-reach-calc/aika-fan-reach-calc.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule
        , AppRoutingModule
        , AikaCalcModule
        , AliceAutoModule
        , AikaFanReachCalcModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
