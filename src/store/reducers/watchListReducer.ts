import {watchListActionType} from "../../types/watchList";

const defaultState: any = {
    watchList: [],
}

export const watchListReducer = (state = defaultState, action: any): any => {
    switch (action.type) {
        case watchListActionType.ADD_SERIES:
            return {...state, watchList: [...state.watchList, action.payload]};
        case watchListActionType.DELETE_SERIES:
            return {...state, loading: false, watchList: action.payload, found: true};
        default:
            return state;
    }
}