import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustStats from './components/TrustStats.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import Capabilities from './components/Capabilities.jsx';
import Architecture from './components/Architecture.jsx';
import Scenarios from './components/Scenarios.jsx';
import TechSpecs from './components/TechSpecs.jsx';
import Comparison from './components/Comparison.jsx';
import Solutions from './components/Solutions.jsx';
import Reliability from './components/Reliability.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import MotionSystem from './components/MotionSystem.jsx';

function App() {
  return (
    <>
      <MotionSystem />
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <FeatureGrid />
        <ProductShowcase />
        <Capabilities />
        <Architecture />
        <Scenarios />
        <TechSpecs />
        <Comparison />
        <Solutions />
        <Reliability />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
