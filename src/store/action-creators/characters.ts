import {Dispatch} from "redux";
import axios from "axios";
import {charactersActionType} from "../../types/characters";

export const fetchCharacters = (page = 1): any => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({type: charactersActionType.FETCH_CHARACTERS});
            const params = {
                page
            }
            const res = await axios.get('https://rickandmortyapi.com/api/character', {params});
            dispatch({type: charactersActionType.FETCH_CHARACTERS_SUCCESS, payload: res.data.results});
        } catch (e) {
            dispatch({type: charactersActionType.FETCH_CHARACTERS_ERROR, payload: `Error: ${e}`});
        }
    }
}

export const setCharactersPage = (page:number):any => {
    return {type:charactersActionType.SET_CHARACTERS_PAGE, payload: page}
}