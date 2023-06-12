import React from 'react';

const Services = () => {
  const handlePurchase = (packageType) => {
    // Handle the purchase logic here
    console.log(`Package purchased: ${packageType}`);
  };

  return (
    <section id="services" className="py-8">
      <h2 className="text-3xl font-bold mb-6 mt-40 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg ml-8">
          <div className="p-8 ">
            <h3 className="text-2xl font-bold mb-4">Standard Package</h3>
            <p className="text-gray-700 mb-6">
              A great option to get started with a professional website.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>5 pages website</li>
              <li>Responsive design</li>
              <li>Basic SEO optimization</li>
              <li>1 custom domain</li>
            </ul>
            <div className="flex justify-center">
              <p className="text-2xl font-bold">499€</p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handlePurchase('Standard Package')}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
            <p className="text-gray-700 mb-6">
              Enhanced features for a more professional online presence.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>10 pages website</li>
              <li>Responsive design</li>
              <li>Advanced SEO optimization</li>
              <li>2 custom domains</li>
              <li>E-commerce functionality</li>
            </ul>
            <div className="flex justify-center">
              <p className="text-2xl font-bold">799€</p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handlePurchase('Premium Package')}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg mr-8">
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-4">Deluxe Package</h3>
            <p className="text-gray-700 mb-6">
              The ultimate package for a fully customized website experience.
            </p>
            <ul className="text-gray-700 mb-6">
              <li>Unlimited pages website</li>
              <li>Responsive design</li>
              <li>Advanced SEO optimization</li>
              <li>5 custom domains</li>
              <li>E-commerce functionality</li>
              <li>Content management system</li>
              <li>24/7 customer support</li>
            </ul>
            <div className="flex justify-center">
              <p className="text-2xl font-bold">1299€</p>
            </div>
            <div className="flex justify-center mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handlePurchase('Deluxe Package')}
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

