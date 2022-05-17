import React from 'react';
import m from '../images/moda.jpg';
import s from '../images/salud.jpg';
import t from '../images/tecnologia.jpg';
import ent from '../images/entretenimiento.jpg';

import "../styles/Badge.css";


class Services extends React.Component {
    render() {
        return (
            <div className="bodyServices">
                <div>
                    <h1 className="text-center">Servicios</h1>
                    <h6 className="text-center"> Contamos con un comercio de servicio que participa activamente en diversas categorías</h6>
                </div>

                <div className="cards" style={{ width: "98%", marginLeft: "1rem", paddingBottom:"4rem" }}>
                    <div class="card-deck">

                        <div class="card">
                            <a href="/CategoryBussinesBelleza">
                                <img class="card-img-top" src={m} alt="Card image cap" />
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">  Moda y belleza</h5>
                            </div>
                        </div>

                        <div class="card">
                            <a href="/CategoryBussinesEntretenimiento">
                                <img class="card-img-top" src={ent} alt="Card image cap" />
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">Entrenimiento</h5>
                            </div>
                        </div>

                        <div class="card">
                            <a href="/CategoryBussinesSalud">
                                <img class="card-img-top" src={s} alt="Card image cap" />
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">Salud</h5>
                            </div>
                        </div>

                        <div class="card">
                        <a href="/CategoryBussinesTecnologia">
                            <img class="card-img-top" src={t} alt="Card image cap" />
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">Tecnología</h5>
                            </div>
                        </div>



                        <row>

                        </row>
                    </div>
{/* 
                    <div class="card-deck">


                        <div class="card">
                            <a href="/categoryBussines">
                                <img class="card-img-top" src={l} alt="Card image cap" />
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">Leyes</h5>

                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src={p} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Publicidad</h5>
                            </div>
                        </div>
                        <div class="card">
                            <img class="card-img-top" src={par} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Parqueadero</h5>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src={f} alt="Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">Finanzas</h5>
                            </div>
                        </div>





                        <row>

                        </row>
                    </div> */}

                </div>


            </div>
        );
    }

}
export default Services;