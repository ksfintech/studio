import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TrendingUp, ArrowLeft, CheckCircle, DollarSign, Users, Shield, BarChart3, Clock, Target, Star, AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Fraud Detection Success Story | AI FinTech Insights',
  description: 'How a major bank reduced fraud losses by 80% using AI-powered detection systems. Real-world case study with implementation details and results.',
};

export default function FraudDetectionSuccessPage() {
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
          <TrendingUp className="w-6 h-6 text-primary" />
          <Badge variant="default">Case Study</Badge>
          <Badge variant="outline">10 min read</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          Fraud Detection Success Story
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Discover how a major financial institution achieved an 80% reduction in fraud losses 
          through the strategic implementation of AI-powered detection systems.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Fraud Detection</Badge>
          <Badge variant="secondary">Machine Learning</Badge>
          <Badge variant="secondary">Risk Management</Badge>
          <Badge variant="secondary">Real-time Processing</Badge>
        </div>
      </div>

      {/* Executive Summary */}
      <Card className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-green-600" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">80%</div>
              <div className="text-sm text-muted-foreground">Reduction in Fraud Losses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">$50M</div>
              <div className="text-sm text-muted-foreground">Annual Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Background */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Background & Challenge</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              A major multinational bank with operations across 25 countries was facing increasing 
              challenges with sophisticated fraud attacks. Traditional rule-based systems were 
              becoming ineffective against evolving fraud patterns, resulting in significant 
              financial losses and customer dissatisfaction.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Key Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>$25M annual fraud losses</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>High false positive rates (40%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Slow response to new threats</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Manual review bottlenecks</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Customer experience impact</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Regulatory compliance pressure</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Solution */}
        <section>
          <h2 className="text-3xl font-bold mb-6">AI-Powered Solution</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Solution Architecture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Multi-Layer AI System</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Layer 1: Real-time Detection</h5>
                      <p className="text-sm text-muted-foreground">
                        Machine learning models analyze transactions in real-time using behavioral patterns
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Layer 2: Deep Analysis</h5>
                      <p className="text-sm text-muted-foreground">
                        Advanced analytics identify complex fraud patterns and network connections
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Layer 3: Adaptive Learning</h5>
                      <p className="text-sm text-muted-foreground">
                        Continuous model updates based on new fraud patterns and feedback
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Technologies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Deep Learning Neural Networks</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Graph Analytics</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Natural Language Processing</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Real-time Stream Processing</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Anomaly Detection</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Ensemble Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Implementation Journey</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Implementation Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 1: Foundation (Months 1-3)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Established data infrastructure and pipelines</p>
                      <p>• Built core AI/ML capabilities and team</p>
                      <p>• Developed initial fraud detection models</p>
                      <p>• Set up monitoring and alerting systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 2: Pilot Launch (Months 4-6)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Deployed AI system in test environment</p>
                      <p>• Validated model performance and accuracy</p>
                      <p>• Refined algorithms based on feedback</p>
                      <p>• Trained operational teams</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 3: Production Rollout (Months 7-9)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Gradual rollout across all regions</p>
                      <p>• Real-time monitoring and optimization</p>
                      <p>• Performance tuning and scaling</p>
                      <p>• Continuous model improvements</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 4: Optimization (Months 10-12)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Advanced analytics and insights</p>
                      <p>• Model retraining and enhancement</p>
                      <p>• Integration with additional systems</p>
                      <p>• Expansion to new fraud types</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Results */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Financial Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Fraud Loss Reduction</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced annual fraud losses from $25M to $5M (80% reduction)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Operational Efficiency</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced manual review workload by 70%
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ROI Achievement</h4>
                    <p className="text-sm text-muted-foreground">
                      Achieved 400% ROI within 18 months
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Detection Accuracy</h4>
                    <p className="text-sm text-muted-foreground">
                      Improved from 60% to 95% detection rate
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">False Positive Rate</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced from 40% to 5%
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced from hours to milliseconds
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Customer Experience Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">Reduction in False Declines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Faster Transaction Processing</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Lessons Learned</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Success Factors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Quality & Preparation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Invested heavily in data quality and governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Established comprehensive data pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Ensured real-time data availability</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Change Management</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Comprehensive training for all stakeholders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear communication of benefits and expectations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Gradual rollout to minimize disruption</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Continuous Improvement</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Regular model retraining and updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Feedback loops from operational teams</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Adaptation to new fraud patterns</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Challenges Overcome</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Challenges</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Legacy system integration complexity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Real-time processing performance requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Model interpretability for compliance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Organizational Challenges</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Resistance to AI adoption</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Skills gap in AI/ML expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      <span>Regulatory approval processes</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Future Outlook */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Future Outlook</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Expansion Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Technology Enhancements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Advanced deep learning models</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Graph neural networks</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Federated learning</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Explainable AI capabilities</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Quantum computing integration</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Edge computing deployment</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Business Expansion</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Extend AI capabilities to other risk areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Partner with other financial institutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Develop AI-as-a-Service offerings</span>
                    </div>
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
          <h3 className="text-2xl font-bold mb-4">Inspired by This Success Story?</h3>
          <p className="text-muted-foreground mb-6">
            Learn more about AI implementation strategies and explore other real-world case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/customer-service-ai">
                AI-Powered Customer Service Case Study
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn">
                Back to Learning Hub
                <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 