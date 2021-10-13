import { render } from "@testing-library/react"

import MolecularAtomsDarkModeToggler from "./molecular-atoms-dark-mode-toggler"

describe("MolecularAtomsDarkModeToggler", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsDarkModeToggler />)
    expect(baseElement).toBeTruthy()
  })
})
