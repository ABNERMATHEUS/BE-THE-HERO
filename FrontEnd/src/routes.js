import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Logon from './page/Logon'
import Register from './page/Register'
import Profile from './page/Profile'
import NewIncidents from './page/NewIncidents'


export default function Routes(){

    return (
       <BrowserRouter>
       <Switch> 
           <Route path="/" exact component={Logon} />
           <Route path="/Register" component={Register} />
           <Route path="/Profile" component={Profile} />
           <Route path="/incidents/new" component={NewIncidents} />
 
       </Switch>
       </BrowserRouter>
    );

}