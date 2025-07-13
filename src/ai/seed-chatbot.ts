import { db } from '../lib/firebase';
import { addDoc, collection } from 'firebase/firestore';
import * as fs from 'fs/promises';
import * as path from 'path';
import 'dotenv/config';

const coreFeatures = [
    'Tool Directory Listing: Display a browsable list of AI Fintech tools with name, brief description, and application areas.',
    'Tool Detail Pages: Dedicated pages for each AI Fintech tool, including name, category, insight/accomplishment, key features, company, and website link.',
    'Keyword Search: Implement a keyword search to search by tool name, company, or keywords in the description.',
    'Category Filter: Include a category filter to narrow results by application area.',
    'AI Fintech Insights Section: Display a list of articles or summaries about various AI applications in finance.',
    'Fintech Insights Detail: Pages dedicated to Fintech insights piece, displaying the full article',
    'AI-Powered Insight Suggestions: Use an AI tool to automatically suggest related insight articles based on the currently viewed AI Fintech tool\'s details.',
];

async function seedChatbotContext() {
    try {
        console.log('Seeding chatbot context...');
        const contextsCollection = collection(db, 'chatbot-context');

        for (const feature of coreFeatures) {
            await addDoc(contextsCollection, {
                text: feature,
                createdAt: new Date(),
            });
            console.log(`Added context: "${feature}"`);
        }

        console.log('Successfully seeded chatbot context.');
    } catch (e) {
        console.error('Failed to seed chatbot context', e);
    }
}

seedChatbotContext().then(() => {
    console.log('Seeding script finished.');
    process.exit(0);
});
