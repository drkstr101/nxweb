/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import PortfolioPage from "@watheia/front.views.PortfolioPage"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const PortfolioViewPage = (): JSX.Element => {
  return <WithLayout component={PortfolioPage} layout={Main} />
}

export default PortfolioViewPage
