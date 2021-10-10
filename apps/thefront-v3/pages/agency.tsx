/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Agency from "@watheia/front.views.Agency"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const AgencyPage = (): JSX.Element => {
  return <WithLayout component={Agency} layout={Main} />
}

export default AgencyPage
