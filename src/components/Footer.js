import React from 'react';
import logo from '../images/logo.png';
import Servicios from './Services';

import "../styles/Footer.css";

class Footer extends React.Component {

  render() {
    return (
      <body>
      
        <footer class="footer-distributed">

          <div class="footer-left">
            <img src={logo} style={{width:"20vw", marginLeft:"-3rem"}}/>
            

            <p class="footer-links">
              <a href="/">Inicio</a>
              |
              <a href="/nosotros">Nosotros</a>
              
             
            </p>

            <p class="footer-company-name">© 2021 Centro comercial bolivar.</p>
          </div>

          <div class="footer-center">
            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>Calle 2A No. 14-01,
                </span>
                Armenia, Quindío</p>
            </div>

            <div>
              <i class="fa fa-phone"></i>
              <p>+57 (6) 7459560 - 7455589</p>
            </div>
            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="#">info@centrocomercialbolivar.com</a></p>
            </div>
          </div>
          <div class="footer-right">
            <p class="footer-company-about">
            <span>Servicios:</span>
              <a href="/categoryBussinesBelleza"><span>Belleza </span></a>
              <a href="/categoryBussinesEntretenimiento"><span>Entretenimiento </span>  </a>
              <a href="/categoryBussinesSalud"><span>Salud </span>  </a>
              <a href="/CategoryBussinesTecnologia"><span>Tecnologia </span>  </a>
              <span>Parqueadero </span>
              </p>
              
            <div class="footer-icons">
              <a target="_blank" href="https://www.facebook.com/centro.comercial.bolivar.armenia"><i class="fa fa-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/cc_bolivar/"><i class="fa fa-instagram" ></i></a>
              <a target="_blank" href="https://www.youtube.com/watch?v=ymfHZMjt56U"><i class="fa fa-youtube" ></i></a>
            </div>
          </div>
        </footer>
      </body>
    );
  }
}
export default Footer;
