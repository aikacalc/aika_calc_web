import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaBattleSimulatorComponent } from './aika-battle-simulator.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [AikaBattleSimulatorComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([{ path: '', component: AikaBattleSimulatorComponent }])
    ]
})
export class AikaBattleSimulatorModule { }
