
import React from 'react';
import { ArrowRight, TrendingUp, ShoppingCart, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "35% Revenue Growth for E-commerce Platform",
      category: "E-commerce Analytics",
      description: "Implemented predictive analytics and customer segmentation to optimize the marketing strategy, resulting in a 35% revenue increase within 3 months.",
      metrics: [
        { label: "Revenue Increase", value: "35%" },
        { label: "Customer Retention", value: "+42%" },
        { label: "Marketing ROI", value: "3.8x" }
      ],
      icon: <ShoppingCart className="h-8 w-8" />
    },
    {
      title: "Risk Prediction Model for Financial Services",
      category: "Financial Analytics",
      description: "Developed a machine learning model for credit risk assessment, improving underwriting accuracy by 28% and reducing defaults by 17%.",
      metrics: [
        { label: "Underwriting Accuracy", value: "+28%" },
        { label: "Default Reduction", value: "17%" },
        { label: "Processing Time", value: "-40%" }
      ],
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "Customer Journey Optimization for SaaS",
      category: "Customer Analytics",
      description: "Created interactive dashboards and behavior analysis tools to identify friction points, increasing conversion rates by 25%.",
      metrics: [
        { label: "Conversion Rate", value: "+25%" },
        { label: "User Engagement", value: "+32%" },
        { label: "Churn Reduction", value: "19%" }
      ],
      icon: <LineChart className="h-8 w-8" />
    }
  ];

  return (
    <section id="case-studies" className="section">
      <div className="text-center mb-12">
        <h2 className="section-title">Case <span className="text-gold">Studies</span></h2>
        <p className="section-subtitle mx-auto text-slate">
          Real results we've delivered for clients through data science and AI-driven solutions
        </p>
      </div>

      <div className="space-y-12">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className={`p-8 ${index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-navy/10 text-navy mb-4">
                  {caseStudy.icon}
                </div>
                <span className="text-gold font-medium text-sm mb-2 block">{caseStudy.category}</span>
                <h3 className="text-2xl font-bold text-navy mb-4">{caseStudy.title}</h3>
                <p className="text-slate mb-6">{caseStudy.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-3 rounded-lg bg-slate/5">
                      <p className="text-xl font-bold text-gold">{metric.value}</p>
                      <p className="text-xs text-slate">{metric.label}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="text-navy border-navy hover:bg-navy hover:text-white">
                  Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className={`bg-gradient-to-br from-navy to-navy-light p-8 flex items-center justify-center text-white ${index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}`}>
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    {caseStudy.icon}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Key Achievement</h4>
                  <p className="text-3xl font-bold mb-2">{caseStudy.metrics[0].value}</p>
                  <p className="text-sm opacity-80">{caseStudy.metrics[0].label}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
