import { Directive } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Directive({
  selector: '[appDestroy]',
  standalone: true
})

export class DestroyDirective {
  private _destroy$ = new Subject<boolean>();

  get destroy$(): Observable<boolean> {
    return this._destroy$.asObservable();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

}

