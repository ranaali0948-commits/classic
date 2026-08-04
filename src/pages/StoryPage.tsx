import { Flame, HeartHandshake, Leaf } from 'lucide-react';
import { imagePaths } from '../data/restaurant';
import { BRAND_NAME } from '../data/brand';
import { ButtonLink, ImageWithFallback, PageHero, SectionHeading } from '../components/ui';

export default function StoryPage() {
  return <div className="story-page">
    <PageHero eyebrow="Notre histoire" title="Une cuisine de partage, vivante et généreuse" text="Une adresse parisienne où les traditions culinaires indiennes et pakistanaises se rencontrent autour d’une même table." image={imagePaths.interior01} />
    <section className="section"><div className="container editorial-grid"><div><SectionHeading align="left" eyebrow="L’esprit de la maison" title="Le goût du voyage, l’accueil de quartier" /><p>Dans le 14e arrondissement, {BRAND_NAME} propose une expérience détendue et colorée, pensée aussi bien pour les familles que pour les couples, les visiteurs de passage et les habitués du quartier.</p><p>Notre cuisine met en valeur les épices, les cuissons lentes et le tandoor, avec des plats conçus pour être partagés et découverts ensemble.</p></div><ImageWithFallback src={imagePaths.diningRoom} alt={`Salle accueillante de ${BRAND_NAME}`} loading="lazy" /></div></section>
    <section className="section section-tinted"><div className="container"><SectionHeading eyebrow="Nos valeurs" title="Une hospitalité sincère" /><div className="value-grid"><article><HeartHandshake /><h3>Recevoir avec générosité</h3><p>Créer un moment chaleureux autour d’une table ouverte à tous.</p></article><article><Flame /><h3>Respecter les gestes</h3><p>Marinades, épices et cuisson au tandoor composent une cuisine expressive.</p></article><article><Leaf /><h3>Offrir du choix</h3><p>Des plats végétariens et véganes pour que chacun trouve son plaisir.</p></article></div></div></section>
    <section className="section"><div className="container editorial-grid reverse"><ImageWithFallback src={imagePaths.biryani} alt="Biryani maison parfumé" loading="lazy" /><div><SectionHeading align="left" eyebrow="Notre cuisine" title="Des parfums, des textures, du caractère" /><p>Currys onctueux, grillades tandoori, biryanis parfumés et pains naan racontent plusieurs traditions culinaires complémentaires.</p><p>Cette page a été structurée pour accueillir plus tard le véritable récit du propriétaire, sans inventer de date, de nom ou de distinction.</p><ButtonLink to="/reservation">Réserver une table</ButtonLink></div></div></section>
  </div>;
}
