import { Action } from '@ngrx/store';

export const ADD_USER_INFO = 'ADD_USER_INFO';
export const GET_USER_INFO = 'GET_USER_INFO';
export const REMOVE_USER_INFO = 'REMOVE_USER_INFO';

export class AddUserInfo implements Action {
    readonly type = ADD_USER_INFO;
    constructor(public payload: any) {}
}

export class GetUserInfo implements Action {
    readonly type = GET_USER_INFO;
}

export class RemoveUserInfo implements Action {
    readonly type = REMOVE_USER_INFO;
}

export type UserInfoActionTypes = AddUserInfo | GetUserInfo | RemoveUserInfo;