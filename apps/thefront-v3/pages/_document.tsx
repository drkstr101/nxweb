/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"
import Script from "next/script"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-touch-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-touch-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-touch-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-chrome-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04bfbf" />
          <meta name="apple-mobile-web-app-title" content="Watheia" />
          <meta name="application-name" content="Watheia" />
          <meta name="msapplication-TileColor" content="#fafbfb" />
          <meta name="theme-color" content="#fafbfb"></meta>
          <meta
            name="description"
            content="Watheia Labs, LLC is an engineering and design agency building micro frontends for the moden web."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://cdn.watheia.org/assets/wa-card.png" />
          <meta property="og:title" content="Watheia Labs Corporate" />
          <meta
            property="og:description"
            content="Watheia Labs, LLC is an engineering and design agency building micro frontends for the moden web."
          />
          <meta property="og:url" content="https://thefront-v3.watheia.app/" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,700,700i,900,900i&amp;display=swap"
            rel="stylesheet"
          />
          <Script src="https://kit.fontawesome.com/4c273e6d43.js" crossOrigin="anonymous" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
    })

  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()]
  }
}
