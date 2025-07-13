'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function InvestmentRoiCalculatorPage() {
    const [initialInvestment, setInitialInvestment] = useState('');
    const [finalValue, setFinalValue] = useState('');
    const [roi, setRoi] = useState<number | null>(null);
    const [error, setError] = useState('');

    const calculateRoi = () => {
        const initial = parseFloat(initialInvestment);
        const final = parseFloat(finalValue);

        if (isNaN(initial) || isNaN(final)) {
            setError('Please enter valid numbers for both fields.');
            setRoi(null);
            return;
        }

        if (initial <= 0) {
            setError('Initial investment must be a positive number.');
            setRoi(null);
            return;
        }

        const calculatedRoi = ((final - initial) / initial) * 100;
        setRoi(calculatedRoi);
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
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <CardTitle className="text-2xl">Investment ROI Calculator</CardTitle>
                    </div>
                    <CardDescription>
                        Calculate the return on investment (ROI) for an investment. Enter the initial amount and the final value to see the percentage return.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="initial-investment">Initial Investment ($)</Label>
                            <Input
                                id="initial-investment"
                                type="number"
                                value={initialInvestment}
                                onChange={(e) => setInitialInvestment(e.target.value)}
                                placeholder="e.g., 1000"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="final-value">Final Value of Investment ($)</Label>
                            <Input
                                id="final-value"
                                type="number"
                                value={finalValue}
                                onChange={(e) => setFinalValue(e.target.value)}
                                placeholder="e.g., 1200"
                            />
                        </div>
                        <Button onClick={calculateRoi} className="w-full">
                            Calculate ROI
                        </Button>
                    </div>

                    {(roi !== null || error) && (
                        <div className="mt-6">
                            {error ? (
                                <Alert variant="destructive">
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            ) : roi !== null ? (
                                <Alert variant="default">
                                     <TrendingUp className="h-4 w-4" />
                                    <AlertTitle>Your Return on Investment (ROI)</AlertTitle>
                                    <AlertDescription>
                                        The ROI for your investment is <span className={`font-bold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>{roi.toFixed(2)}%</span>.
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