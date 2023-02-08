import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightWithTooltipOldDirective } from './highlight-with-tooltip-old.directive';



@NgModule({
  declarations: [
    HighlightWithTooltipOldDirective
  ],
  exports: [
    HighlightWithTooltipOldDirective
  ],
  imports: [
    CommonModule
  ]
})
export class HighlightWithTooltipOldModule { }
