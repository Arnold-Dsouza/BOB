import React, { createContext, useContext, useReducer } from 'react'

type CartItem = { id: string; name: string; sku?: string; price: number; qty: number; image?: string }

type CartState = { items: CartItem[] }

type Action =
  | { type: 'add'; item: CartItem }
  | { type: 'remove'; id: string }
  | { type: 'updateQty'; id: string; qty: number }
  | { type: 'clear' }

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'add': {
      const idx = state.items.findIndex(i => i.id === action.item.id)
      if (idx >= 0) {
        const items = [...state.items]
        items[idx] = { ...items[idx], qty: items[idx].qty + action.item.qty }
        return { items }
      }
      return { items: [...state.items, action.item] }
    }
    case 'remove':
      return { items: state.items.filter(i => i.id !== action.id) }
    case 'updateQty':
      return { items: state.items.map(i => (i.id === action.id ? { ...i, qty: action.qty } : i)) }
    case 'clear':
      return { items: [] }
    default:
      return state
  }
}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<Action>; subtotal: number } | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] })
  const subtotal = state.items.reduce((s, i) => s + i.price * i.qty, 0)
  return <CartContext.Provider value={{ state, dispatch, subtotal }}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
