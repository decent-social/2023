import { Container } from '@/components/Container'

export function Polis() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 overflow-hidden bg-indigo-50">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h3 className="font-display text-3xl font-bold tracking-tighter text-witch-purple">
            You can also participate asyncronously using{' '}
            <a href="https://pol.is/5iw6kcubty">Polis</a>
          </h3>
          <div className="polis pt-12" data-conversation_id="5iw6kcubty"></div>
        </div>
      </Container>
    </div>
  )
}
