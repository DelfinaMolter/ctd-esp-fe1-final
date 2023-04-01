import { useAppDispatch } from '../../redux/hooks';
import { actionBusqueda } from '../../redux/personajesSlice';
import './filtros.css';

const Filtros = () => {
    const dispatch = useAppDispatch()

    const search = (e)=>{
        dispatch(actionBusqueda(e.target.value))
    }
    return <div className="filtros">
        <label for="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" 
            onChange={(e)=>search(e) }
        />
    </div>
}

export default Filtros;