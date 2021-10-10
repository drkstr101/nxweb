import React from "react"
import ServerError from "@watheia/front.views.ServerError"
import Minimal from "@watheia/front.layouts.Minimal"
import WithLayout from "@watheia/front.layouts.PageLayout"

const ErrorPage = (): JSX.Element => {
  return <WithLayout component={ServerError} layout={Minimal} />
}

export default ErrorPage
