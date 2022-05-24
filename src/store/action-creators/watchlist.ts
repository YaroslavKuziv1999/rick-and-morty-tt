import {watchListActionType} from "../../types/watchList";

export const AddToWatchList = (series: any): any => {
    return {type: watchListActionType.ADD_SERIES, payload: series}
}

export const DeleteFromWatchList = (id: number): any => {
    return {type: watchListActionType.DELETE_SERIES, payload: id}
}