export type DietaryTag = 'vegetarien' | 'vegan' | 'epice';
export type MenuItem = { name: string; description: string; category: string; tags?: DietaryTag[]; price?: number };

export const menuCategories = [
  'Entrées', 'Grillades Tandoori', 'Poulet', 'Agneau', 'Bœuf', 'Poissons et crevettes',
  'Biryanis', 'Plats végétariens', 'Pains et accompagnements', 'Desserts', 'Boissons', 'Menus',
] as const;

// Contenu de démonstration limité. Importer ici la carte complète et ses prix vérifiés.
export const menuItems: MenuItem[] = [
  { name: 'Samoussa aux légumes', description: 'Feuilleté croustillant aux légumes et épices douces.', category: 'Entrées', tags: ['vegetarien', 'vegan'] },
  { name: 'Poulet Tikka', description: 'Morceaux de poulet marinés aux épices, saisis au tandoor.', category: 'Grillades Tandoori' },
  { name: 'Mixed Grill Tandoori', description: 'Assortiment généreux de grillades marinées et cuites au tandoor.', category: 'Grillades Tandoori', tags: ['epice'] },
  { name: 'Butter Chicken', description: 'Poulet tendre dans une sauce tomate onctueuse et délicatement épicée.', category: 'Poulet' },
  { name: 'Agneau Rogan Josh', description: 'Agneau mijoté dans une sauce parfumée aux épices du Kashmir.', category: 'Agneau', tags: ['epice'] },
  { name: 'Curry de bœuf', description: 'Bœuf mijoté avec tomates, gingembre et épices traditionnelles.', category: 'Bœuf' },
  { name: 'Crevettes Masala', description: 'Crevettes cuisinées dans une sauce masala parfumée.', category: 'Poissons et crevettes', tags: ['epice'] },
  { name: 'Biryani Maison', description: 'Riz basmati parfumé, épices et garniture au choix.', category: 'Biryanis' },
  { name: 'Palak Paneer', description: 'Fromage indien et épinards dans une sauce douce et aromatique.', category: 'Plats végétariens', tags: ['vegetarien'] },
  { name: 'Dal végétal', description: 'Lentilles mijotées aux épices, ail et gingembre.', category: 'Plats végétariens', tags: ['vegetarien', 'vegan'] },
  { name: 'Naan nature', description: 'Pain traditionnel cuit à la demande dans le tandoor.', category: 'Pains et accompagnements', tags: ['vegetarien'] },
  { name: 'Gulab Jamun', description: 'Douceur traditionnelle servie dans un sirop parfumé.', category: 'Desserts', tags: ['vegetarien'] },
  { name: 'Lassi mangue', description: 'Boisson fraîche et onctueuse à la mangue.', category: 'Boissons', tags: ['vegetarien'] },
];
