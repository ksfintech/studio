
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
  CHATBOT_CONTEXTS,
} from './placeholder-data';
import type { Agent, Insight } from './definitions';
import { collection as fsCollection, doc as fsDoc, getDocs as fsGetDocs, setDoc as fsSetDoc, deleteDoc as fsDeleteDoc, Timestamp } from 'firebase/firestore';
import { load } from 'cheerio';

// --- Featured Agent ---
// Note: FEATURED_AGENT_DOC_REF will be created dynamically when db is available

export async function setFeaturedAgents(agentIds: string[]): Promise<void> {
  if (!db) return;
  const featuredAgentDocRef = doc(db!, 'app_config', 'featured_agent');
  await setDoc(featuredAgentDocRef, { agentIds: agentIds });
}

export async function getFeaturedAgentIds(): Promise<string[]> {
  if (!db) return [];
  try {
    const featuredAgentDocRef = doc(db!, 'app_config', 'featured_agent');
    const docSnap = await getDoc(featuredAgentDocRef);
    if (docSnap.exists()) {
      return docSnap.data().agentIds ?? [];
    }
    return [];
  } catch (error) {
    console.log('Firebase connection failed for featured agents...');
    return [];
  }
}

// --- Agents ---

// Utility to remove undefined fields from an object
function removeUndefined(obj: Record<string, any>) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v !== undefined));
}

export async function updateAgent(id: string, agentData: Omit<Agent, 'id'>): Promise<void> {
  if (!db) return;
  const docRef = doc(db!, 'agents', id);
  await setDoc(docRef, removeUndefined(agentData));
}

export async function deleteAgent(id: string): Promise<void> {
  if (!db) return;
  const agentDocRef = doc(db!, 'agents', id);
  const featuredDocRef = doc(db!, 'app_config', 'featured_agent');

  await runTransaction(db!, async (transaction) => {
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
  if (!db) throw new Error('Firebase not available');
  const id = agentData.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

  const newAgentData = {
    ...agentData,
    logoUrl: agentData.logoUrl || undefined,
  };

  const docRef = doc(db!, 'agents', id);
  // We don't store the ID in the document itself, only use it as the document ID.
  await setDoc(docRef, removeUndefined(newAgentData));

  return { id, ...newAgentData };
}

export async function getAgents(): Promise<Agent[]> {
  // Return local data immediately if Firebase is not available
  if (!db) {
    console.log('Firebase not available. Using local agents data...');
    return initialAgents.sort((a, b) => a.name.localeCompare(b.name));
  }

  try {
    const agentsCollection = collection(db!, 'agents');
    const agentSnapshot = await getDocs(agentsCollection);

    if (agentSnapshot.empty) {
      console.log('No agents found. Using local data...');
      return initialAgents.sort((a, b) => a.name.localeCompare(b.name));
    }

    const agentList = agentSnapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Agent)
    );

    return agentList.sort((a, b) => a.name.localeCompare(b.name));
  } catch (error) {
    console.log('Firebase connection failed. Using local agents data...');
    return initialAgents.sort((a, b) => a.name.localeCompare(b.name));
  }
}

export async function seedNewAgents(): Promise<void> {
  if (!db) return;
  const agentsCollection = collection(db!, 'agents');
  const agentSnapshot = await getDocs(agentsCollection);

  if (agentSnapshot.empty) {
    console.log('No agents found. Seeding database...');
    const batch = writeBatch(db!);
    initialAgents.forEach(agent => {
      const { id, ...agentData } = agent;
      const docRef = doc(db!, 'agents', id);
      batch.set(docRef, agentData);
    });
    await batch.commit();
    console.log('Database seeded with initial agents.');
  } else {
    console.log('No new agents to add.');
  }
}

export async function getAgentById(id: string): Promise<Agent | undefined> {
  // Return local data immediately if Firebase is not available
  if (!db) {
    console.log('Firebase not available. Using local agents data...');
    return initialAgents.find(agent => agent.id === id);
  }

  try {
    const docRef = doc(db!, 'agents', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...(docSnap.data() as Omit<Agent, 'id'>),
      } as Agent;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log('Firebase connection failed. Using local agents data...');
    return initialAgents.find(agent => agent.id === id);
  }
}

export async function getCategories(): Promise<string[]> {
  if (!db) {
    console.log('Firebase not available. Using local categories data...');
    return initialCategories.map(c => c.name);
  }

  try {
    const categoriesCollection = collection(db!, 'categories');
    const categorySnapshot = await getDocs(categoriesCollection);

    if (categorySnapshot.empty) {
      console.log('No categories found. Using local data...');
      return initialCategories.map(c => c.name);
    }

    const categoryList = categorySnapshot.docs.map(doc => doc.data().name as string);
    return categoryList.sort();
  } catch (error) {
    console.log('Firebase connection failed. Using local categories data...');
    return initialCategories.map(c => c.name);
  }
}

// --- Insights ---

export async function addInsight(insightData: Omit<Insight, 'id'>): Promise<Insight> {
  if (!db) throw new Error('Firebase not available');
  const id = insightData.title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');
  
  const docRef = doc(db!, 'insights', id);
  await setDoc(docRef, insightData);

  return { id, ...insightData };
}

export async function updateInsight(id: string, insightData: Omit<Insight, 'id'>): Promise<void> {
  if (!db) return;
  const docRef = doc(db!, 'insights', id);
  await setDoc(docRef, insightData, { merge: true });
}

export async function deleteInsight(id: string): Promise<void> {
  if (!db) return;
  const docRef = doc(db!, 'insights', id);
  await deleteDoc(docRef);
}

export async function getInsights(): Promise<Insight[]> {
  if (!db) {
    console.log('Firebase not available. Using local insights data...');
    return initialInsights.sort((a, b) => a.title.localeCompare(b.title));
  }

  try {
    const insightsCollection = collection(db!, 'insights');
    const insightSnapshot = await getDocs(insightsCollection);

    if (insightSnapshot.empty) {
      console.log('No insights found. Using local data...');
      return initialInsights.sort((a, b) => a.title.localeCompare(b.title));
    }

    const insightList = insightSnapshot.docs.map(
      doc =>
        ({
          id: doc.id,
          ...doc.data(),
        } as Insight)
    );

    return insightList.sort((a, b) => a.title.localeCompare(b.title));
  } catch (error) {
    console.log('Firebase connection failed. Using local insights data...');
    return initialInsights.sort((a, b) => a.title.localeCompare(b.title));
  }
}

export async function getInsightById(
  id: string
): Promise<Insight | undefined> {
  if (!db) {
    console.log('Firebase not available. Using local insights data...');
    return initialInsights.find(insight => insight.id === id);
  }

  try {
    const docRef = doc(db!, 'insights', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...(docSnap.data() as Omit<Insight, 'id'>),
      } as Insight;
    } else {
      return undefined;
    }
  } catch (error) {
    console.log('Firebase connection failed. Using local insights data...');
    return initialInsights.find(insight => insight.id === id);
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

const DEFAULT_LOGO_URL = 'https://avatars.githubusercontent.com/u/9919?s=200&v=4'; // Modern, visually appealing default logo

function getDomainFromUrl(url: string): string | null {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

export async function updateLogoUrls(): Promise<void> {
  if (!db) return;
  const agentsCollection = collection(db!, 'agents');
  const agentSnapshot = await getDocs(agentsCollection);

  const batch = writeBatch(db!);
  let updatedCount = 0;

  // Helper to check if a URL is a valid image
  async function isValidImageUrl(url: string): Promise<boolean> {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      const contentType = res.headers.get('content-type') || '';
      return res.ok && contentType.startsWith('image/');
    } catch {
      return false;
    }
  }

  // Helper to extract logo from website HTML (cheerio)
  async function extractLogoFromWebsite(website: string): Promise<string | null> {
    try {
      const res = await fetch(website, { method: 'GET' });
      if (!res.ok) { console.log(`[LogoScrape] Failed to fetch: ${website}`); return null; }
      const html = await res.text();
      const $ = load(html);
      let logoUrl: string | undefined;
      // Try various <link rel=...> (case-insensitive)
      const linkRels = [
        'icon',
        'shortcut icon',
        'apple-touch-icon',
      ];
      for (const rel of linkRels) {
        logoUrl = $(`link[rel='${rel}']`).attr('href') || logoUrl;
        logoUrl = $(`link[rel='${rel.toLowerCase()}']`).attr('href') || logoUrl;
        logoUrl = $(`link[rel='${rel.toUpperCase()}']`).attr('href') || logoUrl;
      }
      // Try any <link rel*="icon">
      if (!logoUrl) {
        $('link[rel]').each((_, el) => {
          const rel = ($(el).attr('rel') || '').toLowerCase();
          if (rel.includes('icon')) {
            logoUrl = $(el).attr('href') || logoUrl;
          }
        });
      }
      // Try <img> with logo in class/id/alt
      if (!logoUrl) {
        const img = $('img').filter((i, el) => {
          const alt = $(el).attr('alt') || '';
          const cls = $(el).attr('class') || '';
          const id = $(el).attr('id') || '';
          return /logo/i.test(alt + cls + id);
        }).first();
        logoUrl = img.attr('src');
      }
      // Try <img> in header/nav/footer
      if (!logoUrl) {
        const img = $('header img, nav img, footer img').first();
        logoUrl = img.attr('src');
      }
      // Try <img> with src containing 'logo'
      if (!logoUrl) {
        const img = $('img').filter((i, el) => {
          const src = $(el).attr('src') || '';
          return src.toLowerCase().includes('logo');
        }).first();
        logoUrl = img.attr('src');
      }
      // Handle protocol-relative URLs
      if (logoUrl && logoUrl.startsWith('//')) {
        logoUrl = 'https:' + logoUrl;
      }
      // Resolve relative URLs
      if (logoUrl && !/^https?:/.test(logoUrl)) {
        const base = new URL(website);
        logoUrl = new URL(logoUrl, base).toString();
      }
      if (logoUrl) {
        const valid = await isValidImageUrl(logoUrl);
        console.log(`[LogoScrape] Found logo for ${website}: ${logoUrl} (valid: ${valid})`);
        if (valid) return logoUrl;
      } else {
        console.log(`[LogoScrape] No logo found for ${website}`);
      }
      return null;
    } catch (err) {
      console.log(`[LogoScrape] Error for ${website}:`, err);
      return null;
    }
  }

  for (const docSnap of agentSnapshot.docs) {
    const agentData = docSnap.data() as Omit<Agent, 'id'>;
    const companyName = agentData.company;
    let logoUrl = LOGO_URLS[companyName];
    let shouldUpdate = false;
    let newLogoSource = '';

    // 1. Try mapped logo URL
    if (logoUrl && await isValidImageUrl(logoUrl)) {
      if (agentData.logoUrl !== logoUrl) {
        shouldUpdate = true;
        newLogoSource = 'mapped';
        console.log(`[LogoUpdate] ${companyName}: Using mapped logo URL.`);
      }
    } else if (agentData.website) {
      // 2. Try Clearbit Logo API
      const domain = getDomainFromUrl(agentData.website);
      if (domain) {
        const clearbitUrl = `https://logo.clearbit.com/${domain}`;
        if (await isValidImageUrl(clearbitUrl)) {
          logoUrl = clearbitUrl;
          if (agentData.logoUrl !== logoUrl) {
            shouldUpdate = true;
            newLogoSource = 'clearbit';
            console.log(`[LogoUpdate] ${companyName}: Using Clearbit logo (${clearbitUrl}).`);
          }
        } else {
          // 3. Try Google S2 Favicon API
          const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}`;
          if (await isValidImageUrl(googleFaviconUrl)) {
            logoUrl = googleFaviconUrl;
            if (agentData.logoUrl !== logoUrl) {
              shouldUpdate = true;
              newLogoSource = 'google';
              console.log(`[LogoUpdate] ${companyName}: Using Google S2 favicon (${googleFaviconUrl}).`);
            }
          } else {
            // 4. Try scraping
            const foundLogo = await extractLogoFromWebsite(agentData.website);
            if (foundLogo) {
              logoUrl = foundLogo;
              if (agentData.logoUrl !== logoUrl) {
                shouldUpdate = true;
                newLogoSource = 'scraped';
                console.log(`[LogoUpdate] ${companyName}: Using scraped logo (${foundLogo}).`);
              }
            } else {
              logoUrl = DEFAULT_LOGO_URL;
              if (agentData.logoUrl !== logoUrl) {
                shouldUpdate = true;
                newLogoSource = 'default';
                console.log(`[LogoUpdate] ${companyName}: Using default logo.`);
              }
            }
          }
        }
      } else {
        logoUrl = DEFAULT_LOGO_URL;
        if (agentData.logoUrl !== logoUrl) {
          shouldUpdate = true;
          newLogoSource = 'default';
          console.log(`[LogoUpdate] ${companyName}: Invalid website, using default logo.`);
        }
      }
    } else {
      logoUrl = DEFAULT_LOGO_URL;
      if (agentData.logoUrl !== logoUrl) {
        shouldUpdate = true;
        newLogoSource = 'default';
        console.log(`[LogoUpdate] ${companyName}: No website, using default logo.`);
      }
    }

    // 5. If a new/better logo is found, update it (even if the current one is valid)
    if (shouldUpdate) {
      batch.update(docSnap.ref, { logoUrl });
      updatedCount++;
      console.log(`[LogoUpdate] ${companyName}: Updated logoUrl to ${logoUrl} (source: ${newLogoSource})`);
    }
  }

  if (updatedCount > 0) {
    await batch.commit();
    console.log(`Updated logo URLs for ${updatedCount} agents.`);
  } else {
    console.log('No logo URLs to update.');
  }
}

/**
 * Fetch chatbot context entries from all sections, with optional filtering by sectionIds and tags.
 * Returns a flat array of entries: { id, sectionId, sectionTitle, text, tags, order }
 */
export async function getChatbotContexts({ sectionIds, tags }: { sectionIds?: string[]; tags?: string[] } = {}) {
  if (!db) {
    console.log('Firebase not available. Using local chatbot contexts...');
    return CHATBOT_CONTEXTS;
  }
  try {
    // Get all sections
    const sectionsSnap = await fsGetDocs(fsCollection(db, 'chatbot_context_sections'));
    let sections = sectionsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    if (sectionIds) {
      sections = sections.filter(s => sectionIds.includes(s.id));
    }
    // For each section, get entries
    let allEntries: any[] = [];
    for (const section of sections) {
      const entriesSnap = await fsGetDocs(fsCollection(db, 'chatbot_context_sections', section.id, 'entries'));
      let entries = entriesSnap.docs
        .map(doc => ({ id: doc.id, ...doc.data(), sectionId: section.id, sectionTitle: section.title }))
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.createdAt?.seconds ?? 0) - (b.createdAt?.seconds ?? 0));
      if (tags && tags.length > 0) {
        entries = entries.filter(e => (e.tags || []).some((t: string) => tags.includes(t)));
      }
      allEntries.push(...entries);
    }
    // Order by section order (as in sections array), then entry order
    return allEntries;
  } catch (error) {
    console.error('Error getting chatbot contexts: ', error);
    console.log('Falling back to local chatbot contexts...');
    return CHATBOT_CONTEXTS;
  }
}

// --- Chatbot Context Sections & Entries ---

// List all sections
export async function getChatbotContextSections() {
  if (!db) return [];
  const sectionsSnap = await fsGetDocs(fsCollection(db, 'chatbot_context_sections'));
  return sectionsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Add or update a section
export async function upsertChatbotContextSection(section: { id: string, title: string, description?: string }) {
  if (!db) return;
  const docRef = fsDoc(db, 'chatbot_context_sections', section.id);
  await fsSetDoc(docRef, {
    title: section.title,
    description: section.description || '',
    updatedAt: Timestamp.now(),
    createdAt: section.createdAt || Timestamp.now(),
  }, { merge: true });
}

// Delete a section (and its entries)
export async function deleteChatbotContextSection(sectionId: string) {
  if (!db) return;
  const sectionRef = fsDoc(db, 'chatbot_context_sections', sectionId);
  // Delete all entries in the section
  const entriesSnap = await fsGetDocs(fsCollection(db, 'chatbot_context_sections', sectionId, 'entries'));
  for (const entryDoc of entriesSnap.docs) {
    await fsDeleteDoc(entryDoc.ref);
  }
  await fsDeleteDoc(sectionRef);
}

// List entries in a section, ordered by 'order' then 'createdAt'
export async function getChatbotContextEntries(sectionId: string) {
  if (!db) return [];
  const entriesSnap = await fsGetDocs(fsCollection(db, 'chatbot_context_sections', sectionId, 'entries'));
  return entriesSnap.docs
    .map(doc => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0) || (a.createdAt?.seconds ?? 0) - (b.createdAt?.seconds ?? 0));
}

// Add or update an entry (with order)
export async function upsertChatbotContextEntry(sectionId: string, entry: { id: string, text: string, tags?: string[], order?: number }) {
  if (!db) return;
  const docRef = fsDoc(db, 'chatbot_context_sections', sectionId, 'entries', entry.id);
  await fsSetDoc(docRef, {
    text: entry.text,
    tags: entry.tags || [],
    order: entry.order ?? 0,
    updatedAt: Timestamp.now(),
    createdAt: entry.createdAt || Timestamp.now(),
  }, { merge: true });
}

// Delete an entry
export async function deleteChatbotContextEntry(sectionId: string, entryId: string) {
  if (!db) return;
  const docRef = fsDoc(db, 'chatbot_context_sections', sectionId, 'entries', entryId);
  await fsDeleteDoc(docRef);
}

// Reorder entries in a section
type EntryOrderUpdate = { id: string; order: number };
export async function reorderChatbotContextEntries(sectionId: string, orderUpdates: EntryOrderUpdate[]) {
  if (!db) return;
  const batch = writeBatch(db);
  for (const { id, order } of orderUpdates) {
    const docRef = fsDoc(db, 'chatbot_context_sections', sectionId, 'entries', id);
    batch.update(docRef, { order });
  }
  await batch.commit();
}
