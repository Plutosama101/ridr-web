'use client'
import {useState} from 'react';import {VEHICLES,naira} from '../../lib/vehicles'
export default function V(){const[id,setId]=useState('economy')
return <main className="app"><div className="map"/><div className="sheet"><b>Trip options</b>
{VEHICLES.map(v=><button key={v.id} className={'card'+(id===v.id?' on':'')} onClick={()=>setId(v.id)}>
<span><b>{v.name}</b><br/><small>{v.blurb}</small></span><span><s>{naira(v.was)}</s><b>{naira(v.price)}</b></span></button>)}
<button className="btn">Submit request</button></div></main>}
