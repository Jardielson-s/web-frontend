import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from "./pages/index";
import LoadAll from "./pages/listUser";
import Login from "./menu/Menu";
import  { BrowserRouter, Switch , Route } from 'react-router-dom';


ReactDOM.render(

  <BrowserRouter>
   <Switch>
     <Route path="/" exact={true} component={App} />
     <Route path="/create" component={Create} />
     <Route path="/LoadAll" component={LoadAll} />
     <Route path="/login" component={Login} />
   </Switch>
  </BrowserRouter>
  ,
  document.getElementById('root')
);

