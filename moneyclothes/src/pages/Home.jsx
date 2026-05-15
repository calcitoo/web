import banner from '../assets/banner.mp4'
import bag from '../assets/bag.png'
import woman from '../assets/woman.png'
import man from '../assets/man.png'
import glasses from '../assets/glasses.png'

function Home() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <div style = {{ position: "relative", textAlign: "center", alignItems: "center", justifyContent: "left", width: "100%",margin: 0, padding: 0, lineHeight: 0 }}>
          <video src = {banner} style = {{ width: "100%", height: "100vh", objectFit: "cover" }} autoPlay loop muted/>
      </div>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <img src={woman} style={{ width: "50%", height: "100vh", objectFit: "cover" }} />
        <img src={man} style={{ width: "50%", height: "", objectFit: "cover" }} />
      </div>
    </div>
  )
}

export default Home