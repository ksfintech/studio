import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

// Validate API key before initializing
if (!process.env.GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is not set. AI functionality will not work.');
}

export const ai = genkit({
  plugins: [googleAI({apiKey: process.env.GEMINI_API_KEY || ''})],
  model: 'googleai/gemini-2.0-flash',
});
