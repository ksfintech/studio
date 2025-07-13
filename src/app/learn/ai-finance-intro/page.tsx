import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, Shield, Zap, Users, Target, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Introduction to AI in Finance | AI FinTech Insights',
  description: 'A comprehensive overview of how artificial intelligence is transforming the financial services industry. Learn about AI applications, benefits, and implementation considerations.',
};

export default function AIFinanceIntroPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Navigation */}
      <div className="mb-8">
        <Button variant="ghost" asChild>
          <Link href="/learn">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Learning Hub
          </Link>
        </Button>
      </div>

      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary" />
          <Badge variant="default">Beginner</Badge>
          <Badge variant="outline">15 min read</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          Introduction to AI in Finance
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Artificial Intelligence is revolutionizing the financial services industry, from customer service to risk management. 
          This comprehensive guide will help you understand the fundamentals and applications of AI in finance.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">AI Basics</Badge>
          <Badge variant="secondary">Finance Applications</Badge>
          <Badge variant="secondary">Industry Overview</Badge>
          <Badge variant="secondary">Implementation</Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#what-is-ai" className="block text-primary hover:underline">1. What is Artificial Intelligence?</Link>
            <Link href="#ai-in-finance" className="block text-primary hover:underline">2. AI Applications in Financial Services</Link>
            <Link href="#benefits" className="block text-primary hover:underline">3. Benefits of AI in Finance</Link>
            <Link href="#implementation" className="block text-primary hover:underline">4. Implementation Considerations</Link>
            <Link href="#challenges" className="block text-primary hover:underline">5. Challenges and Risks</Link>
            <Link href="#future" className="block text-primary hover:underline">6. Future Trends</Link>
          </nav>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* What is AI */}
        <section id="what-is-ai">
          <h2 className="text-3xl font-bold mb-6">1. What is Artificial Intelligence?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Artificial Intelligence (AI) refers to computer systems that can perform tasks that typically require human intelligence. 
              These tasks include learning, reasoning, problem-solving, perception, and language understanding.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Key AI Technologies in Finance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Machine Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Algorithms that learn patterns from data to make predictions and decisions without explicit programming.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Natural Language Processing</h4>
                    <p className="text-sm text-muted-foreground">
                      Enables computers to understand, interpret, and generate human language for customer service and analysis.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Computer Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      Allows systems to interpret and analyze visual information from images and videos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Robotic Process Automation</h4>
                    <p className="text-sm text-muted-foreground">
                      Automates repetitive tasks and processes to improve efficiency and reduce errors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Applications in Finance */}
        <section id="ai-in-finance">
          <h2 className="text-3xl font-bold mb-6">2. AI Applications in Financial Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Fraud Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  AI systems analyze transaction patterns to identify suspicious activities and prevent fraud in real-time.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Real-time monitoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Pattern recognition</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Reduced false positives</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Customer Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  AI-powered chatbots and virtual assistants provide 24/7 customer support and personalized recommendations.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 availability</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Personalized responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Multilingual support</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Risk Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  AI models analyze vast amounts of data to assess credit risk, market risk, and operational risk.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Credit scoring</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Market analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Portfolio optimization</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Investment Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  AI algorithms analyze market data to identify investment opportunities and optimize portfolio performance.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Algorithmic trading</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Market prediction</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Automated rebalancing</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <h2 className="text-3xl font-bold mb-6">3. Benefits of AI in Finance</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Increased Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automate repetitive tasks, reduce processing times, and improve operational efficiency across all business functions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Better Decision Making
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Data-driven insights enable more accurate predictions and informed decision-making processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Enhanced Customer Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Personalized services, faster response times, and improved customer satisfaction through AI-powered interactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations */}
        <section id="implementation">
          <h2 className="text-3xl font-bold mb-6">4. Implementation Considerations</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Factors for Successful AI Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Quality and Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure high-quality, clean data and robust infrastructure to support AI systems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Talent and Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Build or acquire the necessary AI expertise and technical skills within your organization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Change Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Prepare your organization for AI adoption through proper training and change management strategies.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure AI systems comply with relevant financial regulations and data protection laws.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Challenges and Risks */}
        <section id="challenges">
          <h2 className="text-3xl font-bold mb-6">5. Challenges and Risks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Data Privacy and Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Protecting sensitive financial data while leveraging AI capabilities requires robust security measures and compliance frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Bias and Fairness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  AI systems can inherit biases from training data, leading to unfair outcomes in lending, hiring, and other decisions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Explainability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complex AI models can be difficult to explain, making it challenging to build trust and meet regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Integration Complexity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Integrating AI systems with existing legacy infrastructure can be complex and require significant investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Future Trends */}
        <section id="future">
          <h2 className="text-3xl font-bold mb-6">6. Future Trends</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Emerging AI Trends in Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Quantum Computing</h4>
                    <p className="text-sm text-muted-foreground">
                      Quantum computing will enable more complex financial modeling and optimization problems to be solved efficiently.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Federated Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Collaborative AI training across multiple institutions while maintaining data privacy and security.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Explainable AI</h4>
                    <p className="text-sm text-muted-foreground">
                      Development of AI systems that can explain their decisions in human-understandable terms.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">AI-Powered Regulatory Technology</h4>
                    <p className="text-sm text-muted-foreground">
                      Automated compliance monitoring and reporting systems to meet evolving regulatory requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Next Steps */}
      <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
          <p className="text-muted-foreground mb-6">
            Now that you understand the basics of AI in finance, explore our other resources to dive deeper into specific topics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/ai-implementation-guide">
                AI Implementation Strategy
                <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn">
                Back to Learning Hub
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 