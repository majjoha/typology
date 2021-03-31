import type { Fibonacci } from "../../algorithms/Fibonacci"
import type {
  Zero,
  Succ,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Ten,
} from "../../Nat"

describe("Fibonacci", () => {
  it("returns 0 for the first Fibonacci number", () => {
    const result: Fibonacci<Zero> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })

  it("returns 1 for the second Fibonacci number", () => {
    const result: Fibonacci<One> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("returns 1 for the third Fibonacci number", () => {
    const result: Fibonacci<Two> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("returns 2 for the fourth Fibonacci number", () => {
    const result: Fibonacci<Three> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toStrictEqual(two)
  })

  it("returns 3 for the fifth Fibonacci number", () => {
    const result: Fibonacci<Four> = { n: { n: { n: "zero" } } }
    const three: Three = { n: { n: { n: "zero" } } }

    expect(result).toStrictEqual(three)
  })

  it("returns 5 for the sixth Fibonacci number", () => {
    const result: Fibonacci<Five> = { n: { n: { n: { n: { n: "zero" } } } } }
    const five: Five = { n: { n: { n: { n: { n: "zero" } } } } }

    expect(result).toStrictEqual(five)
  })

  it("returns 8 for the seventh Fibonacci number", () => {
    const result: Fibonacci<Six> = {
      n: { n: { n: { n: { n: { n: { n: { n: "zero" } } } } } } },
    }
    const eight: Eight = {
      n: { n: { n: { n: { n: { n: { n: { n: "zero" } } } } } } },
    }

    expect(result).toStrictEqual(eight)
  })

  it("returns 13 for the eight Fibonacci number", () => {
    const result: Fibonacci<Seven> = {
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
      },
    }
    const thirteen: Succ<Succ<Succ<Ten>>> = {
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
      },
    }

    expect(result).toStrictEqual(thirteen)
  })
})
