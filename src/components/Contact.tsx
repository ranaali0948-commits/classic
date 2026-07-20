import { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

const info = [
  {
    icon: MapPin,
    label: 'Address',
    lines: ['17 Mount Street, Mayfair', 'London W1K 2RB'],
  },
  {
    icon: Phone,
    label: 'Reservations',
    lines: ['+44 (0) 20 7629 1818', 'reservations@zafran.co.uk'],
  },
  {
    icon: Clock,
    label: 'Hours',
    lines: ['Mon – Sat: 12pm – 11pm', 'Sunday: 12pm – 10pm'],
  },
];

export default function Contact() {
  const [form, setForm]       = useState({ name: '', email: '', date: '', guests: '2', notes: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  return (
    <section id="contact" className="py-28 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative BG text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[22vw] text-charcoal-900/30 font-bold tracking-tight leading-none">
          Zafran
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">Make a Booking</p>
          <h2 className="section-heading">Reserve Your Table</h2>
          <div className="divider-ornament max-w-sm mx-auto mt-6">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 flex flex-col justify-between gap-10">
            <div className="space-y-8">
              {info.map((item) => (
                <div key={item.label} className="flex gap-5">
                  <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-gold-700/40 mt-0.5">
                    <item.icon size={16} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="section-label text-[10px] mb-1.5">{item.label}</p>
                    {item.lines.map((l) => (
                      <p key={l} className="font-serif text-cream-200/80 leading-relaxed">{l}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="relative h-52 bg-charcoal-900 overflow-hidden border border-charcoal-800">
              <img
                src="https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restaurant exterior"
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-charcoal-950/80 border border-gold-700/40 px-5 py-3 text-center">
                  <MapPin size={14} className="text-gold-400 mx-auto mb-1" />
                  <p className="font-sans text-xs text-cream-200 tracking-widest uppercase">Mayfair, London</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 border border-charcoal-800 bg-charcoal-900/40 p-8 md:p-10">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                <CheckCircle2 size={40} className="text-gold-400" strokeWidth={1.5} />
                <h3 className="font-display text-2xl text-cream-100">Reservation Requested</h3>
                <p className="font-serif text-cream-300/70 max-w-xs leading-relaxed">
                  Thank you, {form.name}. We will confirm your table by email within 2 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 btn-outline text-xs py-2.5 px-6"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[10px] block mb-2">Full Name</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-charcoal-950 border border-charcoal-700 focus:border-gold-600 outline-none text-cream-200 font-sans text-sm px-4 py-3 placeholder-charcoal-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2">Email</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-charcoal-950 border border-charcoal-700 focus:border-gold-600 outline-none text-cream-200 font-sans text-sm px-4 py-3 placeholder-charcoal-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="section-label text-[10px] block mb-2">Date</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-charcoal-950 border border-charcoal-700 focus:border-gold-600 outline-none text-cream-200 font-sans text-sm px-4 py-3 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label text-[10px] block mb-2">Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-charcoal-950 border border-charcoal-700 focus:border-gold-600 outline-none text-cream-200 font-sans text-sm px-4 py-3 transition-colors"
                    >
                      {['1', '2', '3', '4', '5', '6', '7', '8+'].map((n) => (
                        <option key={n} value={n}>{n} {n === '1' ? 'guest' : 'guests'}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="section-label text-[10px] block mb-2">Special Requests</label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Dietary requirements, occasions, seating preferences..."
                    className="w-full bg-charcoal-950 border border-charcoal-700 focus:border-gold-600 outline-none text-cream-200 font-sans text-sm px-4 py-3 placeholder-charcoal-600 resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-charcoal-900/40 border-t-charcoal-900 rounded-full animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    <>
                      <Send size={14} />
                      Confirm Reservation
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
