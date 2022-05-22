import {charactersActionType} from "../../types/characters";

const defaultState: any = {
    characters: [],
    loading: false,
    error: null
}

export const charactersReducer = (state = defaultState, action: any): any => {
    switch (action.type) {
        case charactersActionType.FETCH_CHARACTERS:
            return {loading: true, error: null, characters: []};
        case charactersActionType.FETCH_CHARACTERS_SUCCESS:
            return {loading: false, error: null, characters: action.payload};
        case charactersActionType.FETCH_CHARACTERS_ERROR:
            return {loading: false, error: action.payload, characters: []}
        default:
            return state;
    }
}