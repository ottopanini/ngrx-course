import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector, createReducer,
  createSelector,
  MetaReducer, on
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import {User} from '../model/user.model';
import {AuthActions} from '../action-types';

export const authFeatureKey = 'auth';

// tslint:disable-next-line:no-empty-interface
export interface AuthState {
  user: User;
}

export const initAuthState: AuthState = {
  user: undefined
};

export const authReducer = createReducer(initAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      ...state,
      user: action.user
    };
  })
);

export const metaReducers: MetaReducer<AuthState>[] = !environment.production ? [] : [];
