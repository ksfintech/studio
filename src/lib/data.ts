'use server';

import { db } from './firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import {
  TOOLS as initialTools,
  INSIGHTS as initialInsights,
} from './placeholder-data';
import type { Tool, Insight } from './definitions';

// --- Tools ---

export async function addTool(toolData: Omit<Tool, 'id'>): Promise<Tool> {
  const id = toolData.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  const newTool: Tool = {
    id,
    ...toolData,
    logoUrl: toolData.logoUrl || 'https://placehold.co/100x100.png',
  };

  const docRef = doc(db, 'tools', id);
  await setDoc(docRef, newTool);

  return newTool;
}

export async function getTools(): Promise<Tool[]> {
  const toolsCollection = collection(db, 'tools');
  const toolSnapshot = await getDocs(toolsCollection);

  if (toolSnapshot.empty) {
    console.log('No tools found. Seeding database...');
    const batch = writeBatch(db);
    initialTools.forEach(tool => {
      const docRef = doc(db, 'tools', tool.id);
      batch.set(docRef, tool);
    });
    await batch.commit();
    console.log('Database seeded with initial tools.');
    return initialTools.sort((a, b) => a.name.localeCompare(b.name));
  }

  const toolList = toolSnapshot.docs.map(doc => doc.data() as Tool);
  return toolList.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getToolById(id: string): Promise<Tool | undefined> {
  const docRef = doc(db, 'tools', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Tool;
  } else {
    return undefined;
  }
}

export async function getCategories(): Promise<string[]> {
  const tools = await getTools();
  const categories = new Set(tools.flatMap(tool => tool.category));
  return Array.from(categories).sort();
}

// --- Insights ---

export async function getInsights(): Promise<Insight[]> {
  const insightsCollection = collection(db, 'insights');
  const insightSnapshot = await getDocs(insightsCollection);

  if (insightSnapshot.empty) {
    console.log('No insights found. Seeding database...');
    const batch = writeBatch(db);
    initialInsights.forEach(insight => {
      const docRef = doc(db, 'insights', insight.id);
      batch.set(docRef, insight);
    });
    await batch.commit();
    console.log('Database seeded with initial insights.');
    return initialInsights.sort((a, b) => a.title.localeCompare(b.title));
  }

  const insightList = insightSnapshot.docs.map(doc => doc.data() as Insight);
  return insightList.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getInsightById(
  id: string
): Promise<Insight | undefined> {
  const docRef = doc(db, 'insights', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as Insight;
  } else {
    return undefined;
  }
}
