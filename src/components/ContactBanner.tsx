export function ContactBanner() {
  return (
    <section className="py-12 px-6 bg-gradient-to-r from-indigo-100 to-purple-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl mb-6">Haben Sie Fragen?</h2>
        <p className="text-lg mb-8">
          Kontaktieren Sie uns für individuelle Anfragen zu Events, Kursen oder Raumvermietung.
        </p>
        <a
          href="mailto:info@example.com"
          className="inline-block px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
        >
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}
