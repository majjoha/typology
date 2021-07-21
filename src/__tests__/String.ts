import type { Join } from "../String"

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
