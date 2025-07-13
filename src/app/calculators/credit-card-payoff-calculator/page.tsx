'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function CreditCardPayoffCalculatorPage() {
    const [balance, setBalance] = useState('');
    const [apr, setApr] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState('');

    const [results, setResults] = useState<{ months: number; totalInterest: number; totalPayment: number } | null>(null);
    const [error, setError] = useState('');

    const calculatePayoff = () => {
        const cardBalance = parseFloat(balance);
        const annualRate = parseFloat(apr) / 100;
        const payment = parseFloat(monthlyPayment);
        
        const monthlyRate = annualRate / 12;

        if (isNaN(cardBalance) || isNaN(annualRate) || isNaN(payment) || cardBalance <= 0 || annualRate < 0 || payment <= 0) {
            setError('Please enter valid, positive numbers for all fields.');
            setResults(null);
            return;
        }

        if (payment <= cardBalance * monthlyRate) {
            setError('Monthly payment is too low to cover interest. You will never pay off the balance.');
            setResults(null);
            return;
        }

        const months = -(Math.log(1 - (cardBalance * monthlyRate) / payment) / Math.log(1 + monthlyRate));
        const totalPayment = months * payment;
        const totalInterest = totalPayment - cardBalance;

        setResults({
            months: Math.ceil(months),
            totalInterest,
            totalPayment
        });
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
                        <CreditCard className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Credit Card Payoff Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        Find out how long it will take to pay off your credit card debt and how much interest you'll pay.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                         <div className="space-y-2">
                            <Label htmlFor="balance">Credit Card Balance ($)</Label>
                            <Input id="balance" type="number" value={balance} onChange={(e) => setBalance(e.target.value)} placeholder="e.g., 5000" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="apr">Annual Percentage Rate (APR %)</Label>
                            <Input id="apr" type="number" value={apr} onChange={(e) => setApr(e.target.value)} placeholder="e.g., 18.9" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="monthly-payment">Monthly Payment ($)</Label>
                            <Input id="monthly-payment" type="number" value={monthlyPayment} onChange={(e) => setMonthlyPayment(e.target.value)} placeholder="e.g., 200" />
                        </div>
                        <Button onClick={calculatePayoff} className="w-full">
                            Calculate Payoff Time
                        </Button>
                    </div>

                    {error && (
                        <div className="mt-6">
                             <Alert variant="destructive">
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        </div>
                    )}

                    {results && (
                        <div className="mt-6">
                            <Alert>
                                <CreditCard className="h-4 w-4" />
                                <AlertTitle>Payoff Projection</AlertTitle>
                                <AlertDescription>
                                    <ul className="space-y-1 mt-2">
                                        <li>It will take you <span className="font-bold text-primary">{results.months} months</span> to pay off your debt.</li>
                                        <li>You will pay a total of <span className="font-bold text-primary">${results.totalInterest.toFixed(2)}</span> in interest.</li>
                                        <li>Your total payments will be <span className="font-bold text-primary">${results.totalPayment.toFixed(2)}</span>.</li>
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
} 