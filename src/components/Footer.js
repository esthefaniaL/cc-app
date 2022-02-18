import React from 'react';
import logo from '../images/logo.png';

class Footer extends React.Component {

  render() {
    return (
      <div className="footer">
        <footer>
          <container-footer-all>
            <div className="container-body">
              <div className="column1">
                <h1>¿Donde estamos ubicados? </h1>
                <p>  Calle 2a No. 14-01 / Armenia, Quindío</p>
                <p>+57 (6) 7459560 - 7455589</p>
                <p> info@centrocomercialbolivar.com</p>

              </div>

              <div className="column2">
                <h1>Servicios </h1>
                <div className="row">
                  Tecnología

                </div>
                <div className="row">
                  Leyes

                </div>
                <div className="row">
                  Salud

                </div>
                <div className="row">
                  Belleza

                </div>
                <div className="row">
                  Contabilidad

                </div>

              </div>
              <div className="column3">
                <div className="row">
                  <img src={logo} alt="logo" />
                  <div>
                    <div className="redes" style={{ display: "flex", fontSize: "1.8vw" }}>
                      <p>Redes</p>
                      <a className="nav-link active" target="_blank" aria-current="page" href="https://www.facebook.com/centro.comercial.bolivar.armenia">
                        <i class="fa fa-facebook-square" aria-hidden="true"></i></a>

                      <a className="nav-link active" aria-current="page" target="_blank" href="https://www.instagram.com/cc_bolivar/">
                        <i class="fa fa-instagram" aria-hidden="true"></i> </a>

                      <a className="nav-link active" target="_blank" aria-current="page" href="https://www.youtube.com/watch?v=ymfHZMjt56U">
                        <i class="fa fa-youtube-play" aria-hidden="true"></i></a>


                    </div>
                  </div>
                  <p style={{ display: "flex" }}>Copyright © C.C Bolivar 2022</p>


                </div>
              </div>
            </div>
          </container-footer-all>
        </footer>
      </div>
    );
  }
}
export default Footer;
