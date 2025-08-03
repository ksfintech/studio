import { db } from '../lib/firebase';
import { CHATBOT_CONTEXT_SECTIONS } from '../lib/placeholder-data';
import { collection, doc, setDoc } from 'firebase/firestore';

async function seedChatbotContext() {
  if (!db) {
    console.error('Firebase not available. Aborting seeding.');
    return;
  }
  for (const section of CHATBOT_CONTEXT_SECTIONS) {
    try {
      const sectionRef = doc(db, 'chatbot_context_sections', section.id);
      await setDoc(sectionRef, {
        title: section.title,
        description: section.description || '',
        createdAt: section.entries[0]?.createdAt || new Date().toISOString(),
      });
      console.log(`Seeded section: ${section.title}`);
      for (const entry of section.entries) {
        const entryRef = doc(collection(db, 'chatbot_context_sections', section.id, 'entries'), entry.id);
        await setDoc(entryRef, {
          text: entry.text,
          tags: entry.tags || [],
          createdAt: entry.createdAt,
        });
        console.log(`  Seeded entry: ${entry.id} (${section.id})`);
      }
    } catch (err) {
      console.error(`Error seeding section ${section.id}:`, err);
    }
  }
  console.log('Chatbot context seeding complete.');
}

// Do NOT call process.exit here; this function is now safe to import in Next.js
// if (require.main === module) {
//   seedChatbotContext().then(() => process.exit(0));
// }

export { seedChatbotContext };