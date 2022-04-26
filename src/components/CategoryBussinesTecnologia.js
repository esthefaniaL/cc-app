import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import t from '../images/tec.jpeg';

class CategoryBussinesTecnologia extends React.Component {
  render() {
    return (

      <div className="bodyServices">
        
          <Cabezote></Cabezote>
          <div className="cuerpo">
          <div>
            <h1 className="text-center">Tecnologia</h1>
            <h6 className="text-center"> Grande portafolio de alianzas de salud</h6>
          </div>

          <div className="container-b">
            <div className="card">
              <a href=""> <img src={t} className="img-card" alt="leyes" /></a>
              <h4> Pc-shop</h4>
              <p>Contáctanos +57 300 504 2966</p>

            </div>




          </div>
          </div>

          <Footer></Footer>
      
      </div>






    );
  }
}
export default CategoryBussinesTecnologia;