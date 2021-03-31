import type { Zero } from "./Nat"
import type { True, False } from "./Bool"

export type IsZero<N> = N extends Zero ? True : False
