/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Logistics from "@watheia/front.views.Logistics"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const LogisticsPage = (): JSX.Element => {
  return <WithLayout component={Logistics} layout={Main} />
}

export default LogisticsPage
