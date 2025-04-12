
import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="section bg-navy text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In <span className="text-gold">Touch</span></h2>
        <p className="text-xl md:text-2xl font-medium mb-8 max-w-3xl mx-auto opacity-90">
          Ready to transform your business with data-driven insights? Contact us today.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Card className="bg-white/10 backdrop-blur-lg border-none shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <Button className="w-full bg-gold hover:bg-gold-light text-navy font-medium">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-gold mr-3"></span> Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="opacity-80">+91 9423007720</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="opacity-80">thefalkenx.ai@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="opacity-80">Latur, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <span className="inline-block w-8 h-1 bg-gold mr-3"></span> Our Services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                <span>Data Analysis & Insights</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                <span>Predictive Modeling</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                <span>Power BI Dashboards</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                <span>AI-Driven Insights</span>
              </li>
              <li className="flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                <span>ROI Optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
