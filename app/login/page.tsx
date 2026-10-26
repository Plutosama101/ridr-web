'use client'
import {useState} from 'react';import Link from 'next/link';import {useRouter} from 'next/navigation'
export default function Login(){const r=useRouter();const[sync,setSync]=useState(true)
return <main className="app"><Link href="/onboarding" aria-label="Back">←</Link><h1>Log in</h1>
<p>Confirm your country code and enter your phone number.</p>
<select className="input"><option>Nigeria (+234)</option></select>
<input className="input" type="tel" placeholder="801 234 5678"/>
<label><input type="checkbox" checked={sync} onChange={e=>setSync(e.target.checked)}/> Sync contacts</label>
<button className="btn" onClick={()=>r.push('/dashboard')}>Log in</button>
<Link href="/signup" style={{textAlign:'center'}}>Create an account</Link></main>}
