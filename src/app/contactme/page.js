import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#A0C9D8] to-[#B078D8] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-12">
        <h1 className="text-4xl font-semibold text-center text-[#333333]">Contact Me</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-gray-700 text-justify">
              Feel free to reach out to me via the contact form or through my contact details below. I look forward to connecting with you.
            </p>
            <ul className="mt-6 space-y-4">
            <li className="flex items-center text-gray-700">
              <i className="fas fa-envelope mr-3"></i>
              <span>elafawan45@gmail.com</span>
            </li>

            <li className="flex items-center text-gray-700">
              <i className='fas fa-phone mr-3'></i>
              <span>+44 (0) 7825 059 801 (Phone)</span>
            </li>
              <li className="flex items-center text-gray-700">
                <i className="fab fa-whatsapp mr-3"></i>
                <span>+44 (0) 7389 840 969 (WhatsApp)</span>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-900">Send a Message</h2>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-800 focus:border-purple-800"
                  rows="4"
                  placeholder="Your Message"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-purple-800 text-white font-semibold rounded-lg shadow-md hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
