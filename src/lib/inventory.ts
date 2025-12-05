export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Backset Premium',
    price: 49.99,
    category: 'Backsets',
    image: 'https://images.unsplash.com/photo-1590080876351-941da357bde6?w=400',
    description: 'Komplettes Set mit allen wichtigen Backutensilien',
  },
  {
    id: '2',
    name: 'Kuchen Starter Kit',
    price: 34.99,
    category: 'Backsets',
    image: 'https://images.unsplash.com/photo-1555932450-31a8aec2adf1?w=400',
    description: 'Perfekt für Einsteiger',
  },
  {
    id: '3',
    name: 'Profi Backmischung',
    price: 12.99,
    category: 'Zutaten',
    image: 'https://images.unsplash.com/photo-1619540158662-bb74607515f2?w=400',
    description: 'Hochwertige Backmischung',
  },
  {
    id: '4',
    name: 'Dekoration Set',
    price: 24.99,
    category: 'Dekoration',
    image: 'https://images.unsplash.com/photo-1762994576926-b8268190a2c9?w=400',
    description: 'Umfangreiches Dekorations-Set',
  },
  {
    id: '5',
    name: 'Sauerteig Starter',
    price: 19.99,
    category: 'Zutaten',
    image: 'https://images.unsplash.com/photo-1555932450-31a8aec2adf1?w=400',
    description: 'Natürlicher Sauerteig-Starter',
  },
  {
    id: '6',
    name: 'Profi Rührgerät',
    price: 89.99,
    category: 'Werkzeuge',
    image: 'https://images.unsplash.com/photo-1590080876351-941da357bde6?w=400',
    description: 'Leistungsstarkes Rührgerät',
  },
];

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// In-memory cart state (in a real app, this would be in context/state management)
let cart: CartItem[] = [];

export function getCart(): CartItem[] {
  return [...cart];
}

export function addToCart(productId: string): void {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingItem = cart.find(item => item.id === productId);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  }
}

export function updateCartItemQuantity(productId: string, change: number): void {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + change);
  }
}

export function removeFromCart(productId: string): void {
  cart = cart.filter(item => item.id !== productId);
}

export function getCartTotal(): number {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}
