'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { getChatbotContextSections, getChatbotContextEntries, upsertChatbotContextEntry, upsertChatbotContextSection, deleteChatbotContextSection } from '@/lib/data';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), { ssr: false });
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';

// Deeply convert Firestore Timestamps to ISO strings
function toPlainObject(obj: any): any {
  if (obj == null) return obj;
  if (typeof obj !== 'object') return obj;
  if (typeof obj.toDate === 'function') return obj.toDate().toISOString();
  if (Array.isArray(obj)) return obj.map(toPlainObject);
  const plain: any = {};
  for (const key in obj) {
    plain[key] = toPlainObject(obj[key]);
  }
  return plain;
}

export default function ChatbotContextAdminPage() {
  const [contextInput, setContextInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => { loadContext(); }, []);

  async function loadContext() {
    setLoading(true);
    const sections = (await getChatbotContextSections()).map(toPlainObject);
    let md = '';
    for (const s of sections) {
      const entries = (await getChatbotContextEntries(s.id)).map(toPlainObject);
      for (const entry of entries) {
        md = entry.text;
        break;
      }
      if (md) break;
    }
    setContextInput(md);
    setLoading(false);
  }

  async function handleReplace() {
    setError(null);
    setInfo(null);
    setLoading(true);
    try {
      // Wipe all sections
      const sections = (await getChatbotContextSections()).map(toPlainObject);
      for (const s of sections) {
        await deleteChatbotContextSection(s.id);
      }
      // Add a single default section and entry
      await upsertChatbotContextSection({ id: 'default', title: 'Default' });
      await upsertChatbotContextEntry('default', {
        id: 'main-context',
        text: contextInput,
        tags: [],
      });
      setInfo('Knowledge base replaced!');
    } catch (e: any) {
      setError('Failed to replace knowledge base: ' + (e.message || e));
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4">
      <div className="w-full max-w-4xl mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">Chatbot Context Admin</h1>
        <p className="text-gray-500 mb-4">Edit your chatbot context below (Markdown supported). This is the knowledge base for your AI Financial Concierge.</p>
      </div>
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-8">
        <div className="flex-1">
          <MDEditor
            value={contextInput}
            onChange={v => setContextInput(v || '')}
            height={600} // Fixed height to avoid SSR window reference
            preview="edit"
            className="rounded-lg border border-gray-200 shadow-sm w-full h-full"
            style={{ minHeight: 400, height: '70vh' }}
          />
        </div>
        <button
          onClick={handleReplace}
          disabled={loading || !contextInput.trim()}
          className="w-full py-3 text-lg font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md hover:from-blue-700 hover:to-purple-700 transition disabled:opacity-50"
        >
          {loading ? 'Saving...' : 'Save Chatbot Context'}
        </button>
        {error && <div className="w-full bg-red-100 text-red-700 px-4 py-2 rounded mb-2">{error}</div>}
        {info && <div className="w-full bg-green-100 text-green-700 px-4 py-2 rounded mb-2">{info}</div>}
      </div>
    </div>
  );
}
