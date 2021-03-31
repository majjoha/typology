import type { Zero, Succ } from "./Nat"
import type { IfElse, IsZero } from "./Conditionals"

export type Increment<N> = Succ<N>

export type Decrement<N> = N extends Succ<infer R> ? R : Zero

export type Add<A, B> = {
  acc: B
  n: A extends Succ<infer _> ? Add<Decrement<A>, Succ<B>> : never
}[IfElse<IsZero<A>, "acc", "n">]
