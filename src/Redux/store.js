import { createStore } from 'redux';
import { cartReducer } from './reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//localstorage saved name
const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, cartReducer)


const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let persistor = persistStore(store)

export { store, persistor }