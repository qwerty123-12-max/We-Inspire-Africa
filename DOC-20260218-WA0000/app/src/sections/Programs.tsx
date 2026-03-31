import { useEffect, useState } from 'react';
import {
  Heart,
  // Trophy,
  // Briefcase,
  ArrowRight,
  GraduationCapIcon,
  Globe,
  Book,
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const programs = [
  {
    icon: Heart,
    title: '1. ✊♀️ Health and Violence Against Women & Children',
    description:
      'Focuses on,Preventing gender-based violence (GBV), Providing health education (reproductive, mental health) and Supporting survivors with care and protection. 👉 Goal: Keep women and children safe, healthy, and protected',
    color: 'bg-purple-500',
    images: [
      '/images/istockphoto-1344182875-612x612.jpg',
      '/images/istockphoto-1437891818-612x612.jpg',
      '/images/istockphoto-2171678157-612x612.jpg',
      '/images/istockphoto-2248848595-612x612.jpg',
      '/images/program-health-2.jpg',
    ],
    caption: 'Health & safety for women and children',
  },
  {
    icon: GraduationCapIcon,
    title: '2.🎓 Livelihoods and Youth Employability',
    description:
      'Focuses on, Skills training, Job readiness and career support and Empowering youth to earn income. 👉 Goal: Help young people become financially independent.',
    color: 'bg-orange-500',
    images: [
      '/images/youth-483205465-612x612.jpg',
      '/images/youth-822491658-612x612.jpg',
      '/images/youth-1039882148-612x612.jpg',
      '/images/youth-1441191133-612x612.jpg',
      '/images/youth-2191998154-612x612.jpg',
    ],
    caption: 'Youth skills, employability & empowerment',
  },
  {
    icon: Globe,
    title: '3. 🌍 Climate Change, Peace and Security',
    description:
      'Focuses on, Environmental conservation and climate awareness, Promoting peaceful communities and Conflict resolution and resilience. 👉 Goal: Build safe, sustainable, and peaceful communities.',
    color: 'bg-green-500',
    images: [
      '/images/climate-1333718098-612x612.jpg',
      '/images/climate-1386715868-612x612.jpg',
      '/images/climate-1661126796-612x612.jpg',
      '/images/climate-2153045899-612x612.jpg',
      '/images/climate-2156894075-612x612.jpg',
    ],
    caption: 'Climate action, peace and community resilience',
  },
  {
    icon: Book,
    title: '4. 🤝📚 Equitable Access to Quality Education',
    description:
      'Focuses on, Providing equal opportunities for all students, Improving educational infrastructure and Resources and Supporting teachers with professional development. 👉 Goal: Ensure every student has access to high-quality education.',
    color: 'bg-red-500',
    images: [
      '/images/education-836284468-612x612.jpg',
      '/images/education-860021702-612x612.jpg',
      '/images/education-1393379238-612x612.jpg',
      '/images/education-1458179097-612x612.jpg',
      '/images/education-1494782653-612x612.jpg',
    ],
    caption: 'Equitable access to quality education',
  },
  // {
  //   icon: Trophy,
  //   title: 'Sports & Wellness',
  //   description:
  //     'Stay active and healthy with team sports, fitness programs, and wellness workshops.',
  //   color: 'bg-orange-500',
  // },
  // {
  //   icon: Briefcase,
  //   title: 'Career Readiness',
  //   description:
  //     'Prepare for your future with resume building, interview skills, and career exploration.',
  //   color: 'bg-teal-500',
  // },
];

export default function Programs() {
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: cardsRef, isVisible: cardsVisible } =
    useScrollAnimation<HTMLDivElement>();
  const [currentImageIndexes, setCurrentImageIndexes] =
    useState<number[]>(programs.map(() => 0));
  const [pausedCards, setPausedCards] =
    useState<boolean[]>(programs.map(() => false));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndexes((prev) =>
        prev.map((value, idx) =>
          pausedCards[idx]
            ? value
            : (value + 1) % programs[idx].images.length
        )
      );
    }, 2500);

    return () => clearInterval(interval);
  }, []);

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
                onMouseEnter={() =>
                  setPausedCards((prev) =>
                    prev.map((paused, idx) => (idx === index ? true : paused))
                  )
                }
                onMouseLeave={() =>
                  setPausedCards((prev) =>
                    prev.map((paused, idx) => (idx === index ? false : paused))
                  )
                }
                className={`group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:shadow-card hover:-translate-y-2 will-change-transform ${
                  cardsVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Picture */}
                <div className="relative h-56 sm:h-64 overflow-hidden rounded-t-3xl">
                  {program.images.map((imgSrc, imgIndex) => (
                    <img
                      key={imgSrc}
                      src={imgSrc}
                      alt={`${program.title} image ${imgIndex + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
                      style={{
                        opacity:
                          imgIndex === currentImageIndexes[index] ? 1 : 0,
                        zIndex: imgIndex === currentImageIndexes[index] ? 20 : 10,
                      }}
                    />
                  ))}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-sm font-semibold text-white">
                      {program.caption}
                    </p>
                    <div className="mt-3 flex justify-center gap-2">
                      {program.images.map((_, dotIndex) => (
                        <button
                          key={dotIndex}
                          type="button"
                          onClick={() =>
                            setCurrentImageIndexes((prev) =>
                              prev.map((value, idx) =>
                                idx === index ? dotIndex : value
                              )
                            )
                          }
                          className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                            dotIndex === currentImageIndexes[index]
                              ? 'bg-white'
                              : 'bg-white/40'
                          }`}
                          aria-label={`Show image ${dotIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8">
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
