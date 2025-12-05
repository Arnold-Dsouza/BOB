import { ImageWithFallback } from './figma/ImageWithFallback';

const events = [
  {
    title: 'Location mieten',
    subtitle: 'Ihre Projekte zum Leben erwecken',
    description: 'Nach und vor der Café Öffnungszeiten Kurse oder Seminare halten',
    image: 'https://images.unsplash.com/photo-1760890518061-6e7e614cf67f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHNwYWNlJTIwdmVudWV8ZW58MXx8fHwxNzY0ODQ3MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Eventlocation mieten',
    subtitle: 'Firmenfeiern oder Teamevents mit Catering',
    description: 'Für unvergessliche Momente',
    image: 'https://images.unsplash.com/photo-1677129661713-14a507086c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGNhdGVyaW5nfGVufDF8fHx8MTc2NDc2MjY3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Spezialevents',
    subtitle: 'Kindergeburtstag-Back/Kochkurse mit Themen Wunsch (Disney)',
    description: 'Wir erfüllen jeden Kinder und Erwachsene Wunsch',
    image: 'https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYmlydGhkYXklMjBwYXJ0eXxlbnwxfHx8fDE3NjQ3NjQyNTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function EventsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl text-center mb-16">Jedes Event wird unvergesslich</h2>

        <div className="space-y-0">
          {events.map((event, index) => (
            <div key={index}>
              <div className="relative overflow-hidden rounded-2xl h-80 group">
                {/* Background Image */}
                <ImageWithFallback
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-3xl mb-2">{event.title}</h3>
                  <p className="text-xl mb-1">{event.subtitle}</p>
                  <p className="text-sm opacity-90">{event.description}</p>
                </div>
              </div>
              
              {/* Divider Line */}
              {index < events.length - 1 && (
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
