import { render } from "@testing-library/react"

import TypedText from "./TypedText"

describe("molecules/TypedText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<TypedText typedProps={{}} />)
    expect(baseElement).toBeTruthy()
  })
})
