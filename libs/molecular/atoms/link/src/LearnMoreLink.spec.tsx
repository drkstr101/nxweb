import { render } from "@testing-library/react"

import MolecularAtomsLink from "./molecular-atoms-link"

describe("MolecularAtomsLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsLink />)
    expect(baseElement).toBeTruthy()
  })
})
