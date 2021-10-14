import { render } from "@testing-library/react"

import SwiperNumber from "./SwiperNumber"

describe("molecules/SwiperNumber", () => {
  it("should render successfully", () => {
    const items = [{ number: 9, title: "Title" }]
    const { baseElement } = render(<SwiperNumber items={items} />)
    expect(baseElement).toBeTruthy()
  })
})
