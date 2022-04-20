import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from './Badge';
import CategoryBussines from './CategoryBussines';
import Services from './Services'
import Nosotros from './Nosotros';


function App() {
        return(
        <BrowserRouter>
            <Switch>
                <Route  exact path="/" component={Badges} />
                <Route  exact path="/servicios" component={Services} />
                <Route  exact path="/categoryBussines" component={CategoryBussines} />
                <Route  exact path="/nosotros" component={Nosotros} />
                
            </Switch>
        
        
        </BrowserRouter>
    );
 
}
export default App;