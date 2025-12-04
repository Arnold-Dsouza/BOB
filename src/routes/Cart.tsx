import { useCart } from '../context/CartContext'

export default function Cart() {
  const { state, subtotal, dispatch } = useCart()
  return (
    <main className="container">
      <h1>Warenkorb</h1>
      {state.items.length === 0 ? (
        <p>Dein Warenkorb ist leer.</p>
      ) : (
        <ul className="list">
          {state.items.map(i => (
            <li key={i.id}>
              {i.image && <img src={i.image} alt="" width={40} height={40} style={{ objectFit: 'cover', borderRadius: 8, marginRight: 8 }} />}
              <strong>{i.name}</strong> · {i.qty} × {(i.price).toFixed(2)} €
              <button className="btn" style={{ marginLeft: 8 }} onClick={() => dispatch({ type: 'remove', id: i.id })}>Entfernen</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Summe: {subtotal.toFixed(2)} €</h3>
    </main>
  )
}
