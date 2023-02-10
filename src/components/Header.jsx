import { Container } from '@/components/Container'
import Image from 'next/image'
import clouds from '@/images/decentsocial-clouds.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <Image
          className="content-center object-cover"
          src={clouds}
          alt=""
          priority
        />
      </Container>
    </header>
  )
}
