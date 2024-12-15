import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import {Navbar, Tech, StarsCanvas } from "./components";
  // Lazy load components
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const Feedbacks = lazy(() => import('./components/Feedbacks'));
const Hero = lazy(() => import('./components/Hero'));
const Works = lazy(() => import('./components/Works'));

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-third bg-hero-pattern bg-cover bg-no-repeat bg-center">
        {/* Wrap Navbar and Hero in Suspense for lazy loading */}
        <Suspense fallback={<div className="spinner">Loading...</div>}>
          <Navbar />
          <Hero />
        </Suspense>

        <main>
          {/* Suspense for other components */}
          <Suspense fallback={<div className="spinner">Loading...</div>}>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
          </Suspense>
        </main>

        <div className="relative z-0">
          <Suspense fallback={<div className="spinner">Loading...</div>}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
