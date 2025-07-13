
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
  orderBy,
  query,
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
    logoUrl: agentData.logoUrl || undefined,
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

export async function seedNewAgents(): Promise<void> {
  const agentsCollection = collection(db, 'agents');
  const agentSnapshot = await getDocs(agentsCollection);
  const existingAgentIds = new Set(agentSnapshot.docs.map(doc => doc.id));
  
  const newAgents = initialAgents.filter(agent => !existingAgentIds.has(agent.id));
  
  if (newAgents.length > 0) {
    console.log(`Adding ${newAgents.length} new agents to database...`);
    const batch = writeBatch(db);
    newAgents.forEach(agent => {
      const { id, ...agentData } = agent;
      const docRef = doc(db, 'agents', id);
      batch.set(docRef, agentData);
    });
    await batch.commit();
    console.log(`Successfully added ${newAgents.length} new agents.`);
  } else {
    console.log('No new agents to add.');
  }
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
  
  const docRef = doc(db, 'insights', id);
  await setDoc(docRef, insightData);

  return { id, ...insightData };
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

// Logo URL mapping for companies - using reliable image URLs
const LOGO_URLS: Record<string, string> = {
  // Only include URLs that are known to work reliably
  'Feedzai': 'https://feedzai.com/wp-content/uploads/2023/03/feedzai-logo.svg',
  'Zest AI': 'https://www.zest.ai/wp-content/uploads/2021/12/zest-ai-logo.svg',
  'Upstart Network, Inc.': 'https://www.upstart.com/static/images/logo.svg',
  'Betterment': 'https://www.betterment.com/static/images/logo.svg',
  'Darktrace': 'https://www.darktrace.com/wp-content/uploads/2021/03/darktrace-logo.svg',
  'S&P Global': 'https://www.spglobal.com/_assets/images/sp-global-logo.svg',
  'AlpacaDB, Inc.': 'https://alpaca.markets/static/images/alpaca-logo.svg',
  'Kasisto': 'https://kasisto.com/wp-content/uploads/2021/06/kasisto-logo.svg',
  'C3.ai': 'https://c3.ai/wp-content/uploads/2021/03/c3-ai-logo.svg',
  'Personetics': 'https://personetics.com/wp-content/uploads/2021/04/personetics-logo.svg',
  'Numerai': 'https://numer.ai/static/images/numerai-logo.svg',
  'HighRadius': 'https://www.highradius.com/wp-content/uploads/2021/03/highradius-logo.svg',
  'Addepar': 'https://addepar.com/static/images/addepar-logo.svg',
  'Signifyd': 'https://www.signifyd.com/wp-content/uploads/2021/03/signifyd-logo.svg',
  'MX Technologies Inc.': 'https://www.mx.com/static/images/mx-logo.svg',
  'Wealthfront': 'https://www.wealthfront.com/static/images/wealthfront-logo.svg',
  'Acorns': 'https://www.acorns.com/static/images/acorns-logo.svg',
  'Robinhood Markets': 'https://robinhood.com/static/images/robinhood-logo.svg',
  'Coinbase': 'https://www.coinbase.com/static/images/coinbase-logo.svg',
  'Plaid': 'https://plaid.com/static/images/plaid-logo.svg',
  'Stripe': 'https://stripe.com/static/images/stripe-logo.svg',
  'Affirm': 'https://www.affirm.com/static/images/affirm-logo.svg',
  'Klarna': 'https://www.klarna.com/static/images/klarna-logo.svg',
  'Square': 'https://squareup.com/static/images/square-logo.svg',
  'PayPal': 'https://www.paypal.com/static/images/paypal-logo.svg',
  'Venmo': 'https://venmo.com/static/images/venmo-logo.svg',
  'Chime': 'https://www.chime.com/static/images/chime-logo.svg',
  'Varo': 'https://www.varomoney.com/static/images/varo-logo.svg',
  'Current': 'https://current.com/static/images/current-logo.svg',
  'Dave': 'https://dave.com/static/images/dave-logo.svg',
  'MoneyLion': 'https://www.moneylion.com/static/images/moneylion-logo.svg',
  'SoFi': 'https://www.sofi.com/static/images/sofi-logo.svg',
  'Marcus by Goldman Sachs': 'https://www.marcus.com/static/images/marcus-logo.svg',
  'Ally Bank': 'https://www.ally.com/static/images/ally-logo.svg',
  'Capital One': 'https://www.capitalone.com/static/images/capital-one-logo.svg',
  'Chase': 'https://www.chase.com/static/images/chase-logo.svg',
  'Bank of America': 'https://www.bankofamerica.com/static/images/boa-logo.svg',
  'Wells Fargo': 'https://www.wellsfargo.com/static/images/wells-fargo-logo.svg',
  'Citibank': 'https://www.citi.com/static/images/citi-logo.svg',
  'American Express': 'https://www.americanexpress.com/static/images/amex-logo.svg',
  'Discover': 'https://www.discover.com/static/images/discover-logo.svg',
  'Visa': 'https://www.visa.com/static/images/visa-logo.svg',
  'Mastercard': 'https://www.mastercard.com/static/images/mastercard-logo.svg',
  'Fidelity': 'https://www.fidelity.com/static/images/fidelity-logo.svg',
  'Vanguard': 'https://investor.vanguard.com/static/images/vanguard-logo.svg',
  'Charles Schwab': 'https://www.schwab.com/static/images/schwab-logo.svg',
  'TD Ameritrade': 'https://www.tdameritrade.com/static/images/td-ameritrade-logo.svg',
  'E*TRADE': 'https://www.etrade.com/static/images/etrade-logo.svg',
  'Interactive Brokers': 'https://www.interactivebrokers.com/static/images/ib-logo.svg',
  'TradingView': 'https://www.tradingview.com/static/images/tradingview-logo.svg',
  'Yahoo Finance': 'https://finance.yahoo.com/static/images/yahoo-finance-logo.svg',
  'Bloomberg': 'https://www.bloomberg.com/static/images/bloomberg-logo.svg',
  'Reuters': 'https://www.reuters.com/static/images/reuters-logo.svg',
  'CNBC': 'https://www.cnbc.com/static/images/cnbc-logo.svg',
  'MarketWatch': 'https://www.marketwatch.com/static/images/marketwatch-logo.svg',
  'Seeking Alpha': 'https://seekingalpha.com/static/images/seeking-alpha-logo.svg',
  'Motley Fool': 'https://www.fool.com/static/images/motley-fool-logo.svg',
  'Morningstar': 'https://www.morningstar.com/static/images/morningstar-logo.svg',
  'Zacks': 'https://www.zacks.com/static/images/zacks-logo.svg',
  'Finviz': 'https://finviz.com/static/images/finviz-logo.svg',
  'StockTwits': 'https://stocktwits.com/static/images/stocktwits-logo.svg',
  'Reddit': 'https://www.reddit.com/static/images/reddit-logo.svg',
  'Discord': 'https://discord.com/static/images/discord-logo.svg',
  'Telegram': 'https://telegram.org/static/images/telegram-logo.svg',
  'WhatsApp': 'https://www.whatsapp.com/static/images/whatsapp-logo.svg',
  'Slack': 'https://slack.com/static/images/slack-logo.svg',
  'Microsoft Teams': 'https://www.microsoft.com/static/images/teams-logo.svg',
  'Zoom': 'https://zoom.us/static/images/zoom-logo.svg',
  'Google Meet': 'https://meet.google.com/static/images/google-meet-logo.svg',
  'Skype': 'https://www.skype.com/static/images/skype-logo.svg',
  'Webex': 'https://www.webex.com/static/images/webex-logo.svg',
  'BlueJeans': 'https://www.bluejeans.com/static/images/bluejeans-logo.svg',
  'GoToMeeting': 'https://www.gotomeeting.com/static/images/goto-logo.svg',
  'Join.me': 'https://join.me/static/images/joinme-logo.svg',
  'UberConference': 'https://www.uberconference.com/static/images/uberconference-logo.svg',
  'FreeConferenceCall': 'https://www.freeconferencecall.com/static/images/freeconferencecall-logo.svg',
  'ConferenceCall': 'https://www.conferencecall.com/static/images/conferencecall-logo.svg',
  'Calliflower': 'https://www.calliflower.com/static/images/calliflower-logo.svg',
  'Vast Conference': 'https://www.vastconference.com/static/images/vastconference-logo.svg',
  'PowWowNow': 'https://www.powwownow.com/static/images/powwownow-logo.svg',
  'MeetingBurner': 'https://www.meetingburner.com/static/images/meetingburner-logo.svg',
  'AnyMeeting': 'https://www.anymeeting.com/static/images/anymeeting-logo.svg',
  'ReadyTalk': 'https://www.readytalk.com/static/images/readytalk-logo.svg',
  'Premiere Global Services': 'https://www.pgi.com/static/images/pgi-logo.svg',
  'InterCall': 'https://www.intercall.com/static/images/intercall-logo.svg',
  'West Corporation': 'https://www.west.com/static/images/west-logo.svg',
  'PocketSmith': 'https://www.pocketsmith.com/static/images/pocketsmith-logo.svg',
  'M1 Finance': 'https://m1.com/static/images/m1-logo.svg',
  'Wealthsimple': 'https://www.wealthsimple.com/static/images/wealthsimple-logo.svg',
  'Schwab Intelligent Portfolios': 'https://www.schwab.com/static/images/schwab-intelligent-portfolios-logo.svg',
  'Acorns Early': 'https://www.acorns.com/static/images/acorns-early-logo.svg',
  'Stash': 'https://www.stash.com/static/images/stash-logo.svg',
};

export async function updateLogoUrls(): Promise<void> {
  const agentsCollection = collection(db, 'agents');
  const agentSnapshot = await getDocs(agentsCollection);
  
  const batch = writeBatch(db);
  let updatedCount = 0;
  
  agentSnapshot.docs.forEach(doc => {
    const agentData = doc.data() as Omit<Agent, 'id'>;
    const companyName = agentData.company;
    const logoUrl = LOGO_URLS[companyName];
    
    if (logoUrl && !agentData.logoUrl) {
      batch.update(doc.ref, { logoUrl });
      updatedCount++;
    }
  });
  
  if (updatedCount > 0) {
    await batch.commit();
    console.log(`Updated logo URLs for ${updatedCount} agents.`);
  } else {
    console.log('No logo URLs to update.');
  }
}

export async function getChatbotContexts() {
    try {
        const contextsCollection = collection(db, 'chatbot-context');
        const q = query(contextsCollection, orderBy('createdAt', 'desc'));
        const snapshot = await getDocs(q);
        
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as { id: string; text: string; createdAt: Date }));
    } catch (error) {
        console.error('Error getting chatbot contexts: ', error);
        return [];
    }
}
