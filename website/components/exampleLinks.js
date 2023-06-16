import React from 'react'
import Link from 'next/link'

const ExampleLinks = () => (
  <ul>
    <li>
      <Link href="/helpscout">
        <a>Help Scout</a>
      </Link>
    </li>
    <li>
      <Link href="/zendesk">
        <a>Zendesk</a>
      </Link>
    </li>
  </ul>
)

export default ExampleLinks
