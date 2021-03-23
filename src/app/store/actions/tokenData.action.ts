import { Action } from '@ngrx/store';

export const ADD_TOKEN_DATA = 'ADD_TOKEN_DATA';
export const GET_TOKEN_DATA = 'GET_TOKEN_DATA';

export class AddTokenData implements Action {
    readonly type = ADD_TOKEN_DATA;
    constructor(public payload: any) {}
}

export class GetTokenData implements Action {
    readonly type = GET_TOKEN_DATA;
}

export type TokenDataActionTypes = AddTokenData | GetTokenData;