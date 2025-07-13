import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, ArrowLeft, CheckCircle, MessageCircle, Clock, Star, BarChart3, Target, Zap, Globe } from 'lucide-react';

export const metadata = {
  title: 'AI-Powered Customer Service | AI FinTech Insights',
  description: 'Case study of a fintech company that improved customer satisfaction by 60% with AI chatbots. Learn about implementation, results, and best practices.',
};

export default function CustomerServiceAIPage() {
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
          <Users className="w-6 h-6 text-primary" />
          <Badge variant="default">Case Study</Badge>
          <Badge variant="outline">12 min read</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI-Powered Customer Service
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Discover how a leading fintech company transformed their customer service operations 
          with AI chatbots, achieving 60% improvement in customer satisfaction and significant 
          operational efficiency gains.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Customer Service</Badge>
          <Badge variant="secondary">Chatbots</Badge>
          <Badge variant="secondary">NLP</Badge>
          <Badge variant="secondary">Customer Experience</Badge>
        </div>
      </div>

      {/* Executive Summary */}
      <Card className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            Executive Summary
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">70%</div>
              <div className="text-sm text-muted-foreground">Support Ticket Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Availability</div>
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
              A rapidly growing fintech company with over 2 million customers was struggling 
              to maintain quality customer service as their user base expanded. Traditional 
              support channels were overwhelmed, leading to long wait times, frustrated customers, 
              and high operational costs.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-orange-500" />
                  Customer Service Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Average wait time: 45 minutes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Customer satisfaction: 3.2/5</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Support costs: $2.5M annually</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Limited 9-5 support hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>High agent turnover (40%)</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Inconsistent service quality</span>
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
                Intelligent Chatbot Platform
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Core AI Technologies</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Natural Language Processing (NLP)</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Machine Learning Models</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Sentiment Analysis</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Intent Recognition</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Entity Extraction</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Conversation Flow Management</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">24/7 Availability</h5>
                      <p className="text-sm text-muted-foreground">
                        Round-the-clock customer support without human intervention
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Multi-language Support</h5>
                      <p className="text-sm text-muted-foreground">
                        Support for 15+ languages with cultural context awareness
                      </p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Seamless Handoff</h5>
                      <p className="text-sm text-muted-foreground">
                        Intelligent escalation to human agents when needed
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Integration Capabilities</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>CRM system integration for customer context</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Knowledge base access for accurate responses</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Payment system integration for transactions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Analytics dashboard for performance monitoring</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Implementation Strategy</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Phased Rollout Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 1: Foundation (Weeks 1-4)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Deployed basic FAQ chatbot for common queries</p>
                      <p>• Integrated with existing knowledge base</p>
                      <p>• Established monitoring and analytics</p>
                      <p>• Trained initial AI models on historical data</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 2: Enhanced Capabilities (Weeks 5-8)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Added transaction support and account management</p>
                      <p>• Implemented sentiment analysis and escalation logic</p>
                      <p>• Enhanced NLP models with customer feedback</p>
                      <p>• Integrated with CRM and payment systems</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 3: Full Deployment (Weeks 9-12)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Rolled out to all customer touchpoints</p>
                      <p>• Implemented advanced conversation flows</p>
                      <p>• Added multi-language support</p>
                      <p>• Optimized performance and user experience</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 4: Optimization (Ongoing)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Continuous model training and improvement</p>
                      <p>• A/B testing for conversation flows</p>
                      <p>• Performance monitoring and optimization</p>
                      <p>• Feature expansion based on usage patterns</p>
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
                  <BarChart3 className="w-5 h-5 text-green-600" />
                  Customer Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Satisfaction Score</h4>
                    <p className="text-sm text-muted-foreground">
                      Improved from 3.2/5 to 5.1/5 (60% increase)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Response Time</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced from 45 minutes to &lt;30 seconds
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Resolution Rate</h4>
                    <p className="text-sm text-muted-foreground">
                      Achieved 85% first-contact resolution
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Operational Efficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Support Volume</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced human agent tickets by 70%
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cost Savings</h4>
                    <p className="text-sm text-muted-foreground">
                      Reduced support costs by $1.8M annually
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Agent Productivity</h4>
                    <p className="text-sm text-muted-foreground">
                      Increased agent efficiency by 40%
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Detailed Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Chatbot Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">2M+</div>
                  <div className="text-sm text-muted-foreground">Conversations/Month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Customer Journey */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Customer Journey Transformation</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Before vs After AI Implementation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Traditional Support Process</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-orange-500" />
                      <span>Customer submits ticket → 45 min wait → Agent responds → Multiple back-and-forth → Resolution (2-3 hours)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">AI-Powered Support Process</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-500" />
                      <span>Customer asks question → Instant AI response → Immediate resolution (30 seconds)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Common Use Cases Handled</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Account balance inquiries</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Transaction status checks</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Password resets</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Basic troubleshooting</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Escalation Triggers</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Complex technical issues</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>High-value transactions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Complaints and disputes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Emotional customer interactions</span>
                      </div>
                    </div>
                  </div>
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
                  <h4 className="font-semibold mb-3">Data Quality & Training</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>High-quality training data is crucial for accuracy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Continuous model retraining improves performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Customer feedback loops enhance learning</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">User Experience Design</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Conversation flows must be intuitive and natural</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear escalation paths build trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Personality and tone matter for engagement</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Change Management</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Gradual rollout reduces resistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Agent training and involvement is essential</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear communication about benefits</span>
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
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Integrating with legacy systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Handling complex financial queries</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Ensuring security and compliance</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Organizational Challenges</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Agent concerns about job security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Customer adoption and trust</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-orange-500" />
                      <span>Managing expectations and limitations</span>
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
                        <span>Voice-enabled interactions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Advanced sentiment analysis</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Predictive customer service</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Multimodal interactions</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Personalized experiences</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proactive support</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Business Expansion</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Expand to additional customer touchpoints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Develop AI-powered sales assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Create omnichannel customer experience</span>
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
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Customer Service?</h3>
          <p className="text-muted-foreground mb-6">
            Learn more about AI implementation strategies and explore other real-world case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/ai-finance-glossary">
                AI in Finance Glossary
                <Globe className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn">
                Back to Learning Hub
                <Users className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 