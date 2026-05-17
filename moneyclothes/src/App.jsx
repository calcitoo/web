import NavBar from './components/NavBar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import Woman from './pages/Woman'
import Man from './pages/Man'
import Glasses from './pages/Glasses'
import Bag from './pages/Bag'
import Cuenta from './pages/Cuenta'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const [modoOscuro, setModoOscuro] = useState(false)
  return (<BrowserRouter><div style={{backgroundColor: modoOscuro ? 'black' : 'white', transition: 'background-color 0.5s ease', minHeight: '100vh'}}>
    <NavBar modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
    <Routes><Route path="/" element={<Home />} 
    /><Route path="/Home" element={<Home />} 
    /><Route path="/Catalogo" element={<Catalogo />}
    /><Route path="/woman" element={<Woman />} 
    /><Route path="/men" element={<Man />} 
    /><Route path="/glasses" element={<Glasses />} 
    /><Route path="/bag" element={<Bag />}
    /><Route path="/Cuenta" element={<Cuenta modoOscuro={modoOscuro} />} 
    /></Routes></div></BrowserRouter>)

}
export default App