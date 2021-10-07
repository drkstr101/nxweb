import { render } from "@testing-library/react"

import BigdataAnalytics from "../../pages/solutions/bigdata-analytics"

describe("BigdataAnalytics", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<BigdataAnalytics />)
    expect(baseElement).toBeTruthy()
  })
})
