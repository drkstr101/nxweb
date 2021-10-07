import { render } from "@testing-library/react"

import MachineLearning from "../../pages/solutions/machine-learning"

describe("MachineLearning", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MachineLearning />)
    expect(baseElement).toBeTruthy()
  })
})
