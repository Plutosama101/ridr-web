'use client'
import {useState} from 'react';import Link from 'next/link';import {useRouter} from 'next/navigation'
export default function Signup(){const r=useRouter();const[show,setShow]=useState(false)
return <main className="app"><h1>Sign up</h1>
<input className="input" placeholder="Name"/><input className="input" type="email" placeholder="Email"/>
<div style={{position:'relative'}}><input className="input" type={show?'text':'password'} placeholder="Password"/>
<button onClick={()=>setShow(!show)} style={{position:'absolute',right:14,top:16,border:0,background:'none',color:'var(--blue)',cursor:'pointer'}}>{show?'Hide':'Show'}</button></div>
<label><input type="checkbox"/> Send me news and offers.</label>
<button className="btn" onClick={()=>r.push('/dashboard')}>Sign up</button>
<Link href="/login" style={{textAlign:'center'}}>Have an account? Log in</Link></main>}
