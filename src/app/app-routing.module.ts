import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AikaCalcComponent } from './aika-calc/aika-calc.component';
import { AikaFanReachCalcComponent } from './aika-fan-reach-calc/aika-fan-reach-calc.component';
import { AikaBattleSimulatorComponent } from './aika-battle-simulator/aika-battle-simulator.component';

const routes: Routes = [
    { path: 'abs', component: AikaBattleSimulatorComponent },
    { path: 'afrc', component: AikaFanReachCalcComponent },
    { path: '**', component: AikaCalcComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
