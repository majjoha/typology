import type { Zero, Succ } from "../Nat"

describe("Zero", () => {
  it("returns 'zero'", () => {
    const result: Zero = "zero"
    const zero: "zero" = "zero"

    expect(result).toEqual(zero)
  })
})

describe("Succ", () => {
  it("returns `{ n: 'zero' }` if the value is one", () => {
    const result: Succ<Zero> = { n: "zero" }
    const one: { n: "zero" } = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("returns a nested `{ n: 'zero' }` if the value is higher than one", () => {
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
    const result: {
      n: {
        n: {
          n: {
            n: {
              n: "zero"
            }
          }
        }
      }
    } = {
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
})
