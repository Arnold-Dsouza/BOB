import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Kontakt</h3>
            <p>Musterstraße 123</p>
            <p>12345 Musterstadt</p>
            <p className="mt-2">Tel: +49 123 456789</p>
            <p>Email: info@example.com</p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Öffnungszeiten</h3>
            <p>Mo-Fr: 8:00 - 18:00</p>
            <p>Sa: 9:00 - 17:00</p>
            <p>So: 10:00 - 16:00</p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Folgen Sie uns</h3>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-6 h-6" />
              Instagram
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#impressum" className="hover:opacity-70 transition-opacity">
              Impressum
            </a>
            <a href="#datenschutz" className="hover:opacity-70 transition-opacity">
              Datenschutz
            </a>
            <a href="#agb" className="hover:opacity-70 transition-opacity">
              AGB
            </a>
          </div>
          
          <p className="text-sm text-gray-400">
            © 2024 Alle Rechte vorbehalten
          </p>
        </div>
      </div>
    </footer>
  );
}
