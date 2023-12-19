import {Routes, Route, Link, Navigate } from 'react-router-dom';
import Products from './Components/Products';
import Contact from './Components/Contact';
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart'; 
import './App.css';

function App() {

  return (
    <>
      <ul className="menu">
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/products'>Products</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart</Link>
      </ul>
      <h1>Routing and navigation</h1>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={ <About /> } />
        <Route path='/products' element={ <Products />} />
        <Route path='/contact' element={ <Contact />} />
        <Route path='/cart' element={ <Cart />} />

        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      
    </>
  )
}

export default App
