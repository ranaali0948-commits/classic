import { Clock3, Flame, Leaf, MapPin, Phone, Star, UtensilsCrossed } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { restaurant, imagePaths } from '../data/restaurant';
import { reviews } from '../data/reviews';
import { ButtonLink, ImageWithFallback, SectionHeading } from './ui';

const dishes = [
  ['Poulet Tikka', 'Poulet mariné aux épices et saisi au tandoor.', imagePaths.tikka, 'Sans gluten'],
  ['Butter Chicken', 'Poulet tendre, sauce tomate onctueuse et épices douces.', imagePaths.butterChicken, 'Douceur parfumée'],
  ['Agneau Rogan Josh', 'Agneau mijoté et sauce généreuse aux épices du Kashmir.', imagePaths.roganJosh, 'Relevé'],
  ['Biryani Maison', 'Riz basmati parfumé et délicatement épicé.', imagePaths.biryani, 'Maison'],
  ['Mixed Grill Tandoori', 'Un assortiment convivial de grillades au tandoor.', imagePaths.mixedGrill, 'À partager'],
  ['Palak Paneer', 'Fromage indien et épinards dans une sauce aromatique.', imagePaths.palakPaneer, 'Végétarien'],
];

export function SignatureDishes() { return <section className="section"><div className="container"><SectionHeading eyebrow="Les incontournables" title="Les saveurs de la maison" intro="Une première sélection pour découvrir la diversité de notre cuisine. La carte complète et ses prix seront intégrés après validation." /><div className="dish-grid">{dishes.map(([name, description, image, badge]) => <article className="dish-card" key={name}><ImageWithFallback src={image} alt={name} loading="lazy" /><div><span className="badge">{badge}</span><h3>{name}</h3><p>{description}</p></div></article>)}</div><div className="center-action"><ButtonLink to="/carte" variant="secondary">Voir toute la carte</ButtonLink></div></div></section>; }

export function Benefits() { const values = [[UtensilsCrossed, 'Cuisine authentique', 'Des recettes indiennes et pakistanaises généreuses et parfumées.'], [Flame, 'Cuisson au tandoor', 'Des marinades travaillées et une cuisson vive dans le four traditionnel.'], [Leaf, 'Choix végétariens et véganes', 'Des options variées, clairement indiquées pour vous guider.']]; return <section className="section section-tinted"><div className="container value-grid">{values.map(([Icon, title, text]) => { const ValueIcon = Icon as typeof Flame; return <article key={String(title)}><ValueIcon /><h3>{String(title)}</h3><p>{String(text)}</p></article>; })}</div></section>; }

export function GalleryPreview() { return <section className="section"><div className="container"><SectionHeading eyebrow="En images" title="Une atmosphère chaleureuse" /><div className="gallery-preview">{galleryItems.slice(0, 5).map((item, index) => <ImageWithFallback key={item.src} src={item.src} alt={item.alt} loading="lazy" className={`gallery-${index + 1}`} />)}</div><div className="center-action"><ButtonLink to="/galerie" variant="secondary">Voir la galerie</ButtonLink></div></div></section>; }

export function ReviewsSection() { return <section className="section section-tinted"><div className="container"><SectionHeading eyebrow="Vos expériences" title="Noté 4,5/5 par nos clients sur Google" intro="Une note publique basée sur environ 1 900 avis Google." /><div className="review-grid">{reviews.map(review => <blockquote key={review.text}><div className="stars" aria-label="5 étoiles"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div><p>« {review.text} »</p><cite>{review.source}</cite></blockquote>)}</div></div></section>; }

export function VisitSection() { return <section className="section"><div className="container visit-grid"><div><SectionHeading align="left" eyebrow="Paris 14e" title="À deux pas de Montparnasse" intro="Retrouvez-nous rue d’Odessa pour un déjeuner, un dîner ou un moment à partager." /><div className="contact-lines"><a href={restaurant.mapUrl} target="_blank" rel="noreferrer"><MapPin />{restaurant.address.street}<br />{restaurant.address.postalCode} {restaurant.address.city}</a><a href={restaurant.phone.href}><Phone />{restaurant.phone.display}</a></div><div className="button-row"><ButtonLink to={restaurant.mapUrl} variant="secondary">Itinéraire</ButtonLink><ButtonLink to={restaurant.phone.href} variant="secondary">Appeler</ButtonLink><ButtonLink to="/reservation">Réserver</ButtonLink></div></div><aside className="hours-card"><Clock3 /><p className="section-label">Horaires de service</p>{restaurant.hours.map(hour => <strong key={hour}>{hour}</strong>)}<small>Horaires détaillés à confirmer.</small></aside></div></section>; }

export function FinalCta() { return <section className="final-cta"><div className="container"><p className="section-label">Vallée du Kashmir</p><h2>Une table vous attend à Montparnasse</h2><div className="button-row"><ButtonLink to="/reservation">Réserver une table</ButtonLink><ButtonLink to="/commander" variant="secondary">Commander en ligne</ButtonLink></div></div></section>; }
