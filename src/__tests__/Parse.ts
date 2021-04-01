import type { ToString } from "../Parse"
import type { Zero, One, Five } from "../Nat"

describe("ToString", () => {
  it("converts 0 to `zero`", () => {
    const result: ToString<Zero> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })

  it("converts 1 to `{ n: zero }`", () => {
    const result: ToString<One> = "{ n: zero }"
    const one: "{ n: zero }" = "{ n: zero }"

    expect(result).toEqual(one)
  })

  it("converts numbers above 1", () => {
    const result: ToString<Five> = "{ n: { n: { n: { n: { n: zero } } } } }"
    const five: "{ n: { n: { n: { n: { n: zero } } } } }" =
      "{ n: { n: { n: { n: { n: zero } } } } }"

    expect(result).toEqual(five)
  })
})
