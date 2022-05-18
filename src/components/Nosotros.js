import React from 'react';
import Cabezote from './Cabezote';
import Footer from './Footer';
import "../styles/Nosotros.css";
import img from "../images/p1.jpeg";
import img2 from "../images/p2.jpeg";
import img3 from "../images/p3.jpeg";
class Nosotros extends React.Component {

    render() {
        return (
            <div className="nosotros">
                <Cabezote></Cabezote>
                <div className="cont-history">
                    <h2 className="text-center nostros">Nosotros</h2>

                    <div className="d-flex justify-content-around history">


                        <a href=""> <img src={img} class="img-thumbnail" alt="..." /></a>
                        
                        <div class="d-flex justify-content-center">
                        <p className='text-historia'>
                            <h1 className="text-center">Nuestra Historia</h1>

                            El centro comercial Bolívar abre sus puertas al público el xx de diciembre de 1987, convirtiendose en un referente de la ciudad por
                            su ubicación e impacto el entorno

                            Hoy continúa vigente, sobrellevando inclemencias de orden fisico
                            y natural que no han podido quebrantar el deseo de cada uno de sus propietarios para
                            consolidarlo como el verdadero sitio ideal.
                        </p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">


                        <p className='text-historia'>
                            <h1 className="text-center">Proyección Estratégica</h1>

                            Rodeados por dos arterías viales (Av. Bolívar y Calle Segunda ) donde se conectan el centro con el norte
                            de la ciudad, tenemos una de las mayores visualizaciones comerciales de Armenia, junto a un entorno rodeado
                            por tres universidades, Alexander Von Humboldt y la Escuela de Administración y Mercadotecnia EAM a menos de 80
                            metros lineales y  la universidad Gran Colombia- Sede de Economía y sede Derecho a menos de 200 metros lineales,
                            nos permiten una afluencia de público potencial superior a los 1500 visitantes.

                            Asi, nuestra proyección estratégica nos convierte en el centro tecnológico y de servicios empresariales de la ciudad.
                        </p>
                        <a href=""> <img src={img2} class="img-thumbnail" alt="..." /></a>

                        
                    </div>

                    <div className="d-flex justify-content-around">
                   
                        <a href=""> <img src={img3} class="img-thumbnail" alt="..." /></a>

                        <div className='myv'>
                            <p>
                                <h1 className="text-center">Misión</h1>
                                Hacer el Centro Comercial Bolivar
                                un espacio comercial de alta proyección
                                estrategica para diversas unidades
                                de negocio.


                            </p>

                            <span>
                                <h1 className="text-center">Visión</h1>
                                Proyectarse en un mediano plazo como
                                el punto de encuentro para los
                                empresarios en Armenia, el Quindío y el país.


                            </span>
                        
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
export default Nosotros;