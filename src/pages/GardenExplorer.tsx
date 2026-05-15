import { Link } from 'react-router-dom';
import { toast } from '../components/Toast';

const connectedNodes = [
  { title: '03 OSI Model',      desc: 'Layered communication standards', icon: 'layers',   color: '#00d4ff' },
  { title: '04 IP Addressing',  desc: 'IPv4/IPv6 · CIDR · Subnetting',   icon: 'lan',      color: '#00ff88' },
  { title: 'Network Security',  desc: 'Defense-in-depth principles',      icon: 'shield',   color: '#a78bfa' },
  { title: 'Cisco IOS Basics',  desc: 'CLI commands & configuration',     icon: 'terminal', color: '#fb923c' },
];

const tocItems = [
  { id: 'intro',       label: 'Introduction',        depth: 1 },
  { id: 'ports',       label: 'Common Ports Table',  depth: 2 },
  { id: 'code',        label: 'Cisco IOS Example',   depth: 2 },
  { id: 'connections', label: 'Connected Nodes',     depth: 1 },
];

const codeText =
`Router# show ip interface brief
Interface              IP-Address      OK? Method Status     Protocol
GigabitEthernet0/0     192.168.1.1     YES manual up         up
GigabitEthernet0/1     unassigned      YES unset  adm. down  down
Loopback0              1.1.1.1         YES manual up         up`;

export default function GardenExplorer() {

  function comingSoon(label: string) {
    toast(`${label} — Coming Soon`, 'This feature is currently being built.', 'coming-soon');
  }

  function handleCopy() {
    navigator.clipboard.writeText(codeText).then(() => {
      toast('Copied to clipboard!', 'Cisco IOS command block copied.', 'success');
    }).catch(() => {
      toast('Copy failed', 'Could not access clipboard.', 'warning');
    });
  }

  function handleBookmark() {
    toast('Note bookmarked!', 'Saved to your reading list.', 'success');
  }

  function handleTocClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>

      {/* ─── Top Bar ─── */}
      <header style={{ height: 60, borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', background: 'rgba(8,12,18,0.85)', backdropFilter: 'blur(24px)', position: 'sticky', top: 0, zIndex: 50, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border-2)', color: 'var(--text-dim)', textDecoration: 'none', transition: 'all 0.2s', background: 'rgba(255,255,255,0.03)' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
          </Link>
          <div style={{ width: 1, height: 20, background: 'var(--border-2)' }} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>001 Network Fundamentals</div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)' }}>CompTIA Network+ · MOC: Fundamentals</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="tag tag-green">🌱 seedling</span>
          <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>Last cultivated: 2 days ago</div>
          <button onClick={handleBookmark} title="Bookmark this note" style={{ width: 34, height: 34, borderRadius: 8, border: '1px solid var(--border-2)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-dim)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>bookmark_border</span>
          </button>
        </div>
      </header>

      {/* ─── 3-column layout ─── */}
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '220px 1fr 240px', maxWidth: 1440, margin: '0 auto', width: '100%' }}>

        {/* ─── Left: TOC + Nav ─── */}
        <aside style={{ borderRight: '1px solid var(--border)', padding: '28px 16px', position: 'sticky', top: 60, height: 'calc(100dvh - 60px)', overflowY: 'auto' }}>
          <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 16 }}>On this page</div>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {tocItems.map(t => (
              <a key={t.id} href={`#${t.id}`} onClick={e => handleTocClick(e, t.id)} style={{ display: 'block', padding: `6px ${t.depth === 2 ? '20px' : '8px'}`, fontSize: 13, color: 'var(--text-faint)', textDecoration: 'none', borderRadius: 6, borderLeft: '2px solid transparent', transition: 'all 0.15s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--cyan)'; (e.currentTarget as HTMLElement).style.background = 'rgba(0,212,255,0.04)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-faint)'; (e.currentTarget as HTMLElement).style.background = 'transparent'; }}>
                {t.label}
              </a>
            ))}
          </nav>

          <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />

          <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Navigation</div>
          {[
            { icon: 'history', label: 'Recent Nodes' },
            { icon: 'link',    label: 'Backlinks (3)' },
            { icon: 'hub',     label: 'Graph View' },
          ].map(item => (
            <button key={item.label} onClick={() => comingSoon(item.label)} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', width: '100%', fontSize: 13, color: 'var(--text-dim)', background: 'none', border: 'none', cursor: 'pointer', borderRadius: 8, transition: 'all 0.15s', marginBottom: 2, textAlign: 'left', fontFamily: 'inherit' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16, color: 'var(--text-faint)' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}

          {/* Mini graph */}
          <div className="glass" style={{ marginTop: 20, padding: 14, borderRadius: 12, position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={() => comingSoon('Interactive Knowledge Graph')}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginBottom: 10 }}>Garden Map</div>
            <svg viewBox="0 0 160 100" style={{ width: '100%', height: 80 }}>
              <line x1="80" y1="50" x2="30" y2="20" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
              <line x1="80" y1="50" x2="130" y2="20" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
              <line x1="80" y1="50" x2="30" y2="80" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
              <line x1="80" y1="50" x2="130" y2="80" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
              <line x1="80" y1="50" x2="80" y2="10" stroke="rgba(0,255,136,0.2)" strokeWidth="1" />
              <circle cx="30" cy="20" r="4" fill="rgba(0,212,255,0.4)" />
              <circle cx="130" cy="20" r="4" fill="rgba(0,212,255,0.4)" />
              <circle cx="30" cy="80" r="4" fill="rgba(0,212,255,0.4)" />
              <circle cx="130" cy="80" r="4" fill="rgba(0,212,255,0.4)" />
              <circle cx="80" cy="10" r="3" fill="rgba(0,255,136,0.5)" />
              <circle cx="80" cy="50" r="7" fill="rgba(0,212,255,0.15)" stroke="#00d4ff" strokeWidth="1.5" />
              <circle cx="80" cy="50" r="3" fill="#00d4ff" />
            </svg>
            <div className="mono" style={{ fontSize: 9, color: 'var(--text-faint)', textAlign: 'center', marginTop: 4 }}>Click to expand</div>
          </div>
        </aside>

        {/* ─── Center: Article ─── */}
        <main style={{ padding: '36px 48px', overflowY: 'auto', maxWidth: 780 }}>

          {/* Breadcrumbs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
            {['CompTIA N+', 'Fundamentals', '001 Network Basics'].map((b, i, arr) => (
              <span key={b} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span className="mono" style={{ fontSize: 11, color: i === arr.length - 1 ? 'var(--cyan)' : 'var(--text-faint)', cursor: i < arr.length - 1 ? 'pointer' : 'default' }}
                  onClick={() => i < arr.length - 1 && comingSoon(`${b} breadcrumb`)}>{b}</span>
                {i < arr.length - 1 && <span style={{ color: 'var(--text-faint)', fontSize: 11 }}>/</span>}
              </span>
            ))}
          </div>

          {/* Title */}
          <div id="intro" style={{ marginBottom: 32, scrollMarginTop: 80 }}>
            <h1 style={{ fontSize: 34, fontWeight: 800, color: 'var(--text)', lineHeight: 1.2, marginBottom: 12 }}>
              001 Network<br /><span className="gradient-text">Fundamentals</span>
            </h1>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['#networking', '#osi-model', '#protocols', '#comptia'].map(t => (
                <button key={t} onClick={() => comingSoon(`Search for ${t}`)} className="tag tag-cyan" style={{ fontSize: 10, cursor: 'pointer', background: 'none', fontFamily: 'inherit' }}>{t}</button>
              ))}
            </div>
          </div>

          <p style={{ fontSize: 15, color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: 28 }}>
            Modern computer networks are the backbone of digital communication. Understanding{' '}
            <span style={{ color: 'var(--cyan)', fontWeight: 600, textShadow: '0 0 8px rgba(0,212,255,0.4)' }}>Ethernet</span>{' '}
            standards and how data travels across various media is fundamental for any network engineer. We must account for{' '}
            <span style={{ color: 'var(--cyan)', fontWeight: 600, textShadow: '0 0 8px rgba(0,212,255,0.4)' }}>Bandwidth</span>{' '}
            limitations and the physical addressing identified by the unique{' '}
            <span style={{ color: 'var(--green)', fontWeight: 600, textShadow: '0 0 8px rgba(0,255,136,0.4)' }}>MAC Address</span>{' '}
            assigned to every network interface card (NIC).
          </p>

          {/* Callout */}
          <div style={{ borderLeft: '3px solid var(--cyan)', background: 'rgba(0,212,255,0.05)', borderRadius: '0 10px 10px 0', padding: '14px 18px', marginBottom: 32, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 20, flexShrink: 0, marginTop: 1 }}>info</span>
            <div>
              <div className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--cyan)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Exam Tip</div>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>Network+ N10-009 heavily tests port numbers. Memorize at minimum: SSH (22), SMTP (25), DNS (53), HTTP (80), HTTPS (443), RDP (3389).</p>
            </div>
          </div>

          {/* Ports Table */}
          <div id="ports" style={{ marginBottom: 32, scrollMarginTop: 80 }}>
            <div style={{ background: 'rgba(13,17,23,0.8)', border: '1px solid var(--border-2)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', borderBottom: '1px solid var(--border)', background: 'rgba(0,212,255,0.04)' }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--cyan)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Common Network Ports</span>
                <span className="material-symbols-outlined" style={{ color: 'var(--text-faint)', fontSize: 16 }}>list_alt</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'JetBrains Mono,monospace', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                    {['Protocol', 'Port', 'Transport', 'Description'].map(h => (
                      <th key={h} style={{ padding: '10px 16px', textAlign: 'left', color: 'var(--text-faint)', fontSize: 11, fontWeight: 600, letterSpacing: '0.04em' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { proto: 'SSH',   port: '22',   transport: 'TCP',     desc: 'Secure Remote Login' },
                    { proto: 'SMTP',  port: '25',   transport: 'TCP',     desc: 'Email Sending' },
                    { proto: 'DNS',   port: '53',   transport: 'TCP/UDP', desc: 'Domain Name System' },
                    { proto: 'HTTP',  port: '80',   transport: 'TCP',     desc: 'Web Traffic' },
                    { proto: 'HTTPS', port: '443',  transport: 'TCP',     desc: 'Secure Web Traffic' },
                    { proto: 'RDP',   port: '3389', transport: 'TCP',     desc: 'Remote Desktop Protocol' },
                  ].map((row, i) => (
                    <tr key={row.proto} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                      <td style={{ padding: '10px 16px', color: 'var(--text)', fontWeight: 600 }}>{row.proto}</td>
                      <td style={{ padding: '10px 16px', color: 'var(--cyan)' }}>{row.port}</td>
                      <td style={{ padding: '10px 16px', color: 'var(--green)', fontSize: 11 }}>{row.transport}</td>
                      <td style={{ padding: '10px 16px', color: 'var(--text-faint)' }}>{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Code Block */}
          <div id="code" style={{ marginBottom: 36, scrollMarginTop: 80 }}>
            <div style={{ background: '#0a0d13', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 12, overflow: 'hidden' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '9px 16px', borderBottom: '1px solid rgba(0,212,255,0.1)', background: 'rgba(0,212,255,0.04)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ display: 'flex', gap: 5 }}>
                    {['#ff5f57','#febc2e','#28c840'].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
                  </div>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)' }}>cisco-ios.sh</span>
                </div>
                <button onClick={handleCopy} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-faint)', display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, fontFamily: 'JetBrains Mono,monospace', transition: 'color 0.15s', padding: '4px 8px', borderRadius: 6 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: 14 }}>content_copy</span>
                  Copy
                </button>
              </div>
              <pre className="mono" style={{ padding: '20px', fontSize: 13, lineHeight: 1.8, overflowX: 'auto', color: '#c8d3f5' }}>
                <span style={{ color: '#00e5ff' }}>Router#</span>{' '}
                <span style={{ color: '#82aaff' }}>show ip interface brief</span>{'\n'}
                <span style={{ color: '#4a5568' }}>Interface              IP-Address      OK? Method Status     Protocol</span>{'\n'}
                <span style={{ color: '#00ff88' }}>GigabitEthernet0/0</span>{'     '}
                <span style={{ color: '#ffd9a1' }}>192.168.1.1</span>
                {'     YES manual '}<span style={{ color: '#00ff88' }}>up</span>{'          '}<span style={{ color: '#00ff88' }}>up</span>{'\n'}
                <span style={{ color: '#8892a4' }}>GigabitEthernet0/1</span>
                {'     unassigned      YES unset  '}
                <span style={{ color: '#ff5f57' }}>administratively down</span>{'  '}<span style={{ color: '#ff5f57' }}>down</span>{'\n'}
                <span style={{ color: '#00ff88' }}>Loopback0</span>
                {'              '}<span style={{ color: '#ffd9a1' }}>1.1.1.1</span>
                {'         YES manual '}<span style={{ color: '#00ff88' }}>up</span>{'          '}<span style={{ color: '#00ff88' }}>up</span>
              </pre>
            </div>
          </div>

          <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)', margin: '8px 0 32px' }} />

          {/* Connected Nodes */}
          <div id="connections" style={{ scrollMarginTop: 80 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 20 }}>account_tree</span>
              <h2 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)' }}>Connected Nodes</h2>
              <span className="mono" style={{ fontSize: 11, color: 'var(--text-faint)', marginLeft: 4 }}>4 links</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {connectedNodes.map(n => (
                <button key={n.title} onClick={() => comingSoon(`${n.title} note`)} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}>
                  <div className="glass glass-hover" style={{ padding: '16px', borderRadius: 12, display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${n.color}14`, border: `1px solid ${n.color}30`, flexShrink: 0 }}>
                      <span className="material-symbols-outlined" style={{ color: n.color, fontSize: 20 }}>{n.icon}</span>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', marginBottom: 2 }}>{n.title}</div>
                      <div style={{ fontSize: 11, color: 'var(--text-faint)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n.desc}</div>
                    </div>
                    <span className="material-symbols-outlined" style={{ color: 'var(--text-faint)', fontSize: 16, flexShrink: 0 }}>chevron_right</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Prev/Next nav */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 40, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
            <button onClick={() => comingSoon('Previous note')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: '1px solid var(--border-2)', cursor: 'pointer', color: 'var(--text-dim)', fontSize: 13, padding: '10px 16px', borderRadius: 10, transition: 'all 0.2s', fontFamily: 'inherit' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_back</span>
              000 Course Intro
            </button>
            <button onClick={() => comingSoon('Next note: 002 OSI Model')} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', cursor: 'pointer', color: 'var(--cyan)', fontSize: 13, padding: '10px 16px', borderRadius: 10, transition: 'all 0.2s', fontFamily: 'inherit' }}>
              002 OSI Model
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
            </button>
          </div>
        </main>

        {/* ─── Right: Info Panel ─── */}
        <aside style={{ borderLeft: '1px solid var(--border)', padding: '28px 20px', position: 'sticky', top: 60, height: 'calc(100dvh - 60px)', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Metadata</div>
            {[
              { label: 'Status',      value: '🌱 Seedling',  color: 'var(--green)' },
              { label: 'MOC',         value: 'Fundamentals' },
              { label: 'Domain',      value: 'Networking' },
              { label: 'N+ Objective',value: '1.1' },
              { label: 'Modified',    value: '2 days ago' },
            ].map(m => (
              <div key={m.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)', fontSize: 12 }}>
                <span style={{ color: 'var(--text-faint)' }}>{m.label}</span>
                <span style={{ color: m.color || 'var(--text)', fontWeight: 500 }}>{m.value}</span>
              </div>
            ))}
          </div>

          <div>
            <div className="mono" style={{ fontSize: 10, color: 'var(--text-faint)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>Exam Objectives</div>
            {['1.1 Network concepts', '1.2 OSI vs TCP/IP', '1.4 Port numbers'].map(obj => (
              <div key={obj} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0 }} />
                <span style={{ fontSize: 12, color: 'var(--text-dim)' }}>{obj}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 'auto' }}>
            <button onClick={() => comingSoon('Practice Quiz for this note')} style={{ padding: '10px', borderRadius: 10, border: '1px solid rgba(0,212,255,0.25)', background: 'rgba(0,212,255,0.08)', color: 'var(--cyan)', cursor: 'pointer', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', transition: 'all 0.2s' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>quiz</span>
              Practice Quiz
            </button>
            <button onClick={() => comingSoon('Edit note in Obsidian')} style={{ padding: '10px', borderRadius: 10, border: '1px solid var(--border-2)', background: 'rgba(255,255,255,0.03)', color: 'var(--text-dim)', cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontFamily: 'inherit', transition: 'all 0.2s' }}>
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>edit_note</span>
              Edit Note
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
