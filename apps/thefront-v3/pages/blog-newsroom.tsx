/**
 * Caution: Consider this file when using NextJS or GatsbyJS
 *
 * You may delete this file and its occurrences from the project filesystem if you are using react-scripts
 */
import React from "react"
import BlogNewsroom from "@watheia/front.views.BlogNewsroom"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const BlogNewsroomPage = (): JSX.Element => {
  return <WithLayout component={BlogNewsroom} layout={Main} />
}

export default BlogNewsroomPage
