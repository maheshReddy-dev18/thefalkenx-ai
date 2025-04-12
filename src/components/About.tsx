
import React from 'react';
import { CheckCircle2, Award, Users, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="text-center mb-12">
        <h2 className="section-title">About <span className="text-gold">TheFalkenx.Ai</span></h2>
        <p className="section-subtitle mx-auto">
          We're a team of data science experts helping businesses transform data into actionable insights and competitive advantage
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-slate mb-6">
            At TheFalkenx.Ai, we combine deep expertise in data science, AI, and business strategy to help our clients 
            make smarter decisions and achieve measurable results. As a boutique consultancy, we bring the agility of a 
            specialized team with the expertise often found only at larger firms.
          </p>
          <p className="text-slate mb-6">
            Founded with the mission to make advanced data science accessible to businesses of all sizes, 
            our team of experts works closely with clients to understand their unique challenges and opportunities. 
            We specialize in financial analytics and e-commerce optimization, delivering insights that drive growth and efficiency.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="flex items-start">
              <CheckCircle2 className="text-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-navy">European Expertise</h4>
                <p className="text-sm text-slate">Specialized knowledge of European markets and regulations</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-navy">Modern AI Tools</h4>
                <p className="text-sm text-slate">Leveraging cutting-edge technologies</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-navy">Freelance Agility</h4>
                <p className="text-sm text-slate">Fast, flexible, and personalized service</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle2 className="text-gold h-6 w-6 mr-3 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-navy">Data-Driven Results</h4>
                <p className="text-sm text-slate">Measurable outcomes for business growth</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-gold">
            <h3 className="text-2xl font-semibold text-navy mb-6">Our Expert Team</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-navy" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy">Data Science Lead</h4>
                  <p className="text-slate">Machine learning & predictive modeling expert</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-navy" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy">Financial Analytics Specialist</h4>
                  <p className="text-slate">ROI optimization & financial forecasting</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Rocket className="h-8 w-8 text-navy" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-navy">E-commerce Solutions Architect</h4>
                  <p className="text-slate">Customer journey & conversion optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
