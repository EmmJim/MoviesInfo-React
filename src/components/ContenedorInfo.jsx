import React from 'react';

const ContenedorInfo = ({movieresult}) => {

    const {Title, Year, Runtime, Genre, Plot} = movieresult;

    return (  
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Movie Info</h2>
                    <div className="contenedor-info my-5 p-5">
                        <h3 className="fw-bold">{Title}</h3>
                        <p>{Year}</p>
                        <p className="mt-5">{Plot}</p>
                        <p className="mt-3">Duration: {Runtime}</p>
                        <p className="mt-3">Genre: {Genre}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ContenedorInfo;