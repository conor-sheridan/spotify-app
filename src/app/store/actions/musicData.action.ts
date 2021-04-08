import { Action } from '@ngrx/store';

export const ADD_MUSIC_DATA = 'ADD_MUSIC_DATA';
export const GET_MUSIC_DATA = 'GET_MUSIC_DATA';
export const REMOVE_MUSIC_DATA = 'REMOVE_MUSIC_DATA';

export class AddMusicData implements Action {
    readonly type = ADD_MUSIC_DATA;
    constructor(public payload: any) {}
}

export class GetMusicData implements Action {
    readonly type = GET_MUSIC_DATA;
}

export class RemoveMusicData implements Action {
    readonly type = REMOVE_MUSIC_DATA;
}

export type MusicDataActionTypes = AddMusicData | GetMusicData | RemoveMusicData;