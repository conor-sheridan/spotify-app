import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ActionsSubject } from '@ngrx/store';
import * as actions from '../actions/index';

export interface TokenState {
    access_token: string,
    expires_in: string,
    state: string,
    token_type: string
};

export const initialState: TokenState = {
    access_token: '',
    expires_in: '',
    state: '',
    token_type: ''
};

export function reducer(
    state = initialState,
    action: actions.TokenDataActionTypes
): TokenState {
    switch (action.type) {
        case actions.ADD_TOKEN_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        case actions.REMOVE_TOKEN_DATA: {
            return {
                access_token: '',
                expires_in: '',
                state: '',
                token_type: ''
            }
        }
        case actions.GET_TOKEN_DATA:
    }

    return state;
}

export const getTokenData = (state: TokenState) =>  state;