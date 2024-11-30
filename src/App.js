import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Subscribe from "./components/Subscribe";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <Testimonials />
              <Subscribe />
              <ContactUs />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
