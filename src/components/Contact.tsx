import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert(`Thank you for your message, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Get In Touch</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {/*Type something */}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <div className="md:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Email</h4>
                    <p className="text-gray-600">jkarthikreddy2005@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-500 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Phone</h4>
                    <p className="text-gray-600">+91 8125773633</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-500 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-700">Location</h4>
                    <p className="text-gray-600">Hyderabad, Telangana, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-400 hover:bg-pink-500 text-white py-2 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;