import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo.png'
import CTA from './CTA'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-container">
      <img src={logo} alt="Min Logo" className="logo" style={{marginLeft: 20}} />
      <MenuIcon fontSize="large" style={{transform: 'translate(4px, -9px)', marginRight: 20}} />
    </header>
  )
}

export default Header
