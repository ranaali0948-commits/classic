import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flame, Leaf, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DecorativePanel } from '../components/ui';
import { BRAND_NAME } from '../data/brand';
import { menuItems } from '../data/menu';
import { restaurant } from '../data/restaurant';
import { useLanguage } from '../i18n';

const dishIds = ['chicken-tikka', 'butter-chicken', 'house-biryani', 'palak-paneer'] as const;
const featureIcons = [UtensilsCrossed, Flame, Leaf, MapPin];

export default function HomePage() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const copy = language === 'fr' ? {
    eyebrow: 'Paris 14e · Montparnasse', title: 'Une table chaleureuse, des saveurs qui rassemblent', intro: 'Cuisine indienne et pakistanaise généreuse, épices raffinées et hospitalité sincère.', reserve: 'Réserver une table', menu: 'Découvrir la carte', order: 'Commander en ligne',
    features: ['Épices authentiques', 'Cuisson au tandoor', 'Options végétariennes', 'Au cœur de Paris'],
    dishesEyebrow: 'Les signatures', dishesTitle: 'Les saveurs de la maison', dishesIntro: 'Quatre plats emblématiques pour découvrir une cuisine expressive et généreuse.', speciality: 'Spécialité',
    storyEyebrow: 'Notre histoire', storyTitle: 'La tradition, servie avec générosité', storyText: `À ${BRAND_NAME}, les épices, les cuissons lentes et le tandoor composent une cuisine vivante, pensée pour être partagée.`, storyButton: 'Découvrir notre histoire',
    galleryEyebrow: 'L’univers', galleryTitle: 'Une atmosphère singulière', galleryIntro: 'Un aperçu abstrait de la future galerie : gestes, salle, détails et art de recevoir.', galleryButton: 'Voir la galerie',
    ctaEyebrow: 'Votre table à Montparnasse', ctaTitle: 'Venez partager un moment généreux', ctaText: 'Réservez votre table ou contactez-nous pour préparer votre visite.', contact: 'Nous contacter', footer: 'Cuisine indienne & pakistanaise · Paris 14e',
  } : {
    eyebrow: 'Paris 14th · Montparnasse', title: 'A warm table and flavours that bring people together', intro: 'Generous Indian and Pakistani cuisine, refined spices and sincere hospitality.', reserve: 'Book a table', menu: 'Explore the menu', order: 'Order online',
    features: ['Authentic spices', 'Tandoor cooking', 'Vegetarian options', 'In the heart of Paris'],
    dishesEyebrow: 'Signatures', dishesTitle: 'Flavours of the house', dishesIntro: 'Four iconic dishes introducing expressive and generous cuisine.', speciality: 'Speciality',
    storyEyebrow: 'Our story', storyTitle: 'Tradition, served generously', storyText: `At ${BRAND_NAME}, spices, slow cooking and the tandoor create vibrant food designed for sharing.`, storyButton: 'Discover our story',
    galleryEyebrow: 'The experience', galleryTitle: 'A singular atmosphere', galleryIntro: 'An abstract preview of the future gallery: craft, dining room details and hospitality.', galleryButton: 'View the gallery',
    ctaEyebrow: 'Your table in Montparnasse', ctaTitle: 'Come and share a generous moment', ctaText: 'Book your table or contact us to plan your visit.', contact: 'Contact us', footer: 'Indian & Pakistani cuisine · Paris 14th',
  };
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 36 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .68, ease: [0.22, 1, 0.36, 1] as const } };

  return <div className="home-v3 image-free-home">
    <section className="home-v3-hero image-free-hero">
      <div className="image-free-hero-pattern" aria-hidden="true"><span>✦</span><i /><i /><i /></div>
      <div className="home-v3-hero-content">
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}>{copy.eyebrow}</motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .48 }}>{copy.title}</motion.h1>
        <motion.div className="home-v3-ornament" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, scaleX: .5 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: .7 }}><i />✦<i /></motion.div>
        <motion.p className="image-free-hero-intro" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .82 }}>{copy.intro}</motion.p>
        <motion.div className="home-v3-hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .98 }}><Link to="/reservation" className="home-v3-button primary">{copy.reserve}<ArrowRight /></Link><Link to="/carte" className="home-v3-button secondary">{copy.menu}</Link></motion.div>
      </div>
    </section>

    <motion.section className="home-v3-features" {...reveal}><div className="home-v3-container">{copy.features.map((title, index) => { const Icon = featureIcons[index]; return <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, y: 20, scale: .97 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .1 }}><Icon /><div><h3>{title}</h3><p>{index === 3 ? 'Montparnasse' : 'Vallée du Kashmir'}</p></div></motion.article>; })}</div></motion.section>

    <motion.section className="home-v3-section home-v3-dishes" {...reveal}><div className="home-v3-container"><div className="home-v3-heading"><p>{copy.dishesEyebrow}</p><h2>{copy.dishesTitle}</h2><span>{copy.dishesIntro}</span></div><div className="home-v3-dish-grid">{dishIds.map((id, index) => { const item = menuItems.find(entry => entry.id === id)!; const name = language === 'fr' ? item.name : item.englishName; return <motion.article key={id} whileHover={reduceMotion ? undefined : { y: -7 }}><DecorativePanel index={index + 1} label={name} /><div><small>{copy.speciality}</small><h3 className="notranslate" translate="no">{name}</h3><p>{language === 'fr' ? item.descriptionFr : item.descriptionEn}</p></div></motion.article>; })}</div></div></motion.section>

    <section className="home-v3-section home-v3-story"><div className="home-v3-container home-v3-story-grid"><motion.div initial={reduceMotion ? false : { opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><p className="home-v3-kicker">{copy.storyEyebrow}</p><h2>{copy.storyTitle}</h2><p>{copy.storyText}</p><Link className="home-v3-text-link" to="/notre-histoire">{copy.storyButton}<ArrowRight /></Link></motion.div><motion.div initial={reduceMotion ? false : { opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}><DecorativePanel className="story-decorative-panel" label={copy.storyEyebrow} /></motion.div></div></section>

    <motion.section className="home-v3-section home-v3-gallery" {...reveal}><div className="home-v3-container"><div className="home-v3-heading"><p>{copy.galleryEyebrow}</p><h2>{copy.galleryTitle}</h2><span>{copy.galleryIntro}</span></div><div className="home-v3-gallery-grid">{Array.from({ length: 6 }, (_, index) => <motion.div key={index} whileHover={reduceMotion ? undefined : { y: -5, scale: 1.015 }}><DecorativePanel index={index + 1} /></motion.div>)}</div><Link className="home-v3-button gallery-button" to="/galerie">{copy.galleryButton}<ArrowRight /></Link></div></motion.section>

    <motion.section className="home-v3-cta" {...reveal}><div className="home-v3-container"><Sparkles /><p>{copy.ctaEyebrow}</p><h2>{copy.ctaTitle}</h2><span>{copy.ctaText}</span><div><Link to="/reservation" className="home-v3-button primary">{copy.reserve}</Link><Link to="/contact" className="home-v3-button secondary">{copy.contact}</Link></div></div></motion.section>
    <footer className="home-v3-footer"><div className="home-v3-container"><span className="notranslate" translate="no">{BRAND_NAME}</span><a className="notranslate" translate="no" href={restaurant.mapUrl}>{restaurant.address.full}</a><small>© {new Date().getFullYear()} {BRAND_NAME} · <Link to="/commander">{copy.order}</Link></small></div></footer>
  </div>;
}
