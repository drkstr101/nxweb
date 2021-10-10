/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import HelpCenterArticle from "@watheia/front.views.HelpCenterArticle"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const HelpCenterArticlePage = (): JSX.Element => {
  return <WithLayout component={HelpCenterArticle} layout={Main} />
}

export default HelpCenterArticlePage
