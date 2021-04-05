import React, { useState } from "react";
const Formulario = () => {
  const [termino, guardarTermino] = useState("");
  const [error, guardarError] = useState(false);

  const buscarImagenes = (e) => {
    e.preventDefault();

    //validar
    if (termino.trim() === "") {
      guardarError(true);
    }
    //enviar form
  };

  return (
    <form onSubmit={buscarImagenes}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca una imagen, ejemplo: futbol o café"
            onChange={(e) => guardarTermino(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            value="Buscar"
            className="btn btn-lg btn-danger btn-block"
            placeholder="Busca una imagen, ejemplo: futbol o café"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
