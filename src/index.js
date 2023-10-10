import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./modules/css/style.css";
import Mynavbar from './modules/shares/Mynavbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Mylandingpage from './modules/components/Mylandingpage';
import Myaboutpage from './modules/components/Myaboutpage';
import Mycontactspage from './modules/components/Mycontactspage';
import Myerrorpage from './modules/components/Myerrorpage';
import Myaxios from './modules/components/Myaxios';
import Mygraphpage from './modules/components/Mygraphpage';
import Productdetails from './modules/components/Productdetails';
import Myregistorpage from './modules/auth/Myregistorpage';
import Myservicepage from './modules/components/Myservicepage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
    <Mynavbar/>
    <Routes>
      <Route path='/' element={<Mylandingpage/>}></Route>
      <Route path='myabout' element={<Myaboutpage/>}/>
      <Route path='mycontacts' element={<Mycontactspage/>}/>
      <Route path='mygraph' element={<Mygraphpage/>}/>
      <Route path='myaxiosdata' element={<Myaxios/>}/>
      <Route path='myaxiosdata/details/:id' element={<Productdetails/>}/>
      <Route path='registor' element={<Myregistorpage/>}/>
      <Route path='myservice' element={<Myservicepage/>}/>
      
      <Route path='*' element={<Myerrorpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

