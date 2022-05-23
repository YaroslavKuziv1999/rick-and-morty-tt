import {charactersActionType} from "../../types/characters";

const defaultState: any = {
    characters: [],
    loading: false,
    page: 1,
    error: null
}

export const charactersReducer = (state = defaultState, action: any): any => {
    switch (action.type) {
        case charactersActionType.FETCH_CHARACTERS:
            return {...state, loading: true};
        case charactersActionType.FETCH_CHARACTERS_SUCCESS:
            return {...state, loading: false, characters: action.payload};
        case charactersActionType.FETCH_CHARACTERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case charactersActionType.SET_CHARACTERS_PAGE:
            return {...state, loading: false, page: action.payload};
        default:
            return state;
    }
}