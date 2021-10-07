import { render } from "@testing-library/react"

import Corporate from "../pages/corporate"

describe("Corporate", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Corporate />)
    expect(baseElement).toBeTruthy()
  })
})
