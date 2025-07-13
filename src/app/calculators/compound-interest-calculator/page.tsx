'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, AreaChart } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';

interface ChartData {
    year: number;
    balance: number;
}

export default function CompoundInterestCalculatorPage() {
    const [initialAmount, setInitialAmount] = useState('');
    const [monthlyContribution, setMonthlyContribution] = useState('0');
    const [timePeriod, setTimePeriod] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [compoundFrequency, setCompoundFrequency] = useState('1');

    const [results, setResults] = useState<{ futureValue: number; chartData: ChartData[] } | null>(null);
    const [error, setError] = useState('');

    const calculateCompoundInterest = () => {
        const principal = parseFloat(initialAmount);
        const monthlyContrib = parseFloat(monthlyContribution);
        const years = parseInt(timePeriod);
        const rate = parseFloat(interestRate) / 100;
        const n = parseInt(compoundFrequency);

        if ([principal, monthlyContrib, years, rate, n].some(isNaN) || principal < 0 || monthlyContrib < 0 || years <= 0 || rate < 0) {
            setError('Please enter valid, positive numbers for all fields.');
            setResults(null);
            return;
        }
        
        const chartData: ChartData[] = [];
        let balance = principal;
        const totalMonths = years * 12;

        for (let year = 1; year <= years; year++) {
             let yearEndBalance = principal * Math.pow(1 + rate / n, year * n);
             if (monthlyContrib > 0) {
                for (let month = 1; month <= year * 12; month++) {
                     if (month === 1 && year === 1) {
                         balance = principal;
                     }
                     balance += monthlyContrib;
                     if(month % (12/n) === 0){
                        balance *= (1 + rate/n);
                     }
                }
                 yearEndBalance = balance;
             }
             chartData.push({ year: year, balance: yearEndBalance });
        }
        
        const futureValue = chartData[chartData.length-1].balance;

        setResults({ futureValue, chartData });
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
                        <AreaChart className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Compound Interest Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        See how your investments can grow over time with the power of compound interest.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="space-y-2">
                            <Label htmlFor="initial-amount">Initial Amount ($)</Label>
                            <Input id="initial-amount" type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} placeholder="e.g., 1000" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="monthly-contribution">Monthly Contribution ($)</Label>
                            <Input id="monthly-contribution" type="number" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} placeholder="e.g., 100" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="time-period">Time Period (Years)</Label>
                            <Input id="time-period" type="number" value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)} placeholder="e.g., 10" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="interest-rate">Estimated Interest Rate (%)</Label>
                            <Input id="interest-rate" type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} placeholder="e.g., 7" />
                        </div>
                        <div className="md:col-span-2 space-y-2">
                            <Label htmlFor="compound-frequency">Compound Frequency</Label>
                             <Select onValueChange={setCompoundFrequency} defaultValue="1">
                                <SelectTrigger id="compound-frequency">
                                    <SelectValue placeholder="Select frequency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Annually</SelectItem>
                                    <SelectItem value="2">Semi-Annually</SelectItem>
                                    <SelectItem value="4">Quarterly</SelectItem>
                                    <SelectItem value="12">Monthly</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <Button onClick={calculateCompoundInterest} className="w-full">
                        Calculate Growth
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
                        <CardTitle>Projected Growth</CardTitle>
                         <Alert>
                            <AreaChart className="h-4 w-4" />
                            <AlertTitle>Future Investment Value</AlertTitle>
                            <AlertDescription>
                                Your investment could be worth <span className="font-bold text-primary">${results.futureValue.toLocaleString(undefined, {maximumFractionDigits: 0})}</span> after {timePeriod} years.
                            </AlertDescription>
                        </Alert>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold mb-4">Investment Growth Over Time</h3>
                        <ChartContainer config={{}} className="min-h-[200px] w-full">
                            <LineChart data={results.chartData} margin={{ top: 20, right: 20, left: 20, bottom: 5 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom', offset: -5 }} />
                                <YAxis tickFormatter={(value) => `$${(Number(value) / 1000)}k`} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <Line type="monotone" dataKey="balance" stroke="var(--color-primary)" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ChartContainer>
                    </CardContent>
                </Card>
            )}
        </div>
    );
} 