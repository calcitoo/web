

function Cuenta({ modoOscuro }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
      <div style={{ width: '400px', padding: '60px 40px', border: '1px solid black' }}>
        <h1 style={{ letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '40px', fontSize: '18px', color: modoOscuro ? 'white' : 'black' }}>ACCOUNT</h1>
        <input placeholder="EMAIL" style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #333', marginBottom: '20px', letterSpacing: '2px', outline: 'none', boxSizing: 'border-box' }} />
        <input type="password" placeholder="PASSWORD" style={{ width: '100%', padding: '12px 0', backgroundColor: 'transparent', border: 'none', borderBottom: '1px solid #333', marginBottom: '40px', letterSpacing: '2px', outline: 'none', boxSizing: 'border-box' }} />
        <button style={{ width: '100%', padding: '14px', backgroundColor: 'black', color: 'white', border: 'none', letterSpacing: '3px', textTransform: 'uppercase', cursor: 'pointer', marginBottom: '20px' }}>LOGIN</button>
        <p style={{ textAlign: 'center', letterSpacing: '2px', fontSize: '12px', color: modoOscuro ? 'white' : 'black'}}>¿No tienes cuenta? <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>REGÍSTRATE</span></p>
      </div>
    </div>
  )
}
export default Cuenta