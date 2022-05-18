import React from 'react';
import logo from '../images/logo.svg';
import "../styles/Cabezote.css";

class Cabezote extends React.Component {

    render() {
        return (
            <div className="cabezote">
                <nav class="navbar navbar-light navbar-expand-lg sticky-top navigation-clean" data-aos="fade-down" data-aos-once="true" data-toggle="affix">

                    <div class="container-fluid" style={{ position: "fixed", backgroundColor: "white" , alignItems:"center", margin:"7rem 0rem 3.3rem 0rem", height:"8.5vh"}}>


                        <a class="navbar-brand" href="./"> <img src={logo} alt="logo" className='logo-img' style={{ display: "flex"}} /></a>

                        <div className="redes" style={{ display: "flex"}}>

                            <a className="nav-link active" target="_blank" aria-current="page" href="https://www.facebook.com/centro.comercial.bolivar.armenia">
                                <i class="fa fa-facebook-square" aria-hidden="true" style={{color:"#414099"}}></i></a>

                            <a className="nav-link active" aria-current="page" target="_blank" href="https://www.instagram.com/cc_bolivar/">
                                <i class="fa fa-instagram" aria-hidden="true"style={{color:"#414099"}}></i> </a>

                            <a className="nav-link active" target="_blank" aria-current="page" href="https://www.youtube.com/watch?v=ymfHZMjt56U">
                                <i class="fa fa-youtube-play" aria-hidden="true" style={{color:"#414099"}}></i></a>


                        </div>



                        <div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav navbar-nav " style={{ fontSize: "19px"}}>
                                    <li className="nav-item ">
                                        <a className="nav-link " aria-current="page" href="/">Inicio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/nosotros">Nosotros</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/servicios" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Servicios
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/categoryBussinesBelleza">Belleza</a></li>
                                            <li><a className="dropdown-item" href="/categoryBussinesEntretenimiento">Entretenimiento</a></li>
                                            <li><a className="dropdown-item" href="/categoryBussinesSalud">Salud</a></li>
                                            <li><a className="dropdown-item" href="/CategoryBussinesTecnologia">Tecnologia</a></li>
                                            
                                           
                                        </ul>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a className="nav-link" href="#footer">Contacto</a>
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