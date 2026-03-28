import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '#contact' },
];

const programs = [
  { name: 'Leadership', href: '#programs' },
  { name: 'Creative Arts', href: '#programs' },
  { name: 'STEM', href: '#programs' },
  { name: 'Community Service', href: '#programs' },
  { name: 'Sports', href: '#programs' },
  { name: 'Careers', href: '#programs' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      ref={ref}
      className={`bg-navy pt-20 pb-8 transition-all duration-1000 will-change-transform ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          {/* About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.png"
                alt="Youth Community"
                className="w-10 h-10"
              />
              <span className="font-rubik font-medium text-white text-lg">
                Youth Community
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Empowering young people to discover their potential, develop
              leadership skills, and create positive change in their communities.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:bg-coral hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-white font-rubik font-semibold mb-6">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-coral transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-white font-rubik font-semibold mb-6">
              Programs
            </h5>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(program.href);
                    }}
                    className="text-white/70 hover:text-coral transition-colors duration-300"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-white font-rubik font-semibold mb-6">
              Contact Us
            </h5>
            <div className="space-y-4 text-white/70">
              <p>123 Community Street</p>
              <p>City, State 12345</p>
              <p className="pt-2">
                <a
                  href="tel:+15551234567"
                  className="hover:text-coral transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@youthcommunity.org"
                  className="hover:text-coral transition-colors duration-300"
                >
                  hello@youthcommunity.org
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 Youth Community Organization. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/50 hover:text-coral transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/50 hover:text-coral transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
