'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, PiggyBank } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

interface ChartData {
    year: number;
    balance: number;
}

export default function RetirementSavingsCalculatorPage() {
    const [currentAge, setCurrentAge] = useState('');
    const [retirementAge, setRetirementAge] = useState('');
    const [initialSavings, setInitialSavings] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('');
    const [annualReturn, setAnnualReturn] = useState('');

    const [results, setResults] = useState<{ futureValue: number; chartData: ChartData[] } | null>(null);
    const [error, setError] = useState('');

    const calculateRetirementSavings = () => {
        const age = parseInt(currentAge);
        const retireAge = parseInt(retirementAge);
        const principal = parseFloat(initialSavings);
        const monthlyContrib = parseFloat(monthlyContribution);
        const annualRate = parseFloat(annualReturn) / 100;

        if ([age, retireAge, principal, monthlyContrib, annualRate].some(isNaN) || age <= 0 || retireAge <= age || principal < 0 || monthlyContrib < 0 || annualRate < 0) {
            setError('Please enter valid, positive numbers for all fields. Retirement age must be greater than current age.');
            setResults(null);
            return;
        }

        const yearsToRetire = retireAge - age;
        const totalMonths = yearsToRetire * 12;
        const monthlyRate = annualRate / 12;

        let futureValue = principal * Math.pow(1 + monthlyRate, totalMonths);
        futureValue += monthlyContrib * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
        
        const newChartData: ChartData[] = [];
        let balance = principal;
        for (let year = 1; year <= yearsToRetire; year++) {
            for(let month = 1; month <= 12; month++) {
                balance = balance * (1 + monthlyRate) + monthlyContrib;
            }
            newChartData.push({ year: age + year, balance });
        }

        setResults({ futureValue, chartData: newChartData });
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
                        <PiggyBank className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Retirement Savings Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        Project your retirement savings to see if you're on track to meet your financial goals for the future.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                            <Label htmlFor="current-age">Current Age</Label>
                            <Input id="current-age" type="number" value={currentAge} onChange={(e) => setCurrentAge(e.target.value)} placeholder="e.g., 30" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="retirement-age">Retirement Age</Label>
                            <Input id="retirement-age" type="number" value={retirementAge} onChange={(e) => setRetirementAge(e.target.value)} placeholder="e.g., 65" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="initial-savings">Initial Savings ($)</Label>
                            <Input id="initial-savings" type="number" value={initialSavings} onChange={(e) => setInitialSavings(e.target.value)} placeholder="e.g., 50000" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="monthly-contribution">Monthly Contribution ($)</Label>
                            <Input id="monthly-contribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g., 500" />
                        </div>
                        <div className="col-span-1 md:col-span-2 space-y-2">
                            <Label htmlFor="annual-return">Expected Annual Return (%)</Label>
                            <Input id="annual-return" type="number" value={annualReturn} onChange={(e) => setAnnualReturn(e.target.value)} placeholder="e.g., 7" />
                        </div>
                    </div>
                    <Button onClick={calculateRetirementSavings} className="w-full">
                        Calculate Savings
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
            
            {results && (
                 <Card className="mt-8">
                    <CardHeader>
                        <CardTitle>Retirement Projection</CardTitle>
                         <Alert>
                            <PiggyBank className="h-4 w-4" />
                            <AlertTitle>Estimated Retirement Savings</AlertTitle>
                            <AlertDescription>
                                You could have approximately <span className="font-bold text-primary">${results.futureValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span> by age {retirementAge}.
                            </AlertDescription>
                        </Alert>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold mb-4">Projected Growth Over Time</h3>
                        <ChartContainer config={{}} className="min-h-[200px] w-full">
                            <BarChart data={results.chartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" />
                                <YAxis tickFormatter={(value) => `$${(Number(value) / 1000)}k`} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Bar dataKey="balance" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            )}
        </div>
    );
} 