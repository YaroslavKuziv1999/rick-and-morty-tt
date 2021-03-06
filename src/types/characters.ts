export interface CharactersState {
    characters: any,
    page: number,
    totalPagesCount: number,
    error: null | undefined
}

export enum charactersActionType {
    FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS",
    FETCH_CHARACTERS_ERROR = "FETCH_CHARACTERS_ERROR",
    SET_CHARACTERS_PAGE = "SET_CHARACTERS_PAGE",
    SET_TOTAL_PAGES_COUNT = "SET_TOTAL_PAGES_COUNT",
}

export enum charactersFilterBy {
    SPECIES = "Species",
    STATUS = "Status",
    GENDER = "Gender",
}