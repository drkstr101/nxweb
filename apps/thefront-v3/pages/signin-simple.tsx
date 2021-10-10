/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import SigninSimple from "@watheia/front.views.SigninSimple"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const SigninSimplePage = (): JSX.Element => {
  return <WithLayout component={SigninSimple} layout={Minimal} />
}

export default SigninSimplePage
