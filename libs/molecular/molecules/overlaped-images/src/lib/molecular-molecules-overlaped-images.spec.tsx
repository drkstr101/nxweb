import { render } from "@testing-library/react"

import MolecularMoleculesOverlapedImages from "./molecular-molecules-overlaped-images"

describe("MolecularMoleculesOverlapedImages", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesOverlapedImages />)
    expect(baseElement).toBeTruthy()
  })
})
