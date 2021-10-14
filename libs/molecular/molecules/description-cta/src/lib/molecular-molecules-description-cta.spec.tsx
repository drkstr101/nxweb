import { render } from "@testing-library/react"

import MolecularMoleculesDescriptionCta from "./molecular-molecules-description-cta"

describe("MolecularMoleculesDescriptionCta", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesDescriptionCta />)
    expect(baseElement).toBeTruthy()
  })
})
