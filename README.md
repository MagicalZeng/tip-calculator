# Splitly

A thoughtful tip calculator. A warm cream-and-green interface, a clear receipt, and instant bill splitting — on desktop or mobile.

**[Open Splitly](https://magicalzeng.github.io/tip-calculator/)**

## Features

- Complete Simplified Chinese, Traditional Chinese, English, and Japanese interfaces, including validation and copied summaries.
- 0%, 10%, 15%, and 20% presets, plus custom percentages from 0 to 100.
- Live results, adjustable party size, a worked example, reset, and copyable receipts.
- HKD, CNY, USD, EUR, and GBP display. Currency selection does **not** convert amounts.
- Integer-based currency arithmetic; two-decimal rounding with an explanation when displayed shares do not exactly sum to the total.
- Responsive layout, keyboard controls, screen-reader labels, reduced-motion support, and no external dependencies.
- All bill calculations stay in the browser. Only language and currency preferences are stored locally; there are no analytics or bill uploads in the application. Hosting providers may keep normal request logs.

## Run locally

Open `index.html` directly, or serve the directory:

```sh
python -m http.server 8873
```

Open `http://localhost:8873`. The copy button uses the Clipboard API when available and otherwise offers a selectable summary.

## Check the calculation logic

Requires Node.js 18 or newer; no install step.

```sh
node --test tests/calculator.test.cjs
```

The classroom example is **80.00 + 15% tip, split 3 ways**: tip **12.00**, total **92.00**, per person **30.67**. Displayed shares sum to 92.01 due to rounding. Bill amounts accept up to two decimal places and 9,999,999.99; party sizes range from 1 to 999.

## Files

- `index.html` — accessible page structure
- `styles.css` — responsive visual design
- `calculator.js` — pure calculation and validation functions
- `script.js` — translations and browser interactions
- `tests/calculator.test.cjs` — arithmetic and input validation checks

## Design references

Reviewed [brunoia/splitter-tip-calculator](https://github.com/brunoia/splitter-tip-calculator) and [adityaasawant/Tip-Calculator-Web-App](https://github.com/adityaasawant/Tip-Calculator-Web-App) for familiar calculator patterns: preset/custom tips, immediate updates, responsive results, and reset. This implementation, visual design, translations, and calculation logic were written for this project; no source code or image assets were copied.

## Publishing

GitHub Pages serves the repository root from the `main` branch. There is no build process and no backend. Personal coursework reflection files are excluded from the public repository.
