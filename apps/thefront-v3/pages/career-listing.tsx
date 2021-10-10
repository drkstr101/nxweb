/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import CareerListing from "@watheia/front.views.CareerListing"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CareerListingPage = (): JSX.Element => {
  return <WithLayout component={CareerListing} layout={Main} />
}

export default CareerListingPage
