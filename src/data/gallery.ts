import { imagePaths } from './restaurant';

export type GalleryCategory = 'Plats' | 'Salle' | 'Ambiance' | 'Présentation';
export const galleryItems = [
  { src: imagePaths.butterChicken, alt: 'Butter Chicken servi dans un plat traditionnel', category: 'Plats' as const },
  { src: imagePaths.interior01, alt: 'Vue chaleureuse de la salle du restaurant', category: 'Salle' as const },
  { src: imagePaths.mixedGrill, alt: 'Assortiment de grillades tandoori', category: 'Plats' as const },
  { src: imagePaths.diningRoom, alt: 'Tables dressées dans la salle', category: 'Ambiance' as const },
  { src: imagePaths.biryani, alt: 'Biryani maison au riz basmati parfumé', category: 'Présentation' as const },
  { src: imagePaths.interior02, alt: 'Détails colorés de la décoration intérieure', category: 'Ambiance' as const },
  { src: imagePaths.naan, alt: 'Pain naan fraîchement cuit', category: 'Présentation' as const },
  { src: imagePaths.tikka, alt: 'Poulet tikka grillé au tandoor', category: 'Plats' as const },
];
