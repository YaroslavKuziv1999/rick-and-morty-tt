import {combineReducers} from "redux";
import {charactersReducer} from "./charactersReducer";
import {watchListReducer} from "./watchListReducer";

export const rootReducer = combineReducers({
    characters: charactersReducer,
    watchList: watchListReducer
})

export type RootState = ReturnType<typeof rootReducer>;