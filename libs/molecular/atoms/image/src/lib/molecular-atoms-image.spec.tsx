import { render } from "@testing-library/react"

import MolecularAtomsImage from "./molecular-atoms-image"

describe("MolecularAtomsImage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsImage />)
    expect(baseElement).toBeTruthy()
  })
})
