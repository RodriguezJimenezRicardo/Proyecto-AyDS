import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Switch,
    Route,
    BrowserRouter,
    Routes
} from "react-router-dom";

//el swiitch necesitamos tener un orden, primero rutas especificas, despues rutas generales  y al final la general 

import Home from "./componentes/home" ;
import Menu from "./componentes/menu";

function App(){
    return (
        <BrowserRouter>            
            <Routes>
                <Route path="/menu" element = {<Menu/>}/>
                <Route path = "/" element = { <Home/> }/>                
            </Routes>            
        </BrowserRouter>
    )
}

export default App;