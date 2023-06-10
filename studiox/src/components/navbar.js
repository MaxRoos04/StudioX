import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl text-white font-bold">Website Designing Company</h1>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <a className="text-white hover:text-gray-200" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-white hover:text-gray-200" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
