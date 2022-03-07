import {createSelector, Selector} from '@ngrx/store';
import {AuthState} from './reducers';

export const isLoggedIn: Selector<AuthState, boolean> = createSelector(state => state['auth'], auth => !!auth.user);
export const isLoggedOut: Selector<AuthState, boolean> = createSelector(isLoggedIn, loggedIn => !loggedIn);
