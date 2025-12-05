import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Search } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { PRODUCTS, addToCart } from '../lib/inventory';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

interface OnlineShopProps {
  onNavigate: (page: 'home' | 'cart' | 'shop') => void;
}

export function OnlineShop({ onNavigate }: OnlineShopProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Alle');

  const categories = ['Alle', 'Backsets', 'Zutaten', 'Dekoration', 'Werkzeuge'];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Alle' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (productId: string) => {
    addToCart(productId);
    // Optional: Show a toast or notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => onNavigate('home')}
              className="hover:opacity-70 transition-opacity"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-2xl">Online Shop</h1>
            <div className="flex-1" />
            <button
              onClick={() => onNavigate('cart')}
              className="hover:opacity-70 transition-opacity"
            >
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Produkte suchen..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-4">
                <h3 className="text-lg mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl">€{product.price.toFixed(2)}</span>
                  <button
                    className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Keine Produkte gefunden</p>
          </div>
        )}
      </div>
    </div>
  );
}