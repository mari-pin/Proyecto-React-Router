import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from "./App";

import 'bootstrap/dist/css/bootstrap.min.css';
import Contacto from './routes/Contacto';
import Blog from './routes/Blog';
import Inicio from './routes/Inicio'
import NoEncontardo from './routes/NoEncontardo';


ReactDOM.render(
 
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <App />}>
          {/* index es la rute del inicio  si falla el path*/}
        <Route index element = { <Inicio />}/>
          <Route path = 'blog' element = { <Blog />}/>
          <Route path = 'contacto' element = { <Contacto />}/>
          <Route path = '*' element = { <NoEncontardo/>}/>
        </Route>
       
      </Routes>
     
    </BrowserRouter>,
   
  document.getElementById('root')
);

