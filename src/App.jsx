import React from 'react'; // Make sure to import React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Product from './components/pages/Product'
import SignUp from './components/pages/SignUp'




function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/product' element={<Product />} />
          <Route path='/sign-up' element={<SignUp />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
