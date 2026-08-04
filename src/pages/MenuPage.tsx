import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { menuCategories, menuItems, type DietaryTag, type MenuCategoryId } from '../data/menu';
import { imagePaths } from '../data/restaurant';
import { ButtonLink, PageHero } from '../components/ui';
import { useLanguage } from '../i18n';

const filters: Array<{ value: DietaryTag; fr: string; en: string }> = [
  { value: 'vegetarien', fr: 'Végétarien', en: 'Vegetarian' },
  { value: 'vegan', fr: 'Végane', en: 'Vegan' },
  { value: 'epice', fr: 'Épicé', en: 'Spicy' },
];

export default function MenuPage() {
  const { language } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId | 'all'>('all');
  const [activeFilters, setActiveFilters] = useState<DietaryTag[]>([]);
  const copy = language === 'fr' ? {
    all: 'Toutes', categories: 'Catégories de la carte', search: 'Rechercher un plat', filters: 'Filtres alimentaires',
    empty: 'Aucun plat ne correspond', retry: 'Essayez une autre catégorie ou retirez un filtre.', reset: 'Réinitialiser les filtres',
    cta: 'À table ou à emporter ?', order: 'Commander en ligne', reserve: 'Réserver une table',
  } : {
    all: 'All', categories: 'Menu categories', search: 'Search for a dish', filters: 'Dietary filters',
    empty: 'No dishes match', retry: 'Try another category or remove a filter.', reset: 'Reset filters',
    cta: 'Dine in or take away?', order: 'Order online', reserve: 'Book a table',
  };
  const categoryName = (categoryId: MenuCategoryId) => {
    const category = menuCategories.find(item => item.id === categoryId);
    return category ? category[language] : categoryId;
  };
  const visible = useMemo(() => menuItems.filter(item => {
    const name = language === 'fr' ? item.name : item.englishName;
    const description = language === 'fr' ? item.descriptionFr : item.descriptionEn;
    return (activeCategory === 'all' || item.categoryId === activeCategory)
      && (!search || `${name} ${description}`.toLowerCase().includes(search.toLowerCase()))
      && activeFilters.every(tag => item.tags?.includes(tag));
  }), [activeCategory, activeFilters, language, search]);
  const toggleFilter = (tag: DietaryTag) => setActiveFilters(current => current.includes(tag) ? current.filter(value => value !== tag) : [...current, tag]);

  return <>
    <PageHero eyebrow="La carte" title="Des plats généreux et parfumés" image={imagePaths.mixedGrill} />
    <section className="section"><div className="container menu-layout">
      <aside className="menu-categories" aria-label={copy.categories}>
        <button className={activeCategory === 'all' ? 'active' : ''} onClick={() => setActiveCategory('all')}>{copy.all}</button>
        {menuCategories.map(category => <button key={category.id} className={activeCategory === category.id ? 'active' : ''} onClick={() => setActiveCategory(category.id)}>{category[language]}</button>)}
      </aside>
      <div>
        <div className="menu-tools"><label className="search-field"><Search /><span className="sr-only">{copy.search}</span><input value={search} onChange={event => setSearch(event.target.value)} placeholder={`${copy.search}…`} /></label><div className="filter-row" aria-label={copy.filters}>{filters.map(filter => <button aria-pressed={activeFilters.includes(filter.value)} onClick={() => toggleFilter(filter.value)} key={filter.value}>{filter[language]}</button>)}</div></div>
        <div className="menu-results" aria-live="polite">{visible.length ? visible.map(item => <article key={item.id}><div><p className="menu-category-label">{categoryName(item.categoryId)}</p><h2>{language === 'fr' ? item.name : item.englishName}</h2><p>{language === 'fr' ? item.descriptionFr : item.descriptionEn}</p><div className="tag-row">{item.tags?.map(tag => <span key={tag}>{filters.find(filter => filter.value === tag)?.[language]}</span>)}</div></div>{item.price !== undefined && <strong>{new Intl.NumberFormat(language === 'fr' ? 'fr-FR' : 'en-GB', { style: 'currency', currency: 'EUR' }).format(item.price)}</strong>}</article>) : <div className="empty-state"><h2>{copy.empty}</h2><p>{copy.retry}</p><button onClick={() => { setSearch(''); setActiveCategory('all'); setActiveFilters([]); }}>{copy.reset}</button></div>}</div>
      </div>
    </div></section>
    <section className="inline-cta"><div className="container"><h2>{copy.cta}</h2><div className="button-row"><ButtonLink to="/commander">{copy.order}</ButtonLink><ButtonLink to="/reservation" variant="secondary">{copy.reserve}</ButtonLink></div></div></section>
  </>;
}
