import React, {Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ContenedorInfo from './components/ContenedorInfo';

function App() {

  //State
  const [movie, saveMovie] = useState('');
  const [movieresult, saveMovieResult] = useState({});

  //Effect
  useEffect(() => {
    if(movie === '') return;

    const consultarAPI = async () => {
      const apiKey = '613ef410' ;
      const url = `https://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      saveMovieResult(resultado);
    }

    consultarAPI();
  }, [movie])

  return (
    <Fragment>
      <Header />
      <Formulario saveMovie={saveMovie} />
      {movie ? <ContenedorInfo movieresult={movieresult} /> : <p className="text-center">No has realizado una búsqueda, comienza añadiendo el nombre de una pelicula</p>}
    </Fragment>
  
  );
}

export default App;
