/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import ContactPageSidebarMap from "@watheia/front.views.ContactPageSidebarMap"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const ContactWithSidebarMapPage = (): JSX.Element => {
  return <WithLayout component={ContactPageSidebarMap} layout={Main} />
}

export default ContactWithSidebarMapPage
