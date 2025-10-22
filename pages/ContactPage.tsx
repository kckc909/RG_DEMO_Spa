
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-text-primary mb-4">Get in Touch</h1>
      <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
        We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-lg">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info & Map */}
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Contact Information</h2>
          <div className="space-y-4 text-text-secondary">
            <p><strong>Address:</strong> 123 Wellness Lane, Tranquil City, 12345</p>
            <p><strong>Email:</strong> contact@serenityspa.com</p>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Hours:</strong> Mon - Fri: 9am - 8pm | Sat - Sun: 10am - 6pm</p>
          </div>
          <div className="mt-6">
            <img src="https://picsum.photos/600/400?random=15" alt="Map to spa" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
