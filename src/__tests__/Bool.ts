import type { True, False } from "../Bool"

describe("True", () => {
  it("matches true", () => {
    const result: True = true

    expect(result).toBe(true)
  })
})

describe("False", () => {
  it("matches false", () => {
    const result: False = false

    expect(result).toBe(false)
  })
})
