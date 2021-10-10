/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import PasswordResetSimple from "@watheia/front.views.PasswordResetSimple"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const PasswordResetSimplePage = (): JSX.Element => {
  return <WithLayout component={PasswordResetSimple} layout={Minimal} />
}

export default PasswordResetSimplePage
