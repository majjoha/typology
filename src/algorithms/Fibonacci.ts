import type { Zero, Succ, One } from "../Nat"
import type { IfElse, IsZero } from "../Conditionals"
import type { Add, Decrement } from "../Arithmetic"

export type Fibonacci<N, F0 = Zero, F1 = One> = {
  acc: F0
  n: N extends Succ<infer _> ? Fibonacci<Decrement<N>, F1, Add<F0, F1>> : never
}[IfElse<IsZero<N>, "acc", "n">]
