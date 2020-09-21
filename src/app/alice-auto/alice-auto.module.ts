import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliceAutoComponent } from './alice-auto.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AliceAutoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AliceAutoComponent]
})
export class AliceAutoModule { }
