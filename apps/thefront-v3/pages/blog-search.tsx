/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import BlogSearch from "@watheia/front.views.BlogSearch"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const BlogSearchPage = (): JSX.Element => {
  return <WithLayout component={BlogSearch} layout={Main} />
}

export default BlogSearchPage
