import type { Zero, Succ } from "./Nat"
import type { Bool, True, False } from "./Bool"

export type IsZero<N> = N extends Zero ? True : False

export type IfElse<C extends boolean, T, F> = C extends True ? T : F

export type Equals<A, B> = A extends Succ<infer SA>
  ? B extends Succ<infer SB>
    ? Equals<SA, SB>
    : False
  : A extends Zero
  ? B extends Zero
    ? True
    : False
  : False

export type Not<T extends Bool> = T extends True ? False : True

export type And<T1 extends Bool, T2 extends Bool> = T1 extends True
  ? T2 extends True
    ? True
    : False
  : False

export type Or<T1 extends Bool, T2 extends Bool> = T1 extends True
  ? True
  : T2 extends True
  ? True
  : False

export type Xor<T1 extends Bool, T2 extends Bool> = T1 extends True
  ? T2 extends False
    ? True
    : False
  : T2 extends False
  ? False
  : True

export type LessThan<A, B> = A extends Succ<infer A1>
  ? B extends Succ<infer B1>
    ? LessThan<A1, B1>
    : False
  : B extends Succ<infer B1>
  ? True
  : False

export type LessThanOrEqual<A, B> = Equals<A, B> | LessThan<A, B>

export type GreaterThan<A, B> = A extends Succ<infer A1>
  ? B extends Succ<infer B1>
    ? GreaterThan<A1, B1>
    : True
  : False
