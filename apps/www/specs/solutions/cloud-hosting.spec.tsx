import { render } from "@testing-library/react"

import CloudHosting from "../../pages/solutions/cloud-hosting"

describe("CloudHosting", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<CloudHosting />)
    expect(baseElement).toBeTruthy()
  })
})
