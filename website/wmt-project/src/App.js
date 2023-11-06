import React from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Home from './pages/Home';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </BrowserRouter>
    )
}

export default App;