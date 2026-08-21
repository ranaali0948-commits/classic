import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, Flame, HeartHandshake, MapPin, Sparkles, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND_NAME } from '../data/brand';
import { restaurant } from '../data/restaurant';
import { useLanguage } from '../i18n';

const reveal = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: .18 }, transition: { duration: .7, ease: [0.22, 1, 0.36, 1] as const } };
const features = [{ icon: Sparkles, fr: 'Épices authentiques', en: 'Authentic spices' }, { icon: MapPin, fr: 'Inspiration du Kashmir', en: 'Inspired by Kashmir' }, { icon: UtensilsCrossed, fr: 'Cuisine généreuse', en: 'Generous cuisine' }, { icon: HeartHandshake, fr: 'Viandes halal', en: 'Halal meats' }];
const dishes = [
  { name: 'Butter Chicken', fr: 'Poulet fondant, sauce tomate crémeuse et épices délicates.', en: 'Tender chicken, creamy tomato sauce and delicate spices.', mark: '01' },
  { name: 'Biryani', fr: 'Riz basmati parfumé, épices entières et cuisson lente.', en: 'Fragrant basmati rice, whole spices and slow cooking.', mark: '02' },
  { name: 'Palak Paneer', fr: 'Fromage indien, épinards mijotés et notes de cumin.', en: 'Indian cheese, slow-cooked spinach and notes of cumin.', mark: '03' },
  { name: 'Tandoori Mixed Grill', fr: 'Une sélection généreuse, marinée puis grillée au tandoor.', en: 'A generous selection, marinated then grilled in the tandoor.', mark: '04' },
];

export default function HomePage() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const c = language === 'fr' ? {
    reserve: 'Réserver une table', order: 'Commander en ligne', heroEyebrow: 'Paris 14e · Montparnasse', heroTitle: 'Une table chaleureuse, des saveurs généreuses', heroNote: 'Cuisine indienne & pakistanaise, délicatement épicée et servie avec cœur.',
    dishesKicker: 'Les signatures', dishesTitle: 'Des plats qui racontent une histoire', dishesIntro: 'Tandoor, currys parfumés et recettes de partage composent une carte généreuse, entre traditions indiennes et pakistanaises.', storyKicker: 'L’esprit de la maison', storyTitle: 'Une cuisine de partage, façonnée par la tradition', story: `À ${BRAND_NAME}, les cuissons lentes, le tandoor et les épices composent une cuisine vivante. Chaque service célèbre la générosité et l’hospitalité au cœur de Montparnasse.`, storyLink: 'Découvrir notre histoire',
    galleryKicker: 'L’univers', galleryTitle: 'Une atmosphère à découvrir', galleryIntro: 'Découvrez les gestes, les détails de la salle et les assiettes qui font l’identité de la maison.', galleryLink: 'Voir la galerie', finalKicker: 'Votre table à Montparnasse', finalTitle: 'Venez partager un moment généreux', finalText: 'Réservez votre table ou contactez-nous pour préparer votre visite.', contact: 'Nous contacter', footer: 'Cuisine indienne & pakistanaise · Paris 14e'
  } : {
    reserve: 'Book a table', order: 'Order online', heroEyebrow: 'Paris 14th · Montparnasse', heroTitle: 'A warm table, generous flavours', heroNote: 'Indian & Pakistani cuisine, delicately spiced and served with heart.',
    dishesKicker: 'Signatures', dishesTitle: 'Dishes that tell a story', dishesIntro: 'Tandoor cooking, fragrant curries and recipes made for sharing shape a generous Indian and Pakistani menu.', storyKicker: 'The spirit of the house', storyTitle: 'Food for sharing, shaped by tradition', story: `At ${BRAND_NAME}, slow cooking, the tandoor and fragrant spices create vibrant cuisine. Every service celebrates generosity and hospitality in the heart of Montparnasse.`, storyLink: 'Discover our story',
    galleryKicker: 'The experience', galleryTitle: 'An atmosphere to discover', galleryIntro: 'Discover the craft, dining-room details and dishes that give the restaurant its character.', galleryLink: 'View the gallery', finalKicker: 'Your table in Montparnasse', finalTitle: 'Come and share a generous moment', finalText: 'Book your table or contact us to plan your visit.', contact: 'Contact us', footer: 'Indian & Pakistani cuisine · Paris 14th'
  };
  const motionProps = reduceMotion ? {} : reveal;
  return <div className="home-approval">
    <section className="home-approval-hero home-approval-hero-cinematic">
      <img className="home-approval-hero-photo" src="/images/hero-main.png" alt="" aria-hidden="true" />
      <div className="home-approval-hero-shade" aria-hidden="true" />
      <motion.div className="home-approval-hero-copy-cinematic" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .28 }}>
        <p className="home-approval-kicker">{c.heroEyebrow}</p><h1>{c.heroTitle}</h1><p>{c.heroNote}</p>
      </motion.div>
      <div className="home-approval-hero-ctas"><motion.div className="home-approval-hero-cta-buttons" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .55 }}>
        <Link className="home-approval-button is-gold" to="/commander">{c.order}</Link>
        <Link className="home-approval-button is-outline" to="/reservation">{c.reserve}</Link>
      </motion.div></div>
      <a className="home-approval-scroll-cue" href="#signature-dishes" aria-label={language === 'fr' ? 'Découvrir la suite' : 'Explore the page'}><span /><ArrowDown /></a>
    </section>

    <motion.section className="home-approval-features" {...motionProps}><div className="home-approval-container">{features.map(({ icon: Icon, ...item }, index) => <motion.article key={item.fr} initial={reduceMotion ? false : { opacity: 0, y: 18, scale: .96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .09 }}><Icon /><span>{item[language]}</span></motion.article>)}</div></motion.section>

    <motion.section id="signature-dishes" className="home-approval-section home-approval-dishes" {...motionProps}><div className="home-approval-container"><div className="home-approval-heading"><p className="home-approval-kicker">{c.dishesKicker}</p><h2>{c.dishesTitle}</h2><p>{c.dishesIntro}</p></div><div className="home-approval-dish-grid">{dishes.map((dish, index) => <motion.article key={dish.name} initial={reduceMotion ? false : { opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={reduceMotion ? undefined : { y: -8 }}><div className="home-approval-dish-visual"><span>{dish.mark}</span><div><Flame /></div></div><div className="home-approval-dish-copy"><small>{language === 'fr' ? 'Spécialité de la maison' : 'House speciality'}</small><h3 className="notranslate" translate="no">{dish.name}</h3><p>{dish[language]}</p></div></motion.article>)}</div></div></motion.section>

    <section className="home-approval-section home-approval-story"><div className="home-approval-container home-approval-story-grid"><motion.div initial={reduceMotion ? false : { opacity: 0, x: -38 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}><p className="home-approval-kicker">{c.storyKicker}</p><h2>{c.storyTitle}</h2><p>{c.story}</p><Link className="home-approval-text-link" to="/notre-histoire">{c.storyLink}<ArrowRight /></Link></motion.div><motion.div className="home-approval-story-art" initial={reduceMotion ? false : { opacity: 0, x: 38 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .75 }}><div className="home-approval-story-arch"><span>✦</span><i /><i /><i /></div></motion.div></div></section>

    <motion.section className="home-approval-section home-approval-gallery" {...motionProps}><div className="home-approval-container"><div className="home-approval-heading"><p className="home-approval-kicker">{c.galleryKicker}</p><h2>{c.galleryTitle}</h2><p>{c.galleryIntro}</p></div><div className="home-approval-mosaic">{['01','02','03','04','05'].map((item, index) => <motion.div key={item} className={`tile-${index + 1}`} initial={reduceMotion ? false : { opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * .09 }} whileHover={reduceMotion ? undefined : { scale: 1.018 }}><span>{item}</span><i>✦</i></motion.div>)}</div><Link className="home-approval-text-link" to="/galerie">{c.galleryLink}<ArrowRight /></Link></div></motion.section>

    <motion.section className="home-approval-final" initial={reduceMotion ? false : { opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}><div className="home-approval-container"><p className="home-approval-kicker">{c.finalKicker}</p><h2>{c.finalTitle}</h2><p>{c.finalText}</p><div className="home-approval-actions"><Link className="home-approval-button is-gold" to="/reservation">{c.reserve}</Link><Link className="home-approval-button is-cream" to="/contact">{c.contact}</Link></div></div></motion.section>

    <footer className="home-approval-footer"><div className="home-approval-container"><div><strong className="notranslate" translate="no">{BRAND_NAME}</strong><span>{c.footer}</span></div><div><a className="notranslate" translate="no" href={restaurant.mapUrl}>{restaurant.address.full}</a><a className="notranslate" translate="no" href={restaurant.phone.href}>{restaurant.phone.display}</a></div><small>© {new Date().getFullYear()} <span className="notranslate" translate="no">{BRAND_NAME}</span></small></div></footer>
  </div>;
}
