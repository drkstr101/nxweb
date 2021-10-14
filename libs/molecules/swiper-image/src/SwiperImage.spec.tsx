import { render } from "@testing-library/react"

import SwiperImage from "./SwiperImage"

describe("molecules/SwiperImage", () => {
  it("should render successfully", () => {
    const items = [{ src: "https://cdn.watheia.org/assets/icon.png" }]
    const { baseElement } = render(<SwiperImage items={items} />)
    expect(baseElement).toBeTruthy()
  })
})
