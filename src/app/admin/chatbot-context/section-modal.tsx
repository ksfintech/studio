import React, { useState, useEffect } from 'react';

export function SectionModal({ open, onClose, onSubmit, initialValues }: {
  open: boolean;
  onClose: () => void;
  onSubmit: (values: { id: string; title: string; description: string }) => void;
  initialValues?: { id: string; title: string; description: string };
}) {
  const [form, setForm] = useState({ id: '', title: '', description: '' });

  useEffect(() => {
    if (open) {
      setForm(initialValues || { id: '', title: '', description: '' });
    }
  }, [open, initialValues]);

  if (!open) return null;

  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', padding: 24, borderRadius: 8, minWidth: 320 }}>
        <h2>{form.id ? 'Edit Section' : 'Add Section'}</h2>
        <form onSubmit={e => { e.preventDefault(); onSubmit(form); }}>
          <div>
            <label>ID (unique): <input value={form.id} onChange={e => setForm(f => ({ ...f, id: e.target.value }))} required disabled={!!form.id} /></label>
          </div>
          <div>
            <label>Title: <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} required /></label>
          </div>
          <div>
            <label>Description: <input value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} /></label>
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