import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import PreviousWork from './components/PreviousWork';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <AboutUs />
      <Services />
      <PreviousWork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
