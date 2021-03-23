import { ActionReducerMap } from '@ngrx/store';
import * as tokenDataReducer from './tokenData.reducer';
import * as userInfoReducer from './userInfo.reducer';

export interface ElementsState {
    tokenData: tokenDataReducer.TokenState;
    userInfo: userInfoReducer.UserState;
}

export const reducers: ActionReducerMap<ElementsState> = {
    tokenData: tokenDataReducer.reducer,
    userInfo: userInfoReducer.reducer
};