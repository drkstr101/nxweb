import { render } from "@testing-library/react"

import MolecularMoleculesCountUpNumber from "./molecular-molecules-count-up-number"

describe("MolecularMoleculesCountUpNumber", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesCountUpNumber />)
    expect(baseElement).toBeTruthy()
  })
})
