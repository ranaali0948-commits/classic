import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { imagePaths } from '../data/restaurant';
import { FinalCta, GalleryPreview, HomeStory, SignatureDishes } from '../components/Sections';
import { ButtonLink, ImageWithFallback } from '../components/ui';
import { useLanguage } from '../i18n';
import { BRAND_NAME } from '../data/brand';

export default function HomePage() {
  const { language, t } = useLanguage();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.home-reveal'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <>
    <section className="home-hero home-hero-cinematic">
      <ImageWithFallback className="cinematic-hero-art" src={imagePaths.homeCinematicHero} alt={language === 'fr' ? 'Présentation cinématographique de Vallée du Kashmir avec spécialités indiennes et paysage du Kashmir' : 'Cinematic presentation of Vallée du Kashmir with Indian specialities and a Kashmir landscape'} />
      <Link className="hero-reference-hotspot" to="/reservation"><span className="sr-only">{t.hero.reserve}</span></Link>
      <div className="hero-mobile-content">
        <div className="container">
          <p className="section-label">{t.hero.eyebrow}</p>
          <h1 className="notranslate" translate="no">{BRAND_NAME}</h1>
          <p className="hero-subtitle">{t.hero.subtitle}</p>
          <p>{t.hero.text}</p>
          <div className="hero-mobile-actions">
            <ButtonLink to="/reservation">{t.hero.reserve}</ButtonLink>
            <ButtonLink to="/carte" variant="secondary">{t.hero.menu}</ButtonLink>
            <Link className="hero-order-link" to="/commander">{t.hero.order} <span>→</span></Link>
          </div>
        </div>
      </div>
    </section>
    <div className="home-reveal"><SignatureDishes /></div>
    <div className="home-reveal"><HomeStory /></div>
    <div className="home-reveal"><GalleryPreview /></div>
    <div className="home-reveal"><FinalCta /></div>
  </>;
}
