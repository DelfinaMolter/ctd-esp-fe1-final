import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import {Personaje} from '../../types/personaje.types';

interface Props{
    personajes:Personaje[];
}

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = ({personajes}:Props) => {
    
    return <div className="grilla-personajes">
        {
            personajes && personajes.map((personaje: Personaje) => (
                <TarjetaPersonaje personaje={personaje} key={personaje.id}/>
            ))
        }
    </div>
}

export default GrillaPersonajes;