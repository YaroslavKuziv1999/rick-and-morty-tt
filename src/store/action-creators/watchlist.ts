import {watchListActionType} from "../../types/watchList";

export const addToWatchList = (series: any): any => {
    return {type: watchListActionType.ADD_SERIES, payload: series}
}

export const deleteFromWatchList = (id: number): any => {
    return {type: watchListActionType.DELETE_SERIES, payload: id}
}

export const checkSeriesFromWatchList = (id: number): any => {
    return {type: watchListActionType.CHECK_SERIES, payload: id}
}