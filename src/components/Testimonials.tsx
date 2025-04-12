
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The TheFalkenx.Ai team transformed our approach to data. Their predictive models have been instrumental in our strategic planning and revenue growth.",
      name: "Elena Petrov",
      title: "CFO, European E-commerce Group",
      rating: 5
    },
    {
      quote: "Working with TheFalkenx.Ai has been game-changing. Their dashboards provide real-time insights that have improved our decision-making process dramatically.",
      name: "Marco Rossi",
      title: "Head of Marketing, Fintech Startup",
      rating: 5
    },
    {
      quote: "The ROI optimization strategies implemented by TheFalkenx.Ai exceeded our expectations. We've seen a 30% improvement in campaign performance in just two months.",
      name: "Sophie Laurent",
      title: "Digital Strategy Director, Retail Chain",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section bg-navy-light/5">
      <div className="text-center mb-12">
        <h2 className="section-title">Client <span className="text-gold">Testimonials</span></h2>
        <p className="section-subtitle mx-auto text-slate">
          Don't just take our word for it - hear what our clients have to say about working with TheFalkenx.Ai
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
            <div className="absolute -top-4 -right-4 bg-gold rounded-full p-3">
              <Quote className="h-6 w-6 text-white" />
            </div>
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-slate italic mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-semibold text-navy">{testimonial.name}</p>
              <p className="text-sm text-slate">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-navy to-navy-light rounded-xl shadow-xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with Data?</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Join our satisfied clients and discover how TheFalkenx.Ai can help you leverage the power of data to drive growth and innovation.
        </p>
        <div className="inline-flex px-6 py-3 bg-white text-navy font-medium rounded-lg hover:bg-gold hover:text-white transition-colors cursor-pointer">
          Book Your Free Consultation Today
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
