import './errors.css';
interface Props{
    error:string | undefined;
}



/**
 * Muestra el Error.
 * 
 * 
 * @returns un JSX element 
 */
const Errors = ({error}:Props) => {

    return <div className="error">
        <h1>{error}</h1>
    </div>
}

export default Errors;