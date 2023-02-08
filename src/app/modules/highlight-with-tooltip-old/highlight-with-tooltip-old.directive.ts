import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  ComponentRef, Directive,
  ElementRef,
  HostBinding, HostListener, Input, SecurityContext,
  SimpleChanges
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Directive({
  selector: '[appHighlightWithTooltipOld]',
})
export class HighlightWithTooltipOldDirective {

  @Input('highlight') searchTerm: string | null = '';
  @Input() caseSensitive = false;
  @Input() customClasses = '';

  @Input('tooltip') public text = '';

  private overlayRef?: OverlayRef;

  @HostBinding('innerHtml') content: string = '';
  
  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef,
    private sanitizer: DomSanitizer) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.elementRef?.nativeElement) {
      if ('searchTerm' in changes || 'caseSensitive' in changes) {
        const text = (this.elementRef.nativeElement as HTMLElement).textContent as string;
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

  public ngOnInit(): void {
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([{
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      }]);

    this.overlayRef = this.overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter') public show(): void {
    if (this.overlayRef) {
      const tooltipRef: ComponentRef<TooltipComponent> = this.overlayRef.attach(new ComponentPortal(TooltipComponent));
      tooltipRef.instance.text = this.text;
    }
  }

  @HostListener('mouseout') public hide(): void {
    if (this.overlayRef) {
      this.overlayRef.detach();
    }
  }

}
