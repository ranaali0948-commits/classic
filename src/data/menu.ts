export type DietaryTag = 'vegetarien' | 'vegan' | 'epice';
export type MenuCategoryId = 'starters' | 'tandoori' | 'chicken' | 'lamb' | 'beef' | 'seafood' | 'biryanis' | 'vegetarian' | 'sides' | 'desserts' | 'drinks' | 'menus';

export type MenuItem = {
  id: string;
  name: string;
  nameEn: string;
  descriptionFr: string;
  descriptionEn: string;
  categoryId: MenuCategoryId;
  tags?: DietaryTag[];
  price?: number;
};

export const menuCategories: ReadonlyArray<{ id: MenuCategoryId; fr: string; en: string }> = [
  { id: 'starters', fr: 'Entrées', en: 'Starters' },
  { id: 'tandoori', fr: 'Grillades Tandoori', en: 'Tandoori grills' },
  { id: 'chicken', fr: 'Poulet', en: 'Chicken' },
  { id: 'lamb', fr: 'Agneau', en: 'Lamb' },
  { id: 'beef', fr: 'Bœuf', en: 'Beef' },
  { id: 'seafood', fr: 'Poissons et crevettes', en: 'Fish and prawns' },
  { id: 'biryanis', fr: 'Biryanis', en: 'Biryanis' },
  { id: 'vegetarian', fr: 'Plats végétariens', en: 'Vegetarian dishes' },
  { id: 'sides', fr: 'Pains et accompagnements', en: 'Breads and sides' },
  { id: 'desserts', fr: 'Desserts', en: 'Desserts' },
  { id: 'drinks', fr: 'Boissons', en: 'Drinks' },
  { id: 'menus', fr: 'Menus', en: 'Set menus' },
];

// Explicit bilingual content only. Traditional dish names are intentionally identical.
export const menuItems: MenuItem[] = [
  { id: 'vegetable-samosa', name: 'Samosa', nameEn: 'Samosa', descriptionFr: 'Feuilleté croustillant aux légumes et épices douces.', descriptionEn: 'Crisp pastry filled with vegetables and mild spices.', categoryId: 'starters', tags: ['vegetarien', 'vegan'] },
  { id: 'chicken-tikka', name: 'Chicken Tikka', nameEn: 'Chicken Tikka', descriptionFr: 'Morceaux de poulet marinés aux épices, saisis au tandoor.', descriptionEn: 'Spiced marinated chicken pieces cooked in the tandoor.', categoryId: 'tandoori' },
  { id: 'tandoori-mixed-grill', name: 'Tandoori Mixed Grill', nameEn: 'Tandoori Mixed Grill', descriptionFr: 'Assortiment généreux de grillades marinées et cuites au tandoor.', descriptionEn: 'A generous selection of marinated meats cooked in the tandoor.', categoryId: 'tandoori', tags: ['epice'] },
  { id: 'butter-chicken', name: 'Butter Chicken', nameEn: 'Butter Chicken', descriptionFr: 'Poulet tendre dans une sauce tomate onctueuse et délicatement épicée.', descriptionEn: 'Tender chicken in a creamy, gently spiced tomato sauce.', categoryId: 'chicken' },
  { id: 'rogan-josh', name: 'Rogan Josh', nameEn: 'Rogan Josh', descriptionFr: 'Agneau mijoté dans une sauce parfumée aux épices du Kashmir.', descriptionEn: 'Slow-cooked lamb in a fragrant Kashmiri-spiced sauce.', categoryId: 'lamb', tags: ['epice'] },
  { id: 'beef-curry', name: 'Curry de bœuf', nameEn: 'Beef curry', descriptionFr: 'Bœuf mijoté avec tomates, gingembre et épices traditionnelles.', descriptionEn: 'Beef slow-cooked with tomatoes, ginger and traditional spices.', categoryId: 'beef' },
  { id: 'prawn-masala', name: 'Crevettes Masala', nameEn: 'Prawn Masala', descriptionFr: 'Crevettes cuisinées dans une sauce masala parfumée.', descriptionEn: 'Prawns cooked in a fragrant masala sauce.', categoryId: 'seafood', tags: ['epice'] },
  { id: 'house-biryani', name: 'Biryani', nameEn: 'Biryani', descriptionFr: 'Riz basmati parfumé, épices et garniture au choix.', descriptionEn: 'Fragrant basmati rice, spices and a choice of garnish.', categoryId: 'biryanis' },
  { id: 'palak-paneer', name: 'Palak Paneer', nameEn: 'Palak Paneer', descriptionFr: 'Fromage indien et épinards dans une sauce douce et aromatique.', descriptionEn: 'Indian cheese and spinach in a mild, aromatic sauce.', categoryId: 'vegetarian', tags: ['vegetarien'] },
  { id: 'vegetable-dal', name: 'Dal végétal', nameEn: 'Vegan dal', descriptionFr: 'Lentilles mijotées aux épices, ail et gingembre.', descriptionEn: 'Lentils simmered with spices, garlic and ginger.', categoryId: 'vegetarian', tags: ['vegetarien', 'vegan'] },
  { id: 'plain-naan', name: 'Naan', nameEn: 'Naan', descriptionFr: 'Pain traditionnel cuit à la demande dans le tandoor.', descriptionEn: 'Traditional bread baked to order in the tandoor.', categoryId: 'sides', tags: ['vegetarien'] },
  { id: 'gulab-jamun', name: 'Gulab Jamun', nameEn: 'Gulab Jamun', descriptionFr: 'Douceur traditionnelle servie dans un sirop parfumé.', descriptionEn: 'Traditional sweet served in a fragrant syrup.', categoryId: 'desserts', tags: ['vegetarien'] },
  { id: 'mango-lassi', name: 'Lassi mangue', nameEn: 'Mango Lassi', descriptionFr: 'Boisson fraîche et onctueuse à la mangue.', descriptionEn: 'A cool, creamy mango drink.', categoryId: 'drinks', tags: ['vegetarien'] },
];
