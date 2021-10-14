import { render } from "@testing-library/react"

import IconText from "./IconText"

describe("atoms/IconText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<IconText fontIconClass="email" title="Emaiil" />)
    expect(baseElement).toBeTruthy()
  })
})
