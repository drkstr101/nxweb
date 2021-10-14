import { render } from "@testing-library/react"

import MolecularMoleculesSectionHeader from "./molecular-molecules-section-header"

describe("MolecularMoleculesSectionHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesSectionHeader />)
    expect(baseElement).toBeTruthy()
  })
})
