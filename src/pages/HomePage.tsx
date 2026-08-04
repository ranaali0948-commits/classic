import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imagePaths } from '../data/restaurant';
import { FinalCta, GalleryPreview, HomeMenuPreview, HomeStory, ReviewsSection, SignatureDishes, VisitSection } from '../components/Sections';
import { ButtonLink, ImageWithFallback } from '../components/ui';

export default function HomePage() { return <>
  <section className="home-hero"><ImageWithFallback src={imagePaths.hero} alt="Table de spécialités indiennes et pakistanaises" /><div className="hero-photo-shade" /><div className="container hero-overlay-wrap"><div className="hero-overlay-panel"><span className="hero-ornament" aria-hidden="true" /><p className="section-label"><MapPin size={15} /> Paris 14e · Montparnasse</p><h1>Vallée du Kashmir</h1><p className="hero-subtitle">Cuisine indienne & pakistanaise · Paris 14e</p><p className="hero-copy">Saveurs authentiques, grillades tandoori, currys parfumés et spécialités végétariennes au cœur de Montparnasse.</p></div><div className="hero-floating-ctas"><ButtonLink to="/reservation">Réserver une table</ButtonLink><ButtonLink to="/carte" variant="secondary">Voir la carte</ButtonLink><Link className="hero-order-link" to="/commander">Commander en ligne <span>→</span></Link></div></div></section>
  <SignatureDishes /><HomeMenuPreview /><HomeStory /><GalleryPreview /><ReviewsSection /><VisitSection /><FinalCta />
</>; }
