export type Zero = "zero"

export type Succ<N> = { n: N }

export type One = Succ<Zero>
export type Two = Succ<One>
export type Three = Succ<Two>
export type Four = Succ<Three>
export type Five = Succ<Four>
export type Six = Succ<Five>
export type Seven = Succ<Six>
export type Eight = Succ<Seven>
export type Nine = Succ<Eight>
export type Ten = Succ<Nine>

export type NaN = "NaN"

export const zero: Zero = "zero"
export const one: One = { n: zero }
export const two: Two = { n: { ...one } }
export const three: Three = { n: { ...two } }
export const four: Four = { n: { ...three } }
export const five: Five = { n: { ...four } }
export const six: Six = { n: { ...five } }
export const seven: Seven = { n: { ...six } }
export const eight: Eight = { n: { ...seven } }
export const nine: Nine = { n: { ...eight } }
export const ten: Ten = { n: { ...nine } }
