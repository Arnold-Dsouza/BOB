import ProtonRings from '../components/backshop/ProtonRings'
import { useInventory } from '../context/InventoryContext'
import { useCart } from '../context/CartContext'

export default function Backshop() {
  const { items } = useInventory()
  const { dispatch } = useCart()
  const kit = items.find(i => i.id === 'starter-kit-bread')
  return (
    <section id="backshop" className="section">
      <div className="row">
        <div className="col-left">
          <h2>4000 Produkte mit professioneller Beratung, damit jedes Projekt gelingt</h2>
        </div>
        <div className="col-right proton-bg">
          <ProtonRings images={[
            'https://picsum.photos/seed/1/96',
            'https://picsum.photos/seed/2/96',
            'https://picsum.photos/seed/3/96',
            'https://picsum.photos/seed/4/96',
            'https://picsum.photos/seed/5/96',
            'https://picsum.photos/seed/6/96',
            'https://picsum.photos/seed/7/96',
            'https://picsum.photos/seed/8/96',
            'https://picsum.photos/seed/9/96',
            'https://picsum.photos/seed/10/96',
            'https://picsum.photos/seed/11/96',
            'https://picsum.photos/seed/12/96',
            'https://picsum.photos/seed/13/96',
            'https://picsum.photos/seed/14/96',
            'https://picsum.photos/seed/15/96',
            'https://picsum.photos/seed/16/96',
            'https://picsum.photos/seed/17/96',
            'https://picsum.photos/seed/18/96',
            'https://picsum.photos/seed/19/96',
            'https://picsum.photos/seed/20/96',
            'https://picsum.photos/seed/21/96',
            'https://picsum.photos/seed/22/96',
            'https://picsum.photos/seed/23/96',
            'https://picsum.photos/seed/24/96',
            'https://picsum.photos/seed/25/96',
            'https://picsum.photos/seed/26/96',
            'https://picsum.photos/seed/27/96',
            'https://picsum.photos/seed/28/96',
            'https://picsum.photos/seed/29/96',
            'https://picsum.photos/seed/30/96',
          ]} />
        </div>
      </div>
      <div className="bottom-right">
        <a href="#" className="link">Entdecke unsere Back-kits</a>
        {kit ? (
          <button className="btn primary" onClick={() => dispatch({ type: 'add', item: { id: kit.id, name: kit.name, price: kit.price, qty: 1, image: kit.image } })}>
            In den Warenkorb ({kit.price.toFixed(2)} €)
          </button>
        ) : (
          <button className="btn" disabled>Wird geladen…</button>
        )}
      </div>
    </section>
  )
}
