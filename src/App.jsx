import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import SidekickIcons from './components/SidekickIcons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import FAQ from './pages/faq';
import AppointmentPage from './pages/AppointmentPage';
import SitemapPage from './pages/SitemapPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Disclaimer from './pages/Disclaimer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1 pt-16 md:pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/book-appointment" element={<AppointmentPage />} />
          <Route path="/sitemap" element={<SitemapPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <BackToTop />
      <SidekickIcons />
    </div>
  )
}

export default App
