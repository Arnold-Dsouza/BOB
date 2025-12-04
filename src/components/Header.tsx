import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="header"
      style={{
        backdropFilter: scrolled ? 'blur(8px)' : 'blur(2px)',
        background:
          'linear-gradient(90deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      }}
    >
      <nav className="nav">
        <div className="nav-left">
          <a href="/#cafe" className="nav-link">Café</a>
          <a href="/#backshop" className="nav-link">Backladen</a>
          <a href="/#kurse" className="nav-link">Kurse</a>
        </div>
        <div className="nav-center">
          <Link to="/" className="logo">BOB</Link>
        </div>
        <div className="nav-right">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="nav-link">Instagram</a>
          <Link to="/cart" className="nav-link">🛒</Link>
        </div>
      </nav>
    </header>
  )
}
