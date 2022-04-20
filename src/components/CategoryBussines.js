import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import logo from '../images/logo.png';
import l from '../images/ley-1.jpg';
import l2 from '../images/ley-2.jpg';
import l3 from '../images/ley-3.jpg';
import l4 from '../images/ley-4.jpg';
class CategoryBussines extends React.Component {
  render() {
    return (

      <div>
        <Cabezote></Cabezote>

        <div className="tile">
          <h6 className="text-center">Gran portafolio de servicios en la asesoria que requieras</h6>

        </div>

        <div className="container-b">
          <div className="card">
            <a href=""> <img src={l} alt="leyes" /></a>
            <h4> M&A Asociados</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
            <p>Contáctanos +57 318088978</p>

          </div>

          <div className="card">
            <a href=""> <img src={l2} alt="leyes" /></a>
            <h4> M&A Asociados</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
            <p>Contáctanos +57 318088978</p>

          </div>

          <div className="card">
            <a href=""> <img src={l3} alt="leyes" /></a>
            <h4> M&A Asociados</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
            <p>Contáctanos +57 318088978</p>

          </div>

          

        </div>

        <Footer></Footer>
      </div>






    );
  }
}
export default CategoryBussines;