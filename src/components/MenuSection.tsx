import { useState } from 'react';
import { Leaf } from 'lucide-react';

const categories = ['Starters', 'Mains', 'Breads & Rice', 'Desserts'] as const;
type Category = typeof categories[number];

interface Dish {
  name: string;
  desc: string;
  price: string;
  tag?: string;
  veg?: boolean;
}

const menu: Record<Category, Dish[]> = {
  'Starters': [
    { name: 'Seekh Kebab', desc: 'Spiced minced lamb, charcoal-grilled on skewers with mint chutney', price: '£14', tag: 'Chef\'s Pick' },
    { name: 'Shami Kebab', desc: 'Delicate slow-cooked lamb patties with fresh herbs and pomegranate', price: '£12' },
    { name: 'Dahi Puri', desc: 'Crisp semolina shells, spiced potato, tamarind & sweet yoghurt', price: '£10', veg: true },
    { name: 'Tandoori Jheenga', desc: 'Jumbo prawns marinated in saffron yoghurt, cooked in clay oven', price: '£18', tag: 'Signature' },
    { name: 'Paneer Tikka', desc: 'Cottage cheese cubes marinated in smoked paprika & fenugreek', price: '£11', veg: true },
    { name: 'Nihari Slider', desc: 'Slow-cooked beef in spiced bone broth on a toasted brioche bun', price: '£13', tag: 'New' },
  ],
  'Mains': [
    { name: 'Lamb Rogan Josh', desc: 'Bone-in lamb braised in Kashmiri spices, cardamom & aged ghee', price: '£26', tag: 'Signature' },
    { name: 'Butter Chicken', desc: 'Tender tandoori chicken in a velvety tomato cream sauce', price: '£22' },
    { name: 'Dal Makhani', desc: 'Black lentils slow-simmered overnight with cream & smoked butter', price: '£17', veg: true },
    { name: 'Karahi Gosht', desc: 'Rustic wok-cooked mutton with tomatoes, ginger & dried fenugreek', price: '£27', tag: 'Chef\'s Pick' },
    { name: 'Saag Paneer', desc: 'Wilted mustard greens, spinach, cottage cheese & white butter', price: '£18', veg: true },
    { name: 'King Prawn Masala', desc: 'Saffron-infused coastal curry with coconut cream & curry leaf', price: '£29' },
  ],
  'Breads & Rice': [
    { name: 'Gilded Naan', desc: 'Hand-stretched, brushed with saffron butter & flaked almonds', price: '£5', tag: 'House Special', veg: true },
    { name: 'Biryani Royale', desc: 'Dum-sealed basmati, slow-cooked lamb, rose water & crispy onions', price: '£28', tag: 'Signature' },
    { name: 'Lachha Paratha', desc: 'Layered whole-wheat flatbread, ghee-brushed, baked in tandoor', price: '£4', veg: true },
    { name: 'Pilau Rice', desc: 'Fragrant basmati tossed with whole spices, bay leaf & cumin', price: '£5', veg: true },
  ],
  'Desserts': [
    { name: 'Gulab Jamun Soufflé', desc: 'Warm rose syrup soufflé, cardamom ice cream, pistachio dust', price: '£12', tag: 'Chef\'s Pick', veg: true },
    { name: 'Shahi Tukra', desc: 'Royal bread pudding with saffron rabri, edible gold leaf', price: '£11', veg: true },
    { name: 'Kulfi Flight', desc: 'Trio: pistachio, mango & rose — traditional Indian frozen dessert', price: '£10', veg: true },
    { name: 'Halwa Trio', desc: 'Carrot, semolina & walnut halwa with clotted cream', price: '£9', veg: true },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<Category>('Mains');

  return (
    <section id="menu" className="py-28 bg-charcoal-950">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Our Offerings</p>
          <h2 className="section-heading mb-4">The Menu</h2>
          <div className="divider-ornament max-w-sm mx-auto mt-6">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
          <p className="font-serif text-cream-300/70 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Every dish is a story — of spice routes, family kitchens, and centuries of culinary tradition refined for the modern palate.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-250 ${
                active === cat
                  ? 'bg-gold-500 border-gold-500 text-charcoal-950 font-semibold'
                  : 'border-charcoal-700 text-cream-400/60 hover:border-gold-600/50 hover:text-gold-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dishes grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-charcoal-800/30">
          {menu[active].map((dish) => (
            <div
              key={dish.name}
              className="group relative bg-charcoal-950 hover:bg-charcoal-900/60 transition-colors duration-300 p-8 flex justify-between items-start gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-display text-xl text-cream-100 group-hover:text-gold-300 transition-colors duration-250">
                    {dish.name}
                  </h3>
                  {dish.veg && (
                    <span className="flex-shrink-0">
                      <Leaf size={13} className="text-emerald-500" />
                    </span>
                  )}
                  {dish.tag && (
                    <span className="text-[9px] font-sans font-semibold tracking-widest uppercase bg-gold-500/15 text-gold-400 border border-gold-600/30 px-2 py-0.5 flex-shrink-0">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <p className="font-serif text-sm text-cream-400/60 leading-relaxed">{dish.desc}</p>
              </div>
              <div className="font-display text-lg text-gold-400 flex-shrink-0 pt-0.5">{dish.price}</div>

              {/* Left accent line on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-px bg-gold-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline"
          >
            Request Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
