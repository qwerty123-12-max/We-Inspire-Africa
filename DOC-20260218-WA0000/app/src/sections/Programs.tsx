import {
  Users,
  Palette,
  Cpu,
  Heart,
  Trophy,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const programs = [
  {
    icon: Users,
    title: 'Leadership Development',
    description:
      'Build confidence and learn essential leadership skills through hands-on projects and mentorship.',
    color: 'bg-blue-500',
  },
  {
    icon: Palette,
    title: 'Creative Arts',
    description:
      'Express yourself through music, visual arts, theater, and digital media programs.',
    color: 'bg-purple-500',
  },
  {
    icon: Cpu,
    title: 'STEM Innovation',
    description:
      'Explore technology, coding, robotics, and scientific discovery with expert guidance.',
    color: 'bg-green-500',
  },
  {
    icon: Heart,
    title: 'Community Service',
    description:
      'Make a difference through volunteer projects that address local needs and challenges.',
    color: 'bg-red-500',
  },
  {
    icon: Trophy,
    title: 'Sports & Wellness',
    description:
      'Stay active and healthy with team sports, fitness programs, and wellness workshops.',
    color: 'bg-orange-500',
  },
  {
    icon: Briefcase,
    title: 'Career Readiness',
    description:
      'Prepare for your future with resume building, interview skills, and career exploration.',
    color: 'bg-teal-500',
  },
];

export default function Programs() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="programs" className="section-padding bg-light-gray">
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
            What We Offer
          </span>
          <h2 className="mt-3 mb-6">Our Programs</h2>
          <p className="text-grey-text text-lg">
            Discover opportunities designed to inspire, educate, and empower
            young people in our community.
          </p>
        </div>

        {/* Programs Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-lg p-8 shadow-sm hover:shadow-card transition-all duration-500 hover:-translate-y-2 will-change-transform ${
                  cardsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <h4 className="mb-4 group-hover:text-coral transition-colors duration-300">
                  {program.title}
                </h4>
                <p className="text-grey-text mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center text-coral font-medium group/link"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover/link:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
