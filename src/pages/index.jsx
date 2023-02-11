import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Schedule } from '@/components/Schedule'
import { Polis } from '@/components/Polis'

const EventDataUrl =
  'https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/attendees.json'

export async function getServerSideProps() {
  const res = await fetch(EventDataUrl)
  const data = await res.json()
  return { props: { attendees: data } }
}

export default function Home({ attendees }) {
  return (
    <>
      <Head>
        <title>DecentSocial</title>
        <meta
          name="description"
          content="We're not asking for a perfect social web. We're just want something  decent."
        />
        <script async src="https://pol.is/embed.js"></script>
      </Head>
      <Header />
      <main className="bg-witch-white">
        <Hero />
        <Schedule />
        <Polis />
      </main>
    </>
  )
}
