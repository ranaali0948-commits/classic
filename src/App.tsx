import Nav from './components/Nav';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal-950">
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
