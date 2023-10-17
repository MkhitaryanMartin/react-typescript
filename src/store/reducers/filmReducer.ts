import { IFilmsData } from "../../type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchFilms } from "./actionCreator";


export interface IInitialState{
   data: IFilmsData,
    isfetching: boolean,
    error: string,
    page: number,
    search: string,
    films: string[]
}


const initialState : IInitialState ={
    data: {
        count: 0,
         next: "",
        previus:"",
        results:[]
    },
    isfetching: false,
    error: "",
    page:1,
    search: "",
    films:[]
} 


export  const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers :{
        pageReducer: (state, action)=>{
            state.page = action.payload
        },
        searchReducer: (state, action)=>{
            state.search = action.payload
        },
        errorReducer: (state, action)=>{
            state.error = action.payload
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchFilms.pending, (state)=>{
            state.isfetching = true
        })
        builder.addCase(fetchFilms.fulfilled, (state, action: PayloadAction<IFilmsData>)=>{
            state.isfetching = false
            state.data = action.payload
           })
           builder.addCase(fetchFilms.rejected, (state, action: PayloadAction<any>)=>{
            state.error = action.payload
           })
    }

})

export const {pageReducer, searchReducer, errorReducer} = filmsSlice.actions
export default filmsSlice.reducer