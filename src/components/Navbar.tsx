
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-navy text-xl font-bold">TheFalkenx<span className="text-gold">.Ai</span></span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">About</a>
            <a href="#services" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">Services</a>
            <a href="#case-studies" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">Case Studies</a>
            <a href="#testimonials" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">Testimonials</a>
            <a href="#blog" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">Blog</a>
            <a href="#contact" className="text-slate hover:text-navy px-3 py-2 text-sm font-medium">Contact</a>
            <Button className="ml-4 bg-navy hover:bg-navy-light text-white">Book a Consultation</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-navy hover:text-navy-light focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#about" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">About</a>
            <a href="#services" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">Services</a>
            <a href="#case-studies" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">Case Studies</a>
            <a href="#testimonials" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">Testimonials</a>
            <a href="#blog" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">Blog</a>
            <a href="#contact" className="block px-3 py-2 text-slate hover:text-navy text-base font-medium">Contact</a>
            <Button className="mt-3 w-full bg-navy hover:bg-navy-light text-white">Book a Consultation</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
