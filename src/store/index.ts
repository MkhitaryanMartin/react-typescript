import { configureStore, combineReducers } from "@reduxjs/toolkit";
import character from "./reducers/characterReducer";
import films from "./reducers/filmReducer"


const rootReducer= combineReducers({
   character,
   films
})

const setupStore = ()=> configureStore({
    reducer : rootReducer,
   
})

 const store = setupStore()

export type RootState = ReturnType< typeof store.getState>;
export type AppStore = ReturnType <typeof setupStore>
export type AppDispatch = AppStore["dispatch"]

export default store
