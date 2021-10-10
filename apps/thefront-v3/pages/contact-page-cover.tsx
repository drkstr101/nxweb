/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import ContactPageCover from "@watheia/front.views.ContactPageCover"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const ContactCoverPage = (): JSX.Element => {
  return <WithLayout component={ContactPageCover} layout={Main} />
}

export default ContactCoverPage
