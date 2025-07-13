import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Target, ArrowLeft, CheckCircle, AlertTriangle, TrendingUp, Shield, Zap, Users, BarChart3, Clock, DollarSign, Settings } from 'lucide-react';

export const metadata = {
  title: 'AI Implementation Strategy | AI FinTech Insights',
  description: 'Step-by-step guide to successfully implementing AI solutions in financial institutions. Learn about strategy planning, technology selection, and change management.',
};

export default function AIImplementationGuidePage() {
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
          <Target className="w-6 h-6 text-primary" />
          <Badge variant="default">Intermediate</Badge>
          <Badge variant="outline">25 min read</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI Implementation Strategy
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          A comprehensive guide to successfully implementing AI solutions in financial institutions. 
          Learn the strategic approach, best practices, and common pitfalls to avoid.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Strategy Planning</Badge>
          <Badge variant="secondary">Technology Selection</Badge>
          <Badge variant="secondary">Change Management</Badge>
          <Badge variant="secondary">ROI Analysis</Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#strategy-overview" className="block text-primary hover:underline">1. Strategy Overview</Link>
            <Link href="#assessment" className="block text-primary hover:underline">2. Current State Assessment</Link>
            <Link href="#use-cases" className="block text-primary hover:underline">3. Use Case Identification</Link>
            <Link href="#technology" className="block text-primary hover:underline">4. Technology Selection</Link>
            <Link href="#implementation" className="block text-primary hover:underline">5. Implementation Roadmap</Link>
            <Link href="#change-management" className="block text-primary hover:underline">6. Change Management</Link>
            <Link href="#measuring-success" className="block text-primary hover:underline">7. Measuring Success</Link>
          </nav>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Strategy Overview */}
        <section id="strategy-overview">
          <h2 className="text-3xl font-bold mb-6">1. Strategy Overview</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Implementing AI in financial institutions requires a well-defined strategy that aligns with business objectives, 
              regulatory requirements, and organizational capabilities. A successful AI implementation strategy should be 
              comprehensive, phased, and adaptable to changing market conditions.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Key Strategic Principles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Business Alignment</h4>
                    <p className="text-sm text-muted-foreground">
                      AI initiatives must directly support business goals and deliver measurable value to stakeholders.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Risk Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement robust risk controls and governance frameworks to ensure responsible AI deployment.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Scalability</h4>
                    <p className="text-sm text-muted-foreground">
                      Design solutions that can scale across the organization and adapt to future requirements.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Continuous Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Establish processes for ongoing model monitoring, retraining, and improvement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Current State Assessment */}
        <section id="assessment">
          <h2 className="text-3xl font-bold mb-6">2. Current State Assessment</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Assessing Your Organization's AI Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Infrastructure Assessment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Data Quality</span>
                        <p className="text-xs text-muted-foreground">Assess completeness, accuracy, and consistency</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Data Governance</span>
                        <p className="text-xs text-muted-foreground">Review policies, procedures, and controls</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Technology Stack</span>
                        <p className="text-xs text-muted-foreground">Evaluate current systems and capabilities</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Integration Capabilities</span>
                        <p className="text-xs text-muted-foreground">Assess API and system integration readiness</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Organizational Readiness</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Talent Assessment</span>
                        <p className="text-xs text-muted-foreground">Evaluate existing AI/ML expertise and skills gaps</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Leadership Support</span>
                        <p className="text-xs text-muted-foreground">Assess executive sponsorship and commitment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Change Readiness</span>
                        <p className="text-xs text-muted-foreground">Evaluate organizational culture and adaptability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1" />
                      <div>
                        <span className="text-sm font-medium">Regulatory Compliance</span>
                        <p className="text-xs text-muted-foreground">Review current compliance frameworks</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Use Case Identification */}
        <section id="use-cases">
          <h2 className="text-3xl font-bold mb-6">3. Use Case Identification</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  High-Impact Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Fraud Detection & Prevention</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Credit Risk Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customer Service Automation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Investment Portfolio Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Regulatory Compliance Monitoring</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-500" />
                  Selection Criteria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Clear ROI potential</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Data availability</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Regulatory feasibility</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Implementation complexity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-blue-500" />
                    <span>Stakeholder support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Use Case Prioritization Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Criteria</th>
                      <th className="text-left p-2">Weight</th>
                      <th className="text-left p-2">Fraud Detection</th>
                      <th className="text-left p-2">Credit Scoring</th>
                      <th className="text-left p-2">Customer Service</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Business Impact</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">9/10</td>
                      <td className="p-2">8/10</td>
                      <td className="p-2">7/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Implementation Feasibility</td>
                      <td className="p-2">25%</td>
                      <td className="p-2">8/10</td>
                      <td className="p-2">9/10</td>
                      <td className="p-2">8/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Data Availability</td>
                      <td className="p-2">20%</td>
                      <td className="p-2">9/10</td>
                      <td className="p-2">8/10</td>
                      <td className="p-2">7/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Regulatory Risk</td>
                      <td className="p-2">15%</td>
                      <td className="p-2">7/10</td>
                      <td className="p-2">6/10</td>
                      <td className="p-2">8/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Time to Value</td>
                      <td className="p-2">10%</td>
                      <td className="p-2">8/10</td>
                      <td className="p-2">7/10</td>
                      <td className="p-2">9/10</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="p-2">Total Score</td>
                      <td className="p-2">100%</td>
                      <td className="p-2">8.3/10</td>
                      <td className="p-2">7.7/10</td>
                      <td className="p-2">7.8/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technology Selection */}
        <section id="technology">
          <h2 className="text-3xl font-bold mb-6">4. Technology Selection</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Build vs. Buy Decision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Build (Custom Development)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Full customization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>IP ownership</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Higher cost & time</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Requires expertise</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Buy (Vendor Solutions)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Faster deployment</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Proven solutions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Limited customization</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <span>Vendor dependency</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-primary" />
                  Technology Stack Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Data Infrastructure</h4>
                    <p className="text-sm text-muted-foreground">Data lakes, warehouses, and processing capabilities</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">ML Platforms</h4>
                    <p className="text-sm text-muted-foreground">TensorFlow, PyTorch, or cloud ML services</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Model Deployment</h4>
                    <p className="text-sm text-muted-foreground">Containerization, APIs, and serving infrastructure</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Monitoring & Governance</h4>
                    <p className="text-sm text-muted-foreground">Model monitoring, explainability, and compliance tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Roadmap */}
        <section id="implementation">
          <h2 className="text-3xl font-bold mb-6">5. Implementation Roadmap</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Phased Implementation Approach</CardTitle>
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
                      <p>• Establish AI governance framework</p>
                      <p>• Set up data infrastructure and pipelines</p>
                      <p>• Build core AI/ML capabilities</p>
                      <p>• Select and onboard technology partners</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 2: Pilot Projects (Months 4-8)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Launch 2-3 high-impact pilot projects</p>
                      <p>• Validate use cases and measure ROI</p>
                      <p>• Refine processes and governance</p>
                      <p>• Build organizational capabilities</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 3: Scale & Optimize (Months 9-18)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Scale successful pilots across organization</p>
                      <p>• Implement advanced AI capabilities</p>
                      <p>• Optimize performance and efficiency</p>
                      <p>• Expand use case portfolio</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Phase 4: Innovation (Months 19+)</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Explore emerging AI technologies</p>
                      <p>• Develop competitive advantages</p>
                      <p>• Establish AI as core competency</p>
                      <p>• Drive industry innovation</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Change Management */}
        <section id="change-management">
          <h2 className="text-3xl font-bold mb-6">6. Change Management</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Stakeholder Engagement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Executive Sponsorship</h4>
                    <p className="text-sm text-muted-foreground">Secure C-level support and allocate resources</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Cross-functional Teams</h4>
                    <p className="text-sm text-muted-foreground">Involve IT, business, compliance, and risk teams</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Employee Training</h4>
                    <p className="text-sm text-muted-foreground">Provide AI literacy and technical training programs</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Communication Strategy</h4>
                    <p className="text-sm text-muted-foreground">Regular updates on progress and benefits</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Risk Mitigation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">Ensure adherence to financial regulations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Privacy</h4>
                    <p className="text-sm text-muted-foreground">Implement robust data protection measures</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Model Governance</h4>
                    <p className="text-sm text-muted-foreground">Establish model validation and monitoring</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Continuity</h4>
                    <p className="text-sm text-muted-foreground">Plan for system failures and fallbacks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Measuring Success */}
        <section id="measuring-success">
          <h2 className="text-3xl font-bold mb-6">7. Measuring Success</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Performance Indicators (KPIs)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Business Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Cost Reduction</span>
                      <span className="text-green-600">15-30%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Efficiency Gains</span>
                      <span className="text-green-600">20-40%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Revenue Impact</span>
                      <span className="text-green-600">5-15%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Customer Satisfaction</span>
                      <span className="text-green-600">+25%</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Technical Metrics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Model Accuracy</span>
                      <span className="text-green-600">>95%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Processing Time</span>
                      <span className="text-green-600">-60%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>System Uptime</span>
                      <span className="text-green-600">>99.9%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Error Rate</span>
                      <span className="text-green-600">-80%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Measurement Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Baseline Establishment</h4>
                  <p className="text-sm text-muted-foreground">
                    Document current performance metrics before AI implementation to establish clear benchmarks for comparison.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Regular Monitoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Implement continuous monitoring systems to track performance and identify areas for improvement.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">ROI Calculation</h4>
                  <p className="text-sm text-muted-foreground">
                    Calculate return on investment considering implementation costs, operational savings, and revenue impact.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Stakeholder Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Gather feedback from users, customers, and stakeholders to assess satisfaction and identify improvement opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Next Steps */}
      <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Implement?</h3>
          <p className="text-muted-foreground mb-6">
            Now that you understand the AI implementation strategy, explore our other resources to dive deeper into specific aspects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/roi-calculator">
                AI ROI Calculator Guide
                <DollarSign className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/learn">
                Back to Learning Hub
                <Target className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 