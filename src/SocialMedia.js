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
      <span
        style={{
          marginLeft: '1.2em',
          opacity: '60%',
          transform: 'translateY(-3px)',
          marginRight: 20
        }}
      >
        闽茶铺
      </span>
    </div>
  )
}

export default SocialMedia
