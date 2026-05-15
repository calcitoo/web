import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Menu, Search, User, ShoppingBag } from 'lucide-react'
import { useState, useEffect } from 'react'


function NavBar() {
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1200)
  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1200)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
return (
  <div style={{ justifyContent: "space-between", position: "fixed", width: "100%", zIndex: "1000", backgroundColor: "transparent", display: "flex", alignItems: "center", padding: "0px 20px", mixBlendMode: 'difference'}}>
    
    <div style={{ flex: 1, gap: "20px", justifyContent: "flex-start", display: "flex", alignItems: "center" }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
      <Link style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }} to="/Cuenta">
        <User size={16} />
        {!esMovil && <span>ACCOUNT</span>}
      </Link>
      <Link style={{ display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none', color: 'white', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase' }} to="/cart">
        <ShoppingBag size={16} />
        {!esMovil && <span>CART</span>}
      </Link>
    </div>
    
  </div>
)
}
export default NavBar