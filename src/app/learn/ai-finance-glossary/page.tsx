import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowLeft, Search, Target, Brain, Database, Shield, Zap, Users, Globe } from 'lucide-react';

export const metadata = {
  title: 'AI in Finance Glossary | AI FinTech Insights',
  description: 'Comprehensive glossary of AI and fintech terms for financial professionals. Essential definitions and explanations for understanding AI in finance.',
};

export default function AIGlossaryPage() {
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
          <Badge variant="default">Reference</Badge>
          <Badge variant="outline">Reference</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI in Finance Glossary
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Essential terms and definitions for understanding artificial intelligence in financial services. 
          A comprehensive reference guide for financial professionals.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Terminology</Badge>
          <Badge variant="secondary">Definitions</Badge>
          <Badge variant="secondary">Acronyms</Badge>
          <Badge variant="secondary">Reference</Badge>
        </div>
      </div>

      {/* Quick Navigation */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            Quick Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" asChild className="justify-start">
              <Link href="#ai-basics">
                <Brain className="mr-2 h-4 w-4" />
                AI Basics
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link href="#machine-learning">
                <Target className="mr-2 h-4 w-4" />
                Machine Learning
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link href="#fintech-terms">
                <Zap className="mr-2 h-4 w-4" />
                FinTech Terms
              </Link>
            </Button>
            <Button variant="outline" asChild className="justify-start">
              <Link href="#regulatory">
                <Shield className="mr-2 h-4 w-4" />
                Regulatory
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* AI Basics */}
        <section id="ai-basics">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Brain className="w-6 h-6 text-primary" />
            AI Basics
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Artificial Intelligence (AI)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The simulation of human intelligence in machines that are programmed to think and learn like humans. 
                  In finance, AI is used for decision-making, pattern recognition, and automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Core Concept</Badge>
                  <Badge variant="secondary">Technology</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Algorithm</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A set of rules or instructions given to an AI system to help it learn and make decisions. 
                  In finance, algorithms are used for trading, risk assessment, and fraud detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Technical</Badge>
                  <Badge variant="secondary">Programming</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Neural Network</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A computing system inspired by biological neural networks. It consists of interconnected nodes 
                  that process information and can learn patterns from data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Deep Learning</Badge>
                  <Badge variant="secondary">Architecture</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Natural Language Processing (NLP)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A branch of AI that helps computers understand, interpret, and generate human language. 
                  Used in chatbots, sentiment analysis, and document processing.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Language</Badge>
                  <Badge variant="secondary">Text Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A field of AI that enables computers to interpret and understand visual information from images or videos. 
                  Used in document processing, identity verification, and fraud detection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Visual</Badge>
                  <Badge variant="secondary">Image Processing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Machine Learning */}
        <section id="machine-learning">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            Machine Learning
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning (ML)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed. 
                  Uses statistical techniques to give computers the ability to "learn."
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Core Concept</Badge>
                  <Badge variant="secondary">Learning</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Supervised Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A type of ML where the algorithm learns from labeled training data to make predictions on new, unseen data. 
                  Examples include credit scoring and fraud detection models.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Learning Type</Badge>
                  <Badge variant="secondary">Labeled Data</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Unsupervised Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A type of ML where the algorithm finds hidden patterns in data without labeled examples. 
                  Used for customer segmentation, anomaly detection, and market analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Learning Type</Badge>
                  <Badge variant="secondary">Pattern Discovery</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Deep Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A subset of ML that uses neural networks with multiple layers to model and understand complex patterns. 
                  Particularly effective for image recognition, natural language processing, and speech recognition.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Neural Networks</Badge>
                  <Badge variant="secondary">Complex Patterns</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Reinforcement Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A type of ML where an agent learns to make decisions by taking actions in an environment to maximize cumulative reward. 
                  Used in algorithmic trading and portfolio optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Learning Type</Badge>
                  <Badge variant="secondary">Decision Making</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Feature Engineering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The process of creating new features or modifying existing ones to improve ML model performance. 
                  Critical for financial modeling and risk assessment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Processing</Badge>
                  <Badge variant="secondary">Model Optimization</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Overfitting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A modeling error that occurs when a model learns the training data too well, including noise and outliers, 
                  leading to poor performance on new data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Model Error</Badge>
                  <Badge variant="secondary">Generalization</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FinTech Terms */}
        <section id="fintech-terms">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Zap className="w-6 h-6 text-primary" />
            FinTech Terms
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Algorithmic Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The use of computer algorithms to automatically execute trading strategies. 
                  AI-powered algorithms can analyze market data and execute trades at optimal times.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Trading</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Robo-Advisor</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A digital platform that provides automated, algorithm-driven financial planning services with minimal human supervision. 
                  Uses AI to create and manage investment portfolios.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Investment</Badge>
                  <Badge variant="secondary">Automation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>RegTech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Technology that helps financial institutions comply with regulations efficiently and cost-effectively. 
                  Uses AI for monitoring, reporting, and risk management.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Compliance</Badge>
                  <Badge variant="secondary">Regulation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>InsurTech</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Technology innovations designed to improve the efficiency of the insurance industry. 
                  AI is used for risk assessment, claims processing, and customer service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Insurance</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Digital Banking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Banking services delivered through digital channels. AI enhances these services through 
                  personalized recommendations, fraud detection, and automated customer support.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Banking</Badge>
                  <Badge variant="secondary">Digital</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Blockchain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A distributed ledger technology that maintains a continuously growing list of records. 
                  AI can be integrated with blockchain for smart contracts and automated compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Distributed Ledger</Badge>
                  <Badge variant="secondary">Cryptocurrency</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data & Analytics */}
        <section id="data-analytics">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Database className="w-6 h-6 text-primary" />
            Data & Analytics
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Big Data</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Extremely large datasets that can be analyzed to reveal patterns, trends, and associations. 
                  In finance, includes transaction data, market data, and customer behavior data.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data</Badge>
                  <Badge variant="secondary">Volume</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Predictive Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The use of data, statistical algorithms, and ML techniques to identify the likelihood of future outcomes. 
                  Used for credit scoring, fraud detection, and market forecasting.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Forecasting</Badge>
                  <Badge variant="secondary">Prediction</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Real-time Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The ability to process data as it arrives, enabling immediate analysis and response. 
                  Critical for fraud detection, algorithmic trading, and customer service.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Speed</Badge>
                  <Badge variant="secondary">Immediate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Mining</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The process of discovering patterns and relationships in large datasets. 
                  Used in finance for customer segmentation, risk assessment, and market analysis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Pattern Discovery</Badge>
                  <Badge variant="secondary">Analysis</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API (Application Programming Interface)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  A set of rules that allows different software applications to communicate with each other. 
                  Essential for integrating AI services with existing financial systems.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Integration</Badge>
                  <Badge variant="secondary">Communication</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Regulatory & Compliance */}
        <section id="regulatory">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" />
            Regulatory & Compliance
          </h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Explainable AI (XAI)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  AI systems that can explain their decision-making process in a way that humans can understand. 
                  Critical for regulatory compliance and building trust in financial AI applications.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Transparency</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Governance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The framework for managing AI/ML models throughout their lifecycle, including development, 
                  validation, deployment, and monitoring. Essential for regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Management</Badge>
                  <Badge variant="secondary">Compliance</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bias Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The process of identifying and mitigating unfair bias in AI models. 
                  Critical for ensuring fair lending practices and regulatory compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Fairness</Badge>
                  <Badge variant="secondary">Ethics</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>GDPR (General Data Protection Regulation)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  European Union regulation that governs data protection and privacy. 
                  AI systems must comply with GDPR requirements for data processing and user consent.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Privacy</Badge>
                  <Badge variant="secondary">Regulation</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Model Validation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  The process of verifying that AI models perform as expected and meet regulatory requirements. 
                  Includes testing for accuracy, fairness, and robustness.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Testing</Badge>
                  <Badge variant="secondary">Quality Assurance</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Acronyms */}
        <section id="acronyms">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Globe className="w-6 h-6 text-primary" />
            Common Acronyms
          </h2>
          
          <Card>
            <CardHeader>
              <CardTitle>AI/ML Acronyms</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">AI</h4>
                    <p className="text-sm text-muted-foreground">Artificial Intelligence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ML</h4>
                    <p className="text-sm text-muted-foreground">Machine Learning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">NLP</h4>
                    <p className="text-sm text-muted-foreground">Natural Language Processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">DL</h4>
                    <p className="text-sm text-muted-foreground">Deep Learning</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">RL</h4>
                    <p className="text-sm text-muted-foreground">Reinforcement Learning</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">API</h4>
                    <p className="text-sm text-muted-foreground">Application Programming Interface</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">XAI</h4>
                    <p className="text-sm text-muted-foreground">Explainable Artificial Intelligence</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">ROI</h4>
                    <p className="text-sm text-muted-foreground">Return on Investment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">SLA</h4>
                    <p className="text-sm text-muted-foreground">Service Level Agreement</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">POC</h4>
                    <p className="text-sm text-muted-foreground">Proof of Concept</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Next Steps */}
      <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Need More Information?</h3>
          <p className="text-muted-foreground mb-6">
            Explore our comprehensive guides and tutorials to deepen your understanding of AI in finance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/regulatory-guide">
                AI Regulatory Landscape
                <Shield className="ml-2 h-4 w-4" />
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