import { render } from "@testing-library/react"

import ScrollTop from "./ScrollTop"

describe("atoms/ScrollTop", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ScrollTop />)
    expect(baseElement).toBeTruthy()
  })
})
