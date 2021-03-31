import { ten } from "../../Nat"
import type { Factorial } from "../../algorithms/Factorial"
import type { Zero, Succ, One, Two, Three, Four, Six, Ten } from "../../Nat"

describe("Factorial", () => {
  it("returns 1 for 0!", () => {
    const result: Factorial<Zero> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("returns 1 for 1!", () => {
    const result: Factorial<One> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("returns 2 for 2!", () => {
    const result: Factorial<Two> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toStrictEqual(two)
  })

  it("returns 6 for 3!", () => {
    const result: Factorial<Three> = {
      n: { n: { n: { n: { n: { n: "zero" } } } } },
    }
    const six: Six = { n: { n: { n: { n: { n: { n: "zero" } } } } } }

    expect(result).toStrictEqual(six)
  })

  it("returns 24 for 4!", () => {
    const result: Factorial<Four> = {
      n: {
        n: {
          n: {
            n: {
              n: {
                n: {
                  n: {
                    n: { n: { n: { n: { n: { n: { n: { ...ten } } } } } } },
                  },
                },
              },
            },
          },
        },
      },
    }
    const twentyFour: Succ<
      Succ<
        Succ<
          Succ<Succ<Succ<Succ<Succ<Succ<Succ<Succ<Succ<Succ<Succ<Ten>>>>>>>>>>>
        >
      >
    > = {
      n: {
        n: {
          n: {
            n: {
              n: {
                n: {
                  n: {
                    n: { n: { n: { n: { n: { n: { n: { ...ten } } } } } } },
                  },
                },
              },
            },
          },
        },
      },
    }

    expect(result).toStrictEqual(twentyFour)
  })
})
