import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, Mountain, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { BRAND_NAME } from '../data/brand';
import { useLanguage } from '../i18n';

const desktopGroups = {
  fr: {
    left: [['Accueil', '/'], ['La carte', '/carte'], ['Galerie', '/galerie']],
    right: [['À propos', '/notre-histoire'], ['Réservation', '/reservation'], ['Contact', '/contact']],
    menu: 'Ouvrir le menu', close: 'Fermer le menu', nav: 'Navigation de l’accueil', language: 'Changer la langue',
  },
  en: {
    left: [['Home', '/'], ['Menu', '/carte'], ['Gallery', '/galerie']],
    right: [['About', '/notre-histoire'], ['Reservation', '/reservation'], ['Contact', '/contact']],
    menu: 'Open menu', close: 'Close menu', nav: 'Homepage navigation', language: 'Change language',
  },
} as const;

export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { language, setLanguage } = useLanguage();
  const copy = desktopGroups[language];
  const links = [...copy.left, ...copy.right];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const itemMotion = (index: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: .45, delay: reduceMotion ? 0 : .16 + index * .07 },
  });

  return <motion.header
    className={`home-header ${scrolled || open ? 'is-scrolled' : ''}`}
    initial={reduceMotion ? false : { opacity: 0, y: -24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="home-header-inner">
      <motion.span className="home-header-floral" aria-hidden="true" animate={reduceMotion ? undefined : { y: [0, -3, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>✦</motion.span>
      <nav className="home-header-nav home-header-nav-left" aria-label={copy.nav}>
        {copy.left.map(([label, to], index) => <motion.div key={to} {...itemMotion(index)}><NavLink to={to} end={to === '/'}>{label}</NavLink></motion.div>)}
      </nav>
      <motion.div className="home-header-brand" initial={reduceMotion ? false : { opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .18 }}>
        <Link to="/" aria-label={BRAND_NAME} className="notranslate" translate="no"><Mountain aria-hidden="true" /><strong>{BRAND_NAME}</strong><span aria-hidden="true"><i />✦<i /></span></Link>
      </motion.div>
      <nav className="home-header-nav home-header-nav-right" aria-label={copy.nav}>
        {copy.right.map(([label, to], index) => <motion.div key={to} {...itemMotion(index + 3)}><NavLink to={to}>{label}</NavLink></motion.div>)}
      </nav>
      <motion.button className="home-language" type="button" aria-label={copy.language} onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} {...itemMotion(6)}>
        <span className={language === 'fr' ? 'active' : ''}>FR</span><i>/</i><span className={language === 'en' ? 'active' : ''}>EN</span>
      </motion.button>
      <button className={`home-menu-toggle ${open ? 'is-open' : ''}`} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="home-mobile-menu" aria-label={open ? copy.close : copy.menu}>{open ? <X /> : <Menu />}</button>
    </div>
    <AnimatePresence>
      {open && <motion.div id="home-mobile-menu" className="home-mobile-menu" initial={reduceMotion ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: .32, ease: [0.22, 1, 0.36, 1] }}>
        <nav aria-label={copy.nav}>{links.map(([label, to], index) => <motion.div key={to} initial={reduceMotion ? false : { opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .06 + index * .045 }}><NavLink to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink></motion.div>)}</nav>
        <button className="home-language home-language-mobile" type="button" onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} aria-label={copy.language}><span className={language === 'fr' ? 'active' : ''}>FR</span><i>/</i><span className={language === 'en' ? 'active' : ''}>EN</span></button>
      </motion.div>}
    </AnimatePresence>
  </motion.header>;
}
