'use client'
import {useState} from 'react';import Link from 'next/link'
// Slide 3 had a duplicate headline in Figma; "Pay In A Blink" matches the dashboard banner (placeholder copy).
const S=[{t:'Fast Deliveries On Demand',i:'/boxes.png'},{t:'Real Time Tracking',i:'/courier.png'},{t:'Pay In A Blink',i:'/boxes.png'}]
export default function O(){const[n,setN]=useState(0);const s=S[n]
return <main className="app center" style={{justifyContent:'space-between'}}>
<img src={s.i} alt="" style={{width:'100%',marginTop:32}}/>
<div><h1>{s.t}</h1><div className="dots" style={{marginTop:20}}>{S.map((_,i)=><i key={i} className={i===n?'on':''}/>)}</div></div>
{n<2?<button className="btn" onClick={()=>setN(n+1)}>Next</button>:<Link className="btn" href="/login">Continue</Link>}</main>}
