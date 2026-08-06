import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { galleryItems, type GalleryCategory } from '../data/gallery';
import { DecorativePanel, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

type GalleryFilter = 'all' | GalleryCategory;
const categories: GalleryFilter[] = ['all', 'dishes', 'room', 'atmosphere', 'presentation'];

export default function GalleryPage() {
  const { language } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState<GalleryFilter>('all');
  const copy = language === 'fr' ? {
    labels: { all: 'Toutes', dishes: 'Plats', room: 'Salle', atmosphere: 'Ambiance', presentation: 'Présentation' },
    intro: 'Une galerie volontairement abstraite en attendant la sélection photographique définitive.',
  } : {
    labels: { all: 'All', dishes: 'Dishes', room: 'Dining room', atmosphere: 'Atmosphere', presentation: 'Presentation' },
    intro: 'An intentionally abstract gallery while the final photography selection is prepared.',
  };
  const visible = useMemo(() => galleryItems.filter(item => category === 'all' || item.category === category), [category]);
  return <div className="gallery-page image-free-gallery-page">
    <PageHero eyebrow="Galerie" title="Couleurs, parfums et moments partagés" />
    <section className="section"><div className="container"><p className="gallery-abstract-intro">{copy.intro}</p><div className="gallery-filters">{categories.map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{copy.labels[item]}</button>)}</div><div className="gallery-grid">{visible.map((item, index) => <motion.article key={item.id} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} whileHover={reduceMotion ? undefined : { y: -6 }}><DecorativePanel index={index + 1} label={language === 'fr' ? item.altFr : item.altEn} /><span>{copy.labels[item.category]}</span><h2>{language === 'fr' ? item.altFr : item.altEn}</h2></motion.article>)}</div></div></section>
  </div>;
}
