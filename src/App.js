import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  //state
  const [busqueda, guardarBusqueda] = useState("");
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaactual, guardarPaginaActual] = useState(1);
  const [totalpaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {
    const consultarApi = async () => {
      if (busqueda === "") {
        return;
      }
      const imagenesPorPagina = 30;
      const key = "8805302-ec04040c4cef9f8cfa99e63bd";
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaactual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      guardarImagenes(resultado);

      //calcular total de paginas para
      const totalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(totalPaginas);

      //mover pantalla hacia arriba
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    consultarApi();
  }, [busqueda, paginaactual]);

  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;
    if (nuevaPaginaActual === 0) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;
    if (nuevaPaginaActual > totalpaginas) return;
    guardarPaginaActual(nuevaPaginaActual);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">BLANCO</p>
        <Formulario guardarBusqueda={guardarBusqueda}></Formulario>
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {paginaactual === 1 ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}
        {paginaactual === totalpaginas ? null : (
          <button
            type="button"
            className="btn btn-info mr-1"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
