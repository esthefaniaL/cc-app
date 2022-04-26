import React from 'react';
import Cabezote from './Cabezote';
import Footer from './Footer';

class Nosotros extends React.Component {

    render() {
        return (
            <>
                <Cabezote></Cabezote>
                <div>

                    <div className="history">
                        <p>
                            Transcurría la década de los 80 y en la ciudad milagro de Colombia, al
                            al mejor estilo de los grandes mercados europeos, se vislumbraba entonces
                            el primer trazo de modernidad. Fue asi como poco a poco los Armenios fueron
                            testigos del surgimiento entre sus incipientes avenidas, de la primera estructura
                            perfilada para albergar a más de cien comerciantes en un solo sitio, diseñado para
                            el confort en las compras, la diversión y la experimentación de un nuevo mundo con
                            infinidad de ventajas. A sólo cinco minutos del centro de la ciudad, con gran variedad
                            de productos y servicios, seguridad y comodidad.

                            Hoy después de 21 años, continúa vigente, sobrellevando inclemencias de orden fisico
                            y natural que no han podido quebrantar el deseo de cada uno de sus propietarios para
                            consolidarlo como el verdadero sitio ideal.
                        </p>

                        <p>El centro comercial Bolívar abre
                            sus puertas al público el 7 de
                            diciembre de 1987, convirtiendose
                            en un referente de la ciudad
                            por su ubicación e impacto
                            sobre el entorno</p>
                    </div>
                </div>
                <Footer></Footer>
            </>
        );
    }
}
export default Nosotros;