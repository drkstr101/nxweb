/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Pricing from "@watheia/front.views.Pricing"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const PricingPage = (): JSX.Element => {
  return <WithLayout component={Pricing} layout={Main} />
}

export default PricingPage
