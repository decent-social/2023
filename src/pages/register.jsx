import { useEffect } from 'react'

export default function Redirect() {
  useEffect(() => {
    window.location.assign(
      'https://opencollective.com/decentsocial/events/decentsocial-conference-8c7e0a05/contribute/decentsocial-2023-49790'
    )
  })
  return <></>
}
