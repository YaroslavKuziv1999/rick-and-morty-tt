import {SeriesType, watchListActionType, WatchListState} from "../../types/watchList";

const defaultState: WatchListState = {
    watchList: [],
}

export const watchListReducer = (state = defaultState, action: any): WatchListState => {
    switch (action.type) {
        case watchListActionType.ADD_SERIES:
            return {...state, watchList: [...state.watchList, action.payload]};
        case watchListActionType.DELETE_SERIES:
            return {
                ...state,
                watchList: [...state.watchList.filter((series: SeriesType) => series.id !== action.payload)]
            };
        case watchListActionType.CHECK_SERIES:
            return {
                ...state,
                watchList: [...state.watchList.map((series: SeriesType) => series.id === action.payload ? {
                    ...series,
                    done: true
                } : series)]
            };
        default:
            return state;
    }
}