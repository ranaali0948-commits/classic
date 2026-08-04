import { useState } from 'react';
import { Clock3, MapPin, Phone } from 'lucide-react';
import { restaurant } from '../data/restaurant';
import { ButtonLink, DemoSubmitButton, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

const mapEmbedUrl = "https://www.google.com/maps?q=10+Rue+d%27Odessa,+75014+Paris&output=embed";

export default function ContactPage() {
  const [message, setMessage] = useState(false);
  const { language } = useLanguage();
  const copy = language === 'fr' ? {
    route: 'Itinéraire', call: 'Appeler', reserve: 'Réserver une table', phone: 'Téléphone', hoursNote: 'Horaires hebdomadaires à confirmer.',
    mapTitle: 'Carte Google Maps de Vallée du Kashmir, 10 Rue d’Odessa, Paris 14e', mapFallback: 'Ouvrir l’itinéraire dans Google Maps',
    formEyebrow: 'Nous contacter', formTitle: 'Écrivez-nous', formText: 'Une question concernant votre visite, une réservation de groupe ou un événement ? Envoyez-nous un message.',
    name: 'Nom', email: 'E-mail', subject: 'Sujet', message: 'Message', send: 'Envoyer le message',
    notice: 'Le formulaire sera connecté lors de la mise en ligne définitive. Pour une demande immédiate, veuillez appeler le restaurant.',
    summary: 'Pour une réponse immédiate', summaryText: 'Notre équipe est joignable directement par téléphone.',
    finalTitle: 'Une table vous attend à Montparnasse', order: 'Commander en ligne',
  } : {
    route: 'Directions', call: 'Call', reserve: 'Book a table', phone: 'Telephone', hoursNote: 'Weekly opening hours to be confirmed.',
    mapTitle: 'Google Map of Vallée du Kashmir, 10 Rue d’Odessa, Paris 14th', mapFallback: 'Open directions in Google Maps',
    formEyebrow: 'Contact us', formTitle: 'Write to us', formText: 'A question about your visit, a group booking or an event? Send us a message.',
    name: 'Name', email: 'Email', subject: 'Subject', message: 'Message', send: 'Send message',
    notice: 'The form will be connected when the final website goes live. For an immediate request, please call the restaurant.',
    summary: 'For an immediate answer', summaryText: 'Our team can be reached directly by telephone.',
    finalTitle: 'A table awaits you in Montparnasse', order: 'Order online',
  };

  return <div className="contact-page">
    <PageHero eyebrow="Contact" title="Nous trouver" />
    <section className="contact-location-section"><div className="container contact-location-grid">
      <article className="contact-location-panel"><p className="section-label">{restaurant.name}</p><h2>{restaurant.name}</h2><div className="contact-detail"><MapPin /><p>{restaurant.address.street}<br />{restaurant.address.postalCode} {restaurant.address.city}</p></div><div className="contact-detail"><Phone /><p><strong>{copy.phone}</strong><a href={restaurant.phone.href}>{restaurant.phone.display}</a></p></div><div className="contact-detail"><Clock3 /><div>{restaurant.hours.map(hour => <p key={hour}>{hour}</p>)}<small>{copy.hoursNote}</small></div></div><div className="contact-location-actions"><ButtonLink to={restaurant.mapUrl}>{copy.route}</ButtonLink><ButtonLink to={restaurant.phone.href} variant="secondary">{copy.call}</ButtonLink><ButtonLink to="/reservation" variant="secondary">{copy.reserve}</ButtonLink></div></article>
      <div className="contact-map"><iframe src={mapEmbedUrl} title={copy.mapTitle} width="100%" height="500" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /><a href={restaurant.mapUrl} target="_blank" rel="noreferrer">{copy.mapFallback} →</a></div>
    </div></section>
    <section className="contact-form-section"><div className="container contact-form-layout"><div className="contact-form-intro"><p className="section-label">{copy.formEyebrow}</p><h2>{copy.formTitle}</h2><p>{copy.formText}</p><div><strong>{copy.summary}</strong><p>{copy.summaryText}</p><a href={restaurant.phone.href}>{restaurant.phone.display}</a></div></div><form className="form-card contact-form" onSubmit={event => { event.preventDefault(); setMessage(true); }}><label>{copy.name}<input required name="name" autoComplete="name" /></label><label>{copy.email}<input required name="email" type="email" autoComplete="email" /></label><label>{copy.phone}<input name="phone" type="tel" autoComplete="tel" /></label><label>{copy.subject}<input required name="subject" /></label><label className="full-field">{copy.message}<textarea required name="message" rows={6} /></label><DemoSubmitButton>{copy.send}</DemoSubmitButton>{message && <p className="demo-message" role="status">{copy.notice}</p>}</form></div></section>
    <section className="inline-cta contact-final-cta"><div className="container"><h2>{copy.finalTitle}</h2><div className="button-row"><ButtonLink to="/reservation">{copy.reserve}</ButtonLink><ButtonLink to="/commander" variant="secondary">{copy.order}</ButtonLink></div></div></section>
  </div>;
}
