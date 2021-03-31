import type { Zero, Succ, Two, Three, Four, Six } from "../Nat"
import type { True, False } from "../Bool"
import type {
  IsZero,
  IfElse,
  Equals,
  LessThan,
  LessThanOrEqual,
  GreaterThan,
  Not,
  And,
  Or,
  Xor,
} from "../Conditionals"

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

describe("LessThan", () => {
  it("returns `False` if the first number is larger than the second", () => {
    const result: LessThan<Six, Four> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if the two numbers are equal", () => {
    const result: LessThan<Two, Two> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if both numbers are `Zero`", () => {
    const result: LessThan<Zero, Zero> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `True` if the first number is smaller than the second", () => {
    const result: LessThan<Two, Three> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })
})

describe("LessThanOrEqual", () => {
  it("returns `False` if the first number is larger than the second", () => {
    const result: LessThanOrEqual<Six, Four> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `True` if the two numbers are equal", () => {
    const result: LessThanOrEqual<Two, Two> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `True` if both numbers are `Zero`", () => {
    const result: LessThanOrEqual<Zero, Zero> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `True` if the first number is smaller than the second", () => {
    const result: LessThanOrEqual<Two, Three> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })
})

describe("GreaterThan", () => {
  it("returns `True` if the first number is larger than the second", () => {
    const result: GreaterThan<Six, Four> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `False` if the two numbers are equal", () => {
    const result: GreaterThan<Six, Six> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if both numbers are `Zero`", () => {
    const result: GreaterThan<Zero, Zero> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if the first number is smaller than the second", () => {
    const result: GreaterThan<Four, Six> = false
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

describe("And", () => {
  it("returns `True` if both inputs are `True`", () => {
    const result: And<True, True> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `False` if only one of the inputs is `True`", () => {
    const result: And<True, False> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if none of the inputs are `True`", () => {
    const result: And<False, False> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })
})

describe("Or", () => {
  it("returns `True` if one of the inputs is `True`", () => {
    const result: Or<True, False> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })

  it("returns `False` if none of the inputs are `True`", () => {
    const result: Or<False, False> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })
})

describe("Xor", () => {
  it("returns `False` if both inputs are `False`", () => {
    const result: Xor<False, False> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `False` if both inputs are `True`", () => {
    const result: Xor<True, True> = false
    const falsey: False = false

    expect(result).toEqual(falsey)
  })

  it("returns `True` if the two inputs differ", () => {
    const result: Xor<True, False> = true
    const truthy: True = true

    expect(result).toEqual(truthy)
  })
})
