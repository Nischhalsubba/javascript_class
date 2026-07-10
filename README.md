# JavaScript Class Practice

A small, runnable learning repository for JavaScript classes and object-oriented programming fundamentals.

## Included examples

- constructor validation
- instance methods
- inheritance with `extends`
- parent initialization with `super()`
- method overriding
- private class fields
- getters
- encapsulated validation
- polymorphism through a shared `area()` method
- CommonJS exports for reuse

## Classes

| Class | Purpose |
|---|---|
| `User` | Basic class with validated constructor values |
| `Student` | Extends `User` and overrides `describe()` |
| `BankAccount` | Demonstrates private state, deposits, withdrawals, and validation |
| `Shape` | Base class defining a shared method contract |
| `Circle` | Implements shape-specific area calculation |
| `Rectangle` | Implements another area calculation using the same interface |

## Run locally

Requirements:

- Node.js 18 or newer recommended

Run the examples:

```bash
npm start
```

Check JavaScript syntax:

```bash
npm run check
```

No dependencies are required.

## Learning notes

The examples intentionally include input validation and error handling rather than demonstrating only the happy path. Modify the values in `runExamples()` or import the exported classes into another file for additional practice.

## Status

This is a focused learning repository, not a production application.
