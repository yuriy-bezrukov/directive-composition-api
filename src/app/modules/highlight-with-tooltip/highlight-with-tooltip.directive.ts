import { Directive, inject } from '@angular/core';
import { HighlightDirective } from '../highlight/highlight.directive';
import { TooltipDirective } from '../tooltip/tooltip.directive';

@Directive({
  selector: '[appHighlightWithTooltip]',
  hostDirectives: [
    { 
      directive: HighlightDirective, 
      inputs: [
        'appHighlight: highlight'
      ]
    },
    {
      directive: TooltipDirective,
      inputs: ['appTooltip: tooltip']
    }
  ]
})
export class HighlightWithTooltipDirective {
  constructor() {
    inject(HighlightDirective).caseSensitive = false;
  }
}
