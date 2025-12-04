import React, { createContext, useContext, useEffect, useState } from 'react'

export type InventoryItem = { id: string; name: string; price: number; image?: string; url?: string; sku?: string; category?: string }

const InventoryContext = createContext<{ items: InventoryItem[] } | null>(null)

export function InventoryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InventoryItem[]>([])

  useEffect(() => {
    // Stub fetch: later replace with REST/GraphQL
    async function load() {
      try {
        const res = await fetch('/inventory.json')
        if (res.ok) {
          const data = await res.json()
          setItems(Array.isArray(data) ? data : [])
        } else {
          setItems([])
        }
      } catch {
        setItems([])
      }
    }
    load()
  }, [])

  return <InventoryContext.Provider value={{ items }}>{children}</InventoryContext.Provider>
}

export function useInventory() {
  const ctx = useContext(InventoryContext)
  if (!ctx) throw new Error('useInventory must be used within InventoryProvider')
  return ctx
}
