import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/Header';
import SiteFooter from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import SidekickIcons from './components/SidekickIcons';
import PageTitle from './components/PageTitle';
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
import RoadBlock from './components/RoadBlock';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <RoadBlock />
      <ScrollToTop />
      <SiteHeader />
      <main className="flex-1 pt-16 md:pt-24">
        <Routes>
          <Route path="/" element={<><PageTitle title="Home" /><Home /></>} />
          <Route path="/about" element={<><PageTitle title="About Us" /><About /></>} />
          <Route path="/services" element={<><PageTitle title="Our Services" /><Services /></>} />
          <Route path="/gallery" element={<><PageTitle title="Gallery" /><Gallery /></>} />
          <Route path="/contact" element={<><PageTitle title="Contact Us" /><Contact /></>} />
          <Route path="/faq" element={<><PageTitle title="FAQs" /><Faq /></>} />
          <Route path="/appointment" element={<><PageTitle title="Book an Appointment" /><Appointment /></>} />
          <Route path="/sitemap" element={<><PageTitle title="Sitemap" /><Sitemap /></>} />
          <Route path="/privacy" element={<><PageTitle title="Privacy Policy" /><Privacy /></>} />
          <Route path="/tos" element={<><PageTitle title="Terms of Service" /><Tos /></>} />
          <Route path="/disclaimer" element={<><PageTitle title="Disclaimer" /><Disclaimer /></>} />
          <Route path="/emergency" element={<><PageTitle title="Emergency" /><Emergency /></>} />
          <Route path="/testimonials" element={<><PageTitle title="Testimonials" /><Testimonials /></>} />
          {/* Catch-all route for 404 */}
          <Route path="*" element={<><PageTitle title="Page Not Found" /><NotFound /></>} />
        </Routes>
      </main>
      <SiteFooter />
      <BackToTop />
      <SidekickIcons />
    </div>
  );
}

export default App;