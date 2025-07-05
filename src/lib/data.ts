'use server';

import { TOOLS as initialTools, INSIGHTS } from './placeholder-data';
import type { Tool, Insight } from './definitions';

// Make TOOLS mutable for in-memory operations for this demo
let TOOLS: Tool[] = [...initialTools];

const simulateDelay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export async function addTool(toolData: Omit<Tool, 'id'>): Promise<Tool> {
  await simulateDelay(200);
  const newTool: Tool = {
    ...toolData,
    id: toolData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    logoUrl: toolData.logoUrl || 'https://placehold.co/100x100.png',
  };
  TOOLS.unshift(newTool); // Add to the beginning of the array so it appears first
  return newTool;
}

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
