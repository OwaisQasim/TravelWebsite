import React from 'react'; // Make sure to import React
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css'

function Home() {
  return <div>Home Page</div>;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={''} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
