import { Link } from 'react-router-dom';
import { imagePaths } from '../data/restaurant';
import { FinalCta, GalleryPreview, HomeMenuPreview, HomeStory, ReviewsSection, SignatureDishes, VisitSection } from '../components/Sections';
import { ButtonLink, ImageWithFallback } from '../components/ui';
import { useLanguage } from '../i18n';

export default function HomePage() {
  const { language, t } = useLanguage();
  return <>
    <section className="home-hero">
      <ImageWithFallback src={imagePaths.hero} alt={language === 'fr' ? 'Table de spécialités indiennes et pakistanaises' : 'Table of Indian and Pakistani specialities'} />
      <div className="hero-photo-shade" />
      <div className="container hero-overlay-wrap">
        <div className="hero-floating-ctas is-left">
          <ButtonLink to="/reservation">{t.hero.reserve}</ButtonLink>
          <ButtonLink to="/carte" variant="secondary">{t.hero.menu}</ButtonLink>
          <Link className="hero-order-link" to="/commander">{t.hero.order} <span>→</span></Link>
        </div>
      </div>
    </section>
    <SignatureDishes />
    <HomeMenuPreview />
    <HomeStory />
    <GalleryPreview />
    <ReviewsSection />
    <VisitSection />
    <FinalCta />
  </>;
}
