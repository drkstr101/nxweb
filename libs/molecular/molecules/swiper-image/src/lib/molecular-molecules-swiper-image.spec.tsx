import { render } from "@testing-library/react"

import MolecularMoleculesSwiperImage from "./molecular-molecules-swiper-image"

describe("MolecularMoleculesSwiperImage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesSwiperImage />)
    expect(baseElement).toBeTruthy()
  })
})
