import { Zero } from "./Nat"
import { Increment } from "./Arithmetic"

export type Join<S1 extends string, S2 extends string> = `${S1}${S2}`

export type Length<S extends string, N = Zero> = {
  acc: N
  n: S extends `${infer S1}${infer S2}` ? Length<S2, Increment<N>> : N
}[S extends "" ? "acc" : "n"]
