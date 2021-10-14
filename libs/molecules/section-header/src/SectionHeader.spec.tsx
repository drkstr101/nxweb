import { render } from "@testing-library/react"

import SectionHeader from "./SectionHeader"

describe("MolecularMoleculesSectionHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionHeader title="Section Header" />)
    expect(baseElement).toBeTruthy()
  })
})
