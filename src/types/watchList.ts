export interface WatchListState {
    watchList: Array<SeriesType>
}

export type SeriesType = { id: string, value: string, done: boolean }

export enum watchListActionType {
    ADD_SERIES = "ADD_SERIES",
    DELETE_SERIES = "DELETE_SERIES",
    CHECK_SERIES = "CHECK_SERIES",
}