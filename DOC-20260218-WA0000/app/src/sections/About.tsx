import { Check } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
// import './About.css';

const features = [
  'Health and Violence Against Women & Children',
  'Mentorship from experienced community leaders',
  'Skill-building workshops and training programs',
  'Livelihoods and Youth Employability',
  'Networking events and social activities',
  'Climate Change, Peace and Security',
  'Equitable Access to Quality Education',
];

export default function About() {
  const { ref: imageRef, isVisible: imageVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation<HTMLDivElement>();

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div
            ref={imageRef}
            className={`relative transition-all duration-1000 will-change-transform ${
              imageVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-24'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-coral/10 rounded-2xl blur-xl" />
              <img
                src="/images/profile1.jpg"
                alt="Youth workshop"
                className="relative rounded-lg shadow-xl w-full object-cover"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-navy text-white rounded-lg p-6 shadow-xl">
                <p className="font-rubik font-bold text-4xl text-coral">5+</p>
                <p className="text-white/80 text-sm">Years of</p>
                <p className="text-white/80 text-sm">Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`transition-all duration-1000 delay-200 will-change-transform ${
              contentVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-24'
            }`}
          >
            <span className="text-coral font-rubik font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 mb-6">Our vision</h2>
            <p className="text-grey-text text-lg leading-relaxed mb-8">
              A society where girls & young women lead healthy lives.
            </p>
            <h2 className="mt-3 mb-6">Our Mission</h2>
            <p className="text-grey-text text-lg leading-relaxed mb-8">
              We strive to inspire, empower & protect girls and young women into safety and self-sustainable livelyhoods.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 will-change-transform ${
                    contentVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ '--transition-delay': `${300 + index * 100}ms` } as React.CSSProperties}
                >
                  <div className="w-6 h-6 bg-coral/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="text-coral" size={14} />
                  </div>
                  <span className="text-navy font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a href="#programs" className="btn-primary">
                Discover Our Programs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
