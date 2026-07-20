import { Award, Clock, UtensilsCrossed } from 'lucide-react';

const pillars = [
  {
    icon: UtensilsCrossed,
    title: 'Heritage Recipes',
    desc: 'Recipes that trace back to Mughal court kitchens, preserved and refined across five generations of our family.',
  },
  {
    icon: Clock,
    title: 'Slow & Deliberate',
    desc: 'Our nihari simmers for 12 hours. Our biryani is sealed in dough and dum-cooked to perfection. Time is an ingredient.',
  },
  {
    icon: Award,
    title: 'Award-Winning Kitchen',
    desc: 'Recognised by the Good Food Guide and two Michelin Bib Gourmand nominations. Excellence in every plate.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-charcoal-900/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative h-[520px] lg:h-[600px]">
            <div
              className="absolute inset-0 top-8 right-8 rounded-none bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-3/5 h-3/5 border-4 border-charcoal-950 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600')",
              }}
            />
            {/* Ornament tag */}
            <div className="absolute top-0 left-0 bg-charcoal-950 border border-gold-700/40 px-5 py-4">
              <div className="section-label text-[10px]">Since 1998</div>
              <div className="font-display text-2xl text-cream-100 mt-0.5">Zafran</div>
            </div>
            {/* Gold accent corner */}
            <div className="absolute bottom-[37%] right-8 w-16 h-16 border-b border-r border-gold-600/40" />
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-4">Our Story</p>
            <h2 className="section-heading mb-6">
              Born in Lahore,<br />
              <em className="text-gold-400 not-italic">Loved in London</em>
            </h2>
            <div className="divider-ornament mb-8">
              <span className="text-gold-500 text-lg">✦</span>
            </div>

            <p className="font-serif text-cream-300/75 text-lg leading-[1.8] mb-5">
              Zafran was born from the kitchen of Ammi-jaan — a woman who could make a lentil taste like a feast. When we opened our first table in Lahore in 1998, we promised never to cut corners, never to compromise on spice, and never to forget where we came from.
            </p>
            <p className="font-serif text-cream-300/75 text-lg leading-[1.8] mb-10">
              Today, with two locations in London and one in Dubai, that promise travels with us. Every dish is prepared from scratch. Every spice is sourced from the same family suppliers. Every guest is family.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-charcoal-700/50 pt-8">
              {pillars.map((p) => (
                <div key={p.title} className="group">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold-700/40 group-hover:border-gold-500/60 group-hover:bg-gold-500/8 transition-all duration-300 mb-3">
                    <p.icon size={18} className="text-gold-500" />
                  </div>
                  <h4 className="font-sans font-semibold text-cream-200 text-sm mb-1.5">{p.title}</h4>
                  <p className="font-serif text-cream-400/60 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
