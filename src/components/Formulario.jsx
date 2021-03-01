import React, {useState} from 'react';

const Formulario = ({saveMovie}) => {

    const [name, saveName] = useState('');
    const [error, saveError] = useState(false);

    const handleChange = e => {
        saveName(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(name.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);
        saveMovie(name);
        saveName('');
    }

    return (  
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    {error ? <p className="alert alert-danger">El campo es obligatorio</p> : null}
                    <form
                        onSubmit={handleSubmit}
                    >
                        <div className="input-group d-flex align-items-center flex-column flex-md-row">
                            <label htmlFor="busqueda">Nombre de la pelicula</label>
                            <input 
                                id="busqueda"
                                type="text"
                                className="form-control mx-3 my-3 my-md-0 w-auto"
                                placeholder="Ej. Joker"
                                onChange={handleChange}
                                value={name}
                            />

                            <input 
                                id="busqueda"
                                type="submit"
                                className="btn btn-primary"
                                value="Buscar"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Formulario;