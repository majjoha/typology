import { five, ten } from "../Nat"
import type { NaN, Zero, Succ, One, Two, Three, Four, Five, Ten } from "../Nat"
import type {
  Increment,
  Decrement,
  Add,
  Multiply,
  Subtract,
  Divide,
} from "../Arithmetic"

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

describe("Multiply", () => {
  it("returns `Zero` when the first number is `Zero`", () => {
    const result: Multiply<Zero, Two> = "zero"
    const zero: Zero = "zero"

    expect(result).toBe(zero)
  })

  it("returns `Zero` when the second number is `Zero`", () => {
    const result: Multiply<Three, Zero> = "zero"
    const zero: Zero = "zero"

    expect(result).toBe(zero)
  })

  it("multiplies two numbers", () => {
    const result: Multiply<Four, Three> = { n: { n: { ...ten } } }
    const twelve: Succ<Succ<Ten>> = {
      n: {
        n: {
          n: {
            n: {
              n: {
                n: {
                  n: {
                    n: {
                      n: {
                        n: {
                          n: {
                            n: "zero",
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    }

    expect(result).toStrictEqual(twelve)
  })
})

describe("Subtract", () => {
  it("returns `Zero` when `Zero` is subtracted from `Zero`", () => {
    const result: Subtract<Zero, Zero> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })

  it("returns `One` when subtracting 3 from 4", () => {
    const result: Subtract<Four, Three> = { n: "zero" }
    const one: { n: "zero" } = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("does not return values below `Zero`", () => {
    const result: Subtract<One, Five> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })
})

describe("Divide", () => {
  it("returns two when dividing ten with five", () => {
    const result: Divide<Ten, Five> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toEqual(two)
  })

  it("returns five when dividing five with one", () => {
    const result: Divide<Five, One> = { n: { n: { n: { n: { n: "zero" } } } } }
    const five: Five = { n: { n: { n: { n: { n: "zero" } } } } }

    expect(result).toEqual(five)
  })

  it("returns `NaN` when dividing zero with zero", () => {
    const result: Divide<Zero, Zero> = "NaN"
    const nan: NaN = "NaN"

    expect(result).toEqual(nan)
  })

  it("returns one when dividing five with three", () => {
    const result: Divide<Five, Three> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toEqual(one)
  })
})
