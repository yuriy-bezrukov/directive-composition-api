import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CardModule } from './modules/card/card.module';
import { HighlightWithTooltipOldModule } from './modules/highlight-with-tooltip-old/highlight-with-tooltip-old.module';
import { HighlightWithTooltipModule } from './modules/highlight-with-tooltip/highlight-with-tooltip.module';
import { HighlightDirective } from './modules/highlight/highlight.directive';
import { LoggerModule } from './modules/logger/logger.module';
import { TooltipDirective } from './modules/tooltip/tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HighlightDirective,
    TooltipDirective,
    HighlightWithTooltipModule,
    LoggerModule,
    CardModule,
    HighlightWithTooltipOldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
