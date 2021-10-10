/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import SigninCover from "@watheia/front.views.SigninCover"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const SigninCoverPage = (): JSX.Element => {
  return <WithLayout component={SigninCover} layout={Minimal} />
}

export default SigninCoverPage
