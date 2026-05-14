import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'


function NavBar() {
  return (
    <div style ={{ justifyContent: "space-between", position: "fixed",width: "100%", zIndex: "1000", backgroundColor: "transparent", display: "flex", alignItems: "center", padding: "10px 20px", mixBlendMode: 'difference'}}>
     
      <div style = {{ flex: 1, gap : "20px", justifyContent: "flex-start", display: "flex"}}>
          <Link style = {{ textDecoration: 'none' }} to="/Home">Inicio</Link>
          <Link style = {{textDecoration: 'none' }} to="/Catalogo">Catalogo</Link>
      </div>
      <div style = {{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img src={logo} style = {{ width: '100px', height: 'auto',justifyContent: 'center' }} />
      </div>
      <div style = {{ flex: 1 ,gap:"20px", justifyContent: "flex-end", display: "flex"}}>
          <Link style = {{ textDecoration: 'none' }} to="/Cuenta">Cuenta</Link>
          <Link style = {{textDecoration: 'none' }} to="/cart">Carrito</Link>
      </div>
      
    </div>
  )
}

export default NavBar