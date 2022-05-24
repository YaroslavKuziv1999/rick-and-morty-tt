import {charactersActionType} from "../../types/characters";

const defaultState: any = {
    characters: [],
    loading: false,
    page: 1,
    totalPagesCount: 42,
    error: null
}

export const charactersReducer = (state = defaultState, action: any): any => {
    switch (action.type) {
        case charactersActionType.FETCH_CHARACTERS:
            return {...state, loading: true, found: true};
        case charactersActionType.FETCH_CHARACTERS_SUCCESS:
            return {...state, loading: false, characters: action.payload, found: true};
        case charactersActionType.FETCH_CHARACTERS_ERROR:
            return {...state, loading: false, error: action.payload, found: true};
        case charactersActionType.SET_TOTAL_PAGES_COUNT:
            return {...state, loading: false, found: true, totalPagesCount: action.payload};
        case charactersActionType.SET_CHARACTERS_PAGE:
            return {...state, loading: false, page: action.payload, found: true};
        default:
            return state;
    }
}