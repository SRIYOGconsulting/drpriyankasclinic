import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/Header';
import SiteFooter from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SidekickIcons from './components/SidekickIcons';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Appointment from './pages/Appointment';
import Sitemap from './pages/Sitemap';
import Privacy from './pages/Privacy';
import Tos from './pages/Tos';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/404';
import Emergency from './pages/Emergency';
import Testimonials from './pages/Testimonials';

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
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-of-service" element={<Tos />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/testimonials" element={<Testimonials />} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <BackToTop />
      <SidekickIcons />
    </div>
  )
}

export default App
