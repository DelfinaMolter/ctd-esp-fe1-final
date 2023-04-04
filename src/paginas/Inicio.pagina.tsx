import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { actionBusqueda, getPersonajes } from "../redux/personajesSlice";
import { useEffect } from "react";
import Errors from "../componentes/errors/errors.componente";

/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useAppDispatch()
    const personajes = useAppSelector(state => state.personaje.personajes)
    const storeError = useAppSelector(state => state.personaje.errorBusqueda)

    useEffect(() => {
        dispatch(getPersonajes(""))
    }, [dispatch])


    const eliminarFiltro =()=>{
        dispatch(actionBusqueda(''))
        dispatch(getPersonajes(''))
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={()=> eliminarFiltro()}>Eliminar Filtro</button>
        </div>
        <Filtros />
        <Paginacion />
        {
            storeError !== '' ? <Errors error={storeError}/> :
            <>
                <GrillaPersonajes personajes={personajes}/>
                <Paginacion />
            </>
        }
    </div>
}

export default PaginaInicio