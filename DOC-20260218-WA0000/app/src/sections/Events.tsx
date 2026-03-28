import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const upcomingEvents = [
  {
    date: 'Mar 22',
    title: 'Community Clean-Up Day',
    time: '9:00 AM - 1:00 PM',
    location: 'Central Park',
  },
  {
    date: 'Apr 5',
    title: 'Creative Arts Showcase',
    time: '6:00 PM - 9:00 PM',
    location: 'Community Center',
  },
  {
    date: 'Apr 12',
    title: 'Career Fair & Networking',
    time: '10:00 AM - 4:00 PM',
    location: 'Downtown Convention Hall',
  },
  {
    date: 'Apr 20',
    title: 'Spring Sports Tournament',
    time: '8:00 AM - 6:00 PM',
    location: 'Youth Sports Complex',
  },
];

export default function Events() {
  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="events" className="section-padding bg-white">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className={`transition-all duration-1000 will-change-transform ${
            sectionVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="text-coral font-rubik font-medium text-sm uppercase tracking-wider">
                Get Involved
              </span>
              <h2 className="mt-3">Upcoming Events</h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center text-coral font-medium mt-4 md:mt-0 group"
            >
              View All Events
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Featured Event */}
            <div className="group relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/event-leadership.jpg"
                alt="Youth Leadership Summit"
                className="w-full h-full object-cover min-h-[400px] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
              
              {/* Date Badge */}
              <div className="absolute top-6 left-6 bg-coral text-white rounded-lg p-4 text-center">
                <p className="font-rubik font-bold text-2xl">15</p>
                <p className="text-sm uppercase">Mar</p>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full mb-4">
                  Featured Event
                </span>
                <h3 className="text-white text-2xl md:text-3xl mb-3">
                  Youth Leadership Summit 2026
                </h3>
                <p className="text-white/80 mb-6">
                  A day-long conference bringing together young leaders from
                  across the region for workshops, networking, and inspiration.
                </p>
                <div className="flex flex-wrap gap-4 text-white/70 text-sm">
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    9:00 AM - 5:00 PM
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    Grand Convention Center
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Events List */}
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex gap-4 bg-light-gray rounded-lg p-5 hover:bg-white hover:shadow-card transition-all duration-300 group cursor-pointer will-change-transform ${
                    sectionVisible
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  {/* Date */}
                  <div className="flex-shrink-0 w-16 h-16 bg-navy text-white rounded-lg flex flex-col items-center justify-center">
                    <span className="font-rubik font-bold text-lg">
                      {event.date.split(' ')[1]}
                    </span>
                    <span className="text-xs uppercase">
                      {event.date.split(' ')[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h5 className="group-hover:text-coral transition-colors duration-300 mb-2">
                      {event.title}
                    </h5>
                    <div className="flex flex-wrap gap-3 text-grey-text text-sm">
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {event.location}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="text-coral" size={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
