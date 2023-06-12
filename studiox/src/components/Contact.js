import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="AboutUs">
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
      <div className="mb-4 mt-40">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="border border-gray-300 rounded-md p-2 w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="border border-gray-300 rounded-md p-2 w-full h-32"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mb-40"
      >
        Submit
      </button>
    </form>
  </section>
  );
};

export default ContactForm;

