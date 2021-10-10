/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Home from "@watheia/front.views.Home"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const HomePage = (): JSX.Element => {
  return <WithLayout component={Home} layout={Main} />
}

export default HomePage
