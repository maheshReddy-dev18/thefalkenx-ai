
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-10 md:mb-0 md:pr-10 md:w-3/5">
            <h5 className="text-gold font-semibold mb-4">DATA SCIENCE CONSULTING</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
              Transform Your Business with <span className="text-gold">AI-Driven</span> Data Insights
            </h1>
            <p className="text-slate text-lg mb-8 max-w-2xl">
              We help businesses unlock the power of their data through expert analytics, 
              predictive modeling, and AI-driven insights to boost ROI and enable data-driven decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-navy hover:bg-navy-light text-white font-medium">
                Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy/10">
                Explore Our Services
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy">98%</p>
                <p className="text-sm text-slate">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy">+35%</p>
                <p className="text-sm text-slate">Average ROI Boost</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-navy">12+</p>
                <p className="text-sm text-slate">EU Countries Served</p>
              </div>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-navy/5 rounded-3xl transform rotate-3"></div>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative z-10">
                <h3 className="text-xl font-semibold mb-4 text-navy">Ready to leverage your data?</h3>
                <p className="text-slate mb-6">Schedule your free 30-minute consultation with our data science experts.</p>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy"
                  />
                  <Button className="w-full bg-navy hover:bg-navy-light text-white font-medium">
                    Book My Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
