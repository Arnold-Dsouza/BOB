import { useMemo, useState } from 'react'
import { useEffect } from 'react'

const types = ['Brot', 'Kuchen', 'Kinder', 'Fortgeschrittene']
const sampleCourses = Array.from({ length: 24 }).map((_, i) => ({
  id: i + 1,
  title: `Kurs ${i + 1}`,
  type: types[i % types.length],
  date: new Date(Date.now() + i * 86400000).toISOString()
}))

export default function Courses() {
  const [activeType, setActiveType] = useState<string | null>(null)
  const [infoOpen, setInfoOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const [selected, setSelected] = useState<typeof sampleCourses[0] | null>(null)
  const filtered = useMemo(() => (activeType ? sampleCourses.filter(c => c.type === activeType) : sampleCourses), [activeType])
  const nextEight = useMemo(() => filtered.slice(0, 8), [filtered])

  return (
    <section id="kurse" className="section">
      <div className="row">
        <div className="col-right">
          <a href="/#kurse-overview" className="link">Durchsuche unser Kursangebot</a>
        </div>
      </div>

      <div id="kurse-overview" className="row">
        <div className="col">
          <div className="types-row">
            {types.map(t => (
              <button key={t} className={"chip" + (activeType === t ? ' chip-active' : '')} onClick={() => setActiveType(activeType === t ? null : t)}>{t}</button>
            ))}
          </div>

          <h3>Nächste Termine</h3>
          <ul className="list">
            {nextEight.map(c => (
              <li key={c.id}>
                <strong>{c.title}</strong> · <span>{c.type}</span> · <time>{new Date(c.date).toLocaleDateString()}</time>
                <button className="btn" style={{ marginLeft: 8 }} onClick={() => { setSelected(c); setInfoOpen(true) }}>Infos</button>
                <button className="btn" style={{ marginLeft: 8 }} onClick={() => { setSelected(c); setBookOpen(true) }}>Buchen</button>
              </li>
            ))}
          </ul>
          <button className="btn">alle Kurse</button>
        </div>

        <div className="col calendar">
          <div className="calendar-grid">
            {sampleCourses.slice(0, 28).map((c) => (
              <div key={c.id} className={"calendar-cell" + (activeType && activeType !== c.type ? ' muted' : '')}>
                <span className="badge">{c.type}</span>
                <time>{new Date(c.date).toLocaleDateString()}</time>
              </div>
            ))}
          </div>
          <div className="actions">
            <button className="btn" onClick={() => setInfoOpen(true)}>Kurse Infos</button>
            <button className="btn primary" onClick={() => setBookOpen(true)}>Buchen</button>
          </div>
        </div>
      </div>

      <div className="cta-row">
        <div className="banner">
          <h3>Schenke jemanden eine unvergessliche Zeit</h3>
        </div>
        <div className="contact">
          <h4>Firmenfeiern oder Raum mieten gerne in Kontakt treten</h4>
          <form className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea placeholder="Nachricht" />
            <button className="btn">Senden</button>
          </form>
        </div>
      </div>

      {infoOpen && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <h4>Kursinfos</h4>
            {selected ? (
              <p>
                <strong>{selected.title}</strong> · {selected.type} ·{' '}
                <time>{new Date(selected.date).toLocaleString()}</time>
              </p>
            ) : (
              <p>Wähle einen Kurs aus der Liste.</p>
            )}
            <button className="btn" onClick={() => setInfoOpen(false)}>Schließen</button>
          </div>
        </div>
      )}

      {bookOpen && (
        <div className="modal" role="dialog" aria-modal="true">
          <div className="modal-content">
            <h4>Buchung</h4>
            <form className="form" onSubmit={(e) => { e.preventDefault(); alert('Buchungsanfrage gesendet'); setBookOpen(false) }}>
              <input required type="text" placeholder="Name" />
              <input required type="email" placeholder="E-Mail" />
              <input type="tel" placeholder="Telefon" />
              <textarea placeholder="Nachricht" />
              <button className="btn primary" type="submit">Senden</button>
              <button className="btn" type="button" onClick={() => setBookOpen(false)}>Abbrechen</button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
