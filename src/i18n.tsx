import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { BRAND_NAME } from './data/brand';

export type Language = 'fr' | 'en';

const translations = {
  fr: {
    metadata: { titleSuffix: 'Restaurant indien et pakistanais à Paris 14', description: `Découvrez ${BRAND_NAME}, restaurant indien et pakistanais près de Montparnasse à Paris.` },
    nav: ['Accueil', 'La carte', 'Notre histoire', 'Galerie', 'Contact'],
    actions: { reserve: 'Réserver', order: 'Commander' },
    hero: {
      eyebrow: 'Paris 14e · Montparnasse',
      title: BRAND_NAME,
      subtitle: 'Cuisine indienne & pakistanaise',
      text: 'Saveurs authentiques, grillades tandoori, currys parfumés et spécialités végétariennes au cœur de Montparnasse.',
      reserve: 'Réserver une table', menu: 'Voir la carte', order: 'Commander en ligne',
    },
    pageHeaders: {
      menu: ['La carte', 'Nos spécialités', 'Découvrez une sélection de plats indiens et pakistanais préparés avec générosité.'],
      story: ['Notre histoire', 'Une cuisine de partage', 'Traditions indiennes et pakistanaises, épices, tandoor et hospitalité au cœur de Paris.'],
      gallery: ['Galerie', 'Plats, salle et ambiance', `Découvrez l’univers de ${BRAND_NAME} à travers les images du restaurant.`],
      reservation: ['Réservation', 'Préparez votre visite', 'Réservez votre table en ligne ou contactez directement le restaurant.'],
      contact: ['Contact', 'Nous trouver', `Toutes les informations utiles pour venir à ${BRAND_NAME}.`],
      order: ['Commander', 'À emporter ou en livraison', `Retrouvez les spécialités de ${BRAND_NAME} où vous voulez.`],
    },
  },
  en: {
    metadata: { titleSuffix: 'Indian and Pakistani restaurant in Paris 14th', description: `Discover ${BRAND_NAME}, an Indian and Pakistani restaurant near Montparnasse in Paris.` },
    nav: ['Home', 'Menu', 'Our story', 'Gallery', 'Contact'],
    actions: { reserve: 'Book', order: 'Order' },
    hero: {
      eyebrow: 'Paris 14th · Montparnasse',
      title: BRAND_NAME,
      subtitle: 'Indian & Pakistani cuisine',
      text: 'Authentic flavours, tandoori grills, fragrant curries and vegetarian specialities in the heart of Montparnasse.',
      reserve: 'Book a table', menu: 'View the menu', order: 'Order online',
    },
    pageHeaders: {
      menu: ['Menu', 'Our specialities', 'Discover a selection of generous Indian and Pakistani dishes.'],
      story: ['Our story', 'Food made for sharing', 'Indian and Pakistani traditions, spices, tandoor cooking and hospitality in the heart of Paris.'],
      gallery: ['Gallery', 'Food, dining room and atmosphere', `Discover ${BRAND_NAME} through images of the restaurant.`],
      reservation: ['Booking', 'Plan your visit', 'Book online or contact the restaurant directly.'],
      contact: ['Contact', 'Find us', `Everything you need to visit ${BRAND_NAME}.`],
      order: ['Order', 'Takeaway or delivery', `Enjoy ${BRAND_NAME} wherever you are.`],
    },
  },
} as const;

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: typeof translations.fr | typeof translations.en };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageStorageKey = 'vallee-du-kashmir-language';

function getInitialLanguage(): Language {
  try {
    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    if (savedLanguage === 'fr' || savedLanguage === 'en') return savedLanguage;
  } catch {
    // Continue with the browser language when storage is unavailable.
  }

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);
  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    try {
      window.localStorage.setItem(languageStorageKey, nextLanguage);
    } catch {
      // The current session can still switch language when storage is unavailable.
    }
  }, []);
  useEffect(() => {
    const metadata = translations[language].metadata;
    document.documentElement.lang = language;
    const title = `${BRAND_NAME} | ${metadata.titleSuffix}`;
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
    const structuredData = document.querySelector('#restaurant-json-ld');
    if (structuredData) structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Restaurant', name: BRAND_NAME,
      url: 'https://valleedukashmir.fr/fr', telephone: '+33142799223',
      address: { '@type': 'PostalAddress', streetAddress: '10 Rue d’Odessa', postalCode: '75014', addressLocality: 'Paris', addressCountry: 'FR' },
      servesCuisine: ['Cuisine indienne', 'Cuisine pakistanaise'],
    });
  }, [language]);
  const value = useMemo(() => ({ language, setLanguage, t: translations[language] }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
