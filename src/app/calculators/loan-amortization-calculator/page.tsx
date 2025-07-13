'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Landmark } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface AmortizationSchedule {
    month: number;
    payment: number;
    principal: number;
    interest: number;
    balance: number;
}

export default function LoanAmortizationCalculatorPage() {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
    const [schedule, setSchedule] = useState<AmortizationSchedule[]>([]);
    const [error, setError] = useState('');

    const calculateAmortization = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseFloat(loanTerm) * 12;

        if (isNaN(principal) || isNaN(rate) || isNaN(term) || principal <= 0 || rate <= 0 || term <= 0) {
            setError('Please enter valid positive numbers for all fields.');
            setMonthlyPayment(null);
            setSchedule([]);
            return;
        }

        const payment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
        setMonthlyPayment(payment);

        let balance = principal;
        const newSchedule: AmortizationSchedule[] = [];
        for (let i = 1; i <= term; i++) {
            const interest = balance * rate;
            const principalPaid = payment - interest;
            balance -= principalPaid;
            newSchedule.push({
                month: i,
                payment,
                principal: principalPaid,
                interest,
                balance: balance > 0 ? balance : 0,
            });
        }
        setSchedule(newSchedule);
        setError('');
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
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
                        <Landmark className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Loan Amortization Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        See how your loan payments break down over time. Enter your loan details to generate an amortization schedule.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="space-y-2">
                            <Label htmlFor="loan-amount">Loan Amount ($)</Label>
                            <Input id="loan-amount" type="number" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} placeholder="e.g., 200000" />
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
                    <Button onClick={calculateAmortization} className="w-full">
                        Calculate Schedule
                    </Button>

                    {error && (
                        <div className="mt-6">
                             <Alert variant="destructive">
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        </div>
                    )}
                </CardContent>
            </Card>

            {monthlyPayment !== null && schedule.length > 0 && (
                <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Results</CardTitle>
                        <Alert>
                            <Landmark className="h-4 w-4" />
                            <AlertTitle>Your Monthly Payment</AlertTitle>
                            <AlertDescription>
                                Your estimated monthly payment will be <span className="font-bold text-primary">${monthlyPayment.toFixed(2)}</span>.
                            </AlertDescription>
                        </Alert>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold mb-4">Amortization Schedule</h3>
                        <div className="max-h-96 overflow-auto">
                             <Table>
                                <TableHeader className="sticky top-0 bg-background">
                                    <TableRow>
                                        <TableHead className="w-[100px]">Month</TableHead>
                                        <TableHead>Payment</TableHead>
                                        <TableHead>Principal</TableHead>
                                        <TableHead>Interest</TableHead>
                                        <TableHead className="text-right">Balance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {schedule.map((row) => (
                                        <TableRow key={row.month}>
                                            <TableCell>{row.month}</TableCell>
                                            <TableCell>${row.payment.toFixed(2)}</TableCell>
                                            <TableCell>${row.principal.toFixed(2)}</TableCell>
                                            <TableCell>${row.interest.toFixed(2)}</TableCell>
                                            <TableCell className="text-right">${row.balance.toFixed(2)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
} 