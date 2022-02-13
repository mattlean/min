import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo.png'
import CTA from './CTA'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-container">
      <div>
        <MenuIcon style={{fontSize: 65, transform: 'translateX(-8px)', marginLeft: 20}} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={logo} alt="Min Logo" className="logo" />
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end', marginRight: 20}}>
        <CTA />
      </div>
    </header>
  )
}

export default Header
