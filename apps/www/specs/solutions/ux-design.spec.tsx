import { render } from "@testing-library/react"

import UxDesign from "../../pages/solutions/ux-design"

describe("UxDesign", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UxDesign />)
    expect(baseElement).toBeTruthy()
  })
})
