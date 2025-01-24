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
    <div className="container flex justify-center items-center bg-gray-50 min-h-screen p-8 -mb-2">
      <div className="bg-white shadow-lg rounded-lg p-8 border  w-full max-w-2xl">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-6 text-red-700">Contact Support</h2>
          <p className="text-base text-gray-700 mb-6">
            If you have issues or questions, our support team at <span className="font-semibold text-red-600">Coding Age</span> is here to help. Fill out the form, and we will get back to you shortly.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
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
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="relative left-80 bg-gray-700 text-white px-4 py-2 w-[40%] rounded hover:bg-gray-800 w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;
