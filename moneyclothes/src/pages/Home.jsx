import banner from '../assets/banner.mp4'
import bag from '../assets/bag.png'
import woman from '../assets/woman.png'
import man from '../assets/man.png'
import glasses from '../assets/glasses.png'
import { useState, useEffect } from 'react'


function Home() {
  const [esMovil, setEsMovil] = useState(window.innerWidth < 1200)

  useEffect(() => {
    const handleResize = () => setEsMovil(window.innerWidth < 1200)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ margin: 0, padding: 0, width: "100%" }}>
      <div style = {{ overflow : "hidden",position: "relative", alignItems: "center", width: "100%",margin: 0, padding: 0 }}>
          <video src = {banner}   style={{width: "100%", height: "100vh", objectFit: "cover", display: "block",margin: 0,padding: 0,   transform: "scale(1.1)"}} 
  autoPlay loop muted
/>
      </div>
      <div style={{ display: "flex", flexDirection:  esMovil ? "column" : "row", width: "100%" }}>
        <img src={woman} style={{ width: esMovil ? "100%" : "50%", height: "100vh", objectFit: "cover" }} />
        <img src={man} style={{ width: esMovil ? "100%" : "50%", height: "100vh", objectFit: "cover" }} />
      </div>
      <div style={{ display: "flex", flexDirection:  esMovil ? "column" : "row", width: "100%" }}>
        <img src={bag} style={{ width: esMovil ? "100%" : "50%", height: "100vh", objectFit: "cover" }} />
        <img src={glasses} style={{ width: esMovil ? "100%" : "50%", height: "100vh", objectFit: "cover" }} />
      </div>
        <div style={{ width: "100%", height: "100px", position: "relative", backgroundColor: "white" }}>
        
        </div>
    </div>
  )
}

export default Home