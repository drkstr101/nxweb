/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import SignupCover from "@watheia/front.views.SignupCover"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const SignupCoverPage = (): JSX.Element => {
  return <WithLayout component={SignupCover} layout={Minimal} />
}

export default SignupCoverPage
