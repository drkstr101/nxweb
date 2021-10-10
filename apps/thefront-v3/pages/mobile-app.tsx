/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import MobileApp from "@watheia/front.views.MobileApp"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const MobileAppPage = (): JSX.Element => {
  return <WithLayout component={MobileApp} layout={Main} />
}

export default MobileAppPage
