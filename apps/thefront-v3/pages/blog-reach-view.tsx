/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import BlogReachView from "@watheia/front.views.BlogReachView"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const BlogReachViewPage = (): JSX.Element => {
  return <WithLayout component={BlogReachView} layout={Main} />
}

export default BlogReachViewPage
