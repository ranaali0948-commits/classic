import { Flame, HeartHandshake, Leaf } from 'lucide-react';
import { imagePaths } from '../data/restaurant';
import { BRAND_NAME } from '../data/brand';
import { ButtonLink, ImageWithFallback, PageHero, SectionHeading } from '../components/ui';
import { useLanguage } from '../i18n';

export default function StoryPage() {
  const { language } = useLanguage();
  const copy = language === 'fr' ? {
    spiritEyebrow: 'L’esprit de la maison', spiritTitle: 'Le goût du voyage, l’accueil de quartier',
    spiritOne: `Dans le 14e arrondissement, ${BRAND_NAME} propose une expérience détendue et colorée, pensée aussi bien pour les familles que pour les couples, les visiteurs de passage et les habitués du quartier.`,
    spiritTwo: 'Notre cuisine met en valeur les épices, les cuissons lentes et le tandoor, avec des plats conçus pour être partagés et découverts ensemble.',
    roomAlt: `Salle accueillante de ${BRAND_NAME}`,
    valuesEyebrow: 'Nos valeurs', valuesTitle: 'Une hospitalité sincère',
    values: [['Recevoir avec générosité', 'Créer un moment chaleureux autour d’une table ouverte à tous.'], ['Respecter les gestes', 'Marinades, épices et cuisson au tandoor composent une cuisine expressive.'], ['Offrir du choix', 'Des plats végétariens et véganes pour que chacun trouve son plaisir.']],
    foodEyebrow: 'Notre cuisine', foodTitle: 'Des parfums, des textures, du caractère',
    foodOne: 'Currys onctueux, grillades tandoori, biryanis parfumés et pains Naan racontent plusieurs traditions culinaires complémentaires.',
    foodTwo: 'Chaque assiette est pensée pour réunir les convives autour de recettes généreuses, d’épices équilibrées et de cuissons pleines de caractère.',
    biryaniAlt: 'Biryani maison parfumé', reserve: 'Réserver une table',
  } : {
    spiritEyebrow: 'The spirit of the house', spiritTitle: 'Flavours of travel, neighbourhood hospitality',
    spiritOne: `In Paris’s 14th arrondissement, ${BRAND_NAME} offers a relaxed and colourful experience for families, couples, visitors and neighbourhood regulars alike.`,
    spiritTwo: 'Our cooking celebrates spices, slow cooking and the tandoor, with dishes designed to be shared and discovered together.',
    roomAlt: `The welcoming dining room at ${BRAND_NAME}`,
    valuesEyebrow: 'Our values', valuesTitle: 'Genuine hospitality',
    values: [['A generous welcome', 'Creating a warm moment around a table that is open to everyone.'], ['Respecting the craft', 'Marinades, spices and tandoor cooking shape expressive dishes.'], ['Offering choice', 'Vegetarian and vegan dishes so everyone can find something to enjoy.']],
    foodEyebrow: 'Our cuisine', foodTitle: 'Aromas, textures and character',
    foodOne: 'Creamy curries, tandoori grills, fragrant Biryanis and Naan bring together complementary culinary traditions.',
    foodTwo: 'Every plate is designed to bring people together around generous recipes, balanced spices and characterful cooking.',
    biryaniAlt: 'Fragrant house Biryani', reserve: 'Book a table',
  };
  const icons = [HeartHandshake, Flame, Leaf];

  return <div className="story-page">
    <PageHero eyebrow="Notre histoire" title="Une cuisine de partage, vivante et généreuse" image={imagePaths.interior01} />
    <section className="section"><div className="container editorial-grid"><div><SectionHeading align="left" eyebrow={copy.spiritEyebrow} title={copy.spiritTitle} /><p>{copy.spiritOne}</p><p>{copy.spiritTwo}</p></div><ImageWithFallback src={imagePaths.diningRoom} alt={copy.roomAlt} loading="lazy" /></div></section>
    <section className="section section-tinted"><div className="container"><SectionHeading eyebrow={copy.valuesEyebrow} title={copy.valuesTitle} /><div className="value-grid">{copy.values.map(([title, text], index) => { const Icon = icons[index]; return <article key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>; })}</div></div></section>
    <section className="section"><div className="container editorial-grid reverse"><ImageWithFallback src={imagePaths.biryani} alt={copy.biryaniAlt} loading="lazy" /><div><SectionHeading align="left" eyebrow={copy.foodEyebrow} title={copy.foodTitle} /><p>{copy.foodOne}</p><p>{copy.foodTwo}</p><ButtonLink to="/reservation">{copy.reserve}</ButtonLink></div></div></section>
  </div>;
}
