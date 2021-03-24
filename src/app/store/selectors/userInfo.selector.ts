import { createSelector } from '@ngrx/store';

import { ElementsState } from '../reducers';
import { getElementsState } from '.';
import { getUserInfo, UserState } from '../reducers/userInfo.reducer'

export const getUserInfoState = createSelector(getElementsState, (state: ElementsState) => state.userInfo)

export const getAllUserInfo = createSelector(getUserInfoState, getUserInfo)
export const getSelectedUserInfo = createSelector(getUserInfoState, (state: UserState) => {
    return { ...state }
})
