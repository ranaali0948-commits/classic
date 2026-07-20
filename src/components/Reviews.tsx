import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const reviews = [
  {
    name: 'Priya Mehta',
    location: 'London, UK',
    rating: 5,
    text: 'The lamb biryani brought me to tears — and I say that with complete sincerity. It tasted exactly like something my grandmother would have made on Eid. The fragrance, the texture, the spice balance. Absolutely extraordinary.',
    occasion: 'Anniversary Dinner',
  },
  {
    name: 'James Whitfield',
    location: 'Edinburgh, UK',
    rating: 5,
    text: 'I have eaten Indian food all over the world, and nothing has come close to Zafran. The seekh kebab is a masterclass in restraint — perfectly spiced without overwhelming. The service was warm and impeccably timed.',
    occasion: 'Business Dinner',
  },
  {
    name: 'Fatima Al-Rashid',
    location: 'Dubai, UAE',
    rating: 5,
    text: 'We held our family iftar here last Ramadan. Forty guests. Every single person was moved by the food. The dal makhani and gilded naan are things I now dream about. Zafran is not a restaurant — it is an institution.',
    occasion: 'Family Gathering',
  },
  {
    name: 'Dr. Ahmed Hussain',
    location: 'Manchester, UK',
    rating: 5,
    text: 'After 30 years of searching, I have finally found karahi gosht that matches what I grew up eating in Peshawar. The depth of flavour from those charred tomatoes and bone marrow is unreal. My new favourite restaurant, full stop.',
    occasion: 'Date Night',
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);
  const next = () => setActive((a) => (a + 1) % reviews.length);

  const r = reviews[active];

  return (
    <section id="reviews" className="py-28 bg-charcoal-900/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Guest Voices</p>
          <h2 className="section-heading">What They Say</h2>
          <div className="divider-ornament max-w-sm mx-auto mt-6">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
        </div>

        {/* Featured review */}
        <div className="max-w-3xl mx-auto text-center relative">
          {/* Large quote mark */}
          <Quote
            size={64}
            className="text-gold-700/20 mx-auto mb-6"
            strokeWidth={1}
          />

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} size={14} fill="currentColor" className="text-gold-400" />
            ))}
          </div>

          {/* Review text */}
          <blockquote
            key={active}
            className="font-serif text-xl md:text-2xl text-cream-200/90 leading-[1.75] mb-10 italic animate-[fadeIn_0.4s_ease_both]"
          >
            "{r.text}"
          </blockquote>

          {/* Attribution */}
          <div className="flex flex-col items-center gap-1">
            <div className="w-10 h-px bg-gold-600/50 mb-3" />
            <p className="font-sans font-semibold text-cream-100 text-sm tracking-wide">{r.name}</p>
            <p className="font-sans text-cream-400/50 text-xs tracking-widest uppercase">{r.location}</p>
            <span className="mt-2 text-[10px] font-sans tracking-widest uppercase bg-gold-500/10 text-gold-500 border border-gold-700/30 px-3 py-1">
              {r.occasion}
            </span>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center border border-charcoal-700 hover:border-gold-500/60 hover:text-gold-400 text-cream-400/60 transition-all duration-250"
              aria-label="Previous review"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Review ${i + 1}`}
                  className={`transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-1.5 bg-gold-500'
                      : 'w-1.5 h-1.5 bg-charcoal-600 hover:bg-charcoal-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center border border-charcoal-700 hover:border-gold-500/60 hover:text-gold-400 text-cream-400/60 transition-all duration-250"
              aria-label="Next review"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-20 pt-12 border-t border-charcoal-800/60">
          {[
            { label: 'Google Reviews', value: '4.9 / 5.0', sub: '2,400+ reviews' },
            { label: 'TripAdvisor', value: '#1 in Mayfair', sub: 'Indian Cuisine' },
            { label: 'Good Food Guide', value: '8 / 10', sub: '3 consecutive years' },
          ].map((b) => (
            <div key={b.label} className="text-center">
              <div className="font-display text-2xl text-gold-400">{b.value}</div>
              <div className="font-sans text-cream-200/80 text-sm mt-0.5">{b.label}</div>
              <div className="font-sans text-cream-500/40 text-xs tracking-widest uppercase mt-0.5">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}
