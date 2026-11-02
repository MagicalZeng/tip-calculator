# Getting to Know Cursor - Deliverable Check

Reference: the supplied three-page **Getting to Know Cursor.pdf**.

## Required final deliverables

| Requirement | Included implementation |
| --- | --- |
| A working `tip-calculator` folder | `cursor-activities/tip-calculator` in the ZIP; extract the folder before opening it. |
| `index.html` with an HTML skeleton | Includes `html`, `head`, and `body`; the intent comment from Part A is retained. |
| Bill input, tip dropdown with 10/15/20, people input, Calculate button, and result area | Present in the form. The dropdown also provides 0% and a custom percentage. |
| Centered card, a "Tip Calculator" heading, input labels, soft background, rounded corners, shadow, readable font, and full-width fields | Implemented in the HTML and its `head` / `style` block. Select English to see the exact "Tip Calculator" heading; other languages translate it. |
| JavaScript in a separate `script.js` file | `script.js` handles input, the Calculate action, validation messages, and translations; `calculator.js` is an additional pure arithmetic helper. |
| Show tip amount, total, and total per person to two decimal places | All three values appear in the receipt. |
| Handle empty/negative bill and zero/negative people with friendly errors | Invalid fields receive translated messages, old results are cleared, and copying is disabled until corrected. |
| A short reflection answering the two final questions | `reflection.md` covers tool choice and the actual requested correction to the AI-generated layout. |

## Verification cases

| Bill | Tip | People | Expected behavior |
| --- | --- | --- | --- |
| 80 | 15% | 3 | Tip 12.00; total 92.00; per person 30.67. |
| Empty | 15% | 3 | Friendly bill-required message; no NaN or Infinity. |
| -1 | 15% | 3 | Friendly invalid-bill message. |
| 80 | 15% | 0 | Friendly invalid-people message. |
| 80 | 15% | -1 | Friendly invalid-people message. |
| 0 | 15% | 3 | Valid zero bill; results 0.00. |
| 123.45 | Custom 18.75% | 3 | Total 146.60; per person 48.87. |

Verification completed: all five automated test groups passed. Browser checks confirmed the required 80/15%/3 example, empty and negative bills, zero and negative people, the custom-tip dropdown, and reset. A 375-pixel mobile viewport had no horizontal overflow.

The automated arithmetic and validation checks run with `node --test tests/calculator.test.cjs`. Node.js is needed only for these developer tests, not to use the page.

## Additional requested changes

- No logo; the currency selector is directly below the bill amount.
- Simplified Chinese, Traditional Chinese, English, and Japanese.
- Currency labels for HKD, CNY, USD, EUR, and GBP. This is not exchange-rate conversion.
- Responsive layout, live results, reset, and a copyable summary.

## Practice and submission scope

The PDF's Tab, inline-edit, Ask, and Agent steps describe activities performed in Cursor. The finished files demonstrate the resulting calculator; they do not verify a personal history of those interactions. The PDF does not specify a submission deadline or a platform. Follow the instructor's submission directions separately.

Live website: https://magicalzeng.github.io/tip-calculator/

Source repository: https://github.com/MagicalZeng/tip-calculator
