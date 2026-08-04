import type { ButtonHTMLAttributes, ImgHTMLAttributes, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n';

export function SectionHeading({ eyebrow, title, intro, align = 'center' }: { eyebrow: string; title: string; intro?: string; align?: 'center' | 'left' }) {
  return <div className={align === 'center' ? 'section-title text-center mx-auto' : 'section-title'}>
    <p className="section-label">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}
  </div>;
}

export function ButtonLink({ to, children, variant = 'primary' }: { to: string; children: ReactNode; variant?: 'primary' | 'secondary' }) {
  const className = variant === 'primary' ? 'btn btn-primary' : 'btn btn-secondary';
  return to.startsWith('http') || to.startsWith('tel:') ? <a href={to} className={className} target={to.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{children}</a> : <Link to={to} className={className}>{children}</Link>;
}

export function ImageWithFallback({ className = '', fallbackLabel, ...props }: ImgHTMLAttributes<HTMLImageElement> & { fallbackLabel?: string }) {
  return <span className={`image-shell ${className}`} data-fallback-label={fallbackLabel}><img {...props} onError={(event) => { event.currentTarget.hidden = true; event.currentTarget.parentElement?.classList.add('is-fallback'); }} /></span>;
}

export function PageHero({ eyebrow, title, text, image }: { eyebrow: string; title: string; text?: string; image?: string }) {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const routeKeys = { '/carte': 'menu', '/notre-histoire': 'story', '/galerie': 'gallery', '/reservation': 'reservation', '/contact': 'contact', '/commander': 'order' } as const;
  const routeKey = routeKeys[pathname as keyof typeof routeKeys];
  const translated = routeKey ? t.pageHeaders[routeKey] : null;
  const content = translated ?? [eyebrow, title, text];
  return <section className="page-hero compact-page-hero" data-has-image={Boolean(image)}><div className="container page-hero-content"><p className="section-label">{content[0]}</p><h1>{content[1]}</h1>{content[2] && <p>{content[2]}</p>}</div></section>;
}

export function DemoSubmitButton(props: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className="btn btn-primary" type="submit" {...props} />; }
