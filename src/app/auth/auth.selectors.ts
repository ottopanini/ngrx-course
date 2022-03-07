import {createFeatureSelector, createSelector, Selector} from '@ngrx/store';
import {AuthState} from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const isLoggedIn: Selector<AuthState, boolean> = createSelector(selectAuthState, auth => !!auth.user);
export const isLoggedOut: Selector<AuthState, boolean> = createSelector(isLoggedIn, loggedIn => !loggedIn);
