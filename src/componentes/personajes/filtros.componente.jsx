import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { actionBusqueda, getPersonajes } from '../../redux/personajesSlice';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch()
    const valueFiltro = useAppSelector(state => state.personaje.busqueda)

    const search = (e)=>{
        dispatch(actionBusqueda(e.target.value))
        dispatch(getPersonajes(e.target.value))
    }
    return <div className="filtros">
        {/* Se modifico el "for" de label por un "htmlFor". el error salia en consola del browser */}
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" value={valueFiltro} 
            onChange={(e)=>search(e) }
        />
    </div>
}

export default Filtros;