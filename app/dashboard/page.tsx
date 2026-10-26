import Link from 'next/link'
export default function D(){return <main className="app"><input className="input" placeholder="Where to?"/>
<h1>Good evening, Kenny</h1>
<Link href="/delivery" className="btn">Send a package</Link>
<div className="card" style={{background:'var(--navy)',color:'#fff',borderColor:'var(--navy)'}}><span><b>Pay in a blink</b><br/>Swift payment for every delivery</span></div>
<b>Active services around you</b><div className="map"/></main>}
