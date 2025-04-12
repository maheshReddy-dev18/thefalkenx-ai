
import React from 'react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-light text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold">TheFalkenx<span className="text-gold">.Ai</span></span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Transforming business through data science, AI, and analytics expertise. Serving clients across Europe with tailored data solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:thefalkenx.ai@gmail.com" className="bg-white/10 hover:bg-white/20 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Data Analysis</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Predictive Modeling</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Power BI Dashboards</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">AI-Driven Insights</a></li>
              <li><a href="#" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">ROI Optimization</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">About Us</a></li>
              <li><a href="#case-studies" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Case Studies</a></li>
              <li><a href="#testimonials" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Blog</a></li>
              <li><a href="#contact" className="opacity-80 hover:opacity-100 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <p className="opacity-80 text-sm mb-4">Stay updated with the latest insights and news from TheFalkenx.Ai</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/30 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-gold text-white placeholder:text-white/60"
              />
              <button className="bg-gold hover:bg-gold-light text-navy px-3 rounded-r-lg flex items-center justify-center">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-80">© {currentYear} TheFalkenx.Ai. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold">Privacy Policy</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold">Terms of Service</a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 hover:text-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
