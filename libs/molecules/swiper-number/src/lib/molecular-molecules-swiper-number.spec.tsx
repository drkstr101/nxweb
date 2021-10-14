import { render } from "@testing-library/react"

import MolecularMoleculesSwiperNumber from "./molecular-molecules-swiper-number"

describe("MolecularMoleculesSwiperNumber", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MolecularMoleculesSwiperNumber />)
    expect(baseElement).toBeTruthy()
  })
})
