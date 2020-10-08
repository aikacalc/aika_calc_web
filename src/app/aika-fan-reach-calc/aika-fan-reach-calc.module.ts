import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaFanReachCalcComponent } from './aika-fan-reach-calc.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [AikaFanReachCalcComponent],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [AikaFanReachCalcComponent]
})
export class AikaFanReachCalcModule { }
