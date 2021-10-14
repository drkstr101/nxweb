import { render } from "@testing-library/react"

import MolecularMoleculesTypedText from "./molecular-molecules-typed-text"

describe("MolecularMoleculesTypedText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesTypedText />)
    expect(baseElement).toBeTruthy()
  })
})
