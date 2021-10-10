/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Ecommerce from "@watheia/front.views.Ecommerce"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const EcommercePage = (): JSX.Element => {
  return <WithLayout component={Ecommerce} layout={Main} />
}

export default EcommercePage
