import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@youthcommunity.org',
    href: 'mailto:hello@youthcommunity.org',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Community Street, City, State 12345',
    href: '#',
  },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-coral">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 will-change-transform ${
            sectionVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Left Content */}
          <div>
            <span className="text-white/80 font-rubik font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-white mt-3 mb-6">Ready to Get Involved?</h2>
            <p className="text-white/90 text-lg leading-relaxed mb-10">
              Join our community of young changemakers. Fill out the form and
              we'll get back to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors duration-300">
                      <Icon className="text-white" size={22} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm mb-1">{item.label}</p>
                      <p className="text-white font-medium group-hover:underline">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-lg p-8 lg:p-10 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={32} />
                </div>
                <h3 className="text-navy mb-3">Message Sent!</h3>
                <p className="text-grey-text">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-navy font-medium mb-2 block">
                    Your Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-14 bg-light-gray border-0 focus:ring-2 focus:ring-coral"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-navy font-medium mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-14 bg-light-gray border-0 focus:ring-2 focus:ring-coral"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-navy font-medium mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how you'd like to get involved..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-light-gray border-0 focus:ring-2 focus:ring-coral resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 bg-coral hover:bg-navy text-white font-rubik font-medium text-base transition-colors duration-300"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
