'use server';

import { askFinancialConcierge as askFinancialConciergeFlow } from '@/ai/flows/financial-concierge';

export async function askFinancialConcierge(query: string) {
    if (!query || query.trim() === '') {
        return "Please enter a question.";
    }

    try {
        const result = await askFinancialConciergeFlow(query);
        return result;
    } catch (e) {
        console.error("Error running financial concierge flow", e);
        return "Sorry, I encountered an error. Please try again later.";
    }
} 