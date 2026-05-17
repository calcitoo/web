import banner from '../assets/banner.mp4'
import bag from '../assets/bag.png'
import woman from '../assets/woman.png'
import man from '../assets/man.png'
import glasses from '../assets/glasses.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1200)

  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1200)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [hoverWoman, setHoverWoman] = useState(false)
  const [hoverMan, setHoverMan] = useState(false)
  const [hoverBag, setHoverBag] = useState(false)
  const [hoverGlasses, setHoverGlasses] = useState(false)

  return (
    <div style={{ margin: 0, padding: 0, width: "100%", backgroundColor: "transparent" }}>
      <div style = {{ overflow : "hidden",position: "relative", alignItems: "center", width: "100%",margin: 0, padding: 0 }}>
          <video src = {banner}   style={{width: "100%", height: "100vh", objectFit: "cover", display: "block",margin: 0,padding: 0,   transform: "scale(1.1)"}} 
  autoPlay loop muted
/>
      </div>
      <div style={{ display: "flex", flexDirection: esMovil ? "column" : "row", width: "100%" }}>
        <Link to="/woman" style={{ width: esMovil ? "100%" : "50%", display: 'block' }}>
          <div style={{ position: 'relative', width: "100%", fontSize: 0, lineHeight: 0 }} onMouseEnter={() => setHoverWoman(true)} onMouseLeave={() => setHoverWoman(false)}>
            <img src={woman} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoverWoman ? 1 : 0, transition: 'opacity 0.5s ease', isolation: 'isolate' }}>
              <p style={{ color: 'white', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '14px' }}>WOMAN</p>
            </div>
          </div>
        </Link>
        
        
        <Link to="/men" style={{ width: esMovil ? "100%" : "50%", display: 'block' }}>
          <div style={{ position: 'relative', width: "100%", fontSize: 0, lineHeight: 0 }} onMouseEnter={() => setHoverMan(true)} onMouseLeave={() => setHoverMan(false)}>
            <img src={man} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoverMan ? 1 : 0, transition: 'opacity 0.5s ease',  isolation: 'isolate' }}>
              <p style={{ color: 'white', letterSpacing: '4px', textTransform: 'uppercase',fontSize: '14px'  }}>MAN</p>
            </div>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection:  esMovil ? "column" : "row", width: "100%" }}>
      <Link to="/glasses" style={{ width: esMovil ? "100%" : "50%", display: 'block' }}>
      <div 
          style={{ position: 'relative', width: "100%", fontSize : 0, lineHeight: 0 }}
          onMouseEnter={() => setHoverGlasses(true)}
          onMouseLeave={() => setHoverGlasses(false)}
        >
          <img src={glasses} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoverGlasses ? 1 : 0, transition: 'opacity 0.5s ease',  isolation: 'isolate' }}>
            <p style={{ color: 'white', letterSpacing: '4px', textTransform: 'uppercase',fontSize: '14px'  }}>GLASSES</p>
          </div>
        </div>
      </Link>


      <Link to="/bag" style={{ width: esMovil ? "100%" : "50%", display: 'block' }}>
        <div 
          style={{ position: 'relative', width: "100%" , fontSize : 0, lineHeight: 0 }}
          onMouseEnter={() => setHoverBag(true)}
          onMouseLeave={() => setHoverBag(false)}
        >
          <img src={bag} style={{ width: "100%", height: "100vh", objectFit: "cover" }} />
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoverBag ? 1 : 0, transition: 'opacity 0.5s ease',  isolation: 'isolate' }}>
            <p style={{ color: 'white', letterSpacing: '4px', textTransform: 'uppercase',fontSize: '14px'  }}>BAG</p>
          </div>
        </div>
      </Link>
      
      </div>
        <div style={{ width: "100%", height: "100px", position: "relative", backgroundColor: "white" }}>
        
        </div>
    </div>
  )
}

export default Home