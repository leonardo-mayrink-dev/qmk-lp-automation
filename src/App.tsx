import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import WhatItIsNot from './components/WhatItIsNot';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Results from './components/Results';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Hero />
      <Problem />
      <Solution />
      <WhatItIsNot />
      <Services />
      <HowItWorks />
      <Results />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
