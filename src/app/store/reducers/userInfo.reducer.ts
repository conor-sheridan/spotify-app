import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ActionsSubject } from '@ngrx/store';
import * as actions from '../actions/index';

export interface UserState {
    userInfo: Object;
};

export const initialState: UserState = {
    userInfo: {}
};

export function reducer(
    state = initialState,
    action: actions.UserInfoActionTypes
): UserState {
    switch (action.type) {
        case actions.ADD_USER_INFO: {
            return {
                ...state,
                userInfo: action.payload
            };
        }
        case actions.GET_USER_INFO:
    }
}