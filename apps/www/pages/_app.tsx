import { AppProps } from "next/app"
import Head from "next/head"

import "@watheia/app.theme.tailwind-styles/dist/index.css"
import "@watheia/iron-ui.theme.styles.page/dist/index.css"

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Watheia Labs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default CustomApp
