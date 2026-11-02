(function () {
  'use strict';
  const translations = {
    'zh-CN': {
      title:'Splitly · 轻松分账',currency:'币种',language:'语言',eyebrow:'把时间留给相聚',headline1:'好好相聚，',headline2:'轻松分账。',intro:'从一杯咖啡到一桌晚餐。小费、总额、每人应付，一次算清。',billDetails:'小费计算器',tryExample:'试用示例',billAmount:'账单金额',beforeTip:'未含小费',chooseTip:'小费比例',custom:'自定义',customTip:'自定义比例',splitBetween:'一起分账',peopleLabel:'用餐人数',calculate:'算一下',reset:'重置',liveNote:'修改数值，即时更新结果',yourSplit:'你的分账单',eachPays:'每人应付',tipIncluded:'已包含小费',originalBill:'账单金额',tipTotal:'小费',totalBill:'合计',splitCount:'平分人数',copySummary:'复制账单',ready:'账目清楚，相聚尽兴。',currencyNote:'币种仅用于显示，不进行汇率换算。',privacy:'本地计算，账单不上传',footer:'少一点计算，多一点好时光。',summaryTitle:'账单摘要',copyManually:'请选中并复制以下内容。',done:'完成',minus:'减少人数',plus:'增加人数',close:'关闭',calculator:'小费与分账计算器',billRequired:'请输入账单金额。',billInvalid:'请输入 0–9,999,999.99 的金额，最多两位小数。',tipRequired:'请输入自定义小费比例。',tipInvalid:'请输入 0–100 的比例，最多两位小数。',peopleRequired:'请输入用餐人数。',peopleInvalid:'人数须为 1–999 之间的整数。',peopleCount:'{n} 人',rounding:'每人金额四舍五入至两位小数，合计可能有少量尾差。',exact:'含小费的账单，大家平均分摊。',empty:'填写账单，即可开始计算。',invalid:'请检查输入后再计算。',copied:'账单已复制，可以分享给朋友了。',sampleLoaded:'已载入示例：80.00 · 15% · 3 人',resetDone:'已重置，开始一笔新账单吧。',calculated:'每人应付 {amount}，合计 {total}。',summaryFooter:'使用 Splitly 计算',displayOnly:'币种已切换为 {currency}；金额未换算。'
    },
    'zh-TW': {
      title:'Splitly · 輕鬆分帳',currency:'幣別',language:'語言',eyebrow:'把時間留給相聚',headline1:'好好相聚，',headline2:'輕鬆分帳。',intro:'從一杯咖啡到一桌晚餐。小費、總額、每人應付，一次算清。',billDetails:'小費計算機',tryExample:'試用範例',billAmount:'帳單金額',beforeTip:'未含小費',chooseTip:'小費比例',custom:'自訂',customTip:'自訂比例',splitBetween:'一起分帳',peopleLabel:'用餐人數',calculate:'算一下',reset:'重設',liveNote:'修改數值，即時更新結果',yourSplit:'你的分帳單',eachPays:'每人應付',tipIncluded:'已包含小費',originalBill:'帳單金額',tipTotal:'小費',totalBill:'合計',splitCount:'平分人數',copySummary:'複製帳單',ready:'帳目清楚，相聚盡興。',currencyNote:'幣別僅用於顯示，不進行匯率換算。',privacy:'本機計算，帳單不上傳',footer:'少一點計算，多一點好時光。',summaryTitle:'帳單摘要',copyManually:'請選取並複製以下內容。',done:'完成',minus:'減少人數',plus:'增加人數',close:'關閉',calculator:'小費與分帳計算機',billRequired:'請輸入帳單金額。',billInvalid:'請輸入 0–9,999,999.99 的金額，最多兩位小數。',tipRequired:'請輸入自訂小費比例。',tipInvalid:'請輸入 0–100 的比例，最多兩位小數。',peopleRequired:'請輸入用餐人數。',peopleInvalid:'人數須為 1–999 之間的整數。',peopleCount:'{n} 人',rounding:'每人金額四捨五入至兩位小數，合計可能有少量尾差。',exact:'含小費的帳單，大家平均分攤。',empty:'填寫帳單，即可開始計算。',invalid:'請檢查輸入後再計算。',copied:'帳單已複製，可以分享給朋友了。',sampleLoaded:'已載入範例：80.00 · 15% · 3 人',resetDone:'已重設，開始一筆新帳單吧。',calculated:'每人應付 {amount}，合計 {total}。',summaryFooter:'使用 Splitly 計算',displayOnly:'幣別已切換為 {currency}；金額未換算。'
    },
    en: {
      title:'Splitly · Good company. Easy splitting.',currency:'Currency',language:'Language',eyebrow:'A LITTLE LESS MATH. A LOT MORE MOMENTS.',headline1:'Good company.',headline2:'Easy splitting.',intro:'From a quick coffee to a long dinner. Work out the tip, split the bill, and get back to the good part.',billDetails:'Tip Calculator',tryExample:'Try an example',billAmount:'Bill amount',beforeTip:'Before tip',chooseTip:'Choose your tip',custom:'Custom',customTip:'Custom percentage',splitBetween:'Split between',peopleLabel:'People at the table',calculate:'Calculate split',reset:'Reset',liveNote:'Results update as you go',yourSplit:'YOUR LITTLE RECEIPT',eachPays:'Each person pays',tipIncluded:'Tip included',originalBill:'Bill subtotal',tipTotal:'Tip',totalBill:'Total bill',splitCount:'Split between',copySummary:'Copy summary',ready:'All settled. Enjoy the company.',currencyNote:'Currency is a label only. No exchange-rate conversion.',privacy:'Calculated here. Your bill stays private.',footer:'Less math. More good moments.',summaryTitle:'Your bill summary',copyManually:'Select and copy the summary below.',done:'Done',minus:'Remove one person',plus:'Add one person',close:'Close',calculator:'Tip and bill-splitting calculator',billRequired:'Enter the bill amount.',billInvalid:'Enter an amount from 0 to 9,999,999.99, with up to 2 decimals.',tipRequired:'Enter a custom tip percentage.',tipInvalid:'Enter a percentage from 0 to 100, with up to 2 decimals.',peopleRequired:'Enter the number of people.',peopleInvalid:'Use a whole number from 1 to 999.',peopleCount:'{n} people',onePerson:'1 person',rounding:'Per-person amounts are rounded to 2 decimals, so the sum may differ slightly.',exact:'The full bill, including the tip, shared equally.',empty:'Enter a bill to start your split.',invalid:'Check your entries to calculate the split.',copied:'Summary copied. Ready to share.',sampleLoaded:'Example loaded: 80.00 · 15% · 3 people',resetDone:'All reset. A fresh bill awaits.',calculated:'Each person pays {amount}. Total: {total}.',summaryFooter:'Calculated with Splitly',displayOnly:'Currency set to {currency}. Amounts have not been converted.'
    },
    ja: {
      title:'Splitly · かんたん割り勘',currency:'通貨',language:'言語',eyebrow:'計算より、大切なひとときを',headline1:'楽しい時間を、',headline2:'かんたん割り勘。',intro:'コーヒー一杯から、みんなで囲む夕食まで。チップも合計も、一人分のお会計も、すぐに。',billDetails:'チップ計算機',tryExample:'入力例を試す',billAmount:'お会計金額',beforeTip:'チップを除く',chooseTip:'チップの割合',custom:'その他',customTip:'割合を入力',splitBetween:'みんなで割り勘',peopleLabel:'人数',calculate:'計算する',reset:'リセット',liveNote:'入力すると結果が自動で更新されます',yourSplit:'割り勘の明細',eachPays:'一人あたり',tipIncluded:'チップ込み',originalBill:'お会計金額',tipTotal:'チップ',totalBill:'合計金額',splitCount:'人数',copySummary:'明細をコピー',ready:'お会計はすっきり。楽しい時間を。',currencyNote:'通貨は表示のみ。為替換算は行いません。',privacy:'端末内で計算。金額は送信しません。',footer:'計算は少なく、楽しい時間は多く。',summaryTitle:'お会計の明細',copyManually:'以下の内容を選択してコピーしてください。',done:'完了',minus:'人数を減らす',plus:'人数を増やす',close:'閉じる',calculator:'チップ・割り勘計算機',billRequired:'お会計金額を入力してください。',billInvalid:'0〜9,999,999.99 の金額を小数点以下2桁までで入力してください。',tipRequired:'チップの割合を入力してください。',tipInvalid:'0〜100 の割合を小数点以下2桁までで入力してください。',peopleRequired:'人数を入力してください。',peopleInvalid:'人数は1〜999の整数で入力してください。',peopleCount:'{n} 人',rounding:'一人分の金額は小数点以下2桁に丸めるため、合計に端数差が生じる場合があります。',exact:'チップを含む合計金額を均等に分けます。',empty:'金額を入力すると計算が始まります。',invalid:'入力内容を確認してください。',copied:'明細をコピーしました。',sampleLoaded:'入力例：80.00 · 15% · 3 人',resetDone:'リセットしました。新しいお会計をどうぞ。',calculated:'一人あたり {amount}、合計 {total} です。',summaryFooter:'Splitly で計算',displayOnly:'通貨を {currency} に変更しました。金額の換算はしていません。'
    }
  };
  const $ = (id) => document.getElementById(id);
  const symbols = {HKD:'HK$',CNY:'¥',USD:'$',EUR:'€',GBP:'£'};
  function stored(key) { try { return localStorage.getItem('splitly-' + key); } catch (_) { return null; } }
  function persist(key, value) { try { localStorage.setItem('splitly-' + key, value); } catch (_) { /* Storage may be disabled. */ } }
  const browserLanguage = navigator.language || 'zh-CN';
  const preferredLanguage = browserLanguage.startsWith('zh') ? (/TW|HK|Hant/i.test(browserLanguage) ? 'zh-TW' : 'zh-CN') : browserLanguage.startsWith('ja') ? 'ja' : 'en';
  let language = translations[stored('language')] ? stored('language') : preferredLanguage;
  let currency = symbols[stored('currency')] ? stored('currency') : 'HKD';
  let chosenTip = '15', lastResult, touched = new Set(), submitted = false, toastTimer, announceTimer;
  const t = (key, params = {}) => Object.entries(params).reduce((text, [name, value]) => text.replaceAll('{' + name + '}', String(value)), translations[language][key] || translations.en[key] || key);
  const number = (cents) => new Intl.NumberFormat(language, {minimumFractionDigits:2,maximumFractionDigits:2}).format(cents / 100);
  const money = (cents) => symbols[currency] + number(cents);
  const peopleText = (count) => language === 'en' && count === 1 ? t('onePerson') : t('peopleCount', {n:count});
  function toast(message) {
    clearTimeout(toastTimer); $('toast').textContent = message; $('toast').hidden = false;
    toastTimer = setTimeout(() => { $('toast').hidden = true; }, 3200);
  }
  function setTip(value, focus = false) {
    chosenTip = value;
    $('tip-select').value = value;
    const custom = value === 'custom';
    $('custom-tip-row').hidden = !custom;
    if (custom && focus) $('custom-tip').focus();
  }
  function showError(field, code) {
    const input = $(field === 'tip' ? 'custom-tip' : field);
    const show = Boolean(code && (submitted || touched.has(field)));
    $(field + '-error').textContent = show ? t(code) : '';
    input.setAttribute('aria-invalid', String(show));
    const wrap = field === 'tip' ? input.parentElement : $(field + '-wrap');
    wrap.classList.toggle('invalid', show);
  }
  function update() {
    lastResult = TipMath.calculate($('bill').value, chosenTip === 'custom' ? $('custom-tip').value : chosenTip, $('people').value);
    ['bill','tip','people'].forEach(field => showError(field, lastResult.valid ? null : lastResult.errors[field]));
    const count = Number($('people').value);
    $('minus').disabled = Number.isInteger(count) && count <= 1;
    $('plus').disabled = Number.isInteger(count) && count >= 999;
    $('copy-button').disabled = !lastResult.valid;
    $('result-symbol').textContent = symbols[currency];
    if (!lastResult.valid) {
      ['per-person','bill-result','tip-result','total-result','people-result','tip-rate'].forEach(id => { $(id).textContent = '—'; });
      $('rounding-note').textContent = t($('bill').value.trim() === '' && !submitted ? 'empty' : 'invalid');
      $('result-status').textContent = t('liveNote');
      $('per-person').parentElement.classList.remove('compact');
      clearTimeout(announceTimer);
      $('calculation-announcement').textContent = t('invalid');
      return;
    }
    const result = lastResult;
    $('per-person').textContent = number(result.perPersonCents);
    $('per-person').parentElement.classList.toggle('compact', number(result.perPersonCents).length > 8);
    $('bill-result').textContent = money(result.billCents);
    $('tip-result').textContent = money(result.tipCents);
    $('total-result').textContent = money(result.totalCents);
    $('people-result').textContent = peopleText(result.people);
    $('tip-rate').textContent = result.tipPercent + '%';
    $('rounding-note').textContent = t(result.roundingDifferenceCents ? 'rounding' : 'exact');
    $('result-status').textContent = t('ready');
    clearTimeout(announceTimer);
    announceTimer = setTimeout(() => { $('calculation-announcement').textContent = t('calculated', {amount:money(result.perPersonCents), total:money(result.totalCents)}); }, 450);
  }
  function applyPreferences() {
    document.documentElement.lang = language;
    document.title = t('title');
    document.querySelectorAll('[data-i18n]').forEach(node => { node.textContent = t(node.dataset.i18n); });
    $('language').value = language; $('currency').value = currency;
    $('input-symbol').textContent = symbols[currency];
    $('input-currency').textContent = currency; $('receipt-currency').textContent = currency;
    $('minus').setAttribute('aria-label', t('minus')); $('plus').setAttribute('aria-label', t('plus'));
    $('calculator').setAttribute('aria-label', t('calculator'));
    document.querySelector('.dialog-close').setAttribute('aria-label', t('close'));
    $('copy-text').setAttribute('aria-label', t('summaryTitle'));
    $('toast').hidden = true;
    update();
  }
  ['bill','people','custom-tip'].forEach(id => {
    $(id).addEventListener('input', () => { touched.add(id === 'custom-tip' ? 'tip' : id); update(); });
    $(id).addEventListener('blur', () => { touched.add(id === 'custom-tip' ? 'tip' : id); update(); });
  });
  $('tip-select').addEventListener('change', event => { setTip(event.target.value, true); update(); });
  function stepPeople(direction) {
    const count = Number($('people').value);
    $('people').value = Number.isInteger(count) && count >= 1 && count <= 999 ? Math.max(1, Math.min(999, count + direction)) : 1;
    touched.add('people'); update();
  }
  $('minus').addEventListener('click', () => stepPeople(-1));
  $('plus').addEventListener('click', () => stepPeople(1));
  $('people').addEventListener('keydown', event => {
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') { event.preventDefault(); stepPeople(event.key === 'ArrowUp' ? 1 : -1); }
  });
  $('tip-form').addEventListener('submit', event => {
    event.preventDefault(); submitted = true; update();
    if (!lastResult.valid) { const field = Object.keys(lastResult.errors)[0]; $(field === 'tip' ? 'custom-tip' : field).focus(); }
    else toast(t('calculated', {amount:money(lastResult.perPersonCents),total:money(lastResult.totalCents)}));
  });
  function freshBill(sample) {
    submitted = false; touched.clear(); $('bill').value = sample ? '80.00' : ''; $('people').value = sample ? '3' : '1'; $('custom-tip').value = ''; setTip('15'); update(); toast(t(sample ? 'sampleLoaded' : 'resetDone'));
    if (!sample) $('bill').focus();
  }
  $('reset-button').addEventListener('click', () => freshBill(false));
  $('sample-button').addEventListener('click', () => freshBill(true));
  $('language').addEventListener('change', event => { language = event.target.value; persist('language', language); applyPreferences(); });
  $('currency').addEventListener('change', event => { currency = event.target.value; persist('currency', currency); applyPreferences(); toast(t('displayOnly', {currency})); });
  function summary(result) {
    return ['Splitly · ' + t('summaryTitle') + ' (' + currency + ')',t('originalBill') + ': ' + money(result.billCents),t('tipTotal') + ' (' + result.tipPercent + '%): ' + money(result.tipCents),t('totalBill') + ': ' + money(result.totalCents),t('splitCount') + ': ' + peopleText(result.people),t('eachPays') + ': ' + money(result.perPersonCents),result.roundingDifferenceCents ? t('rounding') : '',t('summaryFooter')].filter(Boolean).join('\n');
  }
  $('copy-button').addEventListener('click', async () => {
    if (!lastResult.valid) return;
    const text = summary(lastResult);
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text); toast(t('copied'));
    } catch (_) {
      $('copy-text').value = text; $('copy-dialog').showModal(); $('copy-text').focus(); $('copy-text').select();
    }
  });
  $('year').textContent = new Date().getFullYear();
  applyPreferences();
})();
