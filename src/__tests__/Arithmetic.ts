import type { Succ, Zero } from "../Nat"
import type { Increment, Decrement, Add } from "../Arithmetic"

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

describe("Decrement", () => {
  it("decrements a number", () => {
    const result: Decrement<Succ<Zero>> = "zero"
    const zero: Zero = "zero"

    expect(result).toStrictEqual(zero)
  })

  it("decrements nested `Decrement`s", () => {
    const result: Decrement<Decrement<Succ<Succ<Succ<Succ<Zero>>>>>> = {
      n: {
        n: "zero",
      },
    }
    const two: Succ<Succ<Zero>> = { n: { n: "zero" } }

    expect(result).toStrictEqual(two)
  })
})

describe("Add", () => {
  it("returns `Zero` when adding two `Zero`s", () => {
    const result: Add<Zero, Zero> = "zero"
    const zero: Zero = "zero"

    expect(result).toBe(zero)
  })

  it("returns five when adding two and three", () => {
    const result: Add<Succ<Succ<Zero>>, Succ<Succ<Succ<Zero>>>> = {
      n: {
        n: {
          n: {
            n: {
              n: "zero",
            },
          },
        },
      },
    }
    const five: Succ<Succ<Succ<Succ<Succ<Zero>>>>> = {
      n: {
        n: {
          n: {
            n: {
              n: "zero",
            },
          },
        },
      },
    }

    expect(result).toStrictEqual(five)
  })

  it("returns 2 when adding 2 and `Zero`", () => {
    const result: Add<Zero, Succ<Succ<Zero>>> = {
      n: {
        n: "zero",
      },
    }
    const two: Succ<Succ<Zero>> = {
      n: {
        n: "zero",
      },
    }

    expect(result).toStrictEqual(two)
  })
})
