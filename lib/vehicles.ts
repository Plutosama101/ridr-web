// Plain TS (no UI imports) so the future Expo app can reuse it.
export const VEHICLES=[
{id:'economy',name:'Economy',blurb:'Fast and pocket friendly',was:8500,price:6500},
{id:'business',name:'Business',blurb:'Priority pickup, premium handling',was:10000,price:7500},
{id:'van',name:'Van',blurb:'Bulky or multiple parcels',was:16000,price:13000}]
export const naira=(n:number)=>'₦'+n.toLocaleString('en-NG')
