import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import logo from '../images/logo.png';
import l from '../images/ley-1.jpg';
import l2 from '../images/ley-2.jpg';
import l3 from '../images/ley-3.jpg';
import l4 from '../images/ley-4.jpg';
class CategoryDetails extends React.Component {
  render() {
    return (

      <div>
        <Cabezote></Cabezote>

        <div><h1 className="text-center">Categoría de leyes</h1></div>

        <div className="container" >

          <div className="card">
            <a href="/categoryBussines"> <img src={l} alt="leyes" /></a>
            <h4> M&A Asociados</h4>

            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
          </div>
          <div className="card">
            <a href=""> <img src={l2} alt="leyes" /></a>
            <h4> Lawance</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
          </div>
          <div className="card">
            <a href=""> <img src={l3} alt="leyes" /></a>
            <h4>  ARC</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
          </div>
          <div className="card">
            <a href=""> <img src={l4} alt="leyes" /></a>
            <h4> MI abogados</h4>
            <p>Despacho de abogados con un amplio portafolio y asesoria personalizada</p>
          </div>
        </div>

       <Footer></Footer>

      </div>





    );
  }
}
export default CategoryDetails;