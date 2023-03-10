import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

const schedule = [
  {
    name: 'Asia + South Pacific',
    start: new Date('2023-02-11T02:00:00Z'),
    end: new Date('2023-02-11T07:00:00Z'),
    summary: '',
    timeSlots: [
      {
        name: 'Opening',
        start: new Date('2023-02-11T02:00:00Z'),
        end: new Date('2023-02-11T02:40:00Z'),
      },
      {
        name: 'Session 1',
        start: new Date('2023-02-11T02:40:00Z'),
        end: new Date('2023-02-11T03:20:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T03:20:00Z'),
        end: new Date('2023-02-11T03:30:00Z'),
      },
      {
        name: 'Session 2',
        start: new Date('2023-02-11T03:30:00Z'),
        end: new Date('2023-02-11T04:10:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T04:10:00Z'),
        end: new Date('2023-02-11T04:20:00Z'),
      },
      {
        name: 'Session 3',
        start: new Date('2023-02-11T04:20:00Z'),
        end: new Date('2023-02-11T05:00:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T05:00:00Z'),
        end: new Date('2023-02-11T05:10:00Z'),
      },
      {
        name: 'Session 4',
        start: new Date('2023-02-11T05:10:00Z'),
        end: new Date('2023-02-11T05:50:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T05:50:00Z'),
        end: new Date('2023-02-11T06:00:00Z'),
      },
      {
        name: 'Closing',
        start: new Date('2023-02-11T06:00:00Z'),
        end: new Date('2023-02-11T07:00:00Z'),
      },
    ],
  },
  {
    name: 'Africa + Europe',
    start: new Date('2023-02-11T10:00:00Z'),
    end: new Date('2023-02-11T15:00:00Z'),
    summary: '',
    timeSlots: [
      {
        name: 'Opening',
        start: new Date('2023-02-11T10:00:00Z'),
        end: new Date('2023-02-11T10:40:00Z'),
      },
      {
        name: 'Session 1',
        start: new Date('2023-02-11T10:40:00Z'),
        end: new Date('2023-02-11T11:20:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T11:20:00Z'),
        end: new Date('2023-02-11T11:30:00Z'),
      },
      {
        name: 'Session 2',
        start: new Date('2023-02-11T11:30:00Z'),
        end: new Date('2023-02-11T12:10:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T12:10:00Z'),
        end: new Date('2023-02-11T12:20:00Z'),
      },
      {
        name: 'Session 3',
        start: new Date('2023-02-11T12:20:00Z'),
        end: new Date('2023-02-11T13:00:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T13:00:00Z'),
        end: new Date('2023-02-11T13:10:00Z'),
      },
      {
        name: 'Session 4',
        start: new Date('2023-02-11T13:10:00Z'),
        end: new Date('2023-02-11T13:50:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T13:50:00Z'),
        end: new Date('2023-02-11T14:00:00Z'),
      },
      {
        name: 'Closing',
        start: new Date('2023-02-11T14:00:00Z'),
        end: new Date('2023-02-11T15:00:00Z'),
      },
    ],
  },
  {
    name: 'Americas',
    start: new Date('2023-02-11T18:00:00Z'),
    end: new Date('2023-02-11T23:00:00Z'),
    summary: '',
    timeSlots: [
      {
        name: 'Opening',
        start: new Date('2023-02-11T18:00:00Z'),
        end: new Date('2023-02-11T18:40:00Z'),
      },
      {
        name: 'Session 1',
        start: new Date('2023-02-11T18:40:00Z'),
        end: new Date('2023-02-11T19:20:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T19:20:00Z'),
        end: new Date('2023-02-11T19:30:00Z'),
      },
      {
        name: 'Session 2',
        start: new Date('2023-02-11T19:30:00Z'),
        end: new Date('2023-02-11T20:10:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T20:10:00Z'),
        end: new Date('2023-02-11T20:20:00Z'),
      },
      {
        name: 'Session 3',
        start: new Date('2023-02-11T20:20:00Z'),
        end: new Date('2023-02-11T21:00:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T21:00:00Z'),
        end: new Date('2023-02-11T21:10:00Z'),
      },
      {
        name: 'Session 4',
        start: new Date('2023-02-11T21:10:00Z'),
        end: new Date('2023-02-11T21:50:00Z'),
      },
      {
        name: 'Break',
        start: new Date('2023-02-11T21:50:00Z'),
        end: new Date('2023-02-11T22:00:00Z'),
      },
      {
        name: 'Closing',
        start: new Date('2023-02-11T22:00:00Z'),
        end: new Date('2023-02-11T23:00:00Z'),
      },
    ],
  },
]

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pl-4 pb-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) =>
          schedule.map((region, i) => (
            <div
              key={region.start.toISOString()}
              className={clsx(
                'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                i !== selectedIndex && 'opacity-70'
              )}
            >
              <RegionSummary
                region={{
                  ...region,
                  tabbed: true,
                  startDate: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      <p>
                        <time dateTime={region.start.toISOString()}>
                          {`${region.start.toLocaleDateString([], {
                            month: 'long',
                            day: 'numeric',
                          })} (${
                            Intl.DateTimeFormat().resolvedOptions().timeZone
                          })`}
                        </time>
                      </p>
                      <p>
                        <time dateTime={region.start.toISOString()}>
                          {`${region.start.toLocaleTimeString([], {
                            hour: 'numeric',
                            minute: 'numeric',
                          })}`}
                        </time>
                        {' - '}
                        <time dateTime={region.end.toISOString()}>
                          {`${region.end.toLocaleTimeString([], {
                            hour: 'numeric',
                            minute: 'numeric',
                          })}`}
                        </time>
                      </p>
                    </Tab>
                  ),
                }}
              />
            </div>
          ))
        }
      </Tab.List>
      <Tab.Panels>
        {schedule.map((region, i) => (
          <Tab.Panel
            key={i}
            className="[&:not(:focus-visible)]:focus:outline-none"
          >
            <TimeSlots region={region} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}

function RegionSummary({ region }) {
  return (
    <>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        {region.name}
      </h3>
      <p className="text-bold mt-1.5 font-bold tracking-tight text-blue-900">
        {region.startDate}
      </p>
    </>
  )
}

function TimeSlots({ region, className }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 py-14 px-10 text-center shadow-xl shadow-blue-900/5 backdrop-blur'
      )}
    >
      {region.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.start.toISOString()}
          aria-label={`${
            timeSlot.name
          } at ${timeSlot.start.toLocaleString()} (${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }) - ${timeSlot.end.toLocaleString()} (${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          })`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={timeSlot.start.toISOString()}>
              {`Start: ${timeSlot.start.toLocaleTimeString([], {
                hour: 'numeric',
                minute: 'numeric',
              })} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}
            </time>
          </p>
          <p className="mt-1 font-mono text-sm text-slate-500">
            <time dateTime={timeSlot.end.toISOString()}>
              {`  End: ${timeSlot.end.toLocaleTimeString([], {
                hour: 'numeric',
                minute: 'numeric',
              })} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`}
            </time>
          </p>
        </li>
      ))}
    </ol>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {schedule.map((region) => (
        <section key={region.start.toISOString()}>
          <RegionSummary
            region={{
              ...region,
              startDate: (
                <>
                  <p>
                    <time dateTime={region.start.toISOString()}>
                      {`${region.start.toLocaleDateString([], {
                        month: 'long',
                        day: 'numeric',
                      })} (${
                        Intl.DateTimeFormat().resolvedOptions().timeZone
                      })`}
                    </time>
                  </p>
                  <p>
                    <time dateTime={region.start.toISOString()}>
                      {`${region.start.toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                      })}`}
                    </time>
                    {' - '}
                    <time dateTime={region.end.toISOString()}>
                      {`${region.end.toLocaleTimeString([], {
                        hour: 'numeric',
                        minute: 'numeric',
                      })}`}
                    </time>
                  </p>
                </>
              ),
            }}
          />
          <TimeSlots region={region} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <div className="relative mt-14 sm:mt-24">
        <div className="absolute inset-x-0 -top-40 -bottom-32 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-full top-0 -translate-x-1/2 sm:left-1/2 sm:translate-y-[-15%] sm:translate-x-[-20%] md:translate-x-0 lg:translate-x-[5%] lg:translate-y-[4%] xl:translate-y-[-8%] xl:translate-x-[27%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-witch-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-witch-white" />
        </div>
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}
