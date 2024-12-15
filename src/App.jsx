import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import {Navbar, Tech, StarsCanvas, About, Contact, Experience, Feedbacks, Hero, Works } from "./components";

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
