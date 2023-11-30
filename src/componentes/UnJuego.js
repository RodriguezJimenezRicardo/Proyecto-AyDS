import React from "react";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const UnJuego = (datos) =>{
    return(
        <div>
            <p>Pregunta numero {datos.nombre}</p>
        </div>
    )
}

export default UnJuego;