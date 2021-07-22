import type { Join, Length } from "../String"
import type { Zero } from "../Nat"

describe("Join", () => {
  it("joins two strings", () => {
    const result: Join<"foo", "bar"> = "foobar"
    const foobar: "foobar" = "foobar"

    expect(result).toEqual(foobar)
  })

  it("joins two empty strings", () => {
    const result: Join<"", ""> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })
})

describe("Length", () => {
  it("returns zero when provided an empty string", () => {
    const result: Length<""> = "zero"
    const zero: Zero = "zero"

    expect(result).toEqual(zero)
  })

  it("returns one when provided a single letter", () => {
    const result: Length<"a"> = { n: "zero" }
    const one: { n: "zero" } = { n: "zero" }

    expect(result).toEqual(one)
  })

  it("returns four when provided the word `type`", () => {
    const result: Length<"type"> = { n: { n: { n: { n: "zero" } } } }
    const four: { n: { n: { n: { n: "zero" } } } } = {
      n: { n: { n: { n: "zero" } } },
    }

    expect(result).toEqual(four)
  })
})
