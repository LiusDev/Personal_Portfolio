import { Html, Head, Main, NextScript } from 'next/document'
import { MetaMessenger } from '@/components'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <MetaMessenger />
      </body>
    </Html>
  )
}
