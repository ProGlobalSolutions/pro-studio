/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import logo from './assets/logo.webp'
import herobg from './assets/hero.mp4'
import { 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Menu, 
  X, 
  Camera, 
  ShoppingBag, 
  Video, 
  Palette, 
  Heart, 
  TrendingUp, 
  Layout, 
  ArrowRight,
  MessageCircle,
  MapPin,
  Home,
  Users,
  Calendar,
  Mic   // ✅ ADD THIS
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'Services', href: '#services', icon: <Layout size={20} /> },
    { name: 'Our Work', href: '#work', icon: <Camera size={20} /> },
    { name: 'Studio Rental', href: '#studio', icon: <Video size={20} /> },
   
    { name: 'Contact Us', href: '#contact', icon: <Phone size={20} /> },
    { name: 'Book Studio', href: '#', icon: <Calendar size={20} />, special: true },
  ];

  return (
    <>
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center">
  <img 
  src={logo} 
  alt="ProStudio Logo" 
 className="h-12 md:h-14 lg:h-16 w-auto object-contain"
/>
</a>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="font-medium hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <a 
  href="#contact"
  className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/20 inline-block"
>
  Book Now
</a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-text-main"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-screen w-[75%] bg-white z-[70] md:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer Top Bar */}
              <div className="bg-secondary text-white px-6 py-5 flex justify-between items-center">
                <span className="text-xl font-display font-bold tracking-tighter">PRO STUDIOS</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X size={24} />
                </button>
              </div>

              {/* Drawer Menu Items */}
              <div className="flex-1 overflow-y-auto py-2">
                {mobileLinks.map((link, index) => (
                  <div key={link.name}>
                    <a 
                      href={link.special ? 'https://wa.me/919442825976' : link.href}
                      target={link.special ? '_blank' : undefined}
                      rel={link.special ? 'noopener noreferrer' : undefined}
                      onClick={() => !link.special && setIsMobileMenuOpen(false)}
                      className={`flex items-center px-6 py-3 transition-colors group ${link.special ? 'text-[#B91C1C]' : 'text-text-main'}`}
                    >
                      <span className={`mr-4 transition-colors ${link.special ? 'text-[#B91C1C]' : 'text-text-muted group-hover:text-primary'}`}>
                        {link.icon}
                      </span>
                      <span className="font-medium group-hover:text-primary transition-colors">
                        {link.name}
                      </span>
                    </a>
                    {index < mobileLinks.length - 1 && <div className="mx-6 border-b border-gray-100"></div>}
                  </div>
                ))}
              </div>

              {/* Drawer Bottom Section */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <div className="mb-5">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+919442825976" className="text-text-main font-semibold hover:text-primary transition-colors">+91 94428 25976</a>
                </div>
                <div className="mb-5">
                  <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:prostudiomail@gmail.com" className="text-text-main font-semibold hover:text-primary transition-colors">prostudiomail@gmail.com</a>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-text-muted hover:text-primary transition-colors"><Instagram size={20} /></a>
                  <a href="#" className="text-text-muted hover:text-primary transition-colors"><Facebook size={20} /></a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  return (
  <section id="home" className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={herobg} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-display font-bold mb-6 leading-tight"
        >
          Vision Into <span className="text-primary">Reality</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
        >
          Madurai's premier creative studio for photography, branding and digital excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#work"
            className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 inline-flex items-center group"
          >
            Explore Our Work
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </a>
        </motion.div>
      </div>

    </section>
  );
};
const Services = () => {
  const services = [
    {
      title: 'Studio Rental',
      desc: 'A fully-equipped creative space with professional lighting and backdrops for your projects.',
      icon: <Camera className="text-primary" size={32} />
    },
    {
      title: 'Creative Product Photography',
      desc: 'Artistic and high-concept photos that make your products stand out from competitors.',
      icon: <ShoppingBag className="text-primary" size={32} />
    },
    {
      title: 'E-Commerce Photography',
      desc: 'Clean, consistent product images optimized for online stores and conversions.',
      icon: <ShoppingBag className="text-primary" size={32} />
    },
    {
      title: 'Product Videography',
      desc: 'Engaging promotional videos showcasing your product features and real usage.',
      icon: <Video className="text-primary" size={32} />
    },
    {
      title: 'Branding',
      desc: 'Building strong brand identity from logo design to complete visual systems.',
      icon: <Palette className="text-primary" size={32} />
    },
    {
      title: 'Wedding Photography',
      desc: 'Capturing your special moments with timeless, emotional storytelling.',
      icon: <Heart className="text-primary" size={32} />
    },
    {
      title: 'Digital Marketing',
      desc: 'Strategic SEO, social media, and ad campaigns to grow your online presence.',
      icon: <TrendingUp className="text-primary" size={32} />
    },
    {
      title: 'Graphic Design',
      desc: 'Creative designs for digital and print including posters, banners, and branding.',
      icon: <Layout className="text-primary" size={32} />
    },
    {
      title: 'Professional Editing Studio',
      desc: 'High-end photo and video editing with color grading and cinematic finishing.',
      icon: <Video className="text-primary" size={32} />
    },
    {
      title: 'Dubbing Studio',
      desc: 'Professional voice recording and audio production with studio-grade clarity.',
      icon: <Mic className="text-primary" size={32} />
    },
    {
      title: 'Fashion Photography',
      desc: 'Stylish shoots for models, brands, and portfolios with creative direction.',
      icon: <Camera className="text-primary" size={32} />
    },
    {
      title: 'Ads, Posters & Banners',
      desc: 'Eye-catching promotional creatives designed to attract and convert audiences.',
      icon: <Layout className="text-primary" size={32} />
    }
  ];

  return (
    <section id="services" className="py-24 bg-bg-site">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">What We Do</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl card-shadow text-center transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-bold text-text-main group-hover:text-primary transition-colors mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
const Work = () => {
  const works = [
    { title: 'Wedding Shoot', category: 'Photography' },
    { title: 'Fashion Shoot', category: 'Photography' },
    { title: 'Branding', category: 'Design' },
    { title: 'E-Commerce', category: 'Photography' },
    { title: 'Graphic Design', category: 'Design' },
    { title: 'Product Mockup', category: 'Design' },
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Work</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden work-card-gradient flex items-center justify-center group cursor-pointer"
            >
              <div className="text-center z-10 transition-all duration-500 group-hover:scale-110">
                <h3 className="text-2xl font-bold text-text-main group-hover:text-white transition-colors">
                  {work.title}
                </h3>
                <p className="text-text-muted group-hover:text-white/80 transition-colors">
                  {work.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StudioSection = () => {
  return (
    <section id="studio" className="py-24 bg-bg-site">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Studio For Rent</h2>
            <p className="text-lg text-text-muted mb-8 leading-relaxed">
              Our state-of-the-art studio is available for rent. Equipped with professional lighting, backdrops and all amenities needed for your next creative project. Whether it's a fashion shoot, product photography, or video production, we have the space you need.
            </p>
            <a 
              href="https://wa.me/919442825976"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/20 inline-block"
            >
              Book Now
            </a>
          </div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-12 rounded-[2rem] shadow-2xl flex items-center justify-center aspect-video lg:aspect-square relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="relative z-10 text-center">
              <Camera size={64} className="text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-text-main">Studio Space</h3>
              <p className="text-text-muted mt-2">Professional Environment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Let's Create Together</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Have a project in mind? Reach out to us using the form below or visit our studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="rounded-3xl overflow-hidden h-[400px] lg:h-full shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.123456789!3d9.9123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTQnNDQuNCJOIDc4wrAwNyc0NC40IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Studio Location"
            ></iframe>
          </div>

          {/* Form */}
          <div className="bg-bg-site p-8 md:p-12 rounded-3xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Your Email</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-primary outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 ml-1">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-6 py-4 rounded-2xl border-none bg-white focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bg-site pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center sm:text-left">

          {/* Col 1 */}
          <div className="flex flex-col items-center sm:items-start">
            <img 
  src={logo} 
  alt="ProStudio Logo" 
 className="h-12 md:h-14 lg:h-16 mb-6 object-contain"
/>
            <p className="text-text-muted leading-relaxed">
              Elevating your brand through professional photography and creative digital solutions. Based in the heart of Madurai.
            </p>
          </div>

          {/* Col 2 (hidden on mobile) */}
          <div className="hidden sm:block">
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Product Photography</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Web Design</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#work" className="hover:text-primary transition-colors">Our Work</a></li>
              <li><a href="#studio" className="hover:text-primary transition-colors">Studio Rental</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-lg font-bold mb-6">Our Offices</h4>

            <div className="space-y-4 text-text-muted">

              {/* Address */}
              <div className="flex items-start justify-center sm:justify-start text-center sm:text-left">
                <MapPin className="text-primary mr-3 mt-1 shrink-0" size={18} />
                <p>4-4-35A, 1st Street Railor Nagar, Koodal Nagar, Madurai</p>
              </div>

              {/* Phone 1 */}
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="text-primary mr-3 shrink-0" size={18} />
                <p>+91 94428 25976</p>
              </div>

              {/* Phone 2 */}
              <div className="flex items-center justify-center sm:justify-start">
                <Phone className="text-primary mr-3 shrink-0" size={18} />
                <p>+91 93606 20595</p>
              </div>

              {/* Social Icons */}
              <div className="flex justify-center sm:justify-start space-x-4 pt-4">
                <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-all">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white p-2 rounded-full shadow-sm hover:text-primary transition-all">
                  <Facebook size={20} />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 pt-8 text-center text-text-muted text-sm">
          <p>© 2026 Pro Studios. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};

const TopBar = () => {
  return (
    <div className="bg-secondary text-white py-2.5 px-6 hidden md:block">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium uppercase tracking-wider">
        <div className="flex items-center space-x-6">
          <a href="tel:+919442825976" className="flex items-center hover:text-primary transition-colors">
            <Phone size={14} className="mr-2" />
            +91 94428 25976
          </a>
          <a href="mailto:prostudios@gmail.com" className="flex items-center hover:text-primary transition-colors">
            <Mail size={14} className="mr-2" />
            prostudios@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-primary transition-colors"><Instagram size={16} /></a>
          <a href="#" className="hover:text-primary transition-colors"><Facebook size={16} /></a>
        </div>
      </div>
    </div>
  );
};

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
      <motion.a 
        href="https://wa.me/919442825976"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl shadow-green-500/40 flex items-center justify-center"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-50">
        <TopBar />
        <Navbar />
      </div>
      <Hero />
      <Services />
      <Work />
      <StudioSection />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}