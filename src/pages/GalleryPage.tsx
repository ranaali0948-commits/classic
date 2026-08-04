import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryItems, type GalleryCategory } from '../data/gallery';
import { imagePaths } from '../data/restaurant';
import { ImageWithFallback, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

type GalleryFilter = 'all' | GalleryCategory;
const categories: GalleryFilter[] = ['all', 'dishes', 'room', 'atmosphere', 'presentation'];

export default function GalleryPage() {
  const { language } = useLanguage();
  const [category, setCategory] = useState<GalleryFilter>('all');
  const [selected, setSelected] = useState<number | null>(null);
  const copy = language === 'fr' ? {
    labels: { all: 'Toutes', dishes: 'Plats', room: 'Salle', atmosphere: 'Ambiance', presentation: 'Présentation' },
    enlarge: 'Agrandir', viewer: 'Visionneuse d’images', close: 'Fermer', previous: 'Image précédente', next: 'Image suivante', fallback: 'Photo du restaurant à intégrer',
  } : {
    labels: { all: 'All', dishes: 'Dishes', room: 'Dining room', atmosphere: 'Atmosphere', presentation: 'Presentation' },
    enlarge: 'Enlarge', viewer: 'Image viewer', close: 'Close', previous: 'Previous image', next: 'Next image', fallback: 'Restaurant photo to be added',
  };
  const visible = useMemo(() => galleryItems.filter(item => category === 'all' || item.category === category), [category]);
  const alt = (item: (typeof galleryItems)[number]) => language === 'fr' ? item.altFr : item.altEn;
  const close = () => setSelected(null);
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + visible.length) % visible.length);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };
    document.body.style.overflow = selected === null ? '' : 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  });

  return <div className="gallery-page">
    <PageHero eyebrow="Galerie" title="Couleurs, parfums et moments partagés" image={imagePaths.diningRoom} />
    <section className="section"><div className="container">
      <div className="gallery-filters">{categories.map(item => <button key={item} className={category === item ? 'active' : ''} onClick={() => { setCategory(item); setSelected(null); }}>{copy.labels[item]}</button>)}</div>
      <div className="gallery-grid">{visible.map((item, index) => <button key={item.src} onClick={() => setSelected(index)} aria-label={`${copy.enlarge} : ${alt(item)}`}>
        <ImageWithFallback src={item.src} alt={alt(item)} loading="lazy" fallbackLabel={copy.fallback} className={item.src === imagePaths.gallerySpread ? 'gallery-food-spread' : ''} />
        <span>{copy.labels[item.category]}</span>
      </button>)}</div>
    </div></section>
    {selected !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={copy.viewer} onClick={close}>
      <button className="lightbox-close" onClick={close} aria-label={copy.close}><X /></button>
      <button className="lightbox-prev" onClick={event => { event.stopPropagation(); move(-1); }} aria-label={copy.previous}><ChevronLeft /></button>
      <ImageWithFallback src={visible[selected].src} alt={alt(visible[selected])} fallbackLabel={copy.fallback} onClick={event => event.stopPropagation()} />
      <button className="lightbox-next" onClick={event => { event.stopPropagation(); move(1); }} aria-label={copy.next}><ChevronRight /></button>
      <p>{alt(visible[selected])}</p>
    </div>}
  </div>;
}
