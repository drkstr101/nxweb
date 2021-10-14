import { render } from "@testing-library/react"

import LearnMoreLink from "./LearnMoreLink"

describe("atoms/LearnMoreLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<LearnMoreLink title="Learn More" />)
    expect(baseElement).toBeTruthy()
  })
})
