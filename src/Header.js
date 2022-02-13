import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import logo from './assets/logo.png'
import CTA from './CTA'

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-container">
      <nav>
        <div>
          <img src={logo} alt="Min Logo" className="logo" />
        </div>
        <div>Our Story</div>
        <div>Locations</div>
        <div>Menu</div>
        <div
          style={{ position: 'relative' }}
          onMouseOver={() => setIsOpen(true)}
        >
          Services{' '}
          <ArrowDropDownIcon style={{ transform: 'translateY(5px)' }} />
          <div className="dropdown" style={{ opacity: isOpen ? '100%' : '0%' }}>
            <div>Tea Ceremonies</div>
            <div>Brewing Class</div>
            <div>Meet & Greet</div>
          </div>
        </div>
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
