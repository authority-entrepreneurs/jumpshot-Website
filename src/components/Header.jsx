import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MAIN_NAV, img } from '../data/site';
import { MenuIcon } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__inner">
        <Link to="/" className="site-header__logo" aria-label="JumpShotz home">
          <img src={img('logo.png')} alt="JumpShotz" width="1024" height="247" />
        </Link>
        <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
          <MenuIcon open={open} />
        </button>
        <nav className={`nav ${open ? 'is-open' : ''}`} aria-label="Main">
          <ul className="nav__list">
            {MAIN_NAV.map((item) => (
              <li key={item.label}>
                {item.href ? (
                  <a href={item.href} className="nav__cta">
                    {item.label}
                  </a>
                ) : (
                  <NavLink to={item.to} end className="nav__link">
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
