# Typology
![CI](https://github.com/majjoha/typology/workflows/CI/badge.svg)

Typology is a playground for exploring type-level programming in TypeScript. The
various types range from simple representations of natural numbers to types that
can compute Fibonacci numbers.

## Examples
### Addition
```typescript
const three: Add<Succ<Zero>, Succ<Succ<Zero>>> = {
  n: {
    n: {
      n: "zero"
    },
  },
}
```

### Factorial
```typescript
const six: Factorial<Three> = { n: { n: { n: { n: { n: { n: "zero" } } } } } }
```

### Convert strings to numbers
```typescript
const five: FromString<"{ n: { n: { n: { n: { n: zero } } } } }"> = {
  n: { n: { n: { n: { n: "zero" } } } },
}
```

### Boolean logic
```typescript
const two: IfElse<
  And<
    LessThan<Four, Six>,
    Not<GreaterThan<Five, Ten>>
  >,
  ToString<Succ<Succ<Zero>>>,
  never
> = "{ n: { n: zero } }"
```

### Fibonacci numbers
```typescript
const five: Fibonacci<Five> = { n: { n: { n: { n: { n: "zero" } } } } }
```

## License
See [LICENSE](./LICENSE).
