import './boton-favorito.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addfavoritos, deletefavoritos } from '../../redux/personajesSlice';

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const dispatch =useAppDispatch();
    const storeFavoritos = useAppSelector(state => state.personaje.favoritos)
    
    const favoritos = (personaje)=>{
        let isFavorito = storeFavoritos.find(item => item.id === personaje.id)
        isFavorito ? dispatch(deletefavoritos(personaje)): dispatch(addfavoritos(personaje))
    }

    return <div className="boton-favorito" onClick={()=>favoritos(onClick)}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;