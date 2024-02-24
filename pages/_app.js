import '@/styles/globals.css'
import Navbar from '../pages/Navbar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics />
    </>
  )
}
