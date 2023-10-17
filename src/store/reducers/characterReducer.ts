import { ICharacterData } from "../../type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCharacter } from "./actionCreator";


export interface IInitialState{
   data: ICharacterData,
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


export  const characterSlice = createSlice({
    name: "character",
    initialState,
    reducers :{
        pageReducer: (state, action)=>{
            state.page = action.payload
        },
        searchReducer: (state, action)=>{
            state.page = 1
            state.search = action.payload
        },
        errorReducer: (state, action)=>{
            state.error = action.payload
        },
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchCharacter.pending, (state)=>{
            state.isfetching = true
        })
        builder.addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<ICharacterData>)=>{
            state.isfetching = false
            state.data = action.payload
           })
           builder.addCase(fetchCharacter.rejected, (state, action: PayloadAction<any>)=>{
            state.error = action.payload
           })
    }

})

export const {pageReducer, searchReducer, errorReducer} = characterSlice.actions
export default characterSlice.reducer