import React from "react"
import { render, screen } from "@testing-library/react"
import { Button } from "./index"

test("Renders correctly", () => {
  render(<Button label="Button" />)
  expect(screen).toBeTruthy()
})
