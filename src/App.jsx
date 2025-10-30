import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* SEO basics for SPA */}
      <div className="sr-only">
        <h1>Justvy Global Innovations LLP — VPS Hosting, Custom Cloud, Software Development</h1>
        <p>Build trust and scale with our VPS plans, bespoke cloud infrastructure, and elite software development services.</p>
      </div>

      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
