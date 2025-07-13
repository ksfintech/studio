import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, ArrowLeft, CheckCircle, AlertTriangle, Scale, Users, Lock, Eye, Target, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'AI Ethics in Financial Services | AI FinTech Insights',
  description: 'Understanding the ethical considerations and regulatory requirements for AI in finance. Learn about fairness, transparency, accountability, and compliance.',
};

export default function AIEthicsFinancePage() {
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
          <Shield className="w-6 h-6 text-primary" />
          <Badge variant="default">Advanced</Badge>
          <Badge variant="outline">20 min read</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          AI Ethics in Financial Services
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Explore the critical ethical considerations and regulatory requirements for implementing AI in financial services. 
          Learn about fairness, transparency, accountability, and responsible AI practices.
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Ethics</Badge>
          <Badge variant="secondary">Regulation</Badge>
          <Badge variant="secondary">Compliance</Badge>
          <Badge variant="secondary">Fairness</Badge>
        </div>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Table of Contents
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav className="space-y-2">
            <Link href="#ethical-principles" className="block text-primary hover:underline">1. Ethical Principles</Link>
            <Link href="#bias-fairness" className="block text-primary hover:underline">2. Bias and Fairness</Link>
            <Link href="#transparency" className="block text-primary hover:underline">3. Transparency and Explainability</Link>
            <Link href="#privacy-security" className="block text-primary hover:underline">4. Privacy and Security</Link>
            <Link href="#accountability" className="block text-primary hover:underline">5. Accountability and Governance</Link>
            <Link href="#regulatory-landscape" className="block text-primary hover:underline">6. Regulatory Landscape</Link>
            <Link href="#best-practices" className="block text-primary hover:underline">7. Best Practices</Link>
          </nav>
        </CardContent>
      </Card>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Ethical Principles */}
        <section id="ethical-principles">
          <h2 className="text-3xl font-bold mb-6">1. Ethical Principles</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg mb-6">
              AI systems in financial services must adhere to fundamental ethical principles to ensure responsible deployment 
              and maintain public trust. These principles guide the development, deployment, and monitoring of AI systems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    Fairness
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI systems should treat all individuals fairly and avoid discrimination based on protected characteristics.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Equal treatment across demographics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Bias detection and mitigation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Regular fairness audits</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI systems should be transparent in their decision-making processes and explainable to stakeholders.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear decision explanations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Model interpretability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Open communication</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    AI systems must protect individual privacy and handle personal data responsibly.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Data minimization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Secure data handling</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Consent management</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Accountability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Clear responsibility for AI system outcomes and mechanisms for addressing issues.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Clear ownership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Oversight mechanisms</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Redress procedures</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Bias and Fairness */}
        <section id="bias-fairness">
          <h2 className="text-3xl font-bold mb-6">2. Bias and Fairness</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Understanding AI Bias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Types of Bias in AI</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Data Bias</h5>
                      <p className="text-sm text-muted-foreground">
                        Training data that doesn't represent the target population fairly
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Algorithmic Bias</h5>
                      <p className="text-sm text-muted-foreground">
                        Bias introduced by the algorithm design or optimization process
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Selection Bias</h5>
                      <p className="text-sm text-muted-foreground">
                        Bias in how data is collected or samples are selected
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Confirmation Bias</h5>
                      <p className="text-sm text-muted-foreground">
                        Tendency to favor information that confirms existing beliefs
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Fairness Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-700">Statistical Parity</div>
                      <p className="text-sm text-blue-600 mt-1">
                        Equal positive prediction rates across groups
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-700">Equal Opportunity</div>
                      <p className="text-sm text-green-600 mt-1">
                        Equal true positive rates across groups
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-700">Equalized Odds</div>
                      <p className="text-sm text-purple-600 mt-1">
                        Equal true positive and false positive rates
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Bias Detection and Mitigation Strategies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Auditing</h4>
                    <p className="text-sm text-muted-foreground">
                      Analyze training data for representation gaps and demographic imbalances
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Model Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Test models across different demographic groups and scenarios
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Bias Mitigation</h4>
                    <p className="text-sm text-muted-foreground">
                      Apply techniques like reweighting, adversarial training, or fairness constraints
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-semibold text-primary">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Monitoring</h4>
                    <p className="text-sm text-muted-foreground">
                      Monitor model performance and fairness metrics in production
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transparency and Explainability */}
        <section id="transparency">
          <h2 className="text-3xl font-bold mb-6">3. Transparency and Explainability</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Explainable AI (XAI)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Local Interpretability</h4>
                    <p className="text-sm text-muted-foreground">
                      Explain individual predictions and decisions made by the model
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Global Interpretability</h4>
                    <p className="text-sm text-muted-foreground">
                      Understand the overall behavior and patterns of the model
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Feature Importance</h4>
                    <p className="text-sm text-muted-foreground">
                      Identify which factors most influence model decisions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Documentation Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Model Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive documentation of model architecture and training
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data Documentation</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear documentation of data sources, preprocessing, and quality
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Decision Logs</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain logs of model decisions for audit and review purposes
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Explainability Techniques</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Model-Agnostic Methods</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>LIME (Local Interpretable Model-agnostic Explanations)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>SHAP (SHapley Additive exPlanations)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Counterfactual Explanations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Feature Attribution</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Interpretable Models</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Decision Trees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Linear Models</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Rule-based Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Generalized Additive Models</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Privacy and Security */}
        <section id="privacy-security">
          <h2 className="text-3xl font-bold mb-6">4. Privacy and Security</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Privacy Protection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Data Minimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Collect only the minimum data necessary for the intended purpose
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Anonymization</h4>
                    <p className="text-sm text-muted-foreground">
                      Remove or mask personally identifiable information
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Differential Privacy</h4>
                    <p className="text-sm text-muted-foreground">
                      Add noise to data to protect individual privacy
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Federated Learning</h4>
                    <p className="text-sm text-muted-foreground">
                      Train models without sharing raw data
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Security Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-1">Encryption</h4>
                    <p className="text-sm text-muted-foreground">
                      Encrypt data at rest and in transit
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Access Controls</h4>
                    <p className="text-sm text-muted-foreground">
                      Implement role-based access controls
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Model Security</h4>
                    <p className="text-sm text-muted-foreground">
                      Protect against model extraction and poisoning attacks
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Audit Trails</h4>
                    <p className="text-sm text-muted-foreground">
                      Maintain comprehensive logs of system access and usage
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Accountability and Governance */}
        <section id="accountability">
          <h2 className="text-3xl font-bold mb-6">5. Accountability and Governance</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>AI Governance Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Organizational Structure</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="font-semibold text-blue-700">AI Ethics Committee</div>
                      <p className="text-sm text-blue-600 mt-1">
                        Oversee ethical AI development and deployment
                      </p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="font-semibold text-green-700">Data Governance</div>
                      <p className="text-sm text-green-600 mt-1">
                        Manage data quality, privacy, and compliance
                      </p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="font-semibold text-purple-700">Model Risk Management</div>
                      <p className="text-sm text-purple-600 mt-1">
                        Assess and mitigate AI model risks
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Responsibility Matrix</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Role</th>
                          <th className="text-left p-2">Responsibilities</th>
                          <th className="text-left p-2">Accountability</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">AI Ethics Officer</td>
                          <td className="p-2">Ethical oversight, policy development</td>
                          <td className="p-2">Board of Directors</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Data Scientists</td>
                          <td className="p-2">Model development, bias testing</td>
                          <td className="p-2">AI Ethics Committee</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Business Owners</td>
                          <td className="p-2">Use case definition, business impact</td>
                          <td className="p-2">Executive Management</td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Compliance Officers</td>
                          <td className="p-2">Regulatory compliance, audit</td>
                          <td className="p-2">Regulatory Bodies</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Regulatory Landscape */}
        <section id="regulatory-landscape">
          <h2 className="text-3xl font-bold mb-6">6. Regulatory Landscape</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Key Regulations and Guidelines</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Financial Services Regulations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Fair Lending Laws</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Equal Credit Opportunity Act (ECOA) and Fair Housing Act
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Prohibits discrimination in lending decisions
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Model Risk Management</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        SR 11-7 and related guidance
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Framework for managing model risks
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Data Protection</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        GDPR, CCPA, GLBA
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Privacy and data protection requirements
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">Consumer Protection</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Dodd-Frank Act, CFPB guidelines
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Consumer financial protection requirements
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Emerging AI Regulations</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">EU AI Act</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Comprehensive AI regulation framework
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Risk-based approach to AI regulation
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-2">NIST AI Risk Management</h5>
                      <p className="text-sm text-muted-foreground mb-2">
                        Framework for AI risk management
                      </p>
                      <div className="text-xs text-muted-foreground">
                        Voluntary framework for trustworthy AI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Best Practices */}
        <section id="best-practices">
          <h2 className="text-3xl font-bold mb-6">7. Best Practices</h2>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Implementing Ethical AI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Development Phase</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Ethical design principles</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Diverse development teams</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Bias testing protocols</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Explainability requirements</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Privacy-by-design</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Security testing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Deployment Phase</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Gradual rollout</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Human oversight</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Performance monitoring</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Stakeholder communication</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Incident response plans</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Regular audits</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Ongoing Management</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Continuous monitoring</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Regular model updates</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Feedback collection</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Compliance reviews</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Stakeholder engagement</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>Documentation updates</span>
                      </div>
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
          <h3 className="text-2xl font-bold mb-4">Ready to Implement Ethical AI?</h3>
          <p className="text-muted-foreground mb-6">
            Now that you understand AI ethics principles, explore our other resources to build responsible AI systems.
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
                <Shield className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 