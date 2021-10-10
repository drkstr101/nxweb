/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import PasswordResetCover from "@watheia/front.views.PasswordResetCover"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const PasswordResetCoverPage = (): JSX.Element => {
  return <WithLayout component={PasswordResetCover} layout={Minimal} />
}

export default PasswordResetCoverPage
