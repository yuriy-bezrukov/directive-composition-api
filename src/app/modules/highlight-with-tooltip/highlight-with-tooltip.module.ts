import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HighlightDirective } from '../highlight/highlight.directive';
import { TooltipDirective } from '../tooltip/tooltip.directive';
import { HighlightWithTooltipDirective } from './highlight-with-tooltip.directive';



@NgModule({
  declarations: [
    HighlightWithTooltipDirective
  ],
  exports: [
    HighlightWithTooltipDirective
  ],
  imports: [
    CommonModule,
    HighlightDirective,
    TooltipDirective
  ]
})
export class HighlightWithTooltipModule { }
