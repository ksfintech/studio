import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AreaChart, Calculator, CreditCard, Home, Landmark, PiggyBank, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Financial Calculators | AI FinTech Insights',
  description: 'A collection of powerful and easy-to-use financial calculators to help you make informed decisions. From investment returns to loan payments, we have the tools you need.',
};

const calculators = [
    {
        id: 'investment-roi-calculator',
        title: 'Investment ROI Calculator',
        description: 'Calculate the return on investment for your stock portfolio, real estate, or other assets.',
        icon: TrendingUp,
        status: 'Available',
        href: '/calculators/investment-roi-calculator'
    },
    {
        id: 'loan-amortization-calculator',
        title: 'Loan Amortization Calculator',
        description: 'See how your loan payments are broken down into principal and interest over time.',
        icon: Landmark,
        status: 'Available',
        href: '/calculators/loan-amortization-calculator'
    },
    {
        id: 'retirement-savings-calculator',
        title: 'Retirement Savings Calculator',
        description: 'Project your retirement savings and see if you are on track to meet your goals.',
        icon: PiggyBank,
        status: 'Available',
        href: '/calculators/retirement-savings-calculator'
    },
    {
        id: 'mortgage-calculator',
        title: 'Mortgage Calculator',
        description: 'Estimate your monthly mortgage payments for a new home.',
        icon: Home,
        status: 'Available',
        href: '/calculators/mortgage-calculator'
    },
    {
        id: 'compound-interest-calculator',
        title: 'Compound Interest Calculator',
        description: 'See how your investments can grow over time with the power of compound interest.',
        icon: AreaChart,
        status: 'Available',
        href: '/calculators/compound-interest-calculator'
    },
    {
        id: 'credit-card-payoff-calculator',
        title: 'Credit Card Payoff Calculator',
        description: 'Find out how long it will take to pay off your credit card debt.',
        icon: CreditCard,
        status: 'Available',
        href: '/calculators/credit-card-payoff-calculator'
    }
];

export default function CalculatorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Financial Calculators
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          A suite of tools to help you with financial planning, investment analysis, and more.
        </p>
      </div>

      {/* Calculators Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {calculators.map((calculator) => (
          <Link key={calculator.id} href={calculator.href} className={calculator.status === 'Coming Soon' ? 'pointer-events-none' : ''}>
            <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 flex flex-col h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <calculator.icon className="w-6 h-6 text-primary" />
                  <CardTitle>{calculator.title}</CardTitle>
                </div>
                <CardDescription>{calculator.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                  {calculator.status === 'Coming Soon' && <Badge variant="secondary">{calculator.status}</Badge>}
              </CardContent>
            </Card>
          </Link>
        ))}
        {/* Add a generic "more coming soon" card */}
        <Card className="border-dashed border-2 flex flex-col items-center justify-center p-8 text-center h-full">
            <Calculator className="w-10 h-10 mb-4 text-muted-foreground" />
            <h3 className="font-semibold text-lg mb-2">More Calculators Coming Soon</h3>
            <p className="text-sm text-muted-foreground">We're developing new tools to help you.</p>
        </Card>
      </div>
    </div>
  );
} 