import { render } from "@testing-library/react"

import Icon from "./Icon"

describe("MolecularAtomsIcon", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Icon fontIconClass="email" />)
    expect(baseElement).toBeTruthy()
  })
})
