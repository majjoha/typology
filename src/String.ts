import { Zero, Succ } from "./Nat"
import { Increment } from "./Arithmetic"

export type Repeat<SI extends string, N = Zero, SJ extends string = SI> = {
  acc: SI
  n: N extends Succ<infer N1> ? Repeat<`${SJ}${SI}`, N1, SJ> : never
}[N extends Succ<infer _> ? "n" : "acc"]

export type Join<S1 extends string, S2 extends string> = `${S1}${S2}`

export type Length<S extends string, N = Zero> = {
  acc: N
  n: S extends `${infer S1}${infer S2}` ? Length<S2, Increment<N>> : N
}[S extends "" ? "acc" : "n"]
