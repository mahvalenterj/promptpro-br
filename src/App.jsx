import React from 'react';
import {
  BackgroundEffects,
  Navbar,
  Hero,
  StatsBar,
  DorSection,
  NichosSection,
  IncludesSection,
  DepoimentosSection,
  OfertaSection,
  FAQSection,
  FooterCTA,
  Footer,
} from './components/sections';
import { ExitIntentPopup } from './components/ExitIntentPopup/ExitIntentPopup';
import './styles/global.css';

/**
 * App Component - Layout principal do PromptProBR
 * Orquestra todos os componentes de seção em um fluxo linear
 */
function App() {
  return (
    <>
      <BackgroundEffects />

      <Navbar />

      <main role="main">
        <Hero />
        <StatsBar />
        <DorSection />
        <NichosSection />
        <IncludesSection />
        <DepoimentosSection />
        <OfertaSection />
        <FAQSection />
        <FooterCTA />
      </main>

      <Footer />

      <ExitIntentPopup />
    </>
  );
}

export default App;
