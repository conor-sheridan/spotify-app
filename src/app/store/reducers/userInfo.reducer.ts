import * as actions from '../actions/index';

export interface UserState {};

export const initialState: UserState = {};

export function reducer(
    state = initialState,
    action: actions.UserInfoActionTypes
): UserState {
    switch (action.type) {
        case actions.ADD_USER_INFO: {
            return {
                ...state,
                ...action.payload
            };
        }
        case actions.REMOVE_USER_INFO: {
            return {};
        }
        case actions.GET_USER_INFO:
    }

    return state;
}

export const getUserInfo = (state: UserState) => state;