import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, GraduationCap, Lightbulb, TrendingUp, Shield, Zap, Users, Target, BarChart3, Globe, Clock, Star } from 'lucide-react';

export const metadata = {
  title: 'Learn AI in Finance | AI FinTech Insights',
  description: 'Comprehensive educational content about artificial intelligence in the financial services industry. Learn about AI applications, implementation strategies, and industry trends.',
};

const educationalContent = {
  guides: [
    {
      id: 'ai-finance-intro',
      title: 'Introduction to AI in Finance',
      description: 'A comprehensive overview of how artificial intelligence is transforming the financial services industry.',
      category: 'Beginner',
      duration: '15 min read',
      topics: ['AI Basics', 'Finance Applications', 'Industry Overview'],
      icon: BookOpen,
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Implementation Strategy',
      description: 'Step-by-step guide to successfully implementing AI solutions in financial institutions.',
      category: 'Intermediate',
      duration: '25 min read',
      topics: ['Strategy Planning', 'Technology Selection', 'Change Management'],
      icon: Target,
    },
    {
      id: 'ai-ethics-finance',
      title: 'AI Ethics in Financial Services',
      description: 'Understanding the ethical considerations and regulatory requirements for AI in finance.',
      category: 'Advanced',
      duration: '20 min read',
      topics: ['Ethics', 'Regulation', 'Compliance', 'Fairness'],
      icon: Shield,
    },
    {
      id: 'roi-calculator',
      title: 'AI ROI Calculator Guide',
      description: 'Learn how to calculate the return on investment for AI implementations in financial services.',
      category: 'Intermediate',
      duration: '30 min',
      topics: ['ROI Analysis', 'Cost-Benefit', 'Metrics'],
      icon: BarChart3,
    },
    {
      id: 'vendor-selection',
      title: 'AI Vendor Selection Framework',
      description: 'A systematic approach to evaluating and selecting AI vendors for financial institutions.',
      category: 'Intermediate',
      duration: '45 min',
      topics: ['Vendor Evaluation', 'RFP Process', 'Due Diligence'],
      icon: Users,
    },
    {
      id: 'integration-best-practices',
      title: 'AI Integration Best Practices',
      description: 'Best practices for integrating AI solutions with existing financial systems and workflows.',
      category: 'Advanced',
      duration: '40 min',
      topics: ['System Integration', 'API Design', 'Data Flow'],
      icon: Zap,
    },
  ],
  caseStudies: [
    {
      id: 'fraud-detection-success',
      title: 'Fraud Detection Success Story',
      description: 'How a major bank reduced fraud losses by 80% using AI-powered detection systems.',
      category: 'Case Study',
      duration: '10 min read',
      topics: ['Fraud Detection', 'Machine Learning', 'Risk Management'],
      icon: TrendingUp,
    },
    {
      id: 'customer-service-ai',
      title: 'AI-Powered Customer Service',
      description: 'Case study of a fintech company that improved customer satisfaction by 60% with AI chatbots.',
      category: 'Case Study',
      duration: '12 min read',
      topics: ['Customer Service', 'Chatbots', 'NLP'],
      icon: Users,
    },
  ],
  resources: [
    {
      id: 'ai-finance-glossary',
      title: 'AI in Finance Glossary',
      description: 'Comprehensive glossary of AI and fintech terms for financial professionals.',
      category: 'Reference',
      duration: 'Reference',
      topics: ['Terminology', 'Definitions', 'Acronyms'],
      icon: BookOpen,
    },
  ],
};

export default function LearnPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Learn AI in Finance
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Master the fundamentals of artificial intelligence in financial services. From basic concepts to advanced implementation strategies, 
          discover how AI is revolutionizing the finance industry.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <BookOpen className="w-4 h-4 mr-1" />
            Comprehensive Guides
          </Badge>
          <Badge variant="secondary" className="text-sm px-3 py-1">
            <Lightbulb className="w-4 h-4 mr-1" />
            Industry Insights
          </Badge>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <BookOpen className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold">Guides</h3>
            <p className="text-sm text-muted-foreground">Comprehensive overviews</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold">Case Studies</h3>
            <p className="text-sm text-muted-foreground">Real-world examples</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow cursor-pointer">
          <CardContent className="p-6 text-center">
            <Globe className="w-8 h-8 mx-auto mb-3 text-primary" />
            <h3 className="font-semibold">Resources</h3>
            <p className="text-sm text-muted-foreground">Reference materials</p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Guide */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Guide</h2>
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-primary" />
              <Badge variant="default">Beginner</Badge>
              <Badge variant="outline">15 min read</Badge>
            </div>
            <CardTitle className="text-2xl">Introduction to AI in Finance</CardTitle>
            <CardDescription className="text-lg">
              A comprehensive overview of how artificial intelligence is transforming the financial services industry. 
              Learn about key applications, benefits, and implementation considerations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary">AI Basics</Badge>
              <Badge variant="secondary">Finance Applications</Badge>
              <Badge variant="secondary">Industry Overview</Badge>
            </div>
            <Button asChild>
              <Link href="/learn/ai-finance-intro">
                Read Full Guide
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Educational Content Sections */}
      <div className="space-y-16">
        {/* Guides Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Comprehensive Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationalContent.guides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <guide.icon className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{guide.category}</Badge>
                    <Badge variant="secondary">{guide.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {guide.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/learn/${guide.id}`}>
                      Read Guide
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Case Studies Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Case Studies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalContent.caseStudies.map((study) => (
              <Card key={study.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <study.icon className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{study.category}</Badge>
                    <Badge variant="secondary">{study.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {study.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/learn/${study.id}`}>
                      Read Case Study
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Resources Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-bold">Additional Resources</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationalContent.resources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <resource.icon className="w-5 h-5 text-primary" />
                    <Badge variant="outline">{resource.category}</Badge>
                    <Badge variant="secondary">{resource.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={`/learn/${resource.id}`}>
                      View Resource
                      <BookOpen className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Explore AI Tools?</h3>
          <p className="text-muted-foreground mb-6">
            Discover and compare the best AI tools for the financial services industry.
          </p>
          <Button asChild>
            <Link href="/compare">
              Compare AI Tools
              <Zap className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
} 