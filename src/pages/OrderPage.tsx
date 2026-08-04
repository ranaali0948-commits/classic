import { Bike, ShoppingBag } from 'lucide-react';
import { restaurant, imagePaths } from '../data/restaurant';
import { BRAND_NAME } from '../data/brand';
import { ButtonLink, PageHero } from '../components/ui';

export default function OrderPage() { return <><PageHero eyebrow="Commander" title="Vos plats préférés, où vous voulez" text={`Découvrez le futur parcours de commande de ${BRAND_NAME}. Le service définitif sera connecté lors de la mise en ligne.`} image={imagePaths.biryani} /><section className="section"><div className="container service-grid"><article><ShoppingBag /><p className="section-label">Sur place</p><h2>Click & Collect</h2><p>Commandez en ligne et retirez votre commande au restaurant.</p><ButtonLink to={restaurant.orderUrl}>Commander maintenant</ButtonLink><small>Redirection temporaire vers le site actuel.</small></article><article><Bike /><p className="section-label">Chez vous</p><h2>Livraison</h2><p>Faites-vous livrer les spécialités de {BRAND_NAME}.</p><ButtonLink to={restaurant.orderUrl}>Commander maintenant</ButtonLink><small>Redirection temporaire vers le site actuel.</small></article></div></section></>; }
