import * as React from "react"
import { render } from "@testing-library/react"
import { Example } from "./facebook.composition"

it("should render with the correct text", () => {
  const { getByTestId } = render(<Example />)
  const rendered = getByTestId("example")
  expect(rendered).toBeTruthy()
})
