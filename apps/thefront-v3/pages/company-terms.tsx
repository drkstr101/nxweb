/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import CompanyTerms from "@watheia/front.views.CompanyTerms"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const CompanyTermsPage = (): JSX.Element => {
  return <WithLayout component={CompanyTerms} layout={Main} />
}

export default CompanyTermsPage
