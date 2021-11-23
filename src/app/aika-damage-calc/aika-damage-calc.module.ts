import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaDamageCalcComponent } from './aika-damage-calc.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [AikaDamageCalcComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: AikaDamageCalcComponent }])
    ],
    // exports: [AikaDamageCalcComponent]
})
export class AikaDamageCalcModule { }
