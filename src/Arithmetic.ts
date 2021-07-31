import type { NaN, Zero, Succ, One } from "./Nat"
import type { IfElse, IsZero, LessThan } from "./Conditionals"

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

export type Subtract<A, B> = {
  acc: A
  n: A extends Succ<infer A1> ? Subtract<A1, Decrement<B>> : Zero
}[IfElse<IsZero<B>, "acc", "n">]

export type Divide<A, B, N = Zero> = {
  acc: N
  n: A extends Succ<infer _> ? Divide<Subtract<A, B>, B, Add<N, One>> : NaN
}[IfElse<LessThan<A, B>, "acc", "n">]

export type Modulo<A, B> = Subtract<A, Multiply<B, Divide<A, B>>>
