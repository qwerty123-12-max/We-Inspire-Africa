import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Gallery', href: '#Gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

const programs = [
  { name: 'Health and Violence Against Women & Children', href: '#programs' },
  { name: 'Livelihoods and Youth Employability', href: '#programs' },
  { name: 'Climate Change, Peace and Security', href: '#programs' },
  { name: 'Equitable Access to Quality Education', href: '#programs' },
  // { name: 'Sports & Wellness', href: '#programs' },
  // { name: 'Career Readiness', href: '#programs' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://web.facebook.com/profile.php?id=100090500571977', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/we_inspire_africa?fbclid=IwY2xjawQ4aiVleHRuA2FlbQIxMABicmlkETFadmliazByclFLR2JpeTI3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnhqjZxS3aqw94rCTo6ziS460-RA878iYa6Q5SJ-F2ksHf-SU91UQCxMQCEp_aem_ymOAdg9eCrGepzXNNrbF-Q', label: 'Instagram' },
  { icon: Twitter, href: 'https://x.com/We_Inspirefrica', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/we-inspire-africa-459232275/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/254725142221?text=Hello thank you for your interest how can I help you&body=Hi there, I would like to get in touch with you.', label: 'WhatsApp' },
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
                src="\images\we inspire logo.jpeg"
                alt="We Inspire Africa"
                className="w-10 h-10"
              />
              <span className="font-rubik font-medium text-white text-lg">
                We Inspire Africa
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
              <p>At Bamburi behind Masjid Noor, along Utange Road</p>
              <p>Mombasa, Bamburi</p>
              <p className="pt-2">
                <a
                  href="tel:+254725142221"
                  className="hover:text-coral transition-colors duration-300"
                >
                  (+254) 725-142-221
                </a>
              </p>
              <p>
                <a
                  href="https://wa.me/254725142221?text=Hello thank you for your interest how can I help you&body=Hi there, I would like to get in touch with you."
                  className="hover:text-coral transition-colors duration-300"
                >
                  Message us on WhatsApp
                </a>
              </p>
              <p>
                <a
                  href="mailto:inspireafrica001@gmail.com?subject=Hello thank you for your interest how can I help you&body=Hi there, I would like to get in touch with you."
                  className="hover:text-coral transition-colors duration-300"
                >
                  inspireafrica001@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © 2026 We Inspire Africa. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="/privacy-policy.html"
              className="text-white/50 hover:text-coral transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service.html"
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
