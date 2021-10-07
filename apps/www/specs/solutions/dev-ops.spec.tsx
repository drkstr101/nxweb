import { render } from "@testing-library/react"

import DevOps from "../../pages/solutions/dev-ops"

describe("DevOps", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DevOps />)
    expect(baseElement).toBeTruthy()
  })
})
