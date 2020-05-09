import React from 'react';
import {
    BrowserRouter ,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import StorePicker from '../StorePicker/Storepicker'
import App from '../../App'
import NotFound from '../NotFound/NotFound'


const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={StorePicker}/>
            <Route exact path='/store/:id' component={App}/>
            <Route  component={NotFound}/>
        </Switch>   
    </BrowserRouter>
)
export default Router


