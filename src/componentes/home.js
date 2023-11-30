import React from "react";
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';
import '../App.css'
import { Button,Form } from "react-bootstrap";


const Home = () =>{
    const navigate  = useNavigate();
    
    const validar = (usuario, password) =>{
        navigate('/menu');
    }
        return (
                 <div class="container col-xl-10 col-xxl-8 d-flex justify-content-center align-items-center 100-w vh-100">
                 <div class="row align-items-center g-lg-2" >
                    <div class="col-lg-7 text-center text-lg-start text-white">
                        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Juego clasificador de razas de perro con Inteligencia Articial</h1>
                        <p class="col-lg-10 fs-4">Integrantes:</p>
                        <p class="col-lg-10 fs-4">Lopez Herrera Renata Marianne</p>
                        <p class="col-lg-10 fs-4">Redonda Aguilar Edwin Josue</p>
                        <p class="col-lg-10 fs-4">Rodriguez Jimenez Jose Ricardo</p>
                    </div>
                    <div class="col-md-10 mx-auto col-lg-5 text-white">
                            <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa el Usuario" id ="User" />
                                <Form.Text className="text-muted">
                                No compartas tu contraseña con nadie pls
                                </Form.Text>
                            </Form.Group>
                        
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Ingresa la contraseña" id="password" />
                            </Form.Group>
                            <Button variant="primary" onClick={()=> validar(document.getElementById("User").value , document.getElementById("password").value)}>
                                Login ♥
                            </Button>
                            </Form>
                    </div>
                </div>
                </div>
                   
                
          );
}

export default Home;