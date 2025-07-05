'use server';

import { TOOLS, INSIGHTS } from './placeholder-data';
import type { Tool, Insight } from './definitions';

const simulateDelay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function getTools(): Promise<Tool[]> {
  await simulateDelay(500);
  return TOOLS;
}

export async function getToolById(id: string): Promise<Tool | undefined> {
  await simulateDelay(300);
  return TOOLS.find(tool => tool.id === id);
}

export async function getInsights(): Promise<Insight[]> {
  await simulateDelay(500);
  return INSIGHTS;
}

export async function getInsightById(id: string): Promise<Insight | undefined> {
  await simulateDelay(300);
  return INSIGHTS.find(insight => insight.id === id);
}

export async function getCategories(): Promise<string[]> {
  await simulateDelay(100);
  const categories = new Set(TOOLS.flatMap(tool => tool.category));
  return Array.from(categories).sort();
}
