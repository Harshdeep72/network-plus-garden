import { Link } from 'react-router-dom';
import { notes } from 'virtual:notes';
import { folderColor } from './KnowledgeGraph';

export default function GardenExplorer() {
  const folders = [...new Set(notes.map(n => n.folder))].sort();

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Topbar */}
      <header style={{ height: 60, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', padding: '0 24px', background: 'rgba(8,12,18,0.9)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, gap: 16, flexShrink: 0 }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border-2)', color: 'var(--text-dim)', textDecoration: 'none', transition: 'all 0.2s', background: 'rgba(255,255,255,0.03)' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
        </Link>
        <div style={{ width: 1, height: 20, background: 'var(--border-2)' }} />
        <div style={{ width: 34, height: 34, borderRadius: 8, background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span className="material-symbols-outlined" style={{ fontSize: 18, color: 'var(--cyan)' }}>hub</span>
        </div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>Garden Explorer</div>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)' }}>Browse all domains and folders</div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px 60px', flex: 1, overflowY: 'auto' }} className="grid-bg">
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
            <div style={{ width: 4, height: 24, borderRadius: 2, background: 'var(--cyan)' }} />
            <h1 className="mono" style={{ fontSize: 18, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>All Vault Folders</h1>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {folders.map(f => {
              const fNotes = notes.filter(n => n.folder === f);
              const color = folderColor(f);
              return (
                <Link key={f} to={`/moc/${encodeURIComponent(f)}`} style={{ textDecoration: 'none' }}>
                  <div className="glass glass-hover note-card" style={{ padding: '24px', borderRadius: 14, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${color}15`, border: `1px solid ${color}40` }}>
                        <span className="material-symbols-outlined" style={{ color: color, fontSize: 24 }}>folder_open</span>
                      </div>
                      <div className="mono" style={{ fontSize: 12, color: 'var(--text-faint)', background: 'rgba(255,255,255,0.03)', padding: '4px 10px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.05)' }}>
                        {fNotes.length} notes
                      </div>
                    </div>
                    
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', marginBottom: 8, lineHeight: 1.4 }}>{f}</div>
                    
                    <div style={{ flex: 1 }} />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                      {fNotes.slice(0, 3).map(n => (
                        <div key={n.slug} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: 10, color: color }}>•</span>
                          <span style={{ fontSize: 12, color: 'var(--text-dim)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.title}</span>
                        </div>
                      ))}
                      {fNotes.length > 3 && (
                        <div style={{ fontSize: 11, color: 'var(--text-faint)', marginTop: 4, fontStyle: 'italic' }}>+ {fNotes.length - 3} more</div>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
