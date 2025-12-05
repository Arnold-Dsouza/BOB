import { useState } from 'react';
import { ChevronRight, Info, CreditCard } from 'lucide-react';

type CourseType = 'Backkurse' | 'Kochkurse' | 'Spezialkurse' | 'Workshops';

interface Course {
  id: string;
  title: string;
  type: CourseType;
  date: Date;
  color: string;
}

const mockCourses: Course[] = [
  { id: '1', title: 'Brot Backen Grundlagen', type: 'Backkurse', date: new Date(2024, 11, 15), color: '#F59E0B' },
  { id: '2', title: 'Italienische Pasta', type: 'Kochkurse', date: new Date(2024, 11, 18), color: '#10B981' },
  { id: '3', title: 'Weihnachtsgebäck', type: 'Spezialkurse', date: new Date(2024, 11, 20), color: '#EF4444' },
  { id: '4', title: 'Sauerteig Workshop', type: 'Workshops', date: new Date(2024, 11, 22), color: '#8B5CF6' },
  { id: '5', title: 'Französische Patisserie', type: 'Backkurse', date: new Date(2024, 11, 25), color: '#F59E0B' },
  { id: '6', title: 'Mediterrane Küche', type: 'Kochkurse', date: new Date(2024, 11, 28), color: '#10B981' },
  { id: '7', title: 'Kinderkochkurs Disney', type: 'Spezialkurse', date: new Date(2025, 0, 5), color: '#EF4444' },
  { id: '8', title: 'Brotkunst Workshop', type: 'Workshops', date: new Date(2025, 0, 10), color: '#8B5CF6' },
];

const courseTypes: { name: CourseType; color: string }[] = [
  { name: 'Backkurse', color: '#F59E0B' },
  { name: 'Kochkurse', color: '#10B981' },
  { name: 'Spezialkurse', color: '#EF4444' },
  { name: 'Workshops', color: '#8B5CF6' },
];

export function KurseSection() {
  const [selectedType, setSelectedType] = useState<CourseType | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = selectedType
    ? mockCourses.filter(c => c.type === selectedType)
    : mockCourses;

  const upcomingCourses = filteredCourses
    .sort((a, b) => a.date.getTime() - b.date.getTime())
    .slice(0, 8);

  const scrollToCourses = () => {
    const element = document.getElementById('kurse-overview');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kurse" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20 px-6">
      {/* Top Right Link */}
      <div className="absolute top-20 right-8">
        <button
          onClick={scrollToCourses}
          className="text-xl hover:opacity-70 transition-opacity underline"
        >
          Durchsuche unser Kursangebot
        </button>
      </div>

      <div id="kurse-overview" className="max-w-7xl mx-auto pt-20">
        {/* Course Type Filter */}
        <div className="flex gap-4 mb-8 flex-wrap justify-center">
          <button
            onClick={() => setSelectedType(null)}
            className={`px-6 py-3 rounded-full transition-all ${
              selectedType === null
                ? 'bg-black text-white'
                : 'bg-white hover:bg-gray-100'
            }`}
          >
            Alle Kurse
          </button>
          {courseTypes.map(type => (
            <button
              key={type.name}
              onClick={() => setSelectedType(type.name)}
              className={`px-6 py-3 rounded-full transition-all ${
                selectedType === type.name
                  ? 'text-white'
                  : 'bg-white hover:bg-gray-100'
              }`}
              style={{
                backgroundColor: selectedType === type.name ? type.color : undefined
              }}
            >
              {type.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Course List */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl mb-4">Nächste Kurse</h3>
              <div className="space-y-3">
                {upcomingCourses.map(course => (
                  <button
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="w-full text-left p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className="inline-block w-3 h-3 rounded-full mr-2"
                          style={{ backgroundColor: course.color }}
                        />
                        <span>{course.title}</span>
                      </div>
                      <span className="text-sm text-gray-600">
                        {course.date.toLocaleDateString('de-DE')}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <button className="mt-6 w-full py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors">
                Alle Kurse
              </button>
            </div>
          </div>

          {/* Right Side - Calendar */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-2xl mb-4">Kalender</h3>
              <div className="space-y-4">
                {/* Simple Calendar View */}
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map(day => (
                    <div key={day} className="p-2">{day}</div>
                  ))}
                  {Array.from({ length: 31 }).map((_, i) => {
                    const coursesOnDay = filteredCourses.filter(
                      c => c.date.getDate() === i + 1
                    );
                    return (
                      <div
                        key={i}
                        className="aspect-square p-2 rounded-lg relative"
                        style={{
                          backgroundColor: coursesOnDay.length > 0
                            ? coursesOnDay[0].color + '40'
                            : '#f3f4f6',
                          opacity: selectedType && coursesOnDay.length === 0 ? 0.3 : 1
                        }}
                      >
                        {i + 1}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6">
                <button
                  onClick={() => setShowInfo(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors"
                >
                  <Info className="w-4 h-4" />
                  Kurs Infos
                </button>
                <button
                  onClick={() => setShowBooking(true)}
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  Buchen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gift Banner and Contact Form - Side by Side */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Left - Gift Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-100 to-purple-100 p-12 flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <img
                src="https://images.unsplash.com/photo-1615201768474-4eb0a93e361d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwY2FyZCUyMHByZXNlbnR8ZW58MXx8fHwxNzY0NzUwNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Gift card"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="relative text-3xl text-center">Schenke jemanden eine unvergessliche Zeit</h2>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl mb-4">Firmenfeiern oder Raum mieten gerne in Kontakt treten</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Ihre Nachricht"
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Absenden
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl mb-4">Kurs Informationen</h3>
            <p className="mb-6">
              Unsere Kurse sind für alle Levels geeignet. Alle Materialien und Zutaten sind
              inklusive. Dauer: ca. 3-4 Stunden. Maximale Teilnehmerzahl: 12 Personen.
            </p>
            <button
              onClick={() => setShowInfo(false)}
              className="w-full py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Schließen
            </button>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl mb-4">Kurs buchen</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="E-Mail"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg">
                <option>Zahlungsmethode wählen</option>
                <option>Kreditkarte</option>
                <option>PayPal</option>
                <option>Überweisung</option>
              </select>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowBooking(false)}
                  className="flex-1 py-3 border-2 border-black rounded-full hover:bg-gray-100 transition-colors"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                >
                  Buchen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}