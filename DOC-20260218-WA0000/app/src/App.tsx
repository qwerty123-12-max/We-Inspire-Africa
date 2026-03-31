import { useEffect, useState } from 'react';
import Navigation from '@/sections/Navigation';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Programs from '@/sections/Programs';
import Stats from '@/sections/Stats';
import Gallery from '@/sections/Gallery';
import Testimonials from '@/sections/Testimonials';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import './App.css';

function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    window.localStorage.setItem('cookieConsent', 'accepted');
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Programs />
        <Stats />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

      {showCookieBanner && (
        <div
          style={{
            position: 'fixed',
            left: '1rem',
            right: '1rem',
            bottom: '1rem',
            zIndex: 9999,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            padding: '1.25rem',
            borderRadius: '1.5rem',
            boxShadow: '0 25px 50px rgba(15, 23, 42, 0.15)',
            border: '1px solid rgba(148, 163, 184, 0.2)',
          }}
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-900">
                We use cookies to improve your experience. By continuing to browse the site, you accept our cookie policy.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={acceptCookies}
                className="inline-flex items-center justify-center rounded-full bg-[#0f1f49] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Accept cookies
              </button>
              <button
                type="button"
                onClick={() => setShowCookieBanner(false)}
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
