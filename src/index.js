import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './routes/Contacto';
import Blog from './routes/Blog'


ReactDOM.render(
 
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <App />}>
          <Route path = 'blog' element = { <Blog />}/>
          <Route path = 'contacto' element = { <Contacto />}/>
        </Route>
       
      </Routes>
     
    </BrowserRouter>,
   
  document.getElementById('root')
);

