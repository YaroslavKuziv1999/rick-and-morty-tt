import {charactersActionType, CharactersState} from "../../types/characters";

const defaultState: CharactersState = {
    characters: [],
    page: 1,
    totalPagesCount: 42,
    error: null
}

export const charactersReducer = (state = defaultState, action: any): CharactersState => {
    switch (action.type) {
        case charactersActionType.FETCH_CHARACTERS_SUCCESS:
            return {...state, characters: action.payload};
        case charactersActionType.FETCH_CHARACTERS_ERROR:
            return {...state, error: action.payload};
        case charactersActionType.SET_TOTAL_PAGES_COUNT:
            return {...state, totalPagesCount: action.payload};
        case charactersActionType.SET_CHARACTERS_PAGE:
            return {...state, page: action.payload};
        default:
            return state;
    }
}