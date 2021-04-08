import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';
import { ActionsSubject } from '@ngrx/store';
import * as actions from '../actions/index';

export interface MusicDataState {
    topArtists: Object
};

export const initialState: MusicDataState = {
    topArtists: {}
};

export function reducer(
    state = initialState,
    action: actions.MusicDataActionTypes
): MusicDataState {
    switch (action.type) {
        case actions.ADD_MUSIC_DATA: {
            return {
                ...state,
                topArtists: action.payload
            };
        }
        case actions.REMOVE_MUSIC_DATA: {
            return {
                topArtists: {}
            };
        }
        case actions.GET_MUSIC_DATA:
    }

    return state;
}

export const getMusicData = (state: MusicDataState) =>  state;