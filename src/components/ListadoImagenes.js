import React from "react";
import Imagen from "./Imagen";

const ListadoImagenes = ({ imagenes }) => {
  const { hits } = imagenes;
  return (
    <div className="col-md-12 p-5 row">
      {hits
        ? hits.map((imagen) => <Imagen key={imagen.id} imagen={imagen} />)
        : null}
    </div>
  );
};

export default ListadoImagenes;
