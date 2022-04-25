import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from './Badge';
import CategoryBussines from './CategoryBussines';
import CategoryBussinesBelleza from './CategoryBussinesBelleza';
import CategoryBussinesEntretenimiento from './CategoryBussinesEntretenimiento';
import CategoryBussinesSalud from './CategoryBussinesSalud';
import CategoryBussinesTecnologia from './CategoryBussinesTecnologia';

import Services from './Services'
import Nosotros from './Nosotros';


function App() {
        return(
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Badges} />
                <Route  exact path="/servicios" component={Services} />
                <Route  exact path="/categoryBussines" component={CategoryBussines} />
                <Route  exact path="/categoryBussinesBelleza" component={CategoryBussinesBelleza} />
                <Route  exact path="/categoryBussinesEntretenimiento" component={CategoryBussinesEntretenimiento} />
                <Route  exact path="/categoryBussinesSalud" component={CategoryBussinesSalud} />
                <Route  exact path="/categoryBussinesTecnologia" component={CategoryBussinesTecnologia} />
                <Route  exact path="/nosotros" component={Nosotros} />
                
            </Switch>
        
        
        </BrowserRouter>
    );
 
}
export default App;