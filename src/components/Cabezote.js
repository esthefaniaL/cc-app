import React from 'react';
import logo from '../images/logo.png';

class Cabezote extends React.Component {

    render() {
        return (
            <div className="cabezote">
                <nav class="navbar navbar-light navbar-expand-lg sticky-top navigation-clean" data-aos="fade-down" data-aos-once="true" data-toggle="affix">

                    <div class="container-fluid" style={{ position: "fixed", backgroundColor: "white" , alignItems:"center", padding:"4rem 3rem 0rem 1rem", width:"100%"}}>


                        <a class="navbar-brand" href="./"> <img src={logo} alt="logo" style={{ display: "flex", width: "20vw" }} /></a>

                        <div className="redes" style={{ display: "flex", fontSize: "1.8vw" }}>

                            <a className="nav-link active" target="_blank" aria-current="page" href="https://www.facebook.com/centro.comercial.bolivar.armenia">
                                <i class="fa fa-facebook-square" aria-hidden="true"></i></a>

                            <a className="nav-link active" aria-current="page" target="_blank" href="https://www.instagram.com/cc_bolivar/">
                                <i class="fa fa-instagram" aria-hidden="true"></i> </a>

                            <a className="nav-link active" target="_blank" aria-current="page" href="https://www.youtube.com/watch?v=ymfHZMjt56U">
                                <i class="fa fa-youtube-play" aria-hidden="true"></i></a>


                        </div>



                        <div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ fontSize: "19px"}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/nosotros">Nosotros</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Servicios
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">Leyes</a></li>
                                            <li><a className="dropdown-item" href="#">Finanzas</a></li>
                                            <li><a className="dropdown-item" href="#">Tecnología</a></li>
                                            <li><a className="dropdown-item" href="#">Salud</a></li>
                                            <li><a className="dropdown-item" href="#">Moda y belleza</a></li>
                                            <li><a className="dropdown-item" href="#">Publicidad</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Parqueaderos</a></li>
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contacto</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        );
    }
}
export default Cabezote;