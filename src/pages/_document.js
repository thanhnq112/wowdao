import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js" /> */}
      </body>
    </Html>
  )
}
