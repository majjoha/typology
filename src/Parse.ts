import type { Zero, Succ } from "./Nat"
import type { IfElse, IsZero } from "./Conditionals"

export type ToString<T, A extends string = Zero> = {
  acc: `${A}`
  n: T extends Succ<infer T1> ? ToString<T1, `{ n: ${A} }`> : never
}[IfElse<IsZero<T>, "acc", "n">]

export type FromString<S extends string = Zero> = S extends `{ n: ${infer S1} }`
  ? Succ<FromString<S1>>
  : S extends `zero`
  ? Zero
  : Zero
