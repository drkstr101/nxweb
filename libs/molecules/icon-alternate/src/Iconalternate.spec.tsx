import { render } from "@testing-library/react"

import IconAlternate from "./IconAlternate"

describe("IconAlternate", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<IconAlternate fontIconClass="email" />)
    expect(baseElement).toBeTruthy()
  })
})
