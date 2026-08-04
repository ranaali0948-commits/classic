import { imagePaths } from './restaurant';

export type GalleryCategory = 'dishes' | 'room' | 'atmosphere' | 'presentation';
export const galleryItems = [
  { src: imagePaths.hero, altFr: 'Grand assortiment de spécialités indiennes et pakistanaises', altEn: 'A generous spread of Indian and Pakistani specialities', category: 'dishes' as const },
  { src: imagePaths.butterChicken, altFr: 'Butter Chicken servi dans un plat traditionnel', altEn: 'Butter Chicken served in a traditional dish', category: 'dishes' as const },
  { src: imagePaths.interior01, altFr: 'Vue chaleureuse de la salle du restaurant', altEn: 'A warm view of the restaurant dining room', category: 'room' as const },
  { src: imagePaths.mixedGrill, altFr: 'Assortiment de grillades tandoori', altEn: 'A selection of tandoori grilled dishes', category: 'dishes' as const },
  { src: imagePaths.diningRoom, altFr: 'Tables dressées dans la salle', altEn: 'Tables set in the dining room', category: 'atmosphere' as const },
  { src: imagePaths.biryani, altFr: 'Biryani maison au riz basmati parfumé', altEn: 'House Biryani with fragrant basmati rice', category: 'presentation' as const },
  { src: imagePaths.interior02, altFr: 'Détails colorés de la décoration intérieure', altEn: 'Colourful details of the interior decor', category: 'atmosphere' as const },
  { src: imagePaths.naan, altFr: 'Pain Naan fraîchement cuit', altEn: 'Freshly baked Naan', category: 'presentation' as const },
  { src: imagePaths.tikka, altFr: 'Chicken Tikka grillé au tandoor', altEn: 'Tandoor-grilled Chicken Tikka', category: 'dishes' as const },
];
