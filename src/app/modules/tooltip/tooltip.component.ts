import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  styles: [
    `:host {
      display: block
    }
    div {
      background-color: #292929;
      color: white;
      padding: 10px;
      border-radius: 4px;
      width: fit-content;
    }`
  ],
  template: '<div @tooltip>{{ text }}</div>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('tooltip', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class TooltipComponent {
  @Input() text = '';
}
