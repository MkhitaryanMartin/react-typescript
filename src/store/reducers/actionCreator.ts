import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICharacterData, IFilmsData} from "../../type";
import axios from "axios"
import { BASE_URL } from "../../server/constants";

type Props = {
    page: number,
    search: string,
    urls : string[] | null
  }
  
  const fetchUrlsData = async (urls: string[] | null) => {
    //Absolutely, "we" can use "Promise.allSettled" instead of "Promise.all" if "we" want to ensure that even if one of the requests returns an error, "our" application won't break.
    if (!urls) return null;
    const responses = await Promise.all(urls.map(url => axios.get(url)));
    const dataPromises = await Promise.all(responses)
    const data = dataPromises.map(el => el.data)
    return data
  }
  
  export const fetchCharacter = createAsyncThunk(
     "charachter",
     async ({page=1, search="", urls}: Props, thunkApi)=>{
      try {
          const data = await fetchUrlsData(urls) ?? null;
          const resData = data ? {count:0, next:"", previus:"", results:data}: (await axios.get<ICharacterData>(`${BASE_URL}people?page=${page}&search=${search}`)).data
          return {...resData, results : resData.results.map((el)=> {
              return {...el, id: el.url.split("/")[el.url.split("/").length -2]}
          })}
      } catch (error) {
          return thunkApi.rejectWithValue((error as Error).message)
      }
     }
  )
  

export const fetchFilms = createAsyncThunk(
    "films",
    async (_, thunkApi)=>{
     try {
         const res = await axios.get<IFilmsData>(`${BASE_URL}films/ `)
     return {...res.data, results: [...res.data.results, {...res.data.results[0], title: "ALL"}]}
     } catch (error) {
         return thunkApi.rejectWithValue((error as Error).message)
     }
    }
 )

