import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BackshopSection } from './components/BackshopSection';
import { KurseSection } from './components/KurseSection';
import { EventsSection } from './components/EventsSection';
import { ContactBanner } from './components/ContactBanner';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { OnlineShop } from './components/OnlineShop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cart' | 'shop'>('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/cart') {
      setCurrentPage('cart');
    } else if (path === '/shop') {
      setCurrentPage('shop');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleNavigation = (page: 'home' | 'cart' | 'shop') => {
    setCurrentPage(page);
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`);
  };

  if (currentPage === 'cart') {
    return <ShoppingCart onNavigate={handleNavigation} />;
  }

  if (currentPage === 'shop') {
    return <OnlineShop onNavigate={handleNavigation} />;
  }

  return (
    <div className="relative">
      <Header onNavigate={handleNavigation} />
      <main>
        <HeroSection />
        <BackshopSection />
        <KurseSection />
        <EventsSection />
        <ContactBanner />
        <Footer />
      </main>
    </div>
  );
}
