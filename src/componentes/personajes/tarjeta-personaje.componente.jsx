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
const TarjetaPersonaje = (data) => {

    return <div className="tarjeta-personaje">
        <img src={data.data.image} alt={data.data.name}/>
        <div className="tarjeta-personaje-body">
            <span>{data.data.name}</span>
            <BotonFavorito esFavorito={false} />
        </div>
    </div>
}

export default TarjetaPersonaje;