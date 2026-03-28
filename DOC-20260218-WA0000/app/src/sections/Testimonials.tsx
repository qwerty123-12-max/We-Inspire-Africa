import { Quote } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const testimonials = [
  {
    quote:
      "This organization changed my life. I found my voice, made incredible friends, and discovered my passion for community service.",
    name: 'Sarah M.',
    age: 19,
    role: 'Youth Member',
    image: '/images/avatar-sarah.jpg',
  },
  {
    quote:
      "The mentorship I received here helped me land my dream internship. The connections I made are invaluable.",
    name: 'Marcus T.',
    age: 22,
    role: 'Alumni',
    image: '/images/avatar-marcus.jpg',
  },
  {
    quote:
      "I love how youth are truly in charge here. My ideas matter, and I've learned so much about leadership and teamwork.",
    name: 'Aisha K.',
    age: 17,
    role: 'Youth Leader',
    image: '/images/avatar-aisha.jpg',
  },
];

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="testimonials" className="section-padding bg-light-gray">
      <div className="container-custom">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 will-change-transform ${
            headerVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-coral font-rubik font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 mb-6">What Our Members Say</h2>
          <p className="text-grey-text text-lg">
            Hear from the young people whose lives have been transformed by our
            programs and community.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-card transition-all duration-500 relative will-change-transform ${
                cardsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-coral rounded-full flex items-center justify-center">
                <Quote className="text-white" size={18} />
              </div>

              {/* Quote */}
              <p className="text-navy text-lg leading-relaxed mb-8 pt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-rubik font-semibold text-navy">
                    {testimonial.name}, {testimonial.age}
                  </p>
                  <p className="text-grey-text text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
