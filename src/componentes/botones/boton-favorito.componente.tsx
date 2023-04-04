import './boton-favorito.css';
import { useAppDispatch } from '../../redux/hooks';
import { Personaje } from '../../types/personaje.types';
import { favoritos } from '../../redux/personajesSlice';
interface Props{
    esFavorito:boolean,
    onClick:Personaje 
}

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick}:Props) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const dispatch =useAppDispatch();

    const favoritosAction = (personaje: Personaje)=>{
        dispatch(favoritos(personaje))
    }

    return <div className="boton-favorito" onClick={()=>favoritosAction(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;