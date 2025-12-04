import { Link, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Cart from './routes/Cart'
import Impressum from './routes/Impressum'
import { CartProvider } from './context/CartContext'
import { InventoryProvider } from './context/InventoryContext'

export default function App() {
  return (
    <CartProvider>
      <InventoryProvider>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
          <Footer />
        </div>
      </InventoryProvider>
    </CartProvider>
  )
}
