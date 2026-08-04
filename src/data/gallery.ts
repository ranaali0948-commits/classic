import { imagePaths } from './restaurant';

export type GalleryCategory = 'dishes' | 'room' | 'atmosphere' | 'presentation';
export const galleryItems = [
  { src: imagePaths.galleryFacade, altFr: 'Façade illuminée de Vallée du Kashmir', altEn: 'The illuminated Vallée du Kashmir storefront', category: 'atmosphere' as const },
  { src: imagePaths.gallerySpread, altFr: 'Grand assortiment de spécialités de la maison', altEn: 'A generous spread of house specialities', category: 'dishes' as const },
  { src: imagePaths.galleryRoom, altFr: 'Salle colorée dressée pour le service', altEn: 'The colourful dining room set for service', category: 'room' as const },
  { src: imagePaths.galleryPrawns, altFr: 'Crevettes grillées accompagnées de sauces maison', altEn: 'Grilled prawns served with house sauces', category: 'dishes' as const },
  { src: imagePaths.galleryThali, altFr: 'Thali généreux au riz basmati', altEn: 'A generous thali with basmati rice', category: 'presentation' as const },
  { src: imagePaths.galleryKebab, altFr: 'Brochettes grillées et garniture fraîche', altEn: 'Grilled kebabs with a fresh garnish', category: 'dishes' as const },
  { src: imagePaths.galleryDal, altFr: 'Plat mijoté servi avec ses sauces', altEn: 'A slow-cooked dish served with sauces', category: 'presentation' as const },
  { src: imagePaths.galleryExterior, altFr: 'Entrée du restaurant à Montparnasse', altEn: 'The restaurant entrance in Montparnasse', category: 'atmosphere' as const },
  { src: imagePaths.galleryDessert, altFr: 'Assortiment glacé et gourmand', altEn: 'A colourful frozen dessert selection', category: 'presentation' as const },
];
