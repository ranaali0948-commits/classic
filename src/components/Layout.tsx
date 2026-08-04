import { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';
import { restaurant } from '../data/restaurant';
import { ButtonLink } from './ui';

function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const location = useLocation();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', onKey); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); }; }, [open]);
  const solid = location.pathname !== '/' || scrolled || open;
  return <header className={`site-header ${solid ? 'is-solid' : ''}`}><div className="container header-inner">
    <Link to="/" className="brand" aria-label="Vallée du Kashmir, accueil"><Sparkles aria-hidden="true" /><span>Vallée du Kashmir</span><small>Cuisine indienne & pakistanaise · Paris 14e</small></Link>
    <nav className="desktop-nav" aria-label="Navigation principale">{navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}</nav>
    <div className="header-actions"><ButtonLink to="/reservation">Réserver</ButtonLink><ButtonLink to="/commander" variant="secondary">Commander</ButtonLink></div>
    <button className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
  </div><div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}><nav aria-label="Navigation mobile">{navigation.map(item => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{item.label}</NavLink>)}<NavLink to="/reservation">Réserver</NavLink><NavLink to="/commander">Commander</NavLink></nav></div></header>;
}

function Footer() { return <footer className="site-footer"><div className="container footer-grid"><div><Link className="footer-brand" to="/">{restaurant.name}</Link><p>{restaurant.subtitle}, à deux pas de Montparnasse.</p></div><div><h2>Navigation</h2>{navigation.map(item => <Link key={item.to} to={item.to}>{item.label}</Link>)}</div><div><h2>Nous trouver</h2><a href={restaurant.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} />{restaurant.address.full}</a><a href={restaurant.phone.href}><Phone size={16} />{restaurant.phone.display}</a></div><div><h2>Votre visite</h2><Link to="/reservation">Réserver une table</Link><Link to="/commander">Commander</Link><span className="social-note">Réseaux sociaux à venir</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {restaurant.name}</span><span><a href="#mentions-legales">Mentions légales</a><a href="#confidentialite">Politique de confidentialité</a></span></div></footer>; }

export default function Layout() { return <><Header /><main><Outlet /></main><Footer /></>; }
