import { useState, useEffect } from 'react';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { getCart, updateCartItemQuantity, removeFromCart, getCartTotal, CartItem } from '../lib/inventory';

interface ShoppingCartProps {
  onNavigate: (page: 'home' | 'cart' | 'shop') => void;
}

export function ShoppingCart({ onNavigate }: ShoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(getCart());

  // Refresh cart on mount
  useEffect(() => {
    setCartItems(getCart());
  }, []);

  const updateQuantity = (id: string, change: number) => {
    updateCartItemQuantity(id, change);
    setCartItems(getCart());
  };

  const removeItem = (id: string) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  const total = getCartTotal();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button
            onClick={() => onNavigate('home')}
            className="hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl">Warenkorb</h1>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-6">
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Ihr Warenkorb ist leer</p>
            <button
              onClick={() => onNavigate('shop')}
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Zum Shop
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              {cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg mb-2">{item.name}</h3>
                      <p className="mb-2">€{item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end justify-between">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 hover:bg-red-50 rounded text-red-600"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                      <p>€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between mb-4 text-xl">
                <span>Gesamt:</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              
              <button className="w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
                Zur Kasse
              </button>
              
              <button
                onClick={() => onNavigate('shop')}
                className="w-full py-3 mt-3 border-2 border-black rounded-full hover:bg-gray-100 transition-colors"
              >
                Weiter einkaufen
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}