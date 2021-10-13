import { render } from "@testing-library/react"

import MolecularAtomsIcon from "./molecular-atoms-icon"

describe("MolecularAtomsIcon", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsIcon />)
    expect(baseElement).toBeTruthy()
  })
})
