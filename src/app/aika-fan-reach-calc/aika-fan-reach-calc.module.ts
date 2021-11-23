import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaFanReachCalcComponent } from './aika-fan-reach-calc.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [AikaFanReachCalcComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: AikaFanReachCalcComponent }])
    ],
    // exports: [AikaFanReachCalcComponent]
})
export class AikaFanReachCalcModule { }
