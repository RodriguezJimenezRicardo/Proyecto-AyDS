import React from "react";
import '../App.css'
import { Button,Form } from "react-bootstrap";
import UnJuego from "./UnJuego";
import {useState} from "react";

const Menu = () =>{
    const [nombre, setnombre] = useState("Edwin");

    return(
        <div class="container col-xl-10 col-xxl-8 d-flex justify-content-center align-items-center 100-w vh-100">
            <div class = "">
                <div>
                    <UnJuego nombre = {nombre}/> 
                </div>
                <div>
                    <UnJuego nombre = {"nombre3"}/> 
                </div>
                <div>
                    <UnJuego nombre = {nombre4}/> 
                </div>
                <div>
                    <UnJuego nombre = {nombre5}/> 
                </div>
            </div>
        </div>
    )
}

export default Menu;