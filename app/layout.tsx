import './globals.css'
import {Sora} from 'next/font/google'
const sora=Sora({subsets:['latin'],variable:'--font'})
export const metadata={title:'ridr',description:'Fast deliveries on demand'}
export default function L({children}:{children:React.ReactNode}){return <html lang="en" className={sora.variable}><body>{children}</body></html>}
