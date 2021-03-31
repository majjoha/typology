import type { Zero, Succ, One } from "../Nat"
import type { IfElse, Equals } from "../Conditionals"
import type { Multiply, Decrement } from "../Arithmetic"

export type Factorial<N> = {
  1: One
  n: N extends Succ<infer _> ? Multiply<N, Factorial<Decrement<N>>> : never
}[IfElse<Equals<N, Zero>, 1, "n">]
