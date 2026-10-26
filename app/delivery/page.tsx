import Link from 'next/link'
export default function Dl(){return <main className="app"><div className="map"/>
<div className="sheet"><div style={{display:'flex',gap:8}}>{['Home','Work','Saved'].map(c=><span key={c} className="chip">{c}</span>)}</div>
<input className="input" placeholder="Pickup address"/><input className="input" placeholder="Drop-off address"/>
<Link className="btn" href="/vehicle">Confirm pickup</Link></div></main>}
