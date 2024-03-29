import type { Join, Length, Repeat, CharAt, Strip, Reverse } from "../String"
import type { Zero, Succ } from "../Nat"

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

describe("Repeat", () => {
  it("returns an empty string when repeated zero times", () => {
    const result: Repeat<"", Zero> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns an empty string when repeated twice", () => {
    const result: Repeat<"", Succ<Succ<Zero>>> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns `foo` when repeated zero times", () => {
    const result: Repeat<"foo", Zero> = "foo"
    const foo: "foo" = "foo"

    expect(result).toEqual("foo")
  })

  it("returns `foofoofoo` when repeated twice", () => {
    const result: Repeat<"foo", Succ<Succ<Zero>>> = "foofoofoo"
    const foofoofoo: "foofoofoo" = "foofoofoo"

    expect(result).toEqual("foofoofoo")
  })
})

describe("CharAt", () => {
  it("returns an empty string when accessing the first element of an empty string", () => {
    const result: CharAt<"", Zero> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns an empty string when accessing a non-existing element of an empty string", () => {
    const result: CharAt<"", Succ<Succ<Zero>>> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns `o` when accessing the second element of `foo`", () => {
    const result: CharAt<"foo", Succ<Zero>> = "o"
    const o: "o" = "o"

    expect(result).toEqual(o)
  })

  it("returns an empty string when accessing a non-existing element of `bar`", () => {
    const result: CharAt<"bar", Succ<Succ<Succ<Succ<Zero>>>>> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns `o` when accessing the fourth element of `hello`", () => {
    const result: CharAt<"hello", Succ<Succ<Succ<Succ<Zero>>>>> = "o"
    const o: "o" = "o"

    expect(result).toEqual(o)
  })
})

describe("Strip", () => {
  it("removes any whitespace in the beginning of a string", () => {
    const result: Strip<"     hello"> = "hello"
    const hello: "hello" = "hello"

    expect(result).toEqual(hello)
  })

  it("removes any whitespace at the end of a string", () => {
    const result: Strip<"world   "> = "world"
    const world: "world" = "world"

    expect(result).toEqual(world)
  })

  it("removes any whitespace on both sides of a string", () => {
    const result: Strip<"   hello world   "> = "hello world"
    const helloWorld: "hello world" = "hello world"

    expect(result).toEqual(helloWorld)
  })
})

describe("Reverse", () => {
  it("returns an empty string when reversing an empty string", () => {
    const result: Reverse<""> = ""
    const empty: "" = ""

    expect(result).toEqual(empty)
  })

  it("returns `olleh` when reversing the string `hello`", () => {
    const result: Reverse<"hello"> = "olleh"
    const olleh: "olleh" = "olleh"

    expect(result).toEqual(olleh)
  })
})
