import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';

export interface LoggerState {
  text: string;
}

export function getLoggerStateDefault(): LoggerState {
  return {
    text: ''
  }
}

@Injectable()
export class LoggerService implements OnDestroy {

  public readonly state$: Observable<LoggerState>
  private readonly _state$ = new BehaviorSubject<LoggerState>(getLoggerStateDefault());
  private readonly _destroy$ = new Subject<boolean>();

  constructor() {
    this.state$ = this._state$.asObservable();

    this.state$
      .pipe(takeUntil(this._destroy$))
      .subscribe(state => {
        console.log('LoggerService - update', state);
      });
    
    console.warn('LoggerService - init');
  }

  public update(state: Partial<LoggerState>): void {
    this._state$.next({
      ...this._state$.getValue(),
      ...state
    });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete()
  }

}
