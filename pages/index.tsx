import Link from "next/link";

export default function DecentSocialLandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-my-green via-ocean to-my-purple">
      <section className="min-h-screen relative mx-auto w-4/5 bg-white/90 shadow-2xl py-20">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              DecentSocial 2023
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div className="text-center">
            <h2>
              <a href="/register">Register now</a>
            </h2>
          </div>
          <h2>What is DecentSocial?</h2>
          <p>
            DecentSocial is an online unconference for the builders of the decentralized social web (e.g. ActivityPub, Mastodon, Goblin, Scuttlebutt, P2Panda, Earthstar).
          </p>

          <p>
            <strong>
              When:
            </strong>
            &nbsp; Feb 11th (UTC)
          </p>
          <p>
            <strong>
              Where:
            </strong>
            &nbsp; Online Video Unconference Link will be sent to registered attendees a few days before the conference.
          </p>
          <p>
            <strong>
              Cost:
            </strong>
            &nbsp; Our first priority is accessibility, so tickets are be on a "pay what you can" basis.
          </p>

          <h2>Please be decent</h2>
          <p>
            We operate using the shared guideposts of <a href="https://opencollective.com/redirect?url=https%3A%2F%2Fwww.contributor-covenant.org%2Fversion%2F2%2F1%2Fcode_of_conduct%2Fcode_of_conduct.md">The Contributor Covenant</a> and <a href="https://opencollective.com/redirect?url=https%3A%2F%2Fwww.eff.org%2Fpages%2Fevent-expectations">The EFF Event Expectations</a>. Our conference is an open and welcoming environment, and we have a zero tolerance policy for harassment.
          </p>

          <h2>Why tickets?</h2>
          <p>
            Ticket costs go directly to cover infrastructure costs of running the event (coop hosted, open source video calls). We ask everyone to register (even for a free ticket) so we can more effectively plan and scale infrastructure.
          </p>

          <h2>Become a Supporter</h2>
          <p>
            If you or an organization you're associated with would like to support our ongoing work organizing community to build a decent social web, you can contribute to <a href="https://opencollective.com/decentsocial">our OpenCollective</a>
          </p>
        </div>
      </section>
    </main>
  );
}
