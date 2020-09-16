import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaCalcComponent } from './aika-calc.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    declarations: [AikaCalcComponent],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [AikaCalcComponent]
})
export class AikaCalcModule { }
