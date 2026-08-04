import { ArrowDown, MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imagePaths, restaurant } from '../data/restaurant';
import { Benefits, FinalCta, GalleryPreview, ReviewsSection, SignatureDishes, VisitSection } from '../components/Sections';
import { ButtonLink, ImageWithFallback, SectionHeading } from '../components/ui';

export default function HomePage() { return <>
  <section className="home-hero"><ImageWithFallback src={imagePaths.hero} alt="Table de spécialités indiennes et pakistanaises" /><div className="hero-shade" /><div className="container hero-content"><p className="section-label"><MapPin size={14} /> Paris 14e · Montparnasse</p><h1>Un voyage au cœur des saveurs du Kashmir</h1><p className="hero-copy">Découvrez une cuisine indienne et pakistanaise authentique, généreuse et parfumée, au cœur du quartier Montparnasse.</p><div className="button-row"><ButtonLink to="/reservation">Réserver une table</ButtonLink><ButtonLink to="/carte" variant="secondary">Découvrir la carte</ButtonLink></div><Link className="order-link" to="/commander">Commander en ligne</Link><div className="trust-row"><span><Star fill="currentColor" /> {restaurant.rating.score}/5 sur Google</span><span>{restaurant.rating.reviews}</span><span>Options végétariennes et véganes</span></div></div><a href="#bienvenue" className="scroll-cue" aria-label="Découvrir la suite"><ArrowDown /></a></section>
  <section id="bienvenue" className="section intro-section"><div className="container intro-grid"><SectionHeading align="left" eyebrow="Bienvenue" title="L’Inde et le Pakistan au cœur de Paris" /><div><p>À quelques pas de la gare Montparnasse, Vallée du Kashmir vous accueille dans une atmosphère chaleureuse et colorée. Notre carte réunit currys parfumés, grillades tandoori, biryanis, pains naan et spécialités végétariennes.</p><Link className="text-link" to="/notre-histoire">Découvrir notre histoire <span>→</span></Link></div></div></section>
  <SignatureDishes /><Benefits /><GalleryPreview /><ReviewsSection /><VisitSection /><FinalCta />
</>; }
