export const restaurant = {
  subtitle: 'Cuisine indienne & pakistanaise à Paris',
  address: {
    street: "10 Rue d’Odessa",
    postalCode: '75014',
    city: 'Paris',
    full: "10 Rue d’Odessa, 75014 Paris",
  },
  phone: { display: '01 42 79 92 23', href: 'tel:+33142799223' },
  rating: { score: '4,5', reviews: 'environ 1 900 avis', source: 'Google' },
  priceRange: '10–20 €',
  cuisine: 'Indienne et pakistanaise',
  websiteUrl: 'https://valleedukashmir.fr/fr',
  reservationUrl: 'https://valleedukashmir.fr/fr',
  // TODO(client): remplacer cette URL lors de l’intégration U Sell ou du futur service de commande.
  orderUrl: 'https://valleedukashmir.fr/fr',
  mapUrl: "https://www.google.com/maps/search/?api=1&query=10%20Rue%20d%27Odessa%2C%2075014%20Paris",
  hours: [
    'Service du midi',
    'Fermeture l’après-midi',
    'Service du soir à partir de 18h',
  ],
  hoursNote: 'Les horaires hebdomadaires exacts sont à confirmer avec le propriétaire.',
  socialLinks: [],
} as const;

export const imagePaths = {
  hero: '/images/hero-main.png',
  interior01: '/images/restaurant-interior-01.webp',
  interior02: '/images/restaurant-interior-02.webp',
  diningRoom: '/images/dining-room.webp',
  butterChicken: '/images/butter-chicken.webp',
  mixedGrill: '/images/mixed-grill.webp',
  biryani: '/images/biryani.webp',
  naan: '/images/naan.webp',
  tikka: '/images/poulet-tikka.webp',
  roganJosh: '/images/agneau-rogan-josh.webp',
  palakPaneer: '/images/palak-paneer.webp',
} as const;
