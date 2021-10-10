/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import AboutSideCover from "@watheia/front.views.AboutSideCover"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const AboutSideCoverPage = (): JSX.Element => {
  return <WithLayout component={AboutSideCover} layout={Main} />
}

export default AboutSideCoverPage
