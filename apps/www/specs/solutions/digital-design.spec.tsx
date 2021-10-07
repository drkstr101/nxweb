import { render } from "@testing-library/react"

import DigitalDesign from "../../pages/solutions/digital-design"

describe("DigitalDesign", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DigitalDesign />)
    expect(baseElement).toBeTruthy()
  })
})
