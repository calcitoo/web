import NavBar from './components/NavBar'
import Home from './pages/Home'
import Catalogo from './pages/Catalogo'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
    return (        
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Catalogo" element={<Catalogo />} />
        </Routes>
      </div>  
    </BrowserRouter>
    )
}
export default App