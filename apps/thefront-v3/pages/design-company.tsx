import React from "react"
import DesignCompany from "@watheia/front.views.DesignCompany"
import Main from "@watheia/front.layouts.Main"
import WithLayout from "@watheia/front.layouts.PageLayout"

const DesignCompanyPage = (): JSX.Element => {
  return <WithLayout component={DesignCompany} layout={Main} />
}

export default DesignCompanyPage
