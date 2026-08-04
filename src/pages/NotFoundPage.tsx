import { ButtonLink } from '../components/ui';
export default function NotFoundPage() { return <section className="not-found"><div><p className="section-label">Erreur 404</p><h1>Cette page n’est pas au menu</h1><p>Le lien demandé n’existe pas ou a été déplacé.</p><ButtonLink to="/">Retour à l’accueil</ButtonLink></div></section>; }
