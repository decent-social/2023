import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import {
  ConferenceGuide,
  RegistrationSheet,
  RoomA,
  RoomB,
  RoomC,
  RoomD,
  RoomE,
  RoomF,
  RoomG,
  RoomH,
  RoomI,
  RoomJ,
  RoomK,
  RoomL,
  RoomM,
  RoomN,
  RoomO,
  RoomP,
  RoomQ,
  RoomR,
  RoomS,
  RoomT,
  RoomU,
  RoomV,
  RoomW,
  RoomX,
  RoomY,
  RoomZ,
} from './Rooms'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-witch-purple sm:text-7xl">
            Welcome!
          </h1>
          <Button
            href="https://decentsocial.meet.coop/mor-rlm-s3t-m0w"
            className="mt-5 font-display text-5xl font-bold tracking-tighter text-witch-white sm:text-7xl"
          >
            Join the Conference
          </Button>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-witch-dark-blue">
            <p>
              DecentSocial is using meet.coop to run our virtual unconference.
              In order to ensure we have encough space for our conversations,
              we&apos;ve created 26 different rooms on our video hosting
              infrastructure you can use to have unconference conversations, one
              for every letter of the English alphabet.
            </p>
            <p>
              <RoomA /> is reserved for the Opening, Closing, and the Hallway
              track. At any point if you have questions, concerns, or require a
              moderator, we encourage to pop into <RoomA /> to find a member of
              the DecentSocial team.
            </p>
            <p>
              The rest of the rooms, B-Z, are for your unconference sessions.
              Sessions can be registered on the <RegistrationSheet />, where you
              can let everyone know what Room you will be meeting in and what
              the session will be about.
            </p>
            <p>Here are the links for all the meeting rooms:</p>
            <p>
              <RoomB />
              {' // '}
              <RoomC />
              {' // '}
              <RoomD />
              {' // '}
              <RoomE />
              {' // '}
              <RoomF />
              {' // '}
              <RoomG />
              {' // '}
              <RoomH />
              {' // '}
              <RoomI />
              {' // '}
              <RoomJ />
              {' // '}
              <RoomK />
              {' // '}
              <RoomL />
              {' // '}
              <RoomM />
              {' // '}
              <RoomN />
              {' // '}
              <RoomO />
              {' // '}
              <RoomP />
              {' // '}
              <RoomQ />
              {' // '}
              <RoomR />
              {' // '}
              <RoomS />
              {' // '}
              <RoomT />
              {' // '}
              <RoomU />
              {' // '}
              <RoomV />
              {' // '}
              <RoomW />
              {' // '}
              <RoomX />
              {' // '}
              <RoomY />
              {' // '}
              <RoomZ />
            </p>
            <p>
              You can always refer to the <ConferenceGuide /> if you need more
              information.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
