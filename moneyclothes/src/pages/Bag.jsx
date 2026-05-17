import bag from '../assets/bag.png'

function Bag() {
  return (
    <div style={{ padding: '100px 40px', backgroundColor: 'white', minHeight: '100vh' }}>
      <h1 style={{ letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '40px' }}>BAG</h1>
      
      <div style={{ display: 'flex', gap: '20px', maxWidth: '400px' }}>
        <div>
          <img src={bag} style={{ width: '100%', objectFit: 'cover' }} />
          <p style={{ letterSpacing: '2px', textTransform: 'uppercase', marginTop: '10px' }}>Funny Bag</p>
          <p style={{ color: '#666', marginTop: '5px' }}>$890</p>
          <button style={{ marginTop: '10px', padding: '12px 24px', backgroundColor: 'black', color: 'white', border: 'none', letterSpacing: '2px', cursor: 'pointer' }}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

export default Bag