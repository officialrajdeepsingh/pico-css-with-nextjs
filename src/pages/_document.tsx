import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';
export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head/>
      <body>
        <Main />
        <NextScript />
      </body>
      <Script src="/theme.js" />
    </Html>
  )
}
