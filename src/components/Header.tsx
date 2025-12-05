import { ShoppingCart, Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'cart' | 'shop') => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/30">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100/40 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left spacer */}
          <div className="flex-1" />
          
          {/* Center - Logo and Navigation */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl tracking-wider hover:opacity-70 transition-opacity"
            >
              LOGO
            </button>
            
            <nav className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection('cafe')}
                className="hover:opacity-70 transition-opacity"
              >
                Café
              </button>
              <button
                onClick={() => scrollToSection('backladen')}
                className="hover:opacity-70 transition-opacity"
              >
                Backladen
              </button>
              <button
                onClick={() => scrollToSection('kurse')}
                className="hover:opacity-70 transition-opacity"
              >
                Kurse
              </button>
            </nav>
          </div>
          
          {/* Right - Social and Cart */}
          <div className="flex-1 flex items-center justify-end gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button
              onClick={() => onNavigate('cart')}
              className="hover:opacity-70 transition-opacity"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
