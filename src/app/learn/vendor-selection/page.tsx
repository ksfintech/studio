import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, ArrowLeft, CheckCircle, AlertTriangle, Star, FileText, Clock, DollarSign, Shield, Target } from 'lucide-react';

export const metadata = {
  title: 'AI Vendor Selection Framework | AI FinTech Insights',
  description: 'A systematic approach to evaluating and selecting AI vendors for financial institutions. Learn about vendor evaluation, RFP process, and due diligence.',
};

export default function VendorSelectionPage() {
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
          <Badge variant="default">Intermediate</Badge>
          <Badge variant="outline">45 min</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI Vendor Selection Framework
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Master the systematic approach to evaluating and selecting AI vendors for financial institutions. 
          Learn proven methodologies for vendor assessment, RFP processes, and due diligence.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Vendor Evaluation</Badge>
          <Badge variant="secondary">RFP Process</Badge>
          <Badge variant="secondary">Due Diligence</Badge>
          <Badge variant="secondary">Selection Criteria</Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#framework-overview" className="block text-primary hover:underline">1. Framework Overview</Link>
            <Link href="#vendor-landscape" className="block text-primary hover:underline">2. AI Vendor Landscape</Link>
            <Link href="#evaluation-criteria" className="block text-primary hover:underline">3. Evaluation Criteria</Link>
            <Link href="#rfp-process" className="block text-primary hover:underline">4. RFP Process</Link>
            <Link href="#due-diligence" className="block text-primary hover:underline">5. Due Diligence</Link>
            <Link href="#selection-decision" className="block text-primary hover:underline">6. Selection Decision</Link>
            <Link href="#implementation-planning" className="block text-primary hover:underline">7. Implementation Planning</Link>
          </nav>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Framework Overview */}
        <section id="framework-overview">
          <h2 className="text-3xl font-bold mb-6">1. Framework Overview</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Selecting the right AI vendor is a critical decision that can significantly impact your organization's 
              AI implementation success. A systematic approach ensures you evaluate vendors objectively and make 
              informed decisions based on your specific requirements and constraints.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Vendor Selection Framework Steps
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Requirements Definition</h4>
                      <p className="text-sm text-muted-foreground">
                        Clearly define your business requirements, technical needs, and success criteria
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Vendor Research</h4>
                      <p className="text-sm text-muted-foreground">
                        Identify and research potential vendors in the AI market
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Evaluation & Scoring</h4>
                      <p className="text-sm text-muted-foreground">
                        Evaluate vendors against defined criteria and score them objectively
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Due Diligence</h4>
                      <p className="text-sm text-muted-foreground">
                        Conduct thorough due diligence on shortlisted vendors
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-semibold text-primary">5</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Final Selection</h4>
                      <p className="text-sm text-muted-foreground">
                        Make the final vendor selection and plan implementation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Vendor Landscape */}
        <section id="vendor-landscape">
          <h2 className="text-3xl font-bold mb-6">2. AI Vendor Landscape</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Vendor Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Enterprise AI Platforms</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive AI platforms with multiple capabilities (IBM, Microsoft, Google)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Specialized AI Vendors</h4>
                    <p className="text-sm text-muted-foreground">
                      Focus on specific AI applications (OpenAI, Anthropic, Cohere)
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">FinTech AI Solutions</h4>
                    <p className="text-sm text-muted-foreground">
                      AI solutions specifically designed for financial services
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Consulting Firms</h4>
                    <p className="text-sm text-muted-foreground">
                      AI consulting and implementation services (Accenture, Deloitte)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Market Considerations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Market Maturity</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate vendor stability and market position
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Technology Evolution</h4>
                    <p className="text-sm text-muted-foreground">
                      Consider rapid pace of AI technology changes
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Regulatory Compliance</h4>
                    <p className="text-sm text-muted-foreground">
                      Ensure vendors meet financial services regulations
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Integration Capabilities</h4>
                    <p className="text-sm text-muted-foreground">
                      Assess compatibility with existing systems
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section id="evaluation-criteria">
          <h2 className="text-3xl font-bold mb-6">3. Evaluation Criteria</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Comprehensive Evaluation Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Technical Criteria (40% Weight)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Technology Architecture</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Performance & Scalability</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Security & Compliance</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Integration Capabilities</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>API & Documentation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Model Performance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Business Criteria (30% Weight)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Cost & ROI</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Implementation Timeline</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Support & Maintenance</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Vendor Stability</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Market Position</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Financial Health</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Partnership Criteria (30% Weight)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Customer Support</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Training & Documentation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Partnership Approach</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Reference Customers</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Innovation Commitment</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Cultural Fit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vendor Scoring Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Criteria</th>
                      <th className="text-left p-2">Weight</th>
                      <th className="text-left p-2">Vendor A</th>
                      <th className="text-left p-2">Vendor B</th>
                      <th className="text-left p-2">Vendor C</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Technical Capabilities</td>
                      <td className="p-2">40%</td>
                      <td className="p-2">8.5/10</td>
                      <td className="p-2">9.0/10</td>
                      <td className="p-2">7.5/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Business Value</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">8.0/10</td>
                      <td className="p-2">7.5/10</td>
                      <td className="p-2">8.5/10</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Partnership Quality</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">9.0/10</td>
                      <td className="p-2">8.0/10</td>
                      <td className="p-2">8.0/10</td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="p-2">Total Score</td>
                      <td className="p-2">100%</td>
                      <td className="p-2">8.5/10</td>
                      <td className="p-2">8.2/10</td>
                      <td className="p-2">8.0/10</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* RFP Process */}
        <section id="rfp-process">
          <h2 className="text-3xl font-bold mb-6">4. RFP Process</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Request for Proposal (RFP) Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Executive Summary</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Project overview and objectives</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Key requirements and constraints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Evaluation criteria and timeline</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Technical Requirements</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Functional specifications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Performance requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Integration requirements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Security and compliance needs</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Implementation & Support</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Implementation approach and timeline</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Training and knowledge transfer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Support and maintenance services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Escalation procedures</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Commercial Terms</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Pricing structure and models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Payment terms and conditions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Service level agreements (SLAs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Contract terms and duration</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Due Diligence */}
        <section id="due-diligence">
          <h2 className="text-3xl font-bold mb-6">5. Due Diligence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Financial Due Diligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Financial Health</h4>
                    <p className="text-sm text-muted-foreground">
                      Review financial statements, funding history, and growth metrics
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Market Position</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyze market share, competitive landscape, and differentiation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Investment Backing</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate investors, funding rounds, and strategic partnerships
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Technical Due Diligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Technology Stack</h4>
                    <p className="text-sm text-muted-foreground">
                      Assess technology architecture, scalability, and security
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Team Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Evaluate technical team capabilities and experience
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Product Roadmap</h4>
                    <p className="text-sm text-muted-foreground">
                      Review development plans and innovation strategy
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Reference Customer Validation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Reference Questions</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Implementation experience</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Performance and reliability</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Support quality</span>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>ROI and business impact</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Partnership satisfaction</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Would recommend vendor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Selection Decision */}
        <section id="selection-decision">
          <h2 className="text-3xl font-bold mb-6">6. Selection Decision</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Decision Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Scoring and Ranking</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Calculate weighted scores for each vendor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Rank vendors based on total scores</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Identify top 2-3 candidates for final evaluation</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Risk Assessment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Evaluate technical and business risks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Assess vendor stability and longevity</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Consider regulatory and compliance risks</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Stakeholder Alignment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Present findings to key stakeholders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Address concerns and objections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Obtain final approval and sign-off</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Implementation Planning */}
        <section id="implementation-planning">
          <h2 className="text-3xl font-bold mb-6">7. Implementation Planning</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Post-Selection Activities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Contract Negotiation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Finalize commercial terms and pricing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Define service level agreements (SLAs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Establish governance and oversight</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Include exit and transition clauses</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Implementation Preparation</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Establish project team and governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Define detailed implementation plan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Prepare infrastructure and resources</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Schedule kickoff and planning sessions</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Success Metrics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Define key performance indicators (KPIs)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Establish monitoring and reporting</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Plan regular review and optimization</span>
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
          <h3 className="text-2xl font-bold mb-4">Ready to Select Your AI Vendor?</h3>
          <p className="text-muted-foreground mb-6">
            Now that you understand the vendor selection framework, explore our other resources to complete your AI implementation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/learn/integration-best-practices">
                AI Integration Best Practices
                <Target className="ml-2 h-4 w-4" />
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