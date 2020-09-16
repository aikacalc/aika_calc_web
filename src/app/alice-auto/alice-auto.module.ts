import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliceAutoComponent } from './alice-auto.component';



@NgModule({
  declarations: [AliceAutoComponent],
  imports: [
    CommonModule
  ],
  exports: [AliceAutoComponent]
})
export class AliceAutoModule { }
