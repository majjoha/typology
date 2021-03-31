import type { Zero, Succ } from "../Nat"
import type { True, False } from "../Bool"
import type { IsZero, IfElse, Equals, Not } from "../Conditionals"

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

describe("IfElse", () => {
  it("returns `T` if condition is `True`", () => {
    const result: IfElse<True, "foo", never> = "foo"
    const foo: "foo" = "foo"

    expect(result).toEqual(foo)
  })

  it("returns `F` if condition is `False`", () => {
    const result: IfElse<False, never, "bar"> = "bar"
    const bar: "bar" = "bar"

    expect(result).toEqual(bar)
  })
})

describe("Equals", () => {
  it("returns `True` if two types are `Zero`", () => {
    const result: Equals<Zero, Zero> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `True` if two types are `Succ<Succ<Zero>>`", () => {
    const result: Equals<Succ<Succ<Zero>>, Succ<Succ<Zero>>> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `False` if two types are not `Zero`", () => {
    const result: Equals<Zero, Succ<Succ<Succ<Zero>>>> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if two typese are not `Succ<Zero>`", () => {
    const result: Equals<Succ<Zero>, Zero> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })
})

describe("Not", () => {
  it("returns `False` if input is `True`", () => {
    const result: Not<True> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `True` if input is `False`", () => {
    const result: Not<False> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })
})
