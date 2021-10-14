import { render } from "@testing-library/react"

import DarkModeToggler from "./DarkModeToggler"

describe("atoms/DarkModeToggler", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DarkModeToggler onClick={() => { return void 0 }} />)
    expect(baseElement).toBeTruthy()
  })
})
