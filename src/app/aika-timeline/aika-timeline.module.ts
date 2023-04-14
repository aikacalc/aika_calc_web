import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AikaTimelineComponent } from './aika-timeline.component';



@NgModule({
  declarations: [
    AikaTimelineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AikaTimelineComponent
  ]
})
export class AikaTimelineModule { }
