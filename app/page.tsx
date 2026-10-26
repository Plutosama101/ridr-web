import Link from 'next/link'
export default function Splash(){return <main className="app center" style={{justifyContent:'center'}}>
<img src="/logo.png" alt="ridr" width={280}/><p>Fast deliveries, on demand.</p>
<Link className="btn" href="/onboarding">Get started</Link></main>}
