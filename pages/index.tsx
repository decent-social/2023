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
          <p className="mt-8 text-xl text-gray-500 leading-8">
            DecentSocial is a digital unconference for the builders of the decentralized social web.
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <div className="text-center">
              <h2>
                <a href="https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/contribute/decentsocial-2023-49790">Regsiter for DecentSocial 2023</a>
              </h2>
          </div>
          <h2>Who is DecentSocial for?</h2>
          <p>
            TODO
          </p>
          <h2>How do I attend?</h2>
          <p>
            TODO
          </p>
          <h2>How much does DecentSocial cost?</h2>
          <p>
            TODO
          </p>
          <h2>How is DecentSocial funded?</h2>
          <p>
            TODO
          </p>
        </div>
      </section>
    </main>
  );
}
