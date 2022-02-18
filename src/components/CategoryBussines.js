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

        <div>
          <h1 className="text-center">M&A Asociados</h1>
          <h6 className="text-center">Gran portafolio de servicios en la asesoria que requieras</h6>
        </div>
        <div className="container-b">
          <div className="card">
              <a href=""> <img src={l} alt="leyes" /></a>
              <h4> M&A Asociados</h4>
              <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
              <p>Contáctanos +57 318088978</p>

            </div>
            <div className="container-desc">
              <h4> Ofrecemos variedad de asesoria</h4>
              <p>Fiscal. Hemos querido darle un espacio propio en lugar de incluirla como una parte de la asesoría financiera</p>
              <p>Laboral. Poco hay que aclarar sobre esta asistencia específica para todo lo relativo a la contratación de trabajadores.</p>
              <p>Juridíca. El consejo de expertos en temas legales debe ser de los primeros que contratemos. </p>
              <p>Financiera.  Probablemente el más conocido de estos servicios.</p>
          </div>

        </div>
        <Footer></Footer>
      </div>






    );
  }
}
export default CategoryBussines;