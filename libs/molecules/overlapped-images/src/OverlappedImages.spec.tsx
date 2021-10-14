import { render } from "@testing-library/react"

import OverlappedImages from "./OverlappedImages"

describe("molecules/OverlappedImages", () => {
  it("should render successfully", () => {
    const image = { src: "#" }
    const { baseElement } = render(
      <OverlappedImages image1={image} image2={image} image3={image} />
    )
    expect(baseElement).toBeTruthy()
  })
})
