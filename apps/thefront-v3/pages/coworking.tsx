/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Coworking from "@watheia/front.views.Coworking"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CoworkingPage = (): JSX.Element => {
  return <WithLayout component={Coworking} layout={Main} />
}

export default CoworkingPage
