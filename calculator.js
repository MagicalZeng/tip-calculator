/* Integer arithmetic keeps currency rounding predictable. Works without a server. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.TipMath = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function decimalUnits(value, max, error) {
    const text = String(value ?? '').trim();
    if (!text) return { error: error + 'Required' };
    if (!/^(?:\d+(?:\.\d{0,2})?|\.\d{1,2})$/.test(text)) return { error: error + 'Invalid' };
    const [whole = '0', fraction = ''] = text.split('.');
    const units = Number(whole || 0) * 100 + Number(fraction.padEnd(2, '0'));
    if (!Number.isSafeInteger(units) || units > max) return { error: error + 'Invalid' };
    return { value: units };
  }
  function calculate(bill, tip, people) {
    const amount = decimalUnits(bill, 999999999, 'bill');
    const rate = decimalUnits(tip, 10000, 'tip');
    const countText = String(people ?? '').trim();
    const count = Number(countText);
    const errors = {};
    if (amount.error) errors.bill = amount.error;
    if (rate.error) errors.tip = rate.error;
    if (!countText) errors.people = 'peopleRequired';
    else if (!/^\d+$/.test(countText) || !Number.isSafeInteger(count) || count < 1 || count > 999) errors.people = 'peopleInvalid';
    if (Object.keys(errors).length) return { valid: false, errors };
    const base = BigInt(amount.value), basis = BigInt(rate.value), divisor = 10000n;
    const round = (n, d) => Number((n * 2n + d) / (2n * d));
    const total = base * (divisor + basis);
    const totalCents = round(total, divisor);
    const perPersonCents = round(total, divisor * BigInt(count));
    return { valid: true, billCents: amount.value, tipCents: round(base * basis, divisor), totalCents, perPersonCents, people: count, tipPercent: rate.value / 100, roundingDifferenceCents: perPersonCents * count - totalCents };
  }
  return { calculate };
});
