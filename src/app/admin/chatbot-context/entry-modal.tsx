import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

export function EntryModal({ open, onClose, onSubmit, initialValues }: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: { id: string; text: string; tags: string }) => void;
  initialValues?: { id: string; text: string; tags: string };
}) {
  const [form, setForm] = useState({ id: '', text: '', tags: '' });

  useEffect(() => {
    if (open) {
      setForm(initialValues || { id: '', text: '', tags: '' });
    }
  }, [open, initialValues]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 320, maxWidth: 600 }}>
        <h2>{form.id ? 'Edit Entry' : 'Add Entry'}</h2>
        <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
          <div>
            <label>ID (unique): <input value={form.id} onChange={e => setForm(f => ({ ...f, id: e.target.value }))} required disabled={!!form.id} /></label>
          </div>
          <div>
            <label>Text (Markdown supported):<br />
              <textarea value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} required rows={6} style={{ width: '100%' }} />
            </label>
            <div style={{ marginTop: 8, background: '#f8f8f8', padding: 8, borderRadius: 4 }}>
              <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Live Preview:</div>
              <ReactMarkdown>{form.text}</ReactMarkdown>
            </div>
          </div>
          <div>
            <label>Tags (comma separated): <input value={form.tags} onChange={e => setForm(f => ({ ...f, tags: e.target.value }))} /></label>
          </div>
          <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}