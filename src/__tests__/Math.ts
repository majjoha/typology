import type { Max, Min } from "../Math"
import type { Two, Four, Five, Six } from "../Nat"

describe("Min", () => {
  it("returns two when comparing two and five", () => {
    const result: Min<Two, Five> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toEqual(two)
  })

  it("returns four when comparing four and four", () => {
    const result: Min<Four, Four> = { n: { n: { n: { n: "zero" } } } }
    const four: Four = { n: { n: { n: { n: "zero" } } } }

    expect(result).toEqual(four)
  })
})

describe("Max", () => {
  it("returns six when comparing four and six", () => {
    const result: Max<Four, Six> = {
      n: { n: { n: { n: { n: { n: "zero" } } } } },
    }
    const six: Six = { n: { n: { n: { n: { n: { n: "zero" } } } } } }

    expect(result).toEqual(six)
  })

  it("return two when comparing two and two", () => {
    const result: Max<Two, Two> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toEqual(two)
  })
})
