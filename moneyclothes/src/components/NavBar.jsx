import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Menu, Search, User, ShoppingBag, Sun, Moon } from 'lucide-react'
import { useState, useEffect } from 'react'


function NavBar({ modoOscuro, setModoOscuro }) {
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1200)
  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1200)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [menuAbierto, setMenuAbierto] = useState(false)
return (
  <>
  <div style={{ justifyContent: "space-between", position: "fixed", width: "100%", zIndex: "1000",   backgroundColor: 'transparent'
, display: "flex", alignItems: "center", padding: "0px 20px", mixBlendMode: 'difference'}}>
    
    <div style={{ flex: 1, gap: "20px", justifyContent: "flex-start", display: "flex", alignItems: "center" }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      onClick={() => setMenuAbierto(!menuAbierto)}>
        <Menu size={16} />
        {!esMovil && <span style={{ color: 'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }}>MENU</span>}
      </div>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' , padding: "20px 20px"}} to="/Catalogo">
        <Search size={16} />
        {!esMovil && <span>SEARCH</span>}
      </Link>
    </div>

    <div style={{ flex: 1, display: 'flex', justifyContent: 'center'}}>
      <Link style={{ display: 'flex'}} to="/Home">
        <img src={logo} style={{ width: '200px', height: 'auto' }} />
      </Link>
    </div>

    <div style={{ flex: 1, gap: "20px", justifyContent: "flex-end", display: "flex", alignItems: "center" }}>
      <button style = {{backgroundColor: 'transparent',  border: 'none', cursor: 'pointer'}} onClick={() => setModoOscuro(!modoOscuro)}>
        {modoOscuro ? <Sun size={16} /> : <Moon size={16} />}
      </button>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }} to="/Cuenta">
        <User size={16} />
        {!esMovil && <span>ACCOUNT</span>}
      </Link>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 
        'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }} to="/cart">
        <ShoppingBag size={16} />
        {!esMovil && <span>CART</span>}
      </Link>
    </div>
    
    </div>
    {menuAbierto && (
      <div onClick={() => setMenuAbierto(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 999, border: 'none', cursor: 'pointer' }}/>)}
    <div style={{ 
      position: 'fixed', top: 0, left: 0, 
      width: '300px', height: '100%', backgroundColor: 'black',zIndex: 1001,transform: menuAbierto ? 'translateX(0)' : 'translateX(-100%)',transition: 'transform 0.4s ease',
      display: 'flex', flexDirection: 'column',padding: '80px 40px', gap: '30px'
    }}>
      <Link to="/woman"    onClick={() => setMenuAbierto(false)}
   style={{ color: 'white', textDecoration: 'none', letterSpacing: '3px' }}>WOMAN</Link>
      <Link to="/men"    onClick={() => setMenuAbierto(false)}
     style={{ color: 'white', textDecoration: 'none', letterSpacing: '3px'}}>MEN</Link>
      <Link to="/glasses"    onClick={() => setMenuAbierto(false)}
     style={{ color: 'white', textDecoration: 'none', letterSpacing: '3px' }}>GLASSES</Link>
      <Link to="/bag"    onClick={() => setMenuAbierto(false)}
     style={{ color: 'white', textDecoration: 'none', letterSpacing: '3px' }}>BAG</Link>
    </div>
  
   </>)
}
export default NavBar