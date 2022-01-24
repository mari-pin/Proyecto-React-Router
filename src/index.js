import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//vistas
import App from "./App";
import Contacto from './routes/Contacto';
import Blog from './routes/Blog';
import Inicio from './routes/Inicio'
import NoEncontrado from './routes/NoEncontrado';
import Post from "./routes/Post";


ReactDOM.render(
 
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = { <App />}>
          {/* index es la rute del inicio  si falla el path*/}
          <Route index element = { <Inicio />}/>
          <Route path = 'blog' element = { <Blog />}/>
          <Route path = 'blog/:id' element = { <Post />}/>
          <Route path = 'contacto' element = { <Contacto />}/>
          <Route path = '*' element = { <NoEncontrado/>}/>
        </Route>
       
      </Routes>
     
    </BrowserRouter>,
   
  document.getElementById('root')
);

