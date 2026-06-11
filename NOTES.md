# Notes from PramodDutta/LearnPlaywrightBatch2x

> **Source:** https://github.com/PramodDutta/LearnPlaywrightBatch2x  
> **Files:** 105 JavaScript files across 14 chapters covering JS fundamentals for Playwright.

---

## Chapter 01 — Basics

**Concept:** Introduction to JavaScript runtime (Node.js), basic `console.log`, and platform/architecture detection via `process` object.

**Rules:**
- `console.log()` outputs to terminal.
- `process.platform` returns OS (`win32`, `darwin`, `linux`).
- `process.arch` returns CPU arch (`x64`, `arm64`).
- `process.version` returns Node.js version.
- JavaScript code runs in a loop — repeated calls accumulate (hot code optimizes).
- Functions can be defined with `function` keyword and called later.

**Importance:** Foundation — confirms dev environment is set up and JS is running correctly. Platform detection is essential for cross-browser testing.

---

## Chapter 02 — Javascript_Concepts

**Concept:** Basic variable declaration with `var`, assignment, and reassignment.

**Rules:**
- `var` variables can be declared and reassigned freely.
- No block scoping — `var` is function-scoped.
- Semi-colons are optional but recommended.

**Importance:** Understands that JS allows variable mutation by default.

---

## Chapter 03 — Identifier_Literals

**Concept:** Rules for naming identifiers and naming conventions/cases in JavaScript.

**Rules:**
- Must start with letter, `_`, or `$`.
- Cannot start with a digit.
- Cannot be a reserved keyword.
- Case-sensitive (`myVar` != `myvar`).
- Unicode letters allowed.
- Cannot contain spaces, hyphens, or special chars (except `_`, `$`).
- **Conventions:** `camelCase` (variables/functions), `PascalCase` (classes), `snake_case`, `SCREAMING_SNAKE_CASE` (constants), Hungarian Notation (legacy).
- Comments: `//` single-line, `/* */` multi-line, `/** */` JSDoc.

**Importance:** Prevents syntax errors from invalid names. Consistent naming improves readability across teams.

---

## Chapter 04 — Javascript_Concepts (Var/Let/Const, Functions, Hoisting, Scope)

**Concept:** Deep dive into variable declarations (`var`, `let`, `const`), function definitions, hoisting, and block vs function scoping.

**Rules:**
- **`var`:** Function-scoped, can be redeclared & reassigned, hoisted (initialized as `undefined`).
- **`let`:** Block-scoped, cannot be redeclared in same scope, hoisted but not initialized (TDZ — Temporal Dead Zone).
- **`const`:** Block-scoped, must be initialized at declaration, cannot be reassigned (but object properties can mutate).
- **Hoisting:** `var` declarations hoisted with `undefined`; `let`/`const` hoisted but inaccessible before declaration (ReferenceError).
- Functions defined with `function` keyword are fully hoisted (can be called before definition).
- Function expressions (`const f = function(){}`) are NOT hoisted.

**Importance:** Critical for avoiding scope bugs. Understanding TDZ prevents ReferenceErrors. `const` preferred for safety; `let` for mutable values; avoid `var`.

---

## Chapter 05 — Literal

**Concept:** All literal types in JavaScript — numbers (decimal, binary, octal, hex, BigInt, floating-point, exponential), strings (single/double/backtick), null, undefined, template literals, and numeric separators.

**Rules:**
- `null` is an intentional absence (typeof returns `"object"` — known JS bug).
- `undefined` means variable declared but not assigned.
- `null == undefined` is `true`; `null === undefined` is `false`.
- Template literals (backticks) support `${expression}` interpolation and multi-line strings.
- Number types: `0b` (binary), `0o` (octal), `0x` (hex), `1e6` (exponential), `1_000_000` (separators).
- `BigInt` via `n` suffix or `BigInt()`.
- Special values: `Infinity`, `-Infinity`, `NaN` (typeof `"number"`).
- `Number.MAX_SAFE_INTEGER`, `Number.EPSILON`, etc.

**Importance:** Understanding literal types prevents type coercion bugs. Template literals essential for dynamic strings in test automation (URLs, locators, payloads). Null vs undefined distinction matters in API responses.

---

## Chapter 06 — Operator

**Concept:** All operator types — assignment, arithmetic, modulus, exponentiation, compound assignment, comparison (strict vs loose), logical, ternary, typeof, increment/decrement, nullish coalescing.

**Rules:**
- **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**`.
- **Compound:** `+=`, `-=`, `*=`, `/=`, `%=`.
- **Comparison:** `==` (loose, with coercion), `===` (strict, no coercion).
- **Confusing coercions:** `"" == 0` → `true`, `null >= 0` → `true`, `NaN == NaN` → `false`, `[] == ![]` → `true`.
- **Logical:** `&&` (AND), `||` (OR), `!` (NOT).
- **Ternary:** `condition ? valueIfTrue : valueIfFalse`; can be chained.
- **Nullish coalescing (`??`):** returns RHS only if LHS is `null` or `undefined`.
- **Increment/Decrement:** `++a` (prefix — returns new value), `a++` (postfix — returns old value).
- **typeof:** returns type as string; `typeof []` → `"object"`.

**Importance:** Strict equality (`===`) prevents coercion bugs. Ternary operator widely used in test assertions. Understanding post/prefix increment is common in interview questions. Nullish coalescing is useful for default values in configs.

---

## Chapter 07 — If_else

**Concept:** Conditional branching with `if`, `else if`, `else` — including truthy/falsy evaluation, nested conditions, compound conditions with logical operators, and real-world API testing examples.

**Rules:**
- `if (condition)` — condition is coerced to boolean.
- **Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN`; everything else is truthy.
- `if (name)` where `name = 0` → falsy → `else` branch runs.
- Multiple conditions combine with `&&`, `||`.
- Braces `{}` optional for single statements but recommended.
- Can omit `else` when no alternative needed.

**Importance:** Core control flow. Used everywhere — input validation, authorization checks, API status code handling, test assertions.

---

## Chapter 08 — Switch_Statement

**Concept:** Multi-way branching with `switch`, `case`, `break`, `default`, and fall-through behavior.

**Rules:**
- Uses strict comparison (`===`).
- `break` prevents fall-through to next case; omitting it causes fall-through.
- `default` runs when no case matches (placement doesn't matter).
- Cases can be grouped (`case "a": case "b":`).
- Can use `switch (true)` with boolean expressions.
- Duplicate `case` values cause syntax error.
- Variables can be declared inside `case` blocks (needs block `{}` or separate scope).

**Importance:** Cleaner than long `if/else if` chains for discrete value matching. HTTP status code handling is a common real-world use case in API testing.

---

## Chapter 09 — UserInput

**Concept:** Taking user input in browser (`prompt()`) and Node.js (`readline`, `prompt-sync`).

**Rules:**
- `prompt()` works in browser only (returns string).
- `readline` is Node.js built-in module for CLI input.
- `prompt-sync` is a third-party npm package for synchronous input.
- Input should be converted with `Number()` for numeric operations.

**Importance:** Useful for CLI tools and interactive scripts in test automation setup.

---

## Chapter 10 — Loops

**Concept:** Loop constructs — `for`, `while`, `do...while`, and loop control with `continue`.

**Rules:**
- **`for`:** `for (init; condition; increment) { }` — runs while condition is true.
- **`while`:** `while (condition) { }` — checks condition before each iteration.
- **`do...while`:** `do { } while (condition)` — runs at least once, then checks.
- **`continue`:** Skips current iteration and moves to next.
- Off-by-one errors are common — `<=` vs `<` matters.
- Infinite loops occur when condition never becomes false.

**Importance:** Retry logic, iterating over test suites, waiting for conditions — all use loops in test automation.

---

## Chapter 11 — Arrays

**Concept:** Array creation, access, mutation, iteration, searching, transformation (map/filter/reduce), sorting, slicing/splicing, concatenation, spreading, and checking methods.

**Rules:**
- Arrays are zero-indexed, dynamic, can hold mixed types.
- **Creation:** `[]`, `new Array()`, `Array.of()`, `Array.from()`.
- **Access:** `arr[index]`, `arr.at(-1)` (negative index from end).
- **Mutation:** `push/pop` (end), `unshift/shift` (start), `splice` (remove/replace), `arr[i] = val`.
- **Search:** `indexOf`, `lastIndexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`.
- **Iteration:** `for`, `for...of`, `forEach`, `for...in`, `entries()`.
- **Transformation:** `map`, `filter`, `reduce`, `flat`.
- **Sorting:** Default is lexicographic; pass comparator `(a,b) => a-b` for numeric.
- **Checking:** `Array.isArray()`, `every()`, `some()`.
- **Copy/Combine:** `concat()`, spread `[...a, ...b]`, `join()`.

**Importance:** Arrays are fundamental for managing test data, configuration lists, browser instances, and test result collections.

---

## Chapter 12 — Funtions

**Concept:** All function types — declarations, expressions, arrow functions, parameters, default params, rest params, IIFE, closures, higher-order functions, pure functions, scope, hoisting.

**Rules:**
- **4 types:**
  1. Basic (no param, no return) — returns `undefined`.
  2. With param, no return — returns `undefined`.
  3. No param, with return.
  4. With param, with return.
- **Function expression:** `const f = function(){}` — not hoisted.
- **Arrow function:** `() => {}` — no own `this`, no `arguments`, implicit return for single expression.
- **Default params:** `function f(a = 3)`.
- **Rest params:** `function f(...args)` collects all remaining args.
- **IIFE:** `(function(){})()` — runs immediately, creates private scope.
- **Closure:** Inner function retains access to outer function's variables even after outer returns.
- **Higher-order function:** Takes or returns another function.
- **Pure function:** Same input → same output, no side effects.
- **Scope:** Functions create scope; `let`/`const` are block-scoped; inner functions can access outer variables but not vice versa.

**Importance:** Functions are the building blocks of test automation — test functions, hooks, callbacks, retry logic, configuration factories. Closures used for stateful utilities (e.g., retry trackers). HOFs enable composition.

---

## Chapter 13 — Strings

**Concept:** String creation, properties (length, indexing), search/check methods, substring extraction, transformation (case, trim, replace), concatenation, split/join, and type conversion.

**Rules:**
- Strings can use `'`, `"`, or `` ` ``.
- **Properties:** `length`, `[index]`, `at()`, `charAt()`, `charCodeAt()`.
- **Search:** `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `lastIndexOf()`, `search(regex)`.
- **Extraction:** `slice(start, end)` (supports negative), `substring(start, end)` (no negative).
- **Transformation:** `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `replace()`, `replaceAll()`.
- **Concatenation:** `+`, `concat()`, template literals.
- **Split/Join:** `split(separator)`, `join(separator)`.
- **Type conversion:** `String()`, `.toString()`, `Number()`, `parseInt()`, `parseFloat()`.

**Importance:** String manipulation is essential for URL construction, response parsing, test data generation, and assertion messages in Playwright tests.

---

## Chapter 14 — Objects

**Concept:** Object creation, property access, mutation, reference vs value, JSON vs JS objects, methods, destructuring, spread operator, getters/setters, `Object.keys/values/entries`, iteration, and object descriptors.

**Rules:**
- Objects are collections of key-value pairs (keys are strings/Symbols).
- **Access:** `obj.key` or `obj["key"]`; brackets allow dynamic keys.
- **Mutation:** `obj.key = value`, `delete obj.key`.
- **Reference type:** Objects are passed by reference; `const obj` prevents reassignment but NOT property mutation.
- **Copy:** Spread `{...obj}` creates shallow copy.
- **Destructuring:** `const { key: alias, key2 } = obj`; nested destructuring works.
- **Methods:** Functions as object properties; `this` refers to the object.
- **Getters/Setters:** `get prop()` and `set prop(val)` define computed properties.
- **Static methods:** `Object.keys()`, `Object.values()`, `Object.entries()`.
- **Iteration:** `for...in` iterates keys.
- **`Object.getOwnPropertyDescriptor()`** reveals property attributes (writable, enumerable, configurable).

**Importance:** Objects model test configurations, API responses, user sessions, and environment settings. JSON-like syntax is everywhere in Playwright. Understanding reference vs value prevents mutation bugs.
