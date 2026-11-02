const test = require('node:test');
const assert = require('node:assert/strict');
const { calculate } = require('../calculator.js');
test('classroom example: 80, 15%, 3 people', () => {
  const r = calculate('80', '15', '3');
  assert.equal(r.valid, true);
  assert.equal(r.tipCents, 1200);
  assert.equal(r.totalCents, 9200);
  assert.equal(r.perPersonCents, 3067);
  assert.equal(r.roundingDifferenceCents, 1);
});
test('even split, no tip, and free bills', () => {
  assert.equal(calculate('100', '10', '2').perPersonCents, 5500);
  assert.equal(calculate('45.50', '0', '2').perPersonCents, 2275);
  const free = calculate('0', '20', '4');
  assert.equal(free.valid, true);
  assert.equal(free.totalCents, 0);
});
test('custom fractional percentages and half-cent rounding', () => {
  assert.equal(calculate('123.45', '18.75', '3').perPersonCents, 4887);
  assert.equal(calculate('0.05', '10', '1').totalCents, 6);
  assert.equal(calculate('.50', '10', '1').totalCents, 55);
  assert.equal(calculate('0.05', '10', '4').perPersonCents, 1);
});
test('reject empty, negative, excessive precision and unsafe values', () => {
  for (const bill of ['', ' ', '-1', '12.345', 'Infinity', 'NaN', '1e4', '1,23', '10000000', '9007199254740991']) assert.equal(calculate(bill, '15', '2').valid, false, bill);
  for (const tip of ['', '-1', '100.01', '12.345', 'NaN']) assert.equal(calculate('80', tip, '2').valid, false, tip);
  for (const people of ['', '0', '-1', '1.5', '1000', 'NaN', '1e2']) assert.equal(calculate('80', '15', people).valid, false, people);
});
test('valid limits and recoverable field errors', () => {
  const r = calculate('9999999.99', '100', '999');
  assert.equal(r.valid, true);
  assert.equal(r.totalCents, 1999999998);
  assert.equal(calculate('80', '15', '0').errors.people, 'peopleInvalid');
  assert.equal(calculate('80', '15', '1').valid, true);
});
