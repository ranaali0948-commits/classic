import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flame, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/ui';
import { BRAND_NAME } from '../data/brand';
import { galleryItems } from '../data/gallery';
import { menuItems } from '../data/menu';
import { imagePaths, restaurant } from '../data/restaurant';
import { useLanguage } from '../i18n';

const signatureDishes = [
  ['chicken-tikka', imagePaths.tikka],
  ['butter-chicken', imagePaths.butterChicken],
  ['house-biryani', imagePaths.biryani],
  ['palak-paneer', imagePaths.palakPaneer],
] as const;

export default function HomePage() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const copy = language === 'fr' ? {
    eyebrow: 'Couleurs pour', subtitle: 'Une expérience culinaire authentique', line: 'Saveurs du Kashmir · Tradition indienne · Goût inoubliable', reserve: 'Réserver une table', menu: 'Découvrir la carte',
    features: [['Cuisine généreuse', 'Recettes indiennes et pakistanaises'], ['Cuisson au tandoor', 'Marinades et grillades parfumées'], ['Au cœur de Paris', 'À deux pas de Montparnasse']],
    dishesEyebrow: 'Les signatures', dishesTitle: 'Les saveurs de la maison', dishesIntro: 'Une sélection de plats emblématiques, préparés avec générosité et servis dans le respect des traditions.', speciality: 'Spécialité',
    storyEyebrow: 'L’esprit de la maison', storyTitle: 'Une table chaleureuse, des saveurs qui rassemblent', storyText: `À ${BRAND_NAME}, les épices, les cuissons lentes et le tandoor donnent vie à une cuisine généreuse, pensée pour être partagée.`, storyButton: 'Découvrir notre histoire', storyAlt: `Salle chaleureuse de ${BRAND_NAME}`,
    galleryEyebrow: 'En images', galleryTitle: 'L’atmosphère Vallée du Kashmir', galleryIntro: 'Plats, salle et instants gourmands : découvrez l’univers du restaurant.', galleryButton: 'Voir la galerie',
    ctaEyebrow: 'Paris 14e · Montparnasse', ctaTitle: 'Votre table vous attend', ctaText: 'Venez partager une cuisine indienne et pakistanaise authentique au cœur de Montparnasse.', contact: 'Nous contacter',
  } : {
    eyebrow: 'Colours of', subtitle: 'An authentic culinary experience', line: 'Flavours of Kashmir · Indian tradition · Unforgettable taste', reserve: 'Book a table', menu: 'Discover the menu',
    features: [['Generous cooking', 'Indian and Pakistani recipes'], ['Tandoor cooking', 'Fragrant marinades and grills'], ['In the heart of Paris', 'Steps from Montparnasse']],
    dishesEyebrow: 'Signature dishes', dishesTitle: 'Flavours of the house', dishesIntro: 'A selection of iconic dishes, generously prepared and served with respect for tradition.', speciality: 'Speciality',
    storyEyebrow: 'The spirit of the house', storyTitle: 'A warm table and flavours that bring people together', storyText: `At ${BRAND_NAME}, spices, slow cooking and the tandoor bring generous food designed for sharing to life.`, storyButton: 'Discover our story', storyAlt: `The warm dining room at ${BRAND_NAME}`,
    galleryEyebrow: 'In pictures', galleryTitle: 'The Vallée du Kashmir atmosphere', galleryIntro: 'Food, dining room and memorable moments: discover the restaurant’s world.', galleryButton: 'View the gallery',
    ctaEyebrow: 'Paris 14th · Montparnasse', ctaTitle: 'Your table awaits', ctaText: 'Share authentic Indian and Pakistani cuisine in the heart of Montparnasse.', contact: 'Contact us',
  };
  const featureIcons = [UtensilsCrossed, Flame, MapPin];
  const reveal = { initial: reduceMotion ? false : { opacity: 0, y: 46 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .72, ease: [0.22, 1, 0.36, 1] as const } };

  return <div className="home-v3">
    <section className="home-v3-hero">
      <motion.img className="home-v3-hero-image" src={imagePaths.homeCinematicHero} alt={language === 'fr' ? 'Spécialités indiennes devant un paysage du Kashmir' : 'Indian specialities overlooking a Kashmir landscape'} initial={reduceMotion ? false : { scale: 1.04 }} animate={{ scale: 1 }} transition={{ duration: 14, ease: 'easeOut' }} />
      <div className="home-v3-hero-gradient" />
      <motion.span className="home-v3-glow" aria-hidden="true" animate={reduceMotion ? undefined : { opacity: [.22, .36, .22], x: [0, 18, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} />
      <div className="home-v3-hero-content">
        <motion.p initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .5 }}>{copy.eyebrow}</motion.p>
        <motion.h1 className="notranslate" translate="no" initial={reduceMotion ? false : { opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .68, ease: [0.22, 1, 0.36, 1] }}>{BRAND_NAME}</motion.h1>
        <motion.div className="home-v3-ornament" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, scaleX: .4 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: .7, delay: .92 }}><i />✦<i /></motion.div>
        <motion.h2 initial={reduceMotion ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: 1.02 }}>{copy.subtitle}</motion.h2>
        <motion.p className="home-v3-script" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: 1.16 }}>{copy.line}</motion.p>
        <motion.div className="home-v3-hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: 1.3 }}>
          <motion.div whileHover={reduceMotion ? undefined : { y: -4 }} whileTap={reduceMotion ? undefined : { scale: .98 }}><Link to="/reservation" className="home-v3-button primary">{copy.reserve}<ArrowRight /></Link></motion.div>
          <motion.div whileHover={reduceMotion ? undefined : { y: -4 }} whileTap={reduceMotion ? undefined : { scale: .98 }}><Link to="/carte" className="home-v3-button secondary">{copy.menu}</Link></motion.div>
        </motion.div>
      </div>
    </section>

    <motion.section className="home-v3-features" {...reveal}><div className="home-v3-container">{copy.features.map(([title, text], index) => { const Icon = featureIcons[index]; return <motion.article key={title} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .55, delay: index * .12 }}><Icon /><div><h3>{title}</h3><p>{text}</p></div></motion.article>; })}</div></motion.section>

    <motion.section className="home-v3-section home-v3-dishes" {...reveal}><div className="home-v3-container"><div className="home-v3-heading"><p>{copy.dishesEyebrow}</p><h2>{copy.dishesTitle}</h2><span>{copy.dishesIntro}</span></div><div className="home-v3-dish-grid">{signatureDishes.map(([id, image], index) => { const item = menuItems.find(entry => entry.id === id)!; const name = language === 'fr' ? item.name : item.englishName; return <motion.article key={id} initial={reduceMotion ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .6, delay: index * .1 }} whileHover={reduceMotion ? undefined : { y: -7 }}><ImageWithFallback src={image} alt={name} loading="lazy" /><div><small>{copy.speciality}</small><h3 className="notranslate" translate="no">{name}</h3><p>{language === 'fr' ? item.descriptionFr : item.descriptionEn}</p></div></motion.article>; })}</div></div></motion.section>

    <motion.section className="home-v3-section home-v3-story" {...reveal}><div className="home-v3-container home-v3-story-grid"><motion.div initial={reduceMotion ? false : { opacity: 0, x: -34 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}><p className="home-v3-kicker">{copy.storyEyebrow}</p><h2>{copy.storyTitle}</h2><p>{copy.storyText}</p><Link className="home-v3-text-link" to="/notre-histoire">{copy.storyButton}<ArrowRight /></Link></motion.div><motion.div className="home-v3-story-image" whileHover={reduceMotion ? undefined : { scale: 1.015 }}><ImageWithFallback src={imagePaths.interior01} alt={copy.storyAlt} loading="lazy" /></motion.div></div></motion.section>

    <motion.section className="home-v3-section home-v3-gallery" {...reveal}><div className="home-v3-container"><div className="home-v3-heading"><p>{copy.galleryEyebrow}</p><h2>{copy.galleryTitle}</h2><span>{copy.galleryIntro}</span></div><div className="home-v3-gallery-grid">{galleryItems.slice(0, 6).map((item, index) => <motion.div key={item.src} initial={reduceMotion ? false : { opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .55, delay: index * .08 }} whileHover={reduceMotion ? undefined : { y: -5 }}><ImageWithFallback src={item.src} alt={language === 'fr' ? item.altFr : item.altEn} loading="lazy" /></motion.div>)}</div><Link className="home-v3-button gallery-button" to="/galerie">{copy.galleryButton}<ArrowRight /></Link></div></motion.section>

    <motion.section className="home-v3-cta" {...reveal}><div className="home-v3-container"><Sparkles aria-hidden="true" /><p>{copy.ctaEyebrow}</p><h2>{copy.ctaTitle}</h2><span>{copy.ctaText}</span><div><motion.div whileHover={reduceMotion ? undefined : { y: -4 }} whileTap={reduceMotion ? undefined : { scale: .98 }}><Link to="/reservation" className="home-v3-button primary">{copy.reserve}</Link></motion.div><motion.div whileHover={reduceMotion ? undefined : { y: -4 }} whileTap={reduceMotion ? undefined : { scale: .98 }}><Link to="/contact" className="home-v3-button secondary">{copy.contact}</Link></motion.div></div></div></motion.section>

    <footer className="home-v3-footer"><div className="home-v3-container"><span className="notranslate" translate="no">{BRAND_NAME}</span><a className="notranslate" translate="no" href={restaurant.mapUrl}>{restaurant.address.full}</a><small>© {new Date().getFullYear()} {BRAND_NAME}</small></div></footer>
  </div>;
}
