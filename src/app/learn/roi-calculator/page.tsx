'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, ArrowLeft, Calculator, TrendingUp, DollarSign, Clock, Users, Shield, Zap, Target, CheckCircle } from 'lucide-react';

export default function ROICalculatorGuidePage() {
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
          <BarChart3 className="w-6 h-6 text-primary" />
          <Badge variant="default">Intermediate</Badge>
          <Badge variant="outline">30 min</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI ROI Calculator Guide
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Master the art of calculating return on investment for AI implementations in financial services. 
          Learn proven methodologies, formulas, and best practices to justify AI investments.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">ROI Analysis</Badge>
          <Badge variant="secondary">Cost-Benefit</Badge>
          <Badge variant="secondary">Metrics</Badge>
          <Badge variant="secondary">Business Case</Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#roi-basics" className="block text-primary hover:underline">1. ROI Basics for AI</Link>
            <Link href="#cost-analysis" className="block text-primary hover:underline">2. Cost Analysis</Link>
            <Link href="#benefit-analysis" className="block text-primary hover:underline">3. Benefit Analysis</Link>
            <Link href="#calculation-methods" className="block text-primary hover:underline">4. Calculation Methods</Link>
            <Link href="#case-studies" className="block text-primary hover:underline">5. Case Studies</Link>
            <Link href="#best-practices" className="block text-primary hover:underline">6. Best Practices</Link>
          </nav>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* ROI Basics */}
        <section id="roi-basics">
          <h2 className="text-3xl font-bold mb-6">1. ROI Basics for AI</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              Return on Investment (ROI) is a critical metric for evaluating the financial viability of AI projects. 
              Understanding how to calculate and present ROI is essential for securing executive buy-in and project funding.
            </p>
            
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" />
                  Basic ROI Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-center text-lg font-mono">
                    ROI = (Net Benefits - Total Costs) / Total Costs × 100%
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Net Benefits</h4>
                    <p className="text-sm text-muted-foreground">
                      Total financial gains minus any ongoing operational costs
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Total Costs</h4>
                    <p className="text-sm text-muted-foreground">
                      All implementation, operational, and maintenance costs
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Why ROI Matters for AI Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Executive Decision Making</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Justify investment decisions</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Prioritize competing projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Allocate resources effectively</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Project Success Measurement</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Track project performance</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Validate implementation success</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Guide future investments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost Analysis */}
        <section id="cost-analysis">
          <h2 className="text-3xl font-bold mb-6">2. Cost Analysis</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Comprehensive Cost Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Implementation Costs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Technology Infrastructure</span>
                        <span className="text-muted-foreground">$50K - $500K</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Software Licenses</span>
                        <span className="text-muted-foreground">$10K - $100K/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Consulting Services</span>
                        <span className="text-muted-foreground">$100K - $1M</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Data Preparation</span>
                        <span className="text-muted-foreground">$20K - $200K</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Personnel Costs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Data Scientists</span>
                        <span className="text-muted-foreground">$120K - $200K/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>ML Engineers</span>
                        <span className="text-muted-foreground">$100K - $180K/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Project Managers</span>
                        <span className="text-muted-foreground">$80K - $150K/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Training & Development</span>
                        <span className="text-muted-foreground">$5K - $20K/person</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Operational Costs
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Cloud Computing</span>
                        <span className="text-muted-foreground">$5K - $50K/month</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Maintenance & Support</span>
                        <span className="text-muted-foreground">15-20% of initial cost</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Model Monitoring</span>
                        <span className="text-muted-foreground">$10K - $100K/year</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Compliance & Audit</span>
                        <span className="text-muted-foreground">$20K - $100K/year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Benefit Analysis */}
        <section id="benefit-analysis">
          <h2 className="text-3xl font-bold mb-6">3. Benefit Analysis</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quantifying AI Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Direct Financial Gains</h4>
                  <p className="text-sm text-muted-foreground">
                    Increased revenue from upselling, cross-selling, and new product offerings.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Cost Savings</h4>
                  <p className="text-sm text-muted-foreground">
                    Reduced operational costs, lower headcount, and improved efficiency.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Risk Reduction</h4>
                  <p className="text-sm text-muted-foreground">
                    Lower fraud losses, improved compliance, and reduced credit risk.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Customer Lifetime Value</h4>
                  <p className="text-sm text-muted-foreground">
                    Higher customer satisfaction, improved retention, and increased loyalty.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Calculation Methods */}
        <section id="calculation-methods">
          <h2 className="text-3xl font-bold mb-6">4. Calculation Methods</h2>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Net Present Value (NPV)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-center text-lg font-mono">
                    NPV = Σ [Net Cash Flow / (1 + r)^t] - Initial Investment
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Net Present Value (NPV) calculates the present value of future cash flows, discounted at a specific rate. 
                  If NPV &gt; 0, the project is considered financially viable.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payback Period</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg mb-4">
                  <p className="text-center text-lg font-mono">
                    Payback Period = Initial Investment / Annual Net Cash Flow
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  The payback period is the time it takes for an investment to generate enough cash flow to recover its initial cost. 
                  A shorter payback period is generally better, as it indicates &lt; risk and &gt; liquidity.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Case Studies */}
        <section id="case-studies">
          <h2 className="text-3xl font-bold mb-6">5. Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Robo-Advisor ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A wealth management firm implemented a robo-advisor platform, resulting in a 300% ROI over 3 years.
                </p>
                <Button variant="link" asChild>
                  <Link href="/learn/fraud-detection-success">Read Full Case Study</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Fraud Detection ROI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A retail bank deployed an AI fraud detection system, achieving an 80% reduction in fraud losses.
                </p>
                <Button variant="link" asChild>
                  <Link href="/learn/fraud-detection-success">Read Full Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-bold mb-6">6. Best Practices</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Tips for Accurate ROI Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Start with a clear business case and defined success metrics.</li>
                <li>Involve stakeholders from all relevant departments.</li>
                <li>Be realistic about costs and benefits.</li>
                <li>Use a phased approach to implementation and measurement.</li>
                <li>Continuously monitor and refine your ROI calculations.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Next Steps */}
      <Card className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Calculate Your Own ROI?</h3>
          <p className="text-muted-foreground mb-6">
            Use our interactive calculators to estimate the potential return on your AI investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/calculators">
                Explore Calculators
                <Calculator className="ml-2 h-4 w-4" />
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