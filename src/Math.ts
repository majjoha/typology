import type { IfElse, LessThan } from "./Conditionals"

export type Max<A, B> = IfElse<LessThan<A, B>, B, A>

export type Min<A, B> = IfElse<LessThan<A, B>, A, B>
