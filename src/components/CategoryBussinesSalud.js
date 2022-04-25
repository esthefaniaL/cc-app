import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import logo from '../images/logo.png';
import m from '../images/m.jpeg';
import s1 from '../images/s1.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';
import l2 from '../images/ley-2.jpg';
import l3 from '../images/ley-3.jpg';
import l4 from '../images/ley-4.jpg';
class CategoryBussinesSalud extends React.Component {
  render() {
    return (

      <div className="bodyServices">
        
          <Cabezote></Cabezote>
          <div className="cuerpo">
          <div>
            <h1 className="text-center">Salud</h1>
            <h6 className="text-center"> Grande portafolio de alianzas de salud</h6>
          </div>

          <div className="container-b">
            <div className="card">
              <a href=""> <img src={s1} className="img-card" alt="leyes" /></a>
              <h4> Conexiones y salud</h4>
              <p>Contáctanos +57 318088978</p>

            </div>




          </div>
          </div>

          <Footer></Footer>
      
      </div>






    );
  }
}
export default CategoryBussinesSalud;