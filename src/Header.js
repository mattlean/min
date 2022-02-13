import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import logo from './assets/logo.png'

function Header() {
  return (
    <header className="header-container">
      <div>
        <MenuIcon fontSize="large" />
      </div>
      <div>
        <img src={logo} alt="Min Logo" className="logo" />
      </div>
      <div>
        <ShoppingCartIcon fontSize="large" />
      </div>
    </header>
  )
}

export default Header
