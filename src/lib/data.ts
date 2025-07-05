
'use server';

import { db } from './firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
  deleteDoc,
} from 'firebase/firestore';
import {
  TOOLS as initialTools,
  INSIGHTS as initialInsights,
  CATEGORIES as initialCategories,
} from './placeholder-data';
import type { Tool, Insight } from './definitions';

// --- Featured Tool ---
const FEATURED_TOOL_DOC_REF = doc(db, 'app_config', 'featured_tool');

export async function setFeaturedTools(toolIds: string[]): Promise<void> {
  await setDoc(FEATURED_TOOL_DOC_REF, { toolIds });
}

export async function getFeaturedToolIds(): Promise<string[]> {
  const docSnap = await getDoc(FEATURED_TOOL_DOC_REF);
  if (docSnap.exists()) {
    return docSnap.data().toolIds ?? [];
  }
  return [];
}

// --- Tools ---

export async function updateTool(id: string, toolData: Omit<Tool, 'id'>): Promise<void> {
  const docRef = doc(db, 'tools', id);
  await setDoc(docRef, toolData);
}

export async function addTool(toolData: Omit<Tool, 'id'>): Promise<Tool> {
  const id = toolData.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  const newToolData = {
    ...toolData,
    logoUrl: toolData.logoUrl || 'https://placehold.co/100x100.png',
  };

  const docRef = doc(db, 'tools', id);
  // We don't store the ID in the document itself, only use it as the document ID.
  await setDoc(docRef, newToolData);

  return { id, ...newToolData };
}

export async function getTools(): Promise<Tool[]> {
  const toolsCollection = collection(db, 'tools');
  const toolSnapshot = await getDocs(toolsCollection);

  if (toolSnapshot.empty) {
    console.log('No tools found. Seeding database...');
    const batch = writeBatch(db);
    initialTools.forEach(tool => {
      const { id, ...toolData } = tool;
      const docRef = doc(db, 'tools', id);
      batch.set(docRef, toolData);
    });
    await batch.commit();
    console.log('Database seeded with initial tools.');
    return initialTools.sort((a, b) => a.name.localeCompare(b.name));
  }

  const toolList = toolSnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...(doc.data() as Omit<Tool, 'id'>),
      } as Tool)
  );
  return toolList.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getToolById(id: string): Promise<Tool | undefined> {
  const docRef = doc(db, 'tools', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Tool, 'id'>),
    } as Tool;
  } else {
    return undefined;
  }
}

export async function getCategories(): Promise<string[]> {
  const categoriesCollection = collection(db, 'categories');
  const categorySnapshot = await getDocs(categoriesCollection);

  if (categorySnapshot.empty) {
    console.log('No categories found. Seeding database...');
    const batch = writeBatch(db);
    initialCategories.forEach(category => {
      const docRef = doc(db, 'categories', category.id);
      batch.set(docRef, { name: category.name });
    });
    await batch.commit();
    console.log('Database seeded with initial categories.');
    return initialCategories.map(c => c.name).sort();
  }

  const categoryList = categorySnapshot.docs.map(
    doc => doc.data().name as string
  );
  return categoryList.sort();
}

// --- Insights ---

export async function addInsight(insightData: Omit<Insight, 'id'>): Promise<Insight> {
  const id = insightData.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  const newInsightData = {
    ...insightData,
    imageUrl: insightData.imageUrl || 'https://placehold.co/1200x630.png',
  };
  
  const docRef = doc(db, 'insights', id);
  await setDoc(docRef, newInsightData);

  return { id, ...newInsightData };
}

export async function updateInsight(id: string, insightData: Omit<Insight, 'id'>): Promise<void> {
  const docRef = doc(db, 'insights', id);
  await setDoc(docRef, insightData, { merge: true });
}

export async function deleteInsight(id: string): Promise<void> {
  const docRef = doc(db, 'insights', id);
  await deleteDoc(docRef);
}

export async function getInsights(): Promise<Insight[]> {
  const insightsCollection = collection(db, 'insights');
  const insightSnapshot = await getDocs(insightsCollection);

  if (insightSnapshot.empty) {
    console.log('No insights found. Seeding database...');
    const batch = writeBatch(db);
    initialInsights.forEach(insight => {
      const { id, ...insightData } = insight;
      const docRef = doc(db, 'insights', id);
      batch.set(docRef, insightData);
    });
    await batch.commit();
    console.log('Database seeded with initial insights.');
    return initialInsights.sort((a, b) => a.title.localeCompare(b.title));
  }

  const insightList = insightSnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...(doc.data() as Omit<Insight, 'id'>),
      } as Insight)
  );
  return insightList.sort((a, b) => a.title.localeCompare(b.title));
}

export async function getInsightById(
  id: string
): Promise<Insight | undefined> {
  const docRef = doc(db, 'insights', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Insight, 'id'>),
    } as Insight;
  } else {
    return undefined;
  }
}
