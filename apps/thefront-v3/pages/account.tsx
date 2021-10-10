/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import Account from "@watheia/front.views.Account"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const AccountPage = (): JSX.Element => {
  return <WithLayout component={Account} layout={Main} />
}

export default AccountPage
