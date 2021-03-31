import type { Zero, Succ } from "./Nat"

export type Increment<N> = Succ<N>

export type Decrement<N> = N extends Succ<infer R> ? R : Zero
