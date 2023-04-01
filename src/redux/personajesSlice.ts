import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Personaje } from "../types/personaje.types";

const api_baseUrl = 'https://rickandmortyapi.com/api/'

const apiPersonajes = async (filter:string) => {
    const response = await fetch(`${api_baseUrl}character/${filter? '?name='+ filter : ''}`);
    const data = await response.json();
    return data
}
const apiPaginacion = async (url:string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data
}


export const getPersonajes = createAsyncThunk(
    '/getPersonajes',
    async (name: string) => {
        const response = await apiPersonajes(name)
        return response
    }
)

export const getPaginacion = createAsyncThunk(
    '/getPaginacion',
    async (url: string) => {
        console.log(url)
        const response = await apiPaginacion(url)
        return response
    }
)

interface initialType {
    busqueda: string,
    personajes: Personaje[],
    paginacion:{
        next:string,
        prev:string
    },
    favoritos: Personaje[]
}

const initialState: initialType = {
    busqueda: '',
    personajes:[],
    paginacion:{
        next:'',
        prev:''
    },
    favoritos:[]
}

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState,
    reducers: {
        actionBusqueda: (state, action) => {
            state.busqueda = action.payload
        },
        addfavoritos: (state, action) => {
            state.favoritos.push(action.payload)
        },
        deletefavoritos: (state, action) => {
            state.favoritos = state.favoritos.filter(item => item.id !== action.payload.id)
        },
        deleteAllfavoritos: (state, action) => {
            state.favoritos = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPersonajes.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
        })
        builder.addCase(getPaginacion.fulfilled, (state, action) => {
            state.personajes = action.payload.results
            state.paginacion.next = action.payload.info.next
            state.paginacion.prev = action.payload.info.prev
        })
    },

})

export const { actionBusqueda, addfavoritos, deletefavoritos, deleteAllfavoritos } = personajesSlice.actions


export default personajesSlice.reducer