import { useState } from 'react';
import { CalendarDays, Phone } from 'lucide-react';
import { restaurant, imagePaths } from '../data/restaurant';
import { ButtonLink, DemoSubmitButton, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

export default function ReservationPage() {
  const [message, setMessage] = useState(false);
  const { language } = useLanguage();
  const copy = language === 'fr' ? {
    direct: 'Réserver directement', directText: 'Choisissez la réservation en ligne ou contactez directement le restaurant.', online: 'Réserver en ligne', request: 'Demande de réservation',
    name: 'Nom', phone: 'Téléphone', email: 'E-mail', date: 'Date', time: 'Heure', guests: 'Nombre de personnes', special: 'Demande particulière', submit: 'Envoyer la demande', status: 'Pour une confirmation immédiate, veuillez utiliser la réservation en ligne ou appeler le restaurant.',
  } : {
    direct: 'Book directly', directText: 'Choose online booking or contact the restaurant directly.', online: 'Book online', request: 'Booking request',
    name: 'Name', phone: 'Phone', email: 'Email', date: 'Date', time: 'Time', guests: 'Number of guests', special: 'Special request', submit: 'Send request', status: 'For immediate confirmation, please use online booking or call the restaurant.',
  };
  return <><PageHero eyebrow="Réservation" title="Préparez votre visite" image={imagePaths.interior02} /><section className="section"><div className="container reservation-grid"><aside><h2>{copy.direct}</h2><p>{copy.directText}</p><ButtonLink to={restaurant.reservationUrl}><CalendarDays /> {copy.online}</ButtonLink><ButtonLink to={restaurant.phone.href} variant="secondary"><Phone /> <span className="notranslate" translate="no">{restaurant.phone.display}</span></ButtonLink></aside><form className="form-card" onSubmit={event => { event.preventDefault(); setMessage(true); }}><h2>{copy.request}</h2><div className="form-grid"><label>{copy.name}<input required name="name" autoComplete="name" /></label><label>{copy.phone}<input required name="phone" type="tel" autoComplete="tel" /></label><label>{copy.email}<input required name="email" type="email" autoComplete="email" /></label><label>{copy.date}<input required name="date" type="date" /></label><label>{copy.time}<input required name="time" type="time" /></label><label>{copy.guests}<select name="guests" defaultValue="2">{[1,2,3,4,5,6,7,8].map(value => <option key={value}>{value}</option>)}</select></label><label className="full-field">{copy.special}<textarea name="request" rows={4} /></label></div><DemoSubmitButton>{copy.submit}</DemoSubmitButton>{message && <p className="demo-message" role="status">{copy.status}</p>}</form></div></section></>;
}
