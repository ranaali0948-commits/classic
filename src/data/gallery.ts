export type GalleryCategory = 'dishes' | 'room' | 'atmosphere' | 'presentation';
export const galleryItems = [
  { id: 'facade', altFr: 'L’accueil de Vallée du Kashmir', altEn: 'The Vallée du Kashmir welcome', category: 'atmosphere' as const },
  { id: 'spread', altFr: 'Les spécialités de la maison', altEn: 'House specialities', category: 'dishes' as const },
  { id: 'room', altFr: 'Une salle chaleureuse', altEn: 'A warm dining room', category: 'room' as const },
  { id: 'tandoor', altFr: 'Le savoir-faire du tandoor', altEn: 'Tandoor craft', category: 'dishes' as const },
  { id: 'table', altFr: 'L’art de recevoir', altEn: 'The art of hospitality', category: 'presentation' as const },
  { id: 'spices', altFr: 'Épices et traditions', altEn: 'Spices and traditions', category: 'dishes' as const },
  { id: 'details', altFr: 'Les détails de la maison', altEn: 'Details of the house', category: 'presentation' as const },
  { id: 'montparnasse', altFr: 'Au cœur de Montparnasse', altEn: 'In the heart of Montparnasse', category: 'atmosphere' as const },
  { id: 'dessert', altFr: 'La touche gourmande', altEn: 'A sweet finishing touch', category: 'presentation' as const },
];
