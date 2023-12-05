import Navbar from './Components/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About.jsx';
import Gallery from './Components/Gallery.jsx';
import Contact from './Components/Contact.jsx';
function App() {
  

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/about' element={ <About /> } />
          <Route path='/gallery' element={ <Gallery />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>

        
        <h2>Vite + React</h2>
        
      </BrowserRouter>
      
    </>
  )
}

export default App
