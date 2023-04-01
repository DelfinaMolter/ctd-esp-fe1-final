import { useAppSelector } from '../../redux/hooks';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = (personaje) => {
    const storeFavoritos = useAppSelector(state => state.personaje.favoritos)

    const isFavorito = storeFavoritos.find(item => item.id === personaje.personaje.id)

    return <div className="tarjeta-personaje">
        <img src={personaje.personaje.image} alt={personaje.personaje.name}/>
        <div className="tarjeta-personaje-body">
            <span>{personaje.personaje.name}</span>
            <BotonFavorito esFavorito={isFavorito} onClick={personaje.personaje}/>
        </div>
    </div>
}

export default TarjetaPersonaje;