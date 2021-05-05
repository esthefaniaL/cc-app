import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Badges from './Badge';
//import Category from  './Category';
import CategoryDetails from './CategoryDetails';
import CategoryBussines from './CategoryBussines';


function App() {
        return(
        <BrowserRouter>
        <Switch>
        <Route  exact path="/" component={Badges} />
        <Route  exact path="/categoryDetails" component={CategoryDetails} />
        <Route  exact path="/categoryBussines" component={CategoryBussines} />
        </Switch>
        
        
        </BrowserRouter>
    );
 
}
export default App;