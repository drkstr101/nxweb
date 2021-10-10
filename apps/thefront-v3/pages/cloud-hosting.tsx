/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import CloudHosting from "@watheia/front.views.CloudHosting"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CloudHostingPage = (): JSX.Element => {
  return <WithLayout component={CloudHosting} layout={Main} />
}

export default CloudHostingPage
