/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import BlogArticle from "@watheia/front.views.BlogArticle"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const BlogArticlePage = (): JSX.Element => {
  return <WithLayout component={BlogArticle} layout={Main} />
}

export default BlogArticlePage
