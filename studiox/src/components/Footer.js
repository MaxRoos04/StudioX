import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-between items-center md:flex-row md:items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">StudioX</h3>
          <p className="text-gray-300">Your Creative Design Studio</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="#"
            className="text-gray-300 hover:text-white mr-4"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white"
          >
            Terms of Service
          </a>
        </div>
      </div>
      <p className="text-center text-gray-300 text-sm mt-8">
        &copy; {currentYear} StudioX. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
