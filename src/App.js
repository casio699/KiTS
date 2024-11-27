// Import React and necessary hooks explicitly
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Search ,ShoppingBag, Clock, Calendar, Download, Gift, Heart, Coffee, Mail, Settings, Monitor, Lock, Database, BookOpen, Users, Phone, ChevronRight, ArrowRight, Youtube, Instagram, Linkedin, Star } from 'lucide-react';

function App() {
  // Main website component that wraps all content
  // State management for various interactive features
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  
  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle dark mode and update document
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
// Custom dropdown component
const SettingsDropdown = () => (
  <div className="relative">
    <button
      onClick={() => setIsSettingsOpen(!isSettingsOpen)}
      className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
    >
      <Settings className="w-5 h-5" />
    </button>
    
    {isSettingsOpen && (
      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu">
          <button
            onClick={toggleDarkMode}
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            role="menuitem"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 mr-2" />
            ) : (
              <Moon className="w-4 h-4 mr-2" />
            )}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            role="menuitem"
          >
            <Search className="w-4 h-4 mr-2" />
            Search
          </button>
        </div>
      </div>
    )}
  </div>
);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      {/* Enhanced Navigation Bar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Your Logo</h1>
            </div>

           {/* Desktop Navigation */}
           <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#services">Services</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <SettingsDropdown />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="#home">Home</MobileNavLink>
              <MobileNavLink href="#services">Services</MobileNavLink>
              <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
              <MobileNavLink href="#contact">Contact</MobileNavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-16">
        {/* Your existing content goes here */}
        {/* Hero Section with Enhanced Animation */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900">
          <div className="text-center text-white p-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Your Company
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delayed">
              Transforming ideas into reality
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>
  
   

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
      </main>
      {/* Footer Section */}
      <section className="bg-gray-900 py-8 text-center text-gray-400">
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
      </section>
{/* Enhanced Footer */}
<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Your company description here.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contact@yourcompany.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: Your Address Here</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg w-full text-gray-900"
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Reusable navigation link component for desktop
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
  >
    {children}
  </a>
);

// Reusable navigation link component for mobile
const MobileNavLink = ({ href, children }) => (
  <a
    href={href}
    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
  >
    {children}
  </a>
);

export default App;
