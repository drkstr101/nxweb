import { render } from "@testing-library/react"

import DescriptionCta from "./DescriptionCta"

describe("MolecularMoleculesDescriptionCta", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <DescriptionCta title="Tiltle" primaryCta={<button>CTA</button>} />
    )
    expect(baseElement).toBeTruthy()
  })
})
