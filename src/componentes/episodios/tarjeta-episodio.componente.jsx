import './tarjeta-episodio.css';
import { useEffect, useState } from "react";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ( urlEpisode) => {
    const [episodio, setEpisodio] = useState('')

    const apiEpisodios = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setEpisodio(data)
        return data
    }
    

    useEffect(() => {
        apiEpisodios(urlEpisode.urlEpisode)
    }, [])

    
    return <div className="tarjeta-episodio">
            <h4>{episodio.name}</h4>
            <div>
                <span>{episodio.episode}</span>
                <span>Lanzado el: {episodio.air_date}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;