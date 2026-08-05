import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Mountain, X } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { BRAND_NAME } from '../data/brand';
import { useLanguage } from '../i18n';

const leftLinks = [{ to: '/', fr: 'Accueil', en: 'Home' }, { to: '/carte', fr: 'La carte', en: 'Menu' }, { to: '/galerie', fr: 'Galerie', en: 'Gallery' }];
const rightLinks = [{ to: '/notre-histoire', fr: 'Notre histoire', en: 'Our story' }, { to: '/reservation', fr: 'Réservation', en: 'Booking' }, { to: '/contact', fr: 'Contact', en: 'Contact' }];

export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const links = [...leftLinks, ...rightLinks];

  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 34); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => { setOpen(false); }, [location.pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);

  const nav = (items: typeof leftLinks, side: string) => <motion.nav className={`home-approval-nav is-${side}`} aria-label={language === 'fr' ? 'Navigation principale' : 'Main navigation'} initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: .08, delayChildren: .28 } } }}>{items.map(item => <motion.div key={item.to} variants={{ hidden: { opacity: 0, y: -9 }, visible: { opacity: 1, y: 0 } }}><NavLink to={item.to} end={item.to === '/'}>{item[language]}</NavLink></motion.div>)}</motion.nav>;

  return <motion.header className={`home-approval-header ${scrolled || open ? 'is-solid' : ''}`} initial={reduceMotion ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
    <div className="home-approval-header-inner">
      {nav(leftLinks, 'left')}
      <motion.div className="home-approval-brand" initial={reduceMotion ? false : { opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .16 }}>
        <NavLink to="/" className="notranslate" translate="no" aria-label={BRAND_NAME}><Mountain aria-hidden="true" /><strong>{BRAND_NAME}</strong><span aria-hidden="true"><i />✦<i /></span></NavLink>
      </motion.div>
      <div className="home-approval-right">{nav(rightLinks, 'right')}<div className="home-approval-language" aria-label={language === 'fr' ? 'Choisir la langue' : 'Choose language'}><button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')}>FR</button><span>/</span><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button></div></div>
      <button className="home-approval-menu-button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="home-approval-mobile-menu" aria-label={open ? (language === 'fr' ? 'Fermer le menu' : 'Close menu') : (language === 'fr' ? 'Ouvrir le menu' : 'Open menu')}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>{open && <motion.div id="home-approval-mobile-menu" className="home-approval-mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: .28 }}><nav>{links.map((item, index) => <motion.div key={item.to} initial={reduceMotion ? false : { opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .04 * index }}><NavLink to={item.to} end={item.to === '/'}>{item[language]}</NavLink></motion.div>)}<div className="home-approval-language is-mobile"><button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')}>FR</button><span>/</span><button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button></div></nav></motion.div>}</AnimatePresence>
  </motion.header>;
}
