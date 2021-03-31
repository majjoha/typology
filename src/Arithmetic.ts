import type { Zero, Succ } from "./Nat"
import type { IfElse, IsZero } from "./Conditionals"

export type Increment<N> = Succ<N>

export type Decrement<N> = N extends Succ<infer R> ? R : Zero

export type Add<A, B> = {
  acc: B
  n: A extends Succ<infer _> ? Add<Decrement<A>, Succ<B>> : never
}[IfElse<IsZero<A>, "acc", "n">]

export type Multiply<A, B> = {
  0: Zero
  n: A extends Succ<infer A1> ? Add<B, Multiply<A1, B>> : never
}[IfElse<IsZero<A>, 0, "n">]
