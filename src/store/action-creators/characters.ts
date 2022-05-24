import {Dispatch} from "redux";
import axios from "axios";
import {charactersActionType} from "../../types/characters";

export const fetchCharacters = (page = 1, filter: string = '', search: string = '',): any => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({type: charactersActionType.FETCH_CHARACTERS});
            const params = {
                page
            }
            const link = filter && search ? `https://rickandmortyapi.com/api/character/?${filter.toLowerCase()}=${search.toLowerCase()}` : 'https://rickandmortyapi.com/api/character';
            const res = await axios.get(link, {params});
            dispatch({type: charactersActionType.FETCH_CHARACTERS_SUCCESS, payload: res.data.results});
            dispatch({type: charactersActionType.SET_TOTAL_PAGES_COUNT, payload: res.data.info.pages});
        } catch (e: any) {
            dispatch({type: charactersActionType.FETCH_CHARACTERS_ERROR, payload: `Error: ${e.message}`});
        }
    }
}

export const setCharactersPage = (page: number): any => {
    return {type: charactersActionType.SET_CHARACTERS_PAGE, payload: page}
}

export const setTotalPagesCount = (count: number): any => {
    return {type: charactersActionType.SET_TOTAL_PAGES_COUNT, payload: count}
}