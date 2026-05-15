import { Link, useNavigate } from 'react-router-dom';
import { notes } from 'virtual:notes';
import { toast } from '../components/Toast';

const mocs = [
  { icon: '◈', label: 'Networking Fundamentals', sub: 'OSI · TCP/IP · Protocols', color: '#00d4ff', notes: 42, progress: 65, to: '/note/networking-fundamentals-moc' },
  { icon: '◈', label: 'Network Security',        sub: 'Firewalls · VPNs · AAA',   color: '#00ff88', notes: 31, progress: 40, to: '/note/security-moc' },
  { icon: '◈', label: 'Troubleshooting',         sub: 'Tools · Methodology · Labs', color: '#a78bfa', notes: 28, progress: 25, to: '/note/troubleshooting-moc' },
  { icon: '◈', label: 'Infrastructure',          sub: 'Routing · Switching · WAN', color: '#fb923c', notes: 35, progress: 50, to: '/explore' },
  { icon: '◈', label: 'Wireless Networking',     sub: 'Wi-Fi · Bluetooth · Cellular', color: '#f472b6', notes: 19, progress: 20, to: '/explore' },
  { icon: '◈', label: 'Cloud Networking',        sub: 'AWS · Azure · Hybrid',       color: '#34d399', notes: 22, progress: 15, to: '/explore' },
];




const sidebarItems = [
  { icon: 'dashboard',    label: 'Dashboard',      to: '/',        active: true  },
  { icon: 'hub',          label: 'Garden Explorer',to: '/explore', active: false },
  { icon: 'account_tree', label: 'Knowledge Graph',to: '/graph',   active: false },
  { icon: 'quiz',         label: 'Practice Quiz',  to: '/quiz',    active: false },
  { icon: 'timer',        label: 'Study Timer',    to: '/timer',   active: false },
];

export default function Dashboard({ onSearch }: { onSearch?: () => void }) {
  const navigate = useNavigate();
  const readiness = 60;
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (readiness / 100) * circumference;



  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh', display: 'flex' }}>

      {/* ─── Sidebar ─── */}
      <aside style={{
        width: 240, minHeight: '100dvh', position: 'sticky', top: 0, flexShrink: 0,
        background: 'rgba(13,17,23,0.9)', borderRight: '1px solid var(--border-2)',
        backdropFilter: 'blur(24px)', display: 'flex', flexDirection: 'column', padding: '24px 12px', gap: 4,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 8px 24px' }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg,#00d4ff22,#00ff8822)', border: '1px solid rgba(0,212,255,0.3)' }}>
            <span style={{ color: 'var(--cyan)', fontSize: 16 }}>⬡</span>
          </div>
          <div>
            <div className="mono" style={{ color: 'var(--cyan)', fontSize: 13, fontWeight: 700, letterSpacing: '0.1em' }}>CYBERNET</div>
            <div style={{ color: 'var(--text-faint)', fontSize: 10, letterSpacing: '0.05em' }}>STUDY DASHBOARD</div>
          </div>
        </div>

        <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', padding: '0 8px 8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Navigation</div>

        {sidebarItems.map(item => {
          if (item.to) {
            return (
              <Link key={item.label} to={item.to} className={`nav-item${item.active ? ' active' : ''}`}>
                <span className="material-symbols-outlined icon">{item.icon}</span>
                {item.label}
              </Link>
            );
          }
          return (
            <button key={item.label} className="nav-item" onClick={() => toast('Coming Soon', item.label, 'info')}
              style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left' }}>
              <span className="material-symbols-outlined icon">{item.icon}</span>
              {item.label}
            </button>
          );
        })}

        <div style={{ flex: 1 }} />

        {/* Session status */}
        <div style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.15)', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="pulse-dot" style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--green)', flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: 12, color: 'var(--green)', fontWeight: 600 }}>Session Active</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)' }}>2h 14m elapsed</div>
          </div>
        </div>
      </aside>

      {/* ─── Main ─── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>

        {/* Topbar */}
        <header style={{ height: 60, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', background: 'rgba(8,12,18,0.8)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, zIndex: 50, gap: 16 }}>
          <div>
            <span style={{ color: 'var(--text-faint)', fontSize: 13 }}>Good evening, </span>
            <span className="cursor-blink mono" style={{ color: 'var(--cyan)', fontSize: 13, fontWeight: 600 }}>Student</span>
          </div>
          {/* Search bar */}
          <button onClick={onSearch} style={{ flex: 1, maxWidth: 380, display: 'flex', alignItems: 'center', gap: 10, padding: '7px 14px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-2)', borderRadius: 10, cursor: 'pointer', color: 'var(--text-faint)', fontSize: 13, fontFamily: 'inherit', transition: 'border-color 0.2s' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 17, color: 'var(--text-faint)' }}>search</span>
            <span style={{ flex: 1, textAlign: 'left' }}>Search notes…</span>
            <kbd className="mono" style={{ fontSize: 10, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, padding: '2px 6px' }}>⌘K</kbd>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
            <div className="mono" style={{ padding: '5px 12px', borderRadius: 6, fontSize: 11, background: 'rgba(0,212,255,0.08)', color: 'var(--cyan)', border: '1px solid rgba(0,212,255,0.2)' }}>N10-009</div>
            <button onClick={() => toast('Profile', 'Settings are read-only for local instances.', 'info')} style={{ width: 34, height: 34, borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(0,212,255,0.4)', flexShrink: 0, padding: 0, cursor: 'pointer', background: 'none' }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoA3zIkTpq2Isxhb7-y4-1CTnmnwJKVeev0WvED2N_EnNynkER3JpPV67JxqZsVS1ej_Q_kLlHXDTgGIhCCgO9PM-gyG1CIOtQQAIoAdl9GKzw4y-AjkPmaZDNdcVl9hqmUcrNQgu4lhNR6-mVL7FhR6GgL8I4DIDxRyFLL2k3czpUOvWrXTNVMnhkIkPYrom1ny2HgUrGTEdBOvYbyYg5PbFWmfyj5mt-pyY4Jer64fxezfREQbs26WFEEi_iX2Dn-pBVMGsZs4E" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </button>
          </div>
        </header>

        <main style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: 28, overflowY: 'auto' }} className="grid-bg">

          {/* ── Readiness Banner ── */}
          <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
            <div className="glass scan-line" style={{ gridColumn: 'span 1', padding: '28px', display: 'flex', alignItems: 'center', gap: 24, position: 'relative' }}>
              <div style={{ position: 'relative', width: 120, height: 120, flexShrink: 0 }}>
                <svg width="120" height="120" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                  <defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00d4ff" /><stop offset="100%" stopColor="#00ff88" /></linearGradient></defs>
                  <circle cx="60" cy="60" r="54" fill="none" stroke="url(#grad1)" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset} className="progress-ring" style={{ filter: 'drop-shadow(0 0 6px rgba(0,212,255,0.5))' }} />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="gradient-text mono" style={{ fontSize: 26, fontWeight: 700 }}>{readiness}%</span>
                  <span style={{ fontSize: 9, color: 'var(--text-faint)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>ready</span>
                </div>
              </div>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 6 }}>Network+ Readiness</div>
                <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--text)', lineHeight: 1.2, marginBottom: 12 }}>Certification<br />Track</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 14px', borderRadius: 8, border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 10, color: 'var(--text-faint)', marginBottom: 2 }}>Modules</div>
                    <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: 'var(--cyan)' }}>12<span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>/20</span></div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.04)', padding: '8px 14px', borderRadius: 8, border: '1px solid var(--border)' }}>
                    <div style={{ fontSize: 10, color: 'var(--text-faint)', marginBottom: 2 }}>Exam Date</div>
                    <div className="mono" style={{ fontSize: 15, fontWeight: 600, color: 'var(--green)' }}>Jun 12</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats */}
            <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: 16 }}>
              {[
                { label: 'Total Notes',     value: '257',     icon: 'description',          color: '#00d4ff' },
                { label: 'Study Streak',    value: '14 days', icon: 'local_fire_department', color: '#fb923c' },
                { label: 'Topics Mastered', value: '8 / 20',  icon: 'verified',             color: '#00ff88' },
                { label: 'Flashcards Due',  value: '34',      icon: 'quiz',                 color: '#a78bfa' },
              ].map(s => (
                <div key={s.label} className="glass glass-hover" style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
                  onClick={() => {
                    if (s.label === 'Total Notes') onSearch?.()
                    if (s.label === 'Study Streak') navigate('/timer')
                    if (s.label === 'Topics Mastered') navigate('/graph')
                    if (s.label === 'Flashcards Due') navigate('/quiz')
                  }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${s.color}14`, border: `1px solid ${s.color}30`, flexShrink: 0 }}>
                    <span className="material-symbols-outlined" style={{ color: s.color, fontSize: 20 }}>{s.icon}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-faint)', marginBottom: 2 }}>{s.label}</div>
                    <div className="mono" style={{ fontSize: 20, fontWeight: 700, color: s.color }}>{s.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Knowledge MOCs ── */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 3, height: 18, borderRadius: 2, background: 'linear-gradient(#00d4ff,#00ff88)' }} />
                <h2 className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Knowledge MOCs</h2>
              </div>
              <button onClick={() => onSearch?.()} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>View all →</button>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {mocs.map(m => {
                const inner = (
                  <div className="glass note-card glass-hover" style={{ padding: '20px', borderRadius: 14, height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
                      <div style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${m.color}14`, border: `1px solid ${m.color}30` }}>
                        <span style={{ color: m.color, fontSize: 18 }}>{m.icon}</span>
                      </div>
                      <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>{m.notes} notes</span>
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-faint)', marginBottom: 14 }}>{m.sub}</div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${m.progress}%`, background: `linear-gradient(90deg,${m.color}99,${m.color})` }} />
                    </div>
                    <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', marginTop: 6 }}>{m.progress}% complete</div>
                  </div>
                );
                return m.to ? (
                  <Link key={m.label} to={m.to} style={{ textDecoration: 'none' }}>{inner}</Link>
                ) : (
                  <div key={m.label} style={{ cursor: 'pointer' }} onClick={() => toast('Coming Soon', `${m.label} MOC`, 'info')}>{inner}</div>
                );
              })}
            </div>
          </section>

          {/* ── Recent Notes ── */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 3, height: 18, borderRadius: 2, background: 'linear-gradient(#00d4ff,#00ff88)' }} />
                <h2 className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Recent Garden Entries</h2>
              </div>
              <button onClick={() => onSearch?.()} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, color: 'var(--cyan)', fontFamily: 'JetBrains Mono, monospace' }}>View all →</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {notes.slice(0, 6).map(n => (
                <div key={n.slug} style={{ cursor: 'pointer' }} onClick={() => navigate(`/note/${n.slug}`)}>
                  <div className="glass note-card" style={{ padding: '16px 20px', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>
                      {n.maturity === 'seedling' ? '🌱' : n.maturity === 'budding' ? '🌿' : '🌳'}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{n.title}</span>
                        <span className="tag tag-cyan" style={{ fontSize: 9 }}>{n.maturity}</span>
                      </div>
                      <p style={{ fontSize: 12, color: 'var(--text-faint)', lineHeight: 1.5, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{n.excerpt}</p>
                    </div>
                    <div style={{ textAlign: 'right', flexShrink: 0 }}>
                      <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', marginBottom: 4, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.folder}</div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'var(--text-faint)', fontSize: 18 }}>chevron_right</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
