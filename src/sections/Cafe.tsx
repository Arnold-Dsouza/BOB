const sentences = [
  'Café – Handwerk, Herz und Genuss.',
  'Mehr als Kaffee: Begegnung, Geschmack, Gemeinschaft.',
  'Dein Ort für Pause und Inspiration.'
]

export default function Cafe() {
  const sentence = sentences[Math.floor(Math.random() * sentences.length)]
  return (
    <section id="cafe" className="section hero">
      <h2 className="headline">{sentence}</h2>
      <p className="sub">Weitere Bereiche:</p>
      <div className="chips">
        <a href="/#backshop" className="chip">Backladen</a>
        <a href="/#kurse" className="chip">Kurse</a>
      </div>
    </section>
  )
}
