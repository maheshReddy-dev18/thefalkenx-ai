
import React from 'react';
import { LineChart, Brain, BarChart3, PieChart, HandCoins, Layers } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      title: "Data Analysis & Insights",
      description: "Transform raw data into actionable business intelligence with our comprehensive data analysis services.",
      icon: <LineChart className="h-12 w-12 text-gold" />,
      benefits: ["Pattern identification", "Market trend analysis", "Competitive benchmarking"]
    },
    {
      title: "Predictive Modeling",
      description: "Forecast future trends and behaviors with our advanced predictive modeling solutions.",
      icon: <Brain className="h-12 w-12 text-gold" />,
      benefits: ["Future forecasting", "Risk assessment", "Strategic planning support"]
    },
    {
      title: "Power BI Dashboards",
      description: "Visualize your data with custom interactive dashboards for real-time decision making.",
      icon: <BarChart3 className="h-12 w-12 text-gold" />,
      benefits: ["Real-time monitoring", "Interactive visualizations", "Custom KPI tracking"]
    },
    {
      title: "AI-Driven Insights",
      description: "Leverage machine learning and AI to uncover hidden opportunities and automate decision processes.",
      icon: <PieChart className="h-12 w-12 text-gold" />,
      benefits: ["Anomaly detection", "Process automation", "Deep data insights"]
    },
    {
      title: "ROI Optimization",
      description: "Maximize return on investment with data-driven strategies for resource allocation and growth.",
      icon: <HandCoins className="h-12 w-12 text-gold" />,
      benefits: ["Investment prioritization", "Spending optimization", "Revenue growth strategies"]
    },
    {
      title: "Data Strategy Consulting",
      description: "Develop a comprehensive roadmap for leveraging data as a strategic business asset.",
      icon: <Layers className="h-12 w-12 text-gold" />,
      benefits: ["Data governance", "Architecture planning", "Technology selection"]
    }
  ];

  return (
    <section id="services" className="section bg-navy-light/5">
      <div className="text-center mb-12">
        <h2 className="section-title">Our <span className="text-gold">Services</span></h2>
        <p className="section-subtitle mx-auto text-slate">
          Comprehensive data science solutions to help your business make smarter decisions and drive growth
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="border-t-4 border-gold shadow-lg transition-transform duration-300 hover:-translate-y-2">
            <CardHeader className="pb-4">
              <div className="mb-4">
                {service.icon}
              </div>
              <CardTitle className="text-xl font-bold text-navy">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold mr-2"></span>
                    <span className="text-sm text-slate">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full border-navy text-navy hover:bg-navy hover:text-white transition-colors">
                Learn More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button className="bg-navy hover:bg-navy-light text-white">
          Book a Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default Services;
