# Splitly

A thoughtful tip calculator. A warm cream-and-green interface, a clear receipt, and instant bill splitting — on desktop or mobile.

**[Open Splitly](https://magicalzeng.github.io/tip-calculator/)**

GitHub source: https://github.com/MagicalZeng/tip-calculator

## 运行与提交说明

解压整个压缩包，进入 `cursor-activities/tip-calculator`，双击 `index.html`。运行网页不需要安装 Node.js、Python 或任何依赖；请保留同目录下的两个 JavaScript 文件。

课堂反思在 `reflection.md`，要求与验证记录在 `requirements-checklist.md`。代码与线上版本一致；压缩包另外附上个人反思，反思不在公开 GitHub 仓库中。

## Features

- Complete Simplified Chinese, Traditional Chinese, English, and Japanese interfaces, including validation and copied summaries.
- A tip-percentage dropdown with 0%, 10%, 15%, and 20%, plus custom percentages from 0 to 100.
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

- `index.html` — accessible page structure and responsive CSS in a `<style>` block
- `calculator.js` — pure calculation and validation functions
- `script.js` — translations and browser interactions
- `tests/calculator.test.cjs` — arithmetic and input validation checks
- `reflection.md` — short coursework reflection (included in the ZIP, kept out of the public repository)
- `requirements-checklist.md` — assignment requirement mapping and verification notes

## Design references

Reviewed [brunoia/splitter-tip-calculator](https://github.com/brunoia/splitter-tip-calculator) and [adityaasawant/Tip-Calculator-Web-App](https://github.com/adityaasawant/Tip-Calculator-Web-App) for familiar calculator patterns: preset/custom tips, immediate updates, responsive results, and reset. This implementation, visual design, translations, and calculation logic were written for this project; no source code or image assets were copied.

## Publishing

GitHub Pages serves the repository root from the `main` branch. There is no build process and no backend. Personal coursework reflection files are excluded from the public repository.
