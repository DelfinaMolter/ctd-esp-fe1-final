import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Personaje } from "../types/personaje.types";


const apiPersonajes = async (name: string) => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    return data.results.filter((personaje: Personaje) => personaje.name.toLowerCase().startsWith(name.toLowerCase()))
}

export const getPersonajes = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {
        const response = await apiPersonajes(name)
        return response
    }
)

interface initialType {
    busqueda: string,
    personajes: never[]
}

const initialState: initialType = {
    busqueda: '',
    personajes:[]
    
}

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.personajes = action.payload
        })
    },

})

export const { actionBusqueda } = personajesSlice.actions


export default personajesSlice.reducer