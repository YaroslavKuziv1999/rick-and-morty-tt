import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const persistRed = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistRed, applyMiddleware(thunk))

export const persistor = persistStore(store);