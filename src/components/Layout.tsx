import { useEffect, useState } from 'react';
import { Menu, X, Phone, MapPin, Sparkles } from 'lucide-react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { navigation } from '../data/navigation';
import { restaurant } from '../data/restaurant';
import { BRAND_NAME } from '../data/brand';
import { ButtonLink } from './ui';
import { useLanguage } from '../i18n';

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === 'fr' ? 'en' : 'fr';
  return <button className={`language-toggle is-${language} ${mobile ? 'is-mobile' : ''}`} type="button" role="switch" aria-checked={language === 'en'} aria-label={language === 'fr' ? 'Afficher le site en anglais' : 'Afficher le site en français'} onClick={() => setLanguage(nextLanguage)}><span className="language-toggle-label is-fr">FR</span><span className="language-toggle-label is-en">EN</span><span className="language-toggle-thumb" aria-hidden="true" /></button>;
}

function Header() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const location = useLocation();
  const { language, t } = useLanguage();
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 32); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }); }, [location.pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', onKey); return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); }; }, [open]);
  const solid = location.pathname !== '/' || scrolled || open;
  return <header className={`site-header ${solid ? 'is-solid' : ''}`}><div className="container header-inner">
    <Link to="/" className="brand" aria-label={`${BRAND_NAME}, ${language === 'fr' ? 'accueil' : 'home'}`}><Sparkles aria-hidden="true" /><span>{BRAND_NAME}</span><small>{language === 'fr' ? 'Cuisine indienne & pakistanaise · Paris 14e' : 'Indian & Pakistani cuisine · Paris 14th'}</small></Link>
    <nav className="desktop-nav" aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'}>{navigation.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{t.nav[index]}</NavLink>)}</nav>
    <div className="header-actions"><ButtonLink to="/reservation">{t.actions.reserve}</ButtonLink><ButtonLink to="/commander" variant="secondary">{t.actions.order}</ButtonLink><LanguageSwitcher /></div>
    <button className="menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
  </div><div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`} aria-hidden={!open}><nav aria-label={language === 'fr' ? 'Navigation mobile' : 'Mobile navigation'}><LanguageSwitcher mobile />{navigation.map((item, index) => <NavLink key={item.to} to={item.to} end={item.to === '/'}>{t.nav[index]}</NavLink>)}<NavLink to="/reservation">{t.actions.reserve}</NavLink><NavLink to="/commander">{t.actions.order}</NavLink></nav></div></header>;
}

function Footer() { const { language, t } = useLanguage(); return <footer className="site-footer"><div className="container footer-grid"><div><Link className="footer-brand" to="/">{BRAND_NAME}</Link><p>{language === 'fr' ? 'Cuisine indienne & pakistanaise à Paris, à deux pas de Montparnasse.' : 'Indian & Pakistani cuisine in Paris, steps from Montparnasse.'}</p></div><div><h2>Navigation</h2>{navigation.map((item, index) => <Link key={item.to} to={item.to}>{t.nav[index]}</Link>)}</div><div><h2>{language === 'fr' ? 'Nous trouver' : 'Find us'}</h2><a href={restaurant.mapUrl} target="_blank" rel="noreferrer"><MapPin size={16} />{restaurant.address.full}</a><a href={restaurant.phone.href}><Phone size={16} />{restaurant.phone.display}</a></div><div><h2>{language === 'fr' ? 'Votre visite' : 'Your visit'}</h2><Link to="/reservation">{language === 'fr' ? 'Réserver une table' : 'Book a table'}</Link><Link to="/commander">{t.actions.order}</Link><span className="social-note">{language === 'fr' ? 'Réseaux sociaux à venir' : 'Social media coming soon'}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {BRAND_NAME}</span><span><a href="#mentions-legales">{language === 'fr' ? 'Mentions légales' : 'Legal notice'}</a><a href="#confidentialite">{language === 'fr' ? 'Politique de confidentialité' : 'Privacy policy'}</a></span></div></footer>; }

export default function Layout() { return <><Header /><main><Outlet /></main><Footer /></>; }
