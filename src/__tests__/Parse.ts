import type { ToString, FromString } from "../Parse"
import type { Zero, Succ, One, Two, Five } from "../Nat"

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

  it("correctly converts a type generated by `FromString`", () => {
    const result: ToString<FromString<"{ n: { n: { n: zero } } }">> =
      "{ n: { n: { n: zero } } }"
    const three: "{ n: { n: { n: zero } } }" = "{ n: { n: { n: zero } } }"

    expect(result).toEqual(three)
  })
})

describe("FromString", () => {
  it("convert `zero` into a `Zero`", () => {
    const result: FromString<"zero"> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })

  it("converts `{ n: zero }` to `Succ<Zero>`", () => {
    const result: FromString<"{ n: zero }"> = { n: "zero" }
    const one: One = { n: "zero" }

    expect(result).toStrictEqual(one)
  })

  it("converts nested numbers into `Succ`s", () => {
    const result: FromString<"{ n: { n: { n: { n: { n: zero } } } } }"> = {
      n: { n: { n: { n: { n: "zero" } } } },
    }
    const five: Five = { n: { n: { n: { n: { n: "zero" } } } } }

    expect(result).toStrictEqual(five)
  })

  it("correctly parses a type generated by `ToString`", () => {
    const result: FromString<ToString<Succ<Succ<Zero>>>> = { n: { n: "zero" } }
    const two: Two = { n: { n: "zero" } }

    expect(result).toStrictEqual(two)
  })

  it("converts malformed strings into a `Zero`", () => {
    const result: FromString<"foo bar"> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })
})
