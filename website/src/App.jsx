import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Homepage';
import Logistics from './pages/Logistics';
import Commodities from './pages/Commodities';
import Hypermedia from './pages/Hypermedia';
import Careers from './pages/Careers';
import { Toaster } from 'sonner';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
// Placeholder components for routes not fully detailed above to prevent errors
const Placeholder = ({ title }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 min-h-screen">
    <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
    <p className="mt-4 text-slate-600">This page is under construction based on the company profile.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-slate-900 bg-white niveau-font">
                  <style jsx>{`
            /* Niveau Grotesk Font Face - Regular */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/NiveauGroteskRegular.ttf") format("truetype");
              font-weight: 400;
              font-style: normal;
              font-display: swap;
            }

            /* Niveau Grotesk Font Face - Bold */
            @font-face {
              font-family: "Niveau Grotesk";
              src: url("./niveau/Niveau Grotesk Bold.ttf") format("truetype");
              font-weight: 700;
              font-style: normal;
              font-display: swap;
            }

            /* Font utility classes */
            .grift-font {
              font-family: "Grift", "Inter", "Segoe UI", Tahoma, Geneva, Verdana,
                sans-serif;
            }

            .niveau-font {
              font-family: "Niveau Grotesk", "Inter", "Segoe UI", Tahoma, Geneva,
                Verdana, sans-serif;
            }

            body {
              overflow-x: hidden;
            }

            /* Smooth scrolling */
            html {
              scroll-behavior: smooth;
            }
          `}</style>
          <ScrollToTop />
        <Toaster position="top-center" />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/commodities" element={<Commodities />} />
            {/* Placeholder routes for other pages */}
            <Route path="/shipping" element={<Placeholder title="Shipping" />} />
            <Route path="/hypermedia" element={<Hypermedia />} />
            <Route path="/freight" element={<Placeholder title="Freight" />} />
            <Route path="/supplychain" element={<Placeholder title="Supply Chain" />} />
            <Route path="/privacy-policy" element={<Placeholder title="Privacy Policy" />} />
            <Route path="/terms-of-service" element={<Placeholder title="Terms of Service" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;