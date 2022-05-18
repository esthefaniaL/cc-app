import React from 'react';

import "../styles/Badge.css";
import "../styles/menu.css";
import "../styles/social.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import Servicios from './Services'

import logo from '../images/logo.png';
import p1 from '../images/p1.jpeg';
import p2 from '../images/p2.jpeg';
import p3 from '../images/p3.jpeg';
import p4 from '../images/p4.jpeg';




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
        <Servicios></Servicios>
        <div>
                    <h6 className="text-center" style={{paddingBottom:"2rem"}}>Tambien contamos con servicio de Parqueadero</h6>
                </div>
      
        <div className="footer">
          <Footer></Footer>
        </div>
      </div>
    );

  }
}
export default Badge;

