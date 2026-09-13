/* Consent controls for the existing GA4 tag. No analytics requests before opt-in. */
(() => {
  'use strict';
  const KEY = 'dsa_privacy_choice_v1';
  const TTL = 180 * 24 * 60 * 60 * 1000;
  const ID = 'G-RB36S9TC68';
  let choice = null;
  let analyticsLoaded = false;
  let language = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
  try {
    const stored = JSON.parse(localStorage.getItem(KEY));
    if (stored?.version === 1 && typeof stored.analytics === 'boolean'
      && Number.isFinite(stored.at) && Date.now() - stored.at >= 0 && Date.now() - stored.at < TTL) choice = stored;
  } catch (_) { /* Refused or unavailable storage means no analytics consent. */ }

  const words = {
    en: {
      title: 'Your privacy choices', note: 'With your permission, Google Analytics helps us understand website use. You can refuse analytics and still request a quotation.',
      accept: 'Accept analytics', reject: 'Reject analytics', settings: 'Settings', save: 'Save choices', close: 'Close',
      necessary: 'Necessary: remembers your privacy and language choices.', analytics: 'Optional analytics: Google Analytics usage measurement.', policy: 'Privacy Policy'
    },
    zh: {
      title: '您的隐私选择', note: '征得您的同意后，我们使用 Google Analytics 了解网站使用情况。拒绝分析不影响询价。',
      accept: '接受分析', reject: '拒绝分析', settings: '设置', save: '保存选择', close: '关闭',
      necessary: '必要功能：记住隐私和语言选择。', analytics: '可选分析：使用 Google Analytics 统计网站使用情况。', policy: '隐私政策'
    }
  };

  function clearAnalyticsCookies() {
    const labels = location.hostname.split('.');
    const domains = [''];
    for (let i = 0; i < labels.length - 1; i++) domains.push(labels.slice(i).join('.'));
    document.cookie.split(';').map(part => part.split('=')[0].trim())
      .filter(name => /^(_ga($|_)|_gid$|_gat($|_))/.test(name))
      .forEach(name => domains.forEach(domain => {
        document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? '; Domain=' + domain : ''}`;
      }));
  }

  function enableAnalytics() {
    if (analyticsLoaded || choice?.analytics !== true) return;
    analyticsLoaded = true;
    window['ga-disable-' + ID] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'
    });
    window.gtag('js', new Date());
    // Send a clean path only: never include query strings or inquiry values.
    window.gtag('config', ID, {
      page_location: location.origin + location.pathname,
      page_referrer: '', allow_google_signals: false, allow_ad_personalization_signals: false
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
    document.head.append(script);
  }

  if (choice?.analytics === true) enableAnalytics();
  else { window['ga-disable-' + ID] = true; clearAnalyticsCookies(); }

  function mount() {
    const banner = document.createElement('section');
    banner.className = 'privacy-panel privacy-banner';
    banner.setAttribute('aria-labelledby', 'privacyBannerTitle');
    banner.hidden = choice !== null;
    banner.innerHTML = '<h2 id="privacyBannerTitle" data-privacy-word="title"></h2><p data-privacy-word="note"></p><a href="privacy.html" data-privacy-word="policy"></a><div class="privacy-actions"><button type="button" data-privacy-action="accept" data-privacy-word="accept"></button><button type="button" data-privacy-action="reject" data-privacy-word="reject"></button><button type="button" data-privacy-action="settings" data-privacy-word="settings"></button></div>';
    const dialog = document.createElement('dialog');
    dialog.className = 'privacy-panel privacy-dialog';
    dialog.setAttribute('aria-labelledby', 'privacyDialogTitle');
    dialog.innerHTML = '<h2 id="privacyDialogTitle" data-privacy-word="title"></h2><p data-privacy-word="note"></p><label class="privacy-toggle"><input type="checkbox" checked disabled><span data-privacy-word="necessary"></span></label><label class="privacy-toggle"><input type="checkbox" id="privacyAnalytics"><span data-privacy-word="analytics"></span></label><a href="privacy.html" data-privacy-word="policy"></a><div class="privacy-actions"><button type="button" data-privacy-action="save" data-privacy-word="save"></button><button type="button" data-privacy-action="reject" data-privacy-word="reject"></button><button type="button" data-privacy-action="close" data-privacy-word="close"></button></div>';
    document.body.append(banner, dialog);

    function translate() {
      [banner, dialog].forEach(panel => panel.querySelectorAll('[data-privacy-word]').forEach(el => {
        el.textContent = words[language][el.dataset.privacyWord];
      }));
    }
    function openSettings() {
      dialog.querySelector('#privacyAnalytics').checked = choice?.analytics === true;
      if (!dialog.open) dialog.showModal();
    }
    function save(analytics) {
      const reloadRequired = analyticsLoaded && !analytics;
      choice = { version: 1, analytics, at: Date.now() };
      try { localStorage.setItem(KEY, JSON.stringify(choice)); } catch (_) { /* Choice applies for this page only. */ }
      banner.hidden = true;
      if (dialog.open) dialog.close();
      if (analytics) enableAnalytics();
      else {
        window['ga-disable-' + ID] = true;
        clearAnalyticsCookies();
        // Reload removes already-loaded analytics listeners after withdrawal.
        if (reloadRequired) location.reload();
      }
    }
    document.addEventListener('click', event => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest('[data-cookie-settings]')) { openSettings(); return; }
      const control = event.target.closest('[data-privacy-action]');
      if (!control) return;
      const action = control.dataset.privacyAction;
      if (action === 'settings') openSettings();
      if (action === 'close') dialog.close();
      if (action === 'accept') save(true);
      if (action === 'reject') save(false);
      if (action === 'save') save(dialog.querySelector('#privacyAnalytics').checked);
    });
    document.addEventListener('dsa:languagechange', event => {
      language = event.detail === 'zh' ? 'zh' : 'en'; translate();
    });
    // Another tab can withdraw consent while this one is open.
    window.addEventListener('storage', event => {
      if (event.key === KEY || event.key === null) location.reload();
    });
    translate();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
