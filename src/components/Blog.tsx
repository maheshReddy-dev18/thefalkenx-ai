
import React from 'react';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      title: "5 Ways AI is Revolutionizing Financial Analytics",
      excerpt: "Explore how artificial intelligence is transforming financial data analysis and creating new opportunities for businesses.",
      date: "April 5, 2025",
      readTime: "5 min read",
      category: "Financial Analytics"
    },
    {
      title: "The Future of E-commerce: Predictive Customer Insights",
      excerpt: "Learn how predictive analytics can help e-commerce businesses anticipate customer needs and optimize the buying journey.",
      date: "March 22, 2025",
      readTime: "7 min read",
      category: "E-commerce"
    },
    {
      title: "Building Effective Data Dashboards: Best Practices",
      excerpt: "Discover key principles for creating data dashboards that provide actionable insights and support decision making.",
      date: "March 10, 2025",
      readTime: "6 min read",
      category: "Data Visualization"
    }
  ];

  return (
    <section id="blog" className="section">
      <div className="text-center mb-12">
        <h2 className="section-title">Latest <span className="text-gold">Insights</span></h2>
        <p className="section-subtitle mx-auto text-slate">
          Expert perspectives on data science trends, best practices, and innovations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Card key={index} className="overflow-hidden shadow-lg border-t-0 hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-navy/90 to-navy-light flex items-center justify-center">
              <span className="text-white text-xs font-medium px-3 py-1 rounded-full bg-white/20">
                {post.category}
              </span>
            </div>
            <CardHeader className="pt-6">
              <h3 className="text-xl font-bold text-navy mb-2">{post.title}</h3>
              <div className="flex items-center text-sm text-slate space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-slate">{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-navy hover:text-gold p-0">
                Read Article <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
          View All Articles
        </Button>
      </div>
    </section>
  );
};

export default Blog;
