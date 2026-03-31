import { useEffect, useState } from 'react';
import { ArrowRight, Users, Calendar, Building2 } from 'lucide-react';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/WhatsApp Image 2026-03-30 at 13.43.34.jpeg"
          alt="we inspire africa background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isLoaded
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-coral/20 text-coral px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-coral rounded-full animate-pulse" />
              Empowering the Next Generation
            </div>

            <h1 className="text-white mb-6">
              Empowering Youth,
              <br />
              <span className="text-coral">Building Tomorrow</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              Join our vibrant community where young people discover their
              potential, develop leadership skills, and create lasting positive
              change.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection('#contact')}
                className="btn-primary group"
              >
                Join Our Community
                <ArrowRight
                  size={18}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollToSection('#programs')}
                className="btn-secondary"
              >
                Explore Programs
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center">
                  <Users className="text-coral" size={24} />
                </div>
                <div>
                  <p className="text-white font-rubik font-semibold text-2xl">
                    70+
                  </p>
                  <p className="text-white/60 text-sm">Current Youth Members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center">
                  <Calendar className="text-coral" size={24} />
                </div>
                <div>
                  <p className="text-white font-rubik font-semibold text-2xl">
                    1+
                  </p>
                  <p className="text-white/60 text-sm">Annual Events</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-coral/20 rounded-lg flex items-center justify-center">
                  <Building2 className="text-coral" size={24} />
                </div>
                <div>
                  <p className="text-white font-rubik font-semibold text-2xl">
                    6+
                  </p>
                  <p className="text-white/60 text-sm">Partner Orgs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ${
              isLoaded
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-coral/20 rounded-2xl blur-2xl" />
              <img
                src="/images/profile.jpg"
                alt="Youth collaborating"
                className="relative rounded-lg shadow-2xl w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-coral rounded-full flex items-center justify-center">
                  <span className="text-white font-rubik font-bold text-xl">
                    5
                  </span>
                </div>
                <div>
                  <p className="text-navy font-rubik font-semibold">
                    Years of
                  </p>
                  <p className="text-grey-text text-sm">Impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-coral rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
