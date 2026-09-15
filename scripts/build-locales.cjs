// Build committed static pages; no browser or network is used.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const cp = require('node:child_process');
const root = path.resolve(__dirname, '..');
const context = {};
const source = fs.readFileSync(path.join(root, 'js/main-v11.js'), 'utf8').split('// ==================== LANGUAGE ====================')[0];
vm.runInNewContext(source + fs.readFileSync(path.join(root, 'js/seo-content.js'), 'utf8') + '\nObject.assign(i18n.en, seoContent.en); Object.assign(i18n.zh, seoContent.zh); globalThis.catalog = i18n;', context);
cp.execFileSync(process.env.PYTHON || 'python', [path.join(__dirname, 'build-locales.py')], {
  input: JSON.stringify(context.catalog), cwd: root, stdio: ['pipe', 'inherit', 'inherit']
});
