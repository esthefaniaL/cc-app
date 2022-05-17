import React from 'react';
import Cabezote from './Cabezote';
import Footer from './Footer';
import "../styles/Nosotros.css";
import img from "../images/s1.jpeg";
class Nosotros extends React.Component {

    render() {
        return (
            <div className="nosotros">
                <Cabezote></Cabezote>
                <div className="cont-history">

                    <div className="history">
                    <a href=""> <img src={img} class="img-thumbnail" alt="..."/></a>

                        <p>

                            El centro comercial Bolívar abre sus puertas al público el xx de diciembre de 1987, convirtiendose en un referente de la ciudad por
                            su ubicación e impacto el entorno

                            Hoy después de 21 años, continúa vigente, sobrellevando inclemencias de orden fisico
                            y natural que no han podido quebrantar el deseo de cada uno de sus propietarios para
                            consolidarlo como el verdadero sitio ideal.
                        </p>
                       
                    </div>

                    <div className="history">


                        <p>

                            El centro comercial Bolívar abre sus puertas al público el xx de diciembre de 1987, convirtiendose en un referente de la ciudad por
                            su ubicación e impacto el entorno

                            Hoy después de 21 años, continúa vigente, sobrellevando inclemencias de orden fisico
                            y natural que no han podido quebrantar el deseo de cada uno de sus propietarios para
                            consolidarlo como el verdadero sitio ideal.
                        </p>
                        <a href=""> <img src={img} class="img-thumbnail" alt="..."/></a>
                    </div>

                    <div className="history-x">
                    <a href=""> <img src={img} class="img-thumbnail" alt="..."/></a>
                

                        <span>
                            El centro comercial Bolívar abre sus puertas al público el xx de diciembre de 1987, convirtiendose en un referente de la ciudad por
                            su ubicación e impacto el entorno

                            Hoy después de 21 años, continúa vigente, sobrellevando inclemencias de orden fisico
                            y natural que no han podido quebrantar el deseo de cada uno de sus propietarios para
                            consolidarlo como el verdadero sitio ideal.
                        </span>

                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Nosotros;