import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-charcoal-950/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/30 via-transparent to-charcoal-950/90" />

      {/* Decorative top border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="section-label mb-6 animate-[fadeInUp_0.8s_ease_both]">
          Est. 1998 &nbsp;·&nbsp; Lahore · London
        </p>

        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-cream-50 leading-[1.05] tracking-tight mb-4 text-shadow-gold animate-[fadeInUp_0.9s_0.1s_ease_both_backwards]">
          A Feast Worthy<br />
          <em className="text-gold-400 not-italic">of Royalty</em>
        </h1>

        <p className="font-serif text-lg md:text-xl text-cream-300/80 max-w-xl mx-auto leading-relaxed mt-6 mb-10 animate-[fadeInUp_1s_0.2s_ease_both_backwards]">
          Traditional recipes passed through generations — elevated with the finest ingredients and the artistry of a Michelin-trained kitchen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_0.3s_ease_both_backwards]">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary w-full sm:w-auto justify-center"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline w-full sm:w-auto justify-center"
          >
            View Menu
          </button>
        </div>

        {/* Stats strip */}
        <div className="flex items-center justify-center gap-10 mt-16 pt-8 border-t border-cream-500/10 animate-[fadeInUp_1s_0.4s_ease_both_backwards]">
          {[
            { value: '25+', label: 'Years of Tradition' },
            { value: '4.9', label: 'Guest Rating' },
            { value: '120', label: 'Signature Dishes' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl text-gold-400">{s.value}</div>
              <div className="font-sans text-[10px] text-cream-400/60 tracking-widest uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-400/40 hover:text-gold-400 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={20} />
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
