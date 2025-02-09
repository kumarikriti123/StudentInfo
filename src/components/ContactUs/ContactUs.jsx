import React, { useState } from 'react';

function ContactSupport() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Support message sent!');
  };

  return (
    <div className="mt-10 flex flex-col items-center justify-center bg-gray-50 min-h-screen px-6 sm:px-8 py-12">
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-red-700 text-center">Contact Support</h2>
        <p className="text-base text-gray-700 mb-6 text-center">
          If you have issues or questions, our support team at <span className="font-semibold text-red-600">Coding Age</span> is here to help.
          Fill out the form, and we will get back to you shortly.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-red-500"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-gray-700 text-white px-4 py-2 rounded-lg w-full hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;
