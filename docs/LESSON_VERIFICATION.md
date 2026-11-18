# JavaScript Class: exercise verification guide

The repository contains JavaScript modules, standalone HTML demos and historical lessons. Contributors should identify the execution environment and intended learning outcome for every changed example instead of assuming one command exercises everything.

## Lesson contract

Each lesson should define:

- **Learning outcome:** one testable concept a learner can explain after finishing.
- **Prerequisites:** known HTML/CSS/JavaScript ideas and the expected runtime.
- **Starting state:** any files, browser features, network access or sample data required.
- **Exercise:** a small reproducible task with readable identifiers and no hidden steps.
- **Expected result:** exact console output or visible DOM state, when deterministic.
- **Explanation:** the reason the result occurs, including any coercion, scope or asynchronous behavior.
- **Variation:** one safe change that tests transfer of understanding.
- **Limitations:** environment differences and behavior the snippet does not demonstrate.

Use original explanations; attribute external tutorials or borrowed examples where needed.

## Run modes

| Type | Suggested verification |
| --- | --- |
| Root Node script | From repository root, run **npm run check** for syntax; use **npm start** only when the entry point is intended to execute |
| Independent Node example | Run **node --check path/to/file.js** then execute it in a suitable test environment if side effects are understood |
| HTML/DOM demo | Serve repository root and open the relevant HTML file in a browser |
| Asynchronous example | State which ordering guarantees exist; do not promise scheduler behavior |
| Input/form example | Verify labels, keyboard access, invalid input and empty states |

Root **package.json** exposes **npm run check**, which checks only **index.js**. The GitHub Actions workflow also checks JavaScript syntax, but a syntax pass does not establish the expected runtime output of every lesson.

## Browser preview

~~~bash
python -m http.server 8000
~~~

Open http://localhost:8000/ for the root example, then follow the specific exercise's path. Use fake data, not personal contacts, real passwords, API tokens or identifiable learner submissions.

## Acceptance and documentation

A PR changing a lesson should include the paths, changed concept, expected learning outcome, runtime/browser version, commands actually run, sample input/output, source attribution and any remaining caveats. A screenshot should accompany—not replace—the steps to reproduce a visible result.

## Recovery

If an example contains an incorrect claim, fix or revert the specific example, update its expected output and explain the correction without breaking unrelated classroom exercises.
