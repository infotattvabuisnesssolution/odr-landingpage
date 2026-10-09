import React from "react";
import { Routes, Route } from "react-router-dom";
import "./Style.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import OdrAct from "./pages/OdrAct";
import OdrRules from "./pages/OdrRules";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/odr-act" element={<OdrAct />} />
          <Route path="/rules" element={<OdrRules />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Floating WhatsApp CTA */}
      <a href="https://wa.me/918280057771" className="whatsapp-float" target="_blank" aria-label="Chat on WhatsApp">
          <i className="fab fa-whatsapp"></i>
      </a>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
    </div>
  );
}

export default App;
