import { CdkDrag } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { DestroyDirective } from '../../destroy/destroy.directive';
import { HitMapDirective } from '../../hit-map/hit-map.directive';
import { RedBackgroundDirective } from '../../red-background/red-background.directive';

@Component({
  selector: 'app-card',
  template: '<ng-content/>',
  styles: [':host { display: block}'],
  hostDirectives: [
    {
      directive: HitMapDirective,
      inputs: []
    },
    RedBackgroundDirective,
    CdkDrag,
    DestroyDirective
  ]
})
export class CardComponent implements OnInit, AfterViewInit {
  destroy$ = inject(DestroyDirective).destroy$;

  public ngOnInit(): void {
    console.log('CardComponent - ngOnInit');

    this.destroy$.subscribe(() => {
      debugger
    });
  }

  public ngAfterViewInit(): void {
    console.log('CardComponent - ngAfterViewInit');
  }
}