import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppSelector } from "../redux/hooks";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const personaje =  useAppSelector(state => state.personaje.selected)
    const storeFavoritos = useAppSelector(state => state.personaje.favoritos)

    const isFavorito = storeFavoritos.find(item => item.id === personaje.id)


    return <div className="container">
        <h3>{personaje.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={personaje.image} alt={personaje.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{personaje.name}</p>
                    <p>Planeta: {personaje.origin.name === 'unknown' ? 'desconocido': personaje.origin.name }</p>
                    <p>Genero: {personaje.gender  === 'unknown' ? 'desconocido':personaje.gender}</p>
                </div>
                <BotonFavorito esFavorito={isFavorito}  onClick={personaje}/>
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {
                personaje.episode.map((url,index) =>(
                    <TarjetaEpisodio urlEpisode={url}  key={index} />
                ))
            }
        </div>
    </div>
}

export default PaginaDetalle