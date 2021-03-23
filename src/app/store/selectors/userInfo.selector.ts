import { createSelector } from '@ngrx/store';

import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getUserInfo, UserState } from '../reducers/userInfo.reducer'
import { DictionaryUtils } from '../../models/Dictionary-utils.model';

export const getUserInfoState = createSelector(getElementsState, (state: ElementsState) => state.userInfo)

export const getAllUserInfo = createSelector(getUserInfoState, getUserInfo)
export const getSelectedUserInfo = createSelector(getUserInfoState, (state: UserState) => {
    const entities = DictionaryUtils.toArray<any>(state);
    return { ...state, userInfo: entities }
})
