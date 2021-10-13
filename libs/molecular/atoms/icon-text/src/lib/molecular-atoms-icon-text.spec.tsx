import { render } from "@testing-library/react"

import MolecularAtomsIconText from "./molecular-atoms-icon-text"

describe("MolecularAtomsIconText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsIconText />)
    expect(baseElement).toBeTruthy()
  })
})
