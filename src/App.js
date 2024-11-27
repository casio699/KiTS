import React from 'react';
import { ShoppingBag, Clock, Calendar, Download, Gift, Heart, Coffee, Mail, Settings, Monitor, Lock, Database, BookOpen, Users, Phone, ChevronRight, ArrowRight, Youtube, Instagram, Linkedin, Star } from 'lucide-react';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans leading-normal tracking-wider min-h-screen">

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-20 text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300">Welcome to KiTS</h1>
        <p className="text-xl max-w-2xl mx-auto mb-10 opacity-80">
          Empowering Your Success with Cutting-Edge Technology Solutions
        </p>
        <a href="#services" className="bg-white text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">Learn More</a>
      </header>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Service Card 1 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <ShoppingBag className="w-16 h-16 mx-auto text-blue-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">POS System Installation</h3>
              <p className="opacity-80">
                We specialize in providing robust and efficient POS systems tailored to your business needs.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <Clock className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">24/7 Technical Support</h3>
              <p className="opacity-80">
                Our team is ready to assist you anytime, ensuring that your tech operations run smoothly.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <Calendar className="w-16 h-16 mx-auto text-red-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Custom Software Development</h3>
              <p className="opacity-80">
                We create custom software solutions that streamline your business operations and enhance productivity.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <Gift className="w-16 h-16 mx-auto text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Hardware Sales & Custom Builds</h3>
              <p className="opacity-80">
                Get the best deals on hardware and have custom builds designed to fit your business requirements.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <Heart className="w-16 h-16 mx-auto text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">IT Consultation</h3>
              <p className="opacity-80">
                Our expert consultants will guide you in selecting and optimizing technology solutions for your business.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="bg-gray-700 p-8 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300">
              <Coffee className="w-16 h-16 mx-auto text-teal-500 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Tech Training</h3>
              <p className="opacity-80">
                We offer customized training for individuals and teams, enabling you to maximize your technology investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">What Our Clients Say</h2>
        <div className="container mx-auto flex flex-wrap justify-center gap-8">
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl max-w-xs">
            <p className="text-lg italic">"KiTS transformed our business operations with their innovative POS system. A game-changer!"</p>
            <p className="font-semibold mt-4">John Doe</p>
            <p className="text-gray-400">Business Owner</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow-xl max-w-xs">
            <p className="text-lg italic">"The 24/7 support team at KiTS has been a lifesaver. We never feel alone with them around."</p>
            <p className="font-semibold mt-4">Jane Smith</p>
            <p className="text-gray-400">Tech Manager</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl mb-8">We’re here to assist you with all your tech needs. Let’s talk!</p>
        <a href="mailto:kitstechco99@gmail.com" className="bg-white text-gray-900 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105">Contact Us</a>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>&copy; 2024 KiTS - KHODER’s Integration & Tech. Solutions. All Rights Reserved.</p>
        <div className="flex justify-center gap-8 mt-6">
          <a href="https://instagram.com/kitstechco99" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-white">
            <Instagram className="w-8 h-8" />
          </a>
          <a href="https://linkedin.com/company/kitstechco99" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-white">
            <Linkedin className="w-8 h-8" />
          </a>
          <a href="https://youtube.com/kitstechco99" target="_blank" rel="noreferrer noopener" className="text-gray-400 hover:text-white">
            <Youtube className="w-8 h-8" />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;
