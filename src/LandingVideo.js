import teaVideo from './assets/vertical.mp4'

function LandingVideo() {
  return (
    <div className="landing-video-area">
      <div className="vid-container">
        <video autoPlay loop muted preLoad className="vid">
          <source src={teaVideo} type="video/mp4" />
        </video>
      </div>
      <div className="marquee">
        <div className="marquee-content">
          <span>Enjoy Tea Culture</span>
          <span>Enjoy Tea Culture</span>
          <span>Enjoy Tea Culture</span>
          <span>Enjoy Tea Culture</span>
        </div>
      </div>
    </div>
  )
}

export default LandingVideo
