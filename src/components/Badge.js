import React from 'react';

import "../styles/Badge.css";
import "../styles/menu.css";
import "../styles/social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';

import logo from '../images/logo.png';
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';
import f from '../images/finanzas.jpg';
import l from '../images/leyes.jpg';
import m from '../images/moda.jpg';
import pu from '../images/publicidad.jpg';
import par from '../images/parqueaderos.jpg';
import s from '../images/salud.jpg';
import t from '../images/tecnologia.jpg';
import ent from '../images/entretenimiento.jpg';
import ing from '../images/ing.jpg';
import c from '../images/contabilidad.png';

import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Badge extends React.Component {
  render() {
    return (
      <div >
        <Cabezote></Cabezote>
        <div className="container-c">
          <div className="slider">
            <ul>
              <li> <img src={p1} alt="image"></img></li>
              <li> <img src={p2} alt="image"></img></li>
              <li> <img src={p3} alt="image"></img></li>
              <li> <img src={p4} alt="image"></img></li>
            </ul>
          </div>

        </div>
        <div>
          <h1 className="text-center">Nosotros</h1>
          <h6 className="text-center"> Contamos con un comercio de servicio que participa activamente en diversas categorías</h6>
        </div>
        <div className="containerAvatar">
          <div className="row d-flex justify-content-center">
            <div className="col-md-2">
              <a href="/categoryDetails"> <img src={l} alt="image" class="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img></a>


            </div>
            <div className="col-md-2">
              <img src={f} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

            </div>
            <div className="col-md-2">
              <img src={t} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

            </div>
            <div className="col-md-2">
              <img src={s} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

            </div>
            <div className="col-md-2">
              <img src={m} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

            </div>
          </div>
          <div>

            <div className="row d-flex justify-content-center" height="60vh">
              <div className="col-md-2 ml-5 ">
                <img src={ent} alt="image" class="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

              </div>
              <div className="col-md-2">
                <img src={c} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

              </div>
              <div className="col-md-2">
                <img src={par} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

              </div>
              <div className="col-md-2">
                <img src={ing} alt="image" className="img-fluid avatar-xl rounded-circle" width="200px" height="200px"></img>

              </div>

            </div>

          </div>

        </div>

        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    );

  }
}
export default Badge;

