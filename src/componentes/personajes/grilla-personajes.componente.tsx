import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {Personaje} from '../../types/personaje.types';
import { getPersonajes } from "../../redux/personajesSlice";

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {
    const dispatch = useAppDispatch()
    const personajes = useAppSelector(state => state.personaje.personajes)

    useEffect(() => {
        dispatch(getPersonajes(""))
    }, [])

    return <div className="grilla-personajes">
        {
            personajes && personajes.map((personaje: Personaje) => (
                <TarjetaPersonaje data={personaje} key={personaje.id}/>
            ))
        }
    </div>
}

export default GrillaPersonajes;