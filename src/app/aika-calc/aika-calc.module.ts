import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaCalcComponent } from './aika-calc.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [AikaCalcComponent],
    imports: [
        CommonModule,
        FormsModule,
        // RouterModule.forChild([{ path: '', component: AikaCalcComponent }])
    ],
    exports: [AikaCalcComponent]
})
export class AikaCalcModule { }
