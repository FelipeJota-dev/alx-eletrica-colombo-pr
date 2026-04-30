import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import SocialCTA from './components/SocialCTA';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RealTimeNotification from './components/RealTimeNotification';
import Popup from './components/Popup';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white font-sans overflow-x-hidden selection:bg-[#FF1F1F] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Gallery />
        <SocialCTA />
        <Reviews />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <RealTimeNotification />
      <Popup />
      <WhatsAppButton />
    </div>
  );
}
