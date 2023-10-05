import React from 'react';
import './App.css'
import Header from './Component/Navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';
import NotFound from './Pages/NotFound';
import Progress from './Component/Progress';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Projects' element={<Projects />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
