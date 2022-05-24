import { configureStore, createStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import reducers from "./reducers";

const persistConfig = {
    key: 'root',
    storage,
    // blacklist: ["userRed"],
}

const pReducer = persistReducer(persistConfig, reducers);
// console.log(window.localStorage);
export const store = createStore(pReducer);

// aq vou guardar tds os reducers e passar para os demais componentes o userRed, por exemplo a partir da store
// export const store = configureStore({
//     reducer: pReducer,
// });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;