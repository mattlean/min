import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from './assets/logo.png'
import CTA from './CTA'

function Header() {
  return (
    <header className="header-container">
      <nav>
        <div>
          <img src={logo} alt="Min Logo" className="logo" />
        </div>
        <div>Our Story</div>
        <div>Locations</div>
        <div>Menu</div>
        <div>Services</div>
        <div />
      </nav>
      <div />
      <div />
      <div>
        <CTA />
      </div>
    </header>
  )
}

export default Header
