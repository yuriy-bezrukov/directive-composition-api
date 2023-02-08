import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HitMapDirective } from '../hit-map/hit-map.directive';
import { RedBackgroundDirective } from '../red-background/red-background.directive';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CardComponent
  ],
  exports: [
    CardComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    HitMapDirective,
    RedBackgroundDirective
  ]
})
export class CardModule { }
