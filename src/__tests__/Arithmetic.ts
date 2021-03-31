import type { Succ, Zero } from "../Nat"
import type { Increment } from "../Arithmetic"

describe("Increment", () => {
  it("increments a number", () => {
    const result: Increment<Succ<Zero>> = { n: { n: "zero" } }
    const two: Succ<Succ<Zero>> = { n: { n: "zero" } }

    expect(result).toStrictEqual(two)
  })

  it("increments nested `Increment`s", () => {
    const result: Increment<Increment<Increment<Zero>>> = {
      n: { n: { n: "zero" } },
    }
    const three: Succ<Succ<Succ<Zero>>> = { n: { n: { n: "zero" } } }

    expect(result).toStrictEqual(three)
  })
})
