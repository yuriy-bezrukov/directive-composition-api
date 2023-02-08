import {
  Directive,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SecurityContext,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective implements OnChanges {
  @Input('appHighlight') searchTerm: string | null = '';
  @Input() caseSensitive = false;
  @Input() customClasses = '';

  @HostBinding('innerHtml') content: string = '';
  
  constructor(private el: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    debugger
    if (this.el?.nativeElement) {
      if ('searchTerm' in changes || 'caseSensitive' in changes) {
        const text = (this.el.nativeElement as HTMLElement).textContent as string;
        if (!this.searchTerm) {
          this.content = text;
        } else {
          const regex = new RegExp(
            this.searchTerm,
            this.caseSensitive ? 'g' : 'gi'
          );
          const newText = text.replace(regex, (match: string) => {
            return `<mark class='highlight ${this.customClasses}'>${match}</mark>`;
          });
          const sanitzed = this.sanitizer.sanitize(
            SecurityContext.HTML,
            newText
          ) as string;
          this.content = sanitzed;
        }
      }
    }
  }
}