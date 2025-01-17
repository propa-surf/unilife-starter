import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CitiesDetailsPage from './pages/CitiesDetailsPage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage';
import HomeDetailPage from './pages/HomeDetailPage';
import Footer from './components/Footer';

function App() {

  const baseUrl = 'https://unilife-server.herokuapp.com/'

  return (
    <BrowserRouter>
        <Header className='header'/>
        <Routes>
            <Route path='/' element={<HomePage baseUrl={baseUrl}/>}/>
            <Route path='/allcities' element={<SeeAllCitiesPage baseUrl={baseUrl}/>}/>
            <Route path='/citydetails'>
              <Route path='/citydetails/:id' element={<CitiesDetailsPage baseUrl={baseUrl}/>}/>
              <Route path='/citydetails/:id/:filterBedroom' element={<CitiesDetailsPage baseUrl={baseUrl}/>}/>
            </Route>
            <Route path='/homedetails/:propertyID' element={<HomeDetailPage baseUrl={baseUrl}/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
