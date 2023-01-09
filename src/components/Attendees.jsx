import { useEffect, useId, useState } from 'react'
import useSWR from 'swr'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function ImageClipPaths({ id, ...props }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export function Attendees() {
  const id = useId()
  const [tabOrientation, setTabOrientation] = useState('horizontal')
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: attendees } = useSWR(
    'https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/attendees.json',
    fetcher
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Attendees
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            At an unconference, anyone can be a speaker.
          </p>
        </div>
        <div
          className="mt-14 grid grid-cols-1 items-start gap-y-8 gap-x-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 top-2 left-0.5 hidden w-px bg-slate-200 lg:block" />
          </div>
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3 [&:not(:focus-visible)]:focus:outline-none">
              {attendees &&
                shuffle(attendees)
                  .filter((a) => a.image)
                  .map((a, i) => (
                    <div key={i}>
                      <div className="group relative h-[17.5rem] transform overflow-hidden rounded-4xl">
                        <div
                          className={clsx(
                            'absolute top-0 left-0 right-4 bottom-6 rounded-4xl border transition duration-300 group-hover:scale-95 xl:right-6',
                            [
                              'border-blue-300',
                              'border-indigo-300',
                              'border-sky-300',
                            ][i % 3]
                          )}
                        />
                        <div
                          className="absolute inset-0 bg-indigo-50"
                          style={{ clipPath: `url(#${id}-${i % 3})` }}
                        >
                          <img
                            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-110"
                            src={a.image}
                            alt=""
                            priority
                            sizes="(min-width: 1280px) 17.5rem, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      </div>
                      <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                        {a.name}
                      </h3>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
