import { AfterViewInit, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appRedBackground]',
  standalone: true,
  host: {
    '[style.background]': '"red"',
  }
})
export class RedBackgroundDirective implements OnInit, AfterViewInit { 
    public ngOnInit(): void {
      console.log('RedBackgroundDirective - ngOnInit');
    }
  
    public ngAfterViewInit(): void {
      console.log('RedBackgroundDirective - ngAfterViewInit');
    }
  
}
