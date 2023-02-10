import Head from 'next/head'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Attendees } from '@/components/Attendees'
import { Schedule } from '@/components/Schedule'
import { InlineRegister } from '@/components/InlineRegister'
import { Footer } from '@/components/Footer'

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
      </Head>
      <Header />
      <main>
        <Hero attendees={attendees} />
        <Schedule />
        {/* <Attendees /> */}
        <InlineRegister />
        <Footer />
      </main>
    </>
  )
}
