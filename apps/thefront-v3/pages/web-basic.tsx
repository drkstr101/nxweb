/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import WebBasic from "@watheia/front.views.WebBasic"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const WebBasicPage = (): JSX.Element => {
  return <WithLayout component={WebBasic} layout={Main} />
}

export default WebBasicPage
