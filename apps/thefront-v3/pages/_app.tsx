/**
 * Caution: Consider this file when using NextJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or react-scripts version
 */
import React from "react"
import Head from "next/head"

import "@watheia/theme.styles.global/wa-medium.css"
import "@watheia/theme.styles.global/wa-light.css"
import "@watheia/theme.styles.global/index.css"

import "react-lazy-load-image-component/src/effects/opacity.css"
import "leaflet/dist/leaflet.css"
import "../../../node_modules/swiper/swiper.min.css"
import "aos/dist/aos.css"

interface AppProps {
  Component: any
  pageProps: any
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}
