import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Attendees } from '@/components/Attendees'
import { Schedule } from '@/components/Schedule'
import { InlineRegister } from '@/components/InlineRegister'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          DecentSocial - A homegrown conference for the builders of the
          decentralized social web.
        </title>
        <meta
          name="description"
          content="At DecentSocail you'll be able to connect with others the global community building the social web, learning from different aproaches and tackling the complex challenges of the decentralied web."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Schedule />
        <Attendees />
        <InlineRegister />
        <Footer />
      </main>
    </>
  )
}
