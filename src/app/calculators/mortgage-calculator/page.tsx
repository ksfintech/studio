'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Home } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function MortgageCalculatorPage() {
    const [homePrice, setHomePrice] = useState('');
    const [downPayment, setDownPayment] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [error, setError] = useState('');

    const calculateMortgage = () => {
        const price = parseFloat(homePrice);
        const down = parseFloat(downPayment);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseFloat(loanTerm) * 12;

        if (isNaN(price) || isNaN(down) || isNaN(rate) || isNaN(term) || price <= 0 || down < 0 || rate <= 0 || term <= 0 || down >= price) {
            setError('Please enter valid, positive numbers for all fields. Down payment cannot be greater than the home price.');
            setMonthlyPayment(null);
            return;
        }

        const principal = price - down;
        const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        setMonthlyPayment(payment);
        setError('');
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <div className="mb-8">
                <Button variant="ghost" asChild>
                    <Link href="/calculators">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Calculators
                    </Link>
                </Button>
            </div>

            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                        <Home className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Mortgage Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        Estimate your monthly mortgage payments for a new home.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                            <Label htmlFor="home-price">Home Price ($)</Label>
                            <Input id="home-price" type="number" value={homePrice} onChange={(e) => setHomePrice(e.target.value)} placeholder="e.g., 300000" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="down-payment">Down Payment ($)</Label>
                            <Input id="down-payment" type="number" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} placeholder="e.g., 60000" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="interest-rate">Annual Interest Rate (%)</Label>
                            <Input id="interest-rate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g., 5" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="loan-term">Loan Term (Years)</Label>
                            <Input id="loan-term" type="number" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} placeholder="e.g., 30" />
                        </div>
                    </div>
                    <Button onClick={calculateMortgage} className="w-full">
                        Calculate Monthly Payment
                    </Button>

                    {(monthlyPayment !== null || error) && (
                        <div className="mt-6">
                            {error ? (
                                <Alert variant="destructive">
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            ) : monthlyPayment !== null ? (
                                <Alert variant="default">
                                     <Home className="h-4 w-4" />
                                    <AlertTitle>Your Estimated Monthly Payment</AlertTitle>
                                    <AlertDescription>
                                        Your estimated monthly mortgage payment will be <span className="font-bold text-primary">${monthlyPayment.toFixed(2)}</span>.
                                    </AlertDescription>
                                </Alert>
                            ) : null}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
} 