import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AikaCalcComponent } from './aika-calc/aika-calc.component';
import { AikaFanReachCalcComponent } from './aika-fan-reach-calc/aika-fan-reach-calc.component';
import { AliceAutoComponent } from './alice-auto/alice-auto.component';

const routes: Routes = [
    { path: 'aa', component: AliceAutoComponent },
    { path: 'afrc', component: AikaFanReachCalcComponent },
    { path: '**', component: AikaCalcComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
