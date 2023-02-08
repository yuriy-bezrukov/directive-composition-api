import { AfterViewInit, Directive, HostListener, OnInit } from '@angular/core';



@Directive({
  selector: '[appHitMap]',
  standalone: true
})
export class HitMapDirective implements OnInit, AfterViewInit {

  constructor() { }

  @HostListener('mousemove') public onMouseMove(): void {
    console.log('magic move');
  }

  public ngOnInit(): void {
    console.log('HitMapDirective - ngOnInit');
  }

  public ngAfterViewInit(): void {
    console.log('HitMapDirective - ngAfterViewInit');
  }

}
