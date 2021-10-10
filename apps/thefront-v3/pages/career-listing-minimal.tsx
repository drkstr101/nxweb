/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import CareerListingMinimal from "@watheia/front.views.CareerListingMinimal"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CareerListingMinimalPage = (): JSX.Element => {
  return <WithLayout component={CareerListingMinimal} layout={Main} />
}

export default CareerListingMinimalPage
