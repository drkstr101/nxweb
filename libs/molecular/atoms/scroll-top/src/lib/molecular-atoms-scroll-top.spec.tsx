import { render } from "@testing-library/react"

import MolecularAtomsScrollTop from "./molecular-atoms-scroll-top"

describe("MolecularAtomsScrollTop", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularAtomsScrollTop />)
    expect(baseElement).toBeTruthy()
  })
})
