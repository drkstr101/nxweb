import { render } from "@testing-library/react"

import Image from "./Image"

describe("atoms/Image", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Image src="https://cdn.watheia.org/assets/icon.png" />)
    expect(baseElement).toBeTruthy()
  })
})
