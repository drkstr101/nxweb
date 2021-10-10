import { AppProps } from "next/app"
import Head from "next/head"

import "@watheia/theme.styles.global/wa-medium.css"
import "@watheia/theme.styles.global/wa-light.css"
import "@watheia/theme.styles.global/index.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watheia Labs</title>
      </Head>
      <div className="wa--light wa--medium">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default CustomApp
