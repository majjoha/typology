import { Zero, Succ } from "./Nat"
import { Increment } from "./Arithmetic"
import { IfElse, Equals } from "./Conditionals"

export type Repeat<SI extends string, N = Zero, SJ extends string = SI> = {
  acc: SI
  n: N extends Succ<infer N1> ? Repeat<`${SJ}${SI}`, N1, SJ> : never
}[N extends Succ<infer _> ? "n" : "acc"]

export type Join<S1 extends string, S2 extends string> = `${S1}${S2}`

export type Length<S extends string, N = Zero> = {
  acc: N
  n: S extends `${infer S1}${infer S2}` ? Length<S2, Increment<N>> : N
}[S extends "" ? "acc" : "n"]

export type CharAt<S extends string, N> = {
  acc: S extends `${infer S1}${infer S2}` ? S1 : S
  n: N extends Succ<infer N1>
    ? S extends `${infer S1}${infer S2}`
      ? CharAt<S2, N1>
      : CharAt<S, N1>
    : never
}[IfElse<Equals<N, Zero>, "acc", "n">]

export type Strip<S extends string> = S extends ` ${infer S1}`
  ? Strip<S1>
  : S extends `${infer S1} `
  ? Strip<S1>
  : S

export type Reverse<S extends string, A extends string = ""> = {
  acc: A
  n: S extends `${infer S1}${infer S2}`
    ? Reverse<S2, `${S1}${A}`>
    : Reverse<S, `${S}${A}`>
}[S extends "" ? "acc" : "n"]
