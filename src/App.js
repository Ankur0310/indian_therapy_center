import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';


function App() {
    return (
        <div>
            <Header />
            <Hero/>
            <About />
            <Services />
            <Testimonials />
            <Subscribe />
            <ContactUs/>
            <Footer />
        </div>
    );
}

export default App;