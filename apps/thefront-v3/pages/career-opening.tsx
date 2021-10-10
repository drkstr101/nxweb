/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import CareerOpening from "@watheia/front.views.CareerOpening"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CareerOpeningPage = (): JSX.Element => {
  return <WithLayout component={CareerOpening} layout={Main} />
}

export default CareerOpeningPage
