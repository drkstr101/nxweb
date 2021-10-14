import { render } from "@testing-library/react"

import CountUpNumber from "./CountUpNumber"

describe("molecules/CountUpNumber", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CountUpNumber label="Label" end={9} />)
    expect(baseElement).toBeTruthy()
  })
})
