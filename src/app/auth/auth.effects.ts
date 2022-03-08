import {Injectable} from '@angular/core';
import {Actions, ofType} from '@ngrx/effects';
import {AuthActions} from './action-types';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {
    const login$ = this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => {
        localStorage.setItem('user', JSON.stringify(action.user));
      })
    );
    login$.subscribe();
  }
}
