/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Elearning from "@watheia/front.views.Elearning"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const ElearningPage = (): JSX.Element => {
  return <WithLayout component={Elearning} layout={Main} />
}

export default ElearningPage
