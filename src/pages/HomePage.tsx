import { MapPin, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imagePaths, restaurant } from '../data/restaurant';
import { Benefits, FinalCta, GalleryPreview, HomeMenuPreview, HomeStory, ReviewsSection, SignatureDishes, VisitSection } from '../components/Sections';
import { ButtonLink, ImageWithFallback } from '../components/ui';

export default function HomePage() { return <>
  <section className="home-hero"><div className="container hero-grid"><div className="hero-content"><p className="section-label"><MapPin size={16} /> Paris 14e · Montparnasse</p><h1>Un voyage au cœur des saveurs du Kashmir</h1><p className="hero-copy">Découvrez une cuisine indienne et pakistanaise authentique, généreuse et parfumée, à quelques pas de la gare Montparnasse.</p><div className="hero-actions"><ButtonLink to="/reservation">Réserver une table</ButtonLink><ButtonLink to="/carte" variant="secondary">Voir la carte</ButtonLink><Link className="btn btn-order" to="/commander"><ShoppingBag size={18} /> Commander en ligne</Link></div><div className="trust-row"><span><Star fill="currentColor" /> {restaurant.rating.score}/5 sur Google</span><span>Environ 1 900 avis</span><span>Options végétariennes et véganes</span></div></div><div className="hero-visual"><ImageWithFallback src={imagePaths.hero} alt="Table de spécialités indiennes et pakistanaises" /><span className="hero-image-frame" aria-hidden="true" /></div></div></section>
  <Benefits /><SignatureDishes /><HomeMenuPreview /><HomeStory /><GalleryPreview /><ReviewsSection /><VisitSection /><FinalCta />
</>; }
