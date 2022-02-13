import FB from './assets/fb.png'
import IG from './assets/ig.png'
import Twitter from './assets/twitter.png'

function SocialMedia() {
  return (
    <div className="social-media">
      <img src={FB} alt="Facebook" />
      <img src={IG} alt="Instagram" />
      <img
        src={Twitter}
        alt="Twitter"
        style={{ transform: 'translateY(-2px)' }}
      />
    </div>
  )
}

export default SocialMedia
