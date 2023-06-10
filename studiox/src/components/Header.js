import React from 'react';
import headerImage from '../assets/images/header-image.jpg';


const Header = () => {
  return (
    <header className="relative bg-gray-900 overflow-hidden">
      <div className="relative z-10 px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-white leading-tight sm:text-6xl">
          Welcome to <span className="text-blue-500">StudioX</span>
        </h1>
        <p className="mt-4 text-xl text-white">
          We Design <span className="text-blue-500">Beautiful Websites</span> that Inspire.
        </p>
        <a
          href="#contact"
          className="inline-block mt-8 px-6 py-3 text-lg font-medium text-white uppercase bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Get Started
        </a>
      </div>
      <div className="absolute inset-0 object-cover w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={headerImage}
          alt="Header Background"
        />
      </div>
    </header>
  );
};

export default Header;
