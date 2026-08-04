import type { ButtonHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

export function SectionHeading({ eyebrow, title, intro, align = 'center' }: { eyebrow: string; title: string; intro?: string; align?: 'center' | 'left' }) {
  return <div className={align === 'center' ? 'section-title text-center mx-auto' : 'section-title'}>
    <p className="section-label">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}
  </div>;
}

export function ButtonLink({ to, children, variant = 'primary' }: { to: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  const className = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return to.startsWith('http') || to.startsWith('tel:') ? <a href={to} className={className} target={to.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a> : <Link to={to} className={className}>{children}</Link>;
}

export function ImageWithFallback({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) {
  return <span className={`image-shell ${className}`}><img {...props} onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement?.classList.add('is-fallback'); }} /></span>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  return <section className="page-hero"><div className="page-hero-media">{image && <ImageWithFallback src={image} alt="" />}</div><div className="page-hero-overlay" /><div className="container page-hero-content"><p className="section-label">{eyebrow}</p><h1>{title}</h1>{text && <p>{text}</p>}</div></section>;
}

export function DemoSubmitButton(props: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className="btn btn-primary" type="submit" {...props} />; }
