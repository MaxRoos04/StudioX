import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Services from './components/Services';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Contact />
    </div>
  );
};

export default App;
