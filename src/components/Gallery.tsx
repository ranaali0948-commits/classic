const photos = [
  {
    url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Lamb Rogan Josh',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Tandoori Selection',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'The Dining Room',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Spice Selection',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: "Chef's Table",
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-label mb-4">The Experience</p>
          <h2 className="section-heading mb-4">A Glimpse Inside</h2>
          <div className="divider-ornament max-w-sm mx-auto mt-6">
            <span className="text-gold-500 text-xl">✦</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-auto lg:grid-rows-2 gap-3 lg:h-[560px]">
          {photos.map((photo, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${photo.span}`}
            >
              <img
                src={photo.url}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ minHeight: i === 0 ? undefined : '200px' }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/50 transition-all duration-400" />
              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-350 bg-gradient-to-t from-charcoal-950/90 to-transparent">
                <p className="font-sans text-xs text-cream-200 tracking-widest uppercase">{photo.label}</p>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold-500/0 group-hover:border-gold-500/60 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
