import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import m from '../images/m.jpeg';
import m3 from '../images/m3.jpeg';
import m5 from '../images/m5.jpeg';
import m6 from '../images/m6.jpeg';

class CategoryBussinesBelleza extends React.Component {
  render() {
    return (

      <div className="bodyServices">
        
          <Cabezote></Cabezote>
          <div className="cuerpo">
          <div>
            <h1 className="text-center">Belleza</h1>
            <h6 className="text-center"> Gran variedad de salones de belleza , articulos de belleza y más</h6>
          </div>

          <div className="container-b">
            <div className="card">
              <a href=""> <img src={m3} className="img-card" alt="leyes" /></a>
              <h4>  Victor's Peluqueria</h4>
              <p>Contáctanos +57 310 383 9006</p>

            </div>

            <div className="card">
              <a href=""> <img src={m5} className="img-card" alt="leyes" /></a>
              <h4>  Yiyo's Peluqueria</h4>
              <p>Contáctanos +57 310 505 3235</p>

            </div>

            <div className="card">
              <a href=""> <img src={m6} className="img-card" alt="leyes" /></a>
              <h4> Facetas</h4>
              <p>Contáctanos +57 310 491 9084</p>

            </div>

            <div className="card">
              <a href=""> <img src={m} className="img-card" alt="leyes" /></a>
              <h4> Truck Nails</h4>
              <p>Contáctanos +57 310 505 3235</p>

            </div>



          </div>
          </div>

          <Footer></Footer>
      
      </div>






    );
  }
}
export default CategoryBussinesBelleza;