import React from 'react';
import AboutUS from '../assets/images/AboutUs.jpg';

const AboutUs = () => {
  return (
    <section id="about" className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
          <img
          className="rounded-lg"
          src={AboutUS}
          alt="About Us" 
          />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h3 className="text-2xl font-bold mb-4 mt-20">Who We Are</h3>
            <p className="text-gray-700 mb-6">
              StudioX is a leading website designing company dedicated to creating stunning and
              user-friendly websites for businesses of all sizes. We combine innovative design
              concepts with cutting-edge technologies to deliver exceptional digital experiences.
            </p>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-6">
              Our mission is to help businesses establish a strong online presence by providing
              top-notch website design and development services. We strive to understand our
              clients' goals and deliver tailored solutions that align with their brand vision and
              objectives.
            </p>
            <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
            <ul className="text-gray-700">
              <li>Experienced team of web designers and developers</li>
              <li>Customized solutions to meet your unique requirements</li>
              <li>Attention to detail and focus on user experience</li>
              <li>Timely project delivery and efficient communication</li>
              <li>Transparent pricing and competitive packages</li>
              <li>Commitment to client satisfaction and ongoing support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
