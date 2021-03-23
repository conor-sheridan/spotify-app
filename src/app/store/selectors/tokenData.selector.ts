import { createSelector } from '@ngrx/store';

import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getTokenData, TokenState } from '../reducers/tokenData.reducer'
import { DictionaryUtils } from '../../models/Dictionary-utils.model';


export const getTokenDataState = createSelector(getElementsState, (state: ElementsState) => state.tokenData)
export const getSelectedTokenData = createSelector(getTokenDataState, (state: TokenState) => {
	const entities = DictionaryUtils.toArray<any>(state);
	return { ...state, tokenData: entities };
});

export const getAllUserInfo = createSelector(getTokenDataState, getTokenData)