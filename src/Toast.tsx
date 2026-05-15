import { useState, useEffect, useCallback } from 'react';

export type ToastType = 'info' | 'success' | 'warning' | 'coming-soon';

export interface Toast {
  id: number;
  message: string;
  sub?: string;
  type: ToastType;
}

let toastIdCounter = 0;
let globalAddToast: ((t: Omit<Toast, 'id'>) => void) | null = null;

export function toast(message: string, sub?: string, type: ToastType = 'info') {
  globalAddToast?.({ message, sub, type });
}

const icons: Record<ToastType, string> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  'coming-soon': 'construction',
};

const colors: Record<ToastType, string> = {
  info: '#00d4ff',
  success: '#00ff88',
  warning: '#fb923c',
  'coming-soon': '#a78bfa',
};

export function ToastContainer() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((t: Omit<Toast, 'id'>) => {
    const id = ++toastIdCounter;
    setToasts(prev => [...prev, { ...t, id }]);
    setTimeout(() => setToasts(prev => prev.filter(x => x.id !== id)), 3500);
  }, []);

  useEffect(() => {
    globalAddToast = addToast;
    return () => { globalAddToast = null; };
  }, [addToast]);

  return (
    <div style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 9999,
      display: 'flex', flexDirection: 'column', gap: 10, pointerEvents: 'none',
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          display: 'flex', alignItems: 'flex-start', gap: 12,
          padding: '14px 18px', borderRadius: 12, pointerEvents: 'all',
          background: 'rgba(13,17,23,0.95)', backdropFilter: 'blur(20px)',
          border: `1px solid ${colors[t.type]}40`,
          boxShadow: `0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px ${colors[t.type]}20`,
          animation: 'slideInToast 0.25s cubic-bezier(0.34,1.56,0.64,1)',
          maxWidth: 320, minWidth: 240,
        }}>
          <span className="material-symbols-outlined" style={{ color: colors[t.type], fontSize: 20, flexShrink: 0, marginTop: 1 }}>
            {icons[t.type]}
          </span>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>{t.message}</div>
            {t.sub && <div style={{ fontSize: 11, color: '#8892a4', marginTop: 2 }}>{t.sub}</div>}
          </div>
        </div>
      ))}
      <style>{`
        @keyframes slideInToast {
          from { opacity: 0; transform: translateX(20px) scale(0.95); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
