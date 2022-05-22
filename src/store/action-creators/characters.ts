import {Dispatch} from "redux";
import axios from "axios";
import {charactersActionType} from "../../types/characters";

export const fetchCharacters = (): any => {
    return async (dispatch: Dispatch<any>) => {
        try {
            dispatch({type: charactersActionType.FETCH_CHARACTERS});
            const params = {
                page: 2
            }
            const res = await axios.get('https://rickandmortyapi.com/api/character', {params});
            console.log(res);
            dispatch({type: charactersActionType.FETCH_CHARACTERS_SUCCESS, payload: res.data});
        } catch (e) {
            dispatch({type: charactersActionType.FETCH_CHARACTERS_ERROR, payload: 'Error'});
        }
    }
}