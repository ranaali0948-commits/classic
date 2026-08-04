import { Bike, ShoppingBag } from 'lucide-react';
import { restaurant, imagePaths } from '../data/restaurant';
import { ButtonLink, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

export default function OrderPage() {
  const { language } = useLanguage();
  const copy = language === 'fr' ? {
    pickupLabel: 'Sur place', pickupTitle: 'Click & Collect', pickupText: 'Commandez en ligne et récupérez votre commande directement au restaurant.', pickupButton: 'Commander maintenant',
    deliveryLabel: 'Chez vous', deliveryTitle: 'Livraison', deliveryText: 'Commandez vos plats préférés et faites-vous livrer à l’adresse de votre choix.', deliveryButton: 'Se faire livrer',
  } : {
    pickupLabel: 'At the restaurant', pickupTitle: 'Click & Collect', pickupText: 'Order online and collect your meal directly from the restaurant.', pickupButton: 'Order now',
    deliveryLabel: 'At home', deliveryTitle: 'Delivery', deliveryText: 'Order your favourite dishes and have them delivered to your address.', deliveryButton: 'Get delivery',
  };
  return <><PageHero eyebrow="Commander" title="Vos plats préférés, où vous voulez" image={imagePaths.biryani} /><section className="section"><div className="container service-grid"><article><ShoppingBag /><p className="section-label">{copy.pickupLabel}</p><h2>{copy.pickupTitle}</h2><p>{copy.pickupText}</p><ButtonLink to={restaurant.orderUrl}>{copy.pickupButton}</ButtonLink></article><article><Bike /><p className="section-label">{copy.deliveryLabel}</p><h2>{copy.deliveryTitle}</h2><p>{copy.deliveryText}</p><ButtonLink to={restaurant.orderUrl}>{copy.deliveryButton}</ButtonLink></article></div></section></>;
}
