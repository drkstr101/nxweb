/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Rental from "@watheia/front.views.Rental"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const RentalPage = (): JSX.Element => {
  return <WithLayout component={Rental} layout={Main} />
}

export default RentalPage
