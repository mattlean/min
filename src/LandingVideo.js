import teaFarmers from './assets/tea-farmers.mp4'

function LandingVideo() {
  return (
    <div className="landing-video-area">
      <div className="vid-container">
        <video autoPlay controls loop muted preLoad className="vid">
          <source src={teaFarmers} type="video/mp4" />
        </video>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          <span>Experience tea culture</span>
          <span>Experience tea culture</span>
          <span>Experience tea culture</span>
          <span>Experience tea culture</span>
        </div>
      </div>
    </div>
  )
}

export default LandingVideo
