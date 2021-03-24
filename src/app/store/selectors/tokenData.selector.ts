import { createSelector } from '@ngrx/store';

import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getTokenData, TokenState } from '../reducers/tokenData.reducer'


export const getTokenDataState = createSelector(getElementsState, (state: ElementsState) => state.tokenData)
export const getSelectedTokenData = createSelector(getTokenDataState, (state: TokenState) => {
	return { ...state };
});

export const getAllUserInfo = createSelector(getTokenDataState, getTokenData)