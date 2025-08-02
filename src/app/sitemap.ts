
import { getAgents, getInsights } from '@/lib/data';
import { AGENTS, INSIGHTS } from '@/lib/placeholder-data';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://aifintechinsights.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let agents, insights;
  
  try {
    [agents, insights] = await Promise.all([getAgents(), getInsights()]);
  } catch (error) {
    console.log('Using local data for sitemap generation...');
    agents = AGENTS;
    insights = INSIGHTS;
  }

  const agentUrls = agents.map(agent => ({
    url: `${BASE_URL}/tools/${agent.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const insightUrls = insights.map(insight => ({
    url: `${BASE_URL}/insights/${insight.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const staticUrls = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/insights`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/compare`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/recommend`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  return [...staticUrls, ...agentUrls, ...insightUrls];
}
