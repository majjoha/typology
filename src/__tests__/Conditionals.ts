import type { Zero, Succ } from "../Nat"
import type { True, False } from "../Bool"
import type { IsZero } from "../Conditionals"

describe("IsZero", () => {
  it("returns `True` if the given value is `Zero`", () => {
    const result: IsZero<Zero> = true
    const isZero: True = true

    expect(result).toEqual(isZero)
  })

  it("returns `False` if the given value is not `Zero`", () => {
    const result: IsZero<Succ<Zero>> = false
    const isNotZero: False = false

    expect(result).toEqual(isNotZero)
  })
})
