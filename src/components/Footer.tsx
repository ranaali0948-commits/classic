import { Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  { label: 'Menu',     id: 'menu' },
  { label: 'About',    id: 'about' },
  { label: 'Gallery',  id: 'gallery' },
  { label: 'Reviews',  id: 'reviews' },
  { label: 'Contact',  id: 'contact' },
];

const socials = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Facebook,  href: '#', label: 'Facebook' },
  { Icon: Twitter,   href: '#', label: 'Twitter / X' },
];

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-950 border-t border-charcoal-800/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-charcoal-800/40">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <div className="font-display text-3xl text-cream-100 tracking-wide">Zafran</div>
              <div className="section-label text-[10px] tracking-[0.3em] mt-0.5">Fine Dining</div>
            </div>
            <p className="font-serif text-cream-400/60 text-sm leading-relaxed max-w-xs mt-4">
              A celebration of South Asian culinary heritage — elevated for the modern table.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-charcoal-700 text-cream-500/50 hover:border-gold-600/60 hover:text-gold-400 transition-all duration-250"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <p className="section-label mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    className="font-sans text-sm text-cream-400/60 hover:text-gold-400 transition-colors tracking-wide"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <p className="section-label mb-5">Visit Us</p>
            <div className="space-y-4 font-serif text-sm text-cream-400/70 leading-relaxed">
              <div>
                <p className="text-cream-200 font-sans font-medium text-xs tracking-wider mb-1">LONDON — MAYFAIR</p>
                <p>17 Mount Street, London W1K 2RB</p>
                <p>+44 (0) 20 7629 1818</p>
              </div>
              <div>
                <p className="text-cream-200 font-sans font-medium text-xs tracking-wider mb-1">LONDON — CHELSEA</p>
                <p>84 King's Road, London SW3 4TZ</p>
                <p>+44 (0) 20 7351 0202</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-cream-500/35 tracking-wide">
            &copy; {new Date().getFullYear()} Zafran Fine Dining. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Allergen Info'].map((l) => (
              <a
                key={l}
                href="#"
                className="font-sans text-xs text-cream-500/35 hover:text-cream-400/60 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
