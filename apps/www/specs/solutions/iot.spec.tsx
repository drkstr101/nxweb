import { render } from "@testing-library/react"

import Iot from "../../pages/solutions/iot"

describe("Iot", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Iot />)
    expect(baseElement).toBeTruthy()
  })
})
