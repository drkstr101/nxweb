/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Enterprise from "@watheia/front.views.Enterprise"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const EnterprisePage = (): JSX.Element => {
  return <WithLayout component={Enterprise} layout={Main} />
}

export default EnterprisePage
