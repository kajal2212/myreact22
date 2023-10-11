import React, { Suspense,lazy } from 'react';
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
import Buymobile from './modules/components/subrouting/Buymobile';
import Repairmobile from './modules/components/subrouting/Repairmobile';

const Mylazym = lazy(()=>import('./modules/components/Lazyloadingpage'));

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
      <Route path='myservice' element={<Myservicepage/>}>
      <Route path='buy' element={<Buymobile/>}/>
      <Route path='repair' element={<Repairmobile/>}/>
      <Route path='*' element={<Myerrorpage/>}/>
      </Route>
      {/* <Route path='lazyloading' element={<Lazyloadingpage/>}/> */}
      <Route path='lazyloading' element={
        <Suspense fallback={<h1 style={{color:'red',backgroundColor:'blue',textAlign:'center',position:'absolute',top:'300px'}}>loading</h1>}>
        <Mylazym/>
        </Suspense>
      }></Route>
      
      <Route path='*' element={<Myerrorpage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

