/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Service from "@watheia/front.views.Service"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const ServicePage = (): JSX.Element => {
  return <WithLayout component={Service} layout={Main} />
}

export default ServicePage
