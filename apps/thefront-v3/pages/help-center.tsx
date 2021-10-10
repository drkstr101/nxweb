/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import HelpCenter from "@watheia/front.views.HelpCenter"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const HelpCenterPage = (): JSX.Element => {
  return <WithLayout component={HelpCenter} layout={Main} />
}

export default HelpCenterPage
