/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import NotFoundCover from "@watheia/front.views.NotFoundCover"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const FourOFourPage = (): JSX.Element => {
  return <WithLayout component={NotFoundCover} layout={Minimal} />
}

export default FourOFourPage
