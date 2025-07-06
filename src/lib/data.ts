
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
  runTransaction,
} from 'firebase/firestore';
import {
  AGENTS as initialAgents,
  INSIGHTS as initialInsights,
  CATEGORIES as initialCategories,
} from './placeholder-data';
import type { Agent, Insight } from './definitions';

// --- Featured Agent ---
const FEATURED_AGENT_DOC_REF = doc(db, 'app_config', 'featured_agent');

export async function setFeaturedAgents(agentIds: string[]): Promise<void> {
  await setDoc(FEATURED_AGENT_DOC_REF, { agentIds: agentIds });
}

export async function getFeaturedAgentIds(): Promise<string[]> {
  const docSnap = await getDoc(FEATURED_AGENT_DOC_REF);
  if (docSnap.exists()) {
    return docSnap.data().agentIds ?? [];
  }
  return [];
}

// --- Agents ---

export async function updateAgent(id: string, agentData: Omit<Agent, 'id'>): Promise<void> {
  const docRef = doc(db, 'agents', id);
  await setDoc(docRef, agentData);
}

export async function deleteAgent(id: string): Promise<void> {
  const agentDocRef = doc(db, 'agents', id);
  const featuredDocRef = doc(db, 'app_config', 'featured_agent');

  await runTransaction(db, async (transaction) => {
    // This transaction is atomic.
    const featuredSnap = await transaction.get(featuredDocRef);
    if (featuredSnap.exists()) {
      const featuredIds = featuredSnap.data().agentIds || [];
      if (featuredIds.includes(id)) {
        const newFeaturedIds = featuredIds.filter((agentId: string) => agentId !== id);
        transaction.update(featuredDocRef, { agentIds: newFeaturedIds });
      }
    }
    transaction.delete(agentDocRef);
  });
}

export async function addAgent(agentData: Omit<Agent, 'id'>): Promise<Agent> {
  const id = agentData.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  const newAgentData = {
    ...agentData,
    logoUrl: agentData.logoUrl || 'https://placehold.co/100x100/324A80.png',
  };

  const docRef = doc(db, 'agents', id);
  // We don't store the ID in the document itself, only use it as the document ID.
  await setDoc(docRef, newAgentData);

  return { id, ...newAgentData };
}

export async function getAgents(): Promise<Agent[]> {
  const agentsCollection = collection(db, 'agents');
  const agentSnapshot = await getDocs(agentsCollection);

  if (agentSnapshot.empty) {
    console.log('No agents found. Seeding database...');
    const batch = writeBatch(db);
    initialAgents.forEach(agent => {
      const { id, ...agentData } = agent;
      const docRef = doc(db, 'agents', id);
      batch.set(docRef, agentData);
    });
    await batch.commit();
    console.log('Database seeded with initial agents.');
    return initialAgents.sort((a, b) => a.name.localeCompare(b.name));
  }

  const agentList = agentSnapshot.docs.map(
    doc =>
      ({
        id: doc.id,
        ...(doc.data() as Omit<Agent, 'id'>),
      } as Agent)
  );
  return agentList.sort((a, b) => a.name.localeCompare(b.name));
}

export async function getAgentById(id: string): Promise<Agent | undefined> {
  const docRef = doc(db, 'agents', id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: docSnap.id,
      ...(docSnap.data() as Omit<Agent, 'id'>),
    } as Agent;
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
    imageUrl: insightData.imageUrl || 'https://placehold.co/1200x630/324A80.png',
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
