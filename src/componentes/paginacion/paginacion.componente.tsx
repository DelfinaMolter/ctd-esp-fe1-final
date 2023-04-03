
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getPaginacion } from '../../redux/personajesSlice';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {
    const dispatch = useAppDispatch();
    const storePaginacion = useAppSelector(state => state.personaje.paginacion)

    const prevPage = ()=>{
        dispatch(getPaginacion(storePaginacion.prev))
    }
    const nextPage = ()=>{
        dispatch(getPaginacion(storePaginacion.next))
    }
    
    return (
        <div className="paginacion">
            <button disabled={!storePaginacion.prev} className={"primary"} onClick={() =>prevPage()}>Anterior</button>
            <button disabled={!storePaginacion.next} className={"primary"} onClick={() =>nextPage()}>Siguiente</button>
        </div>
    )
}

export default Paginacion;