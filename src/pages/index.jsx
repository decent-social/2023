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
          content="DecentSocial is a free digital unconference on Feb 11th for the builders of the decentralized social web. Whether you're an engineer working on protocols, or an organizer building community, this conference is for you."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Schedule />
        {/* <Attendees /> */}
        <InlineRegister />
        <Footer />
      </main>
    </>
  )
}
