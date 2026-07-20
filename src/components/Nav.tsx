import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Menu', 'About', 'Gallery', 'Reviews', 'Contact'];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleLink = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-charcoal-950/95 backdrop-blur-md shadow-[0_1px_0_rgba(212,154,24,0.15)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="flex flex-col leading-none"
        >
          <span className="font-display text-2xl text-cream-100 tracking-wide">Zafran</span>
          <span className="section-label text-[10px] tracking-[0.3em]">Fine Dining</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleLink(l)}
              className="font-sans text-xs font-medium tracking-[0.18em] uppercase text-cream-300/70 hover:text-gold-400 transition-colors duration-200"
            >
              {l}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); handleLink('Contact'); }}
          className="hidden md:inline-flex btn-primary text-xs py-2.5 px-6"
        >
          Reserve a Table
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-cream-200 p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? 'max-h-96 border-t border-gold-800/30' : 'max-h-0'
        } bg-charcoal-950/98 backdrop-blur-md`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => handleLink(l)}
              className="font-sans text-sm font-medium tracking-[0.15em] uppercase text-cream-200/80 hover:text-gold-400 text-left transition-colors"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => handleLink('Contact')}
            className="btn-primary justify-center mt-2"
          >
            Reserve a Table
          </button>
        </div>
      </div>
    </header>
  );
}
