import { config } from 'dotenv';
config();

import '@/ai/flows/suggest-related-insights.ts';
import '@/ai/flows/generate-tool-details.ts';
import '@/ai/flows/generate-insight-article.ts';
import '@/ai/flows/recommend-agents.ts';
