import {watchListActionType} from "../../types/watchList";

const defaultState: any = {
    watchList: [],
}

export const watchListReducer = (state = defaultState, action: any): any => {
    switch (action.type) {
        case watchListActionType.ADD_SERIES:
            return {...state, watchList: [...state.watchList, action.payload]};
        case watchListActionType.DELETE_SERIES:
            return {...state, watchList: [...state.watchList.filter((elem: any) => elem.id !== action.payload)]};
        case watchListActionType.CHECK_SERIES:
            return {
                ...state,
                watchList: [...state.watchList.map((elem: any) => elem.id === action.payload ? {
                    ...elem,
                    done: true
                } : elem)]
            };
        default:
            return state;
    }
}