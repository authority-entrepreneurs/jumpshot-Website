import { Link, NavLink } from 'react-router-dom';
import { FOOTER_NAV, MISSION, img } from '../data/site';
import ContactList from './ContactList';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Link to="/" aria-label="JumpShotz home">
            <img src={img('logo.png')} alt="JumpShotz" width="1024" height="247" />
          </Link>
          <p>{MISSION}</p>
        </div>
        <div>
          <h2 className="site-footer__heading">Quick Links</h2>
          <ul className="site-footer__links">
            {FOOTER_NAV.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="site-footer__heading">Contact Info</h2>
          <ContactList />
        </div>
      </div>
      <div className="site-footer__bar">Copyright © {new Date().getFullYear()} Jumpshotz</div>
    </footer>
  );
}
