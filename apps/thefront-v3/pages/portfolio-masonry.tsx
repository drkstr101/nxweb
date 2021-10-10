/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import PortfolioMasonry from "@watheia/front.views.PortfolioMasonry"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const PortfolioMasonryPage = (): JSX.Element => {
  return <WithLayout component={PortfolioMasonry} layout={Main} />
}

export default PortfolioMasonryPage
