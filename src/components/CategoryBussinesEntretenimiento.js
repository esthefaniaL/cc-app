import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './Footer';
import Cabezote from './Cabezote';
import m from '../images/ent2.jpeg';


class CategoryBussinesEntretenimiento extends React.Component {
  render() {
    return (

      <div className="bodyServices">
        
          <Cabezote></Cabezote>
          <div className="cuerpo">
          <div>
            <h1 className="text-center">Entretenimiento</h1>
            <h6 className="text-center"> Contamos con variedad en entretenimiento para la familia personalizado</h6>
          </div>

          <div className="container-b">
            

            <div className="card">
              <a href=""> <img src={m} className="img-card" alt="leyes" /></a>
              <h4>Video juegos Alex</h4>
              <p>Contáctanos +57 318088978</p>

            </div>




          </div>
          </div>

          <Footer></Footer>
      
      </div>






    );
  }
}
export default CategoryBussinesEntretenimiento;