import { ActionReducerMap } from '@ngrx/store';
import * as tokenDataReducer from './tokenData.reducer';
import * as userInfoReducer from './userInfo.reducer';
import * as musicDataReducer from './musicData.reducer';

export interface ElementsState {
    tokenData: tokenDataReducer.TokenState;
    userInfo: userInfoReducer.UserState;
    musicData: musicDataReducer.MusicDataState;
}

export const reducers: ActionReducerMap<ElementsState> = {
    tokenData: tokenDataReducer.reducer,
    userInfo: userInfoReducer.reducer,
    musicData: musicDataReducer.reducer
};