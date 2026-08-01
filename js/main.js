/* ============================================================
   Dingshengan — Main JS v3
   i18n (zh + en) + Google Translate + FAQ + Form + Animations
   ============================================================ */

const i18n = {
  zh: {
    logo_tag: '屋面瓦制造商',
    nav_home: '首页', nav_asa: 'ASA树脂瓦', nav_pvc: 'PVC波浪瓦', nav_why: '为什么选我们',
    nav_factory: '工厂实拍', nav_faq: '常见问题', nav_contact: '联系我们', get_quote: '立即询价',

    hero_badge: '10年专业屋面瓦制造经验',
    hero_title: 'ASA合成树脂瓦 & PVC波浪瓦屋面材料',
    hero_subtitle: 'B1防火 · 30年质保 · OEM/ODM · 全球发货 · 中国佛山工厂',
    hero_inquiry: '立即询价', hero_products: '查看产品 ▸',
    trust1: 'ISO 9001 认证', trust2: 'B1 防火等级', trust3: 'CE & SGS 检测', trust4: '出口30+国家',
    stat1: '年行业经验', stat2: '㎡ 年产量', stat3: '条生产线', stat4: '满意客户',

    about_heading: 'Dingshengan — 您值得信赖的佛山屋面瓦制造商',
    about_p1: '<strong>Dingshengan（鼎盛安建材）</strong>成立于2016年，是一家专业生产ASA合成树脂瓦和PVC波浪瓦的制造商。公司位于<strong>广东省佛山市</strong>——中国建材行业的中心地带，集研发、生产和全球销售于一体。',
    about_p2: '现代化工厂配备8条全自动共挤生产线和自有质检实验室。年产能超过5,000万㎡，产品远销东南亚、中东、非洲、南美等30多个国家和地区。',
    about_li1: '8条全自动共挤生产线', about_li2: '自有实验室 & 配色中心',
    about_li3: 'ISO 9001 · CE · SGS 认证', about_li4: 'OEM/ODM — 定制颜色、尺寸、厚度、包装',
    about_btn: '合作洽谈 ▸', about_badge_year: '始于',

    prod1_overline: '旗舰产品', prod1_title: 'ASA西班牙式合成树脂瓦',
    prod1_subtitle: '3层共挤核心技术 — 住宅、商业建筑、别墅项目的终极屋面方案',
    prod1_name: 'ASA合成树脂瓦', prod1_tag: '畅销产品',
    prod1_desc: '三层共挤技术：ASA耐候表层 + 抗冲击PVC芯层 + 增强底层。经典西班牙瓦型，219mm节距，融合地中海建筑美学与现代材料科学。',
    spec_width: '宽度', spec_thick: '厚度', spec_length2: '长度', spec_life: '使用寿命',
    spec_fire: '防火等级', spec_warranty2: '质保', spec_colors: '可选颜色：',
    prod_inquiry: '询价 ASA 树脂瓦 ▸',

    prod2_overline: '经济系列', prod2_title: 'UPVC波浪瓦/梯形瓦',
    prod2_subtitle: '高性价比工业&农业屋面方案 — 轻质、耐用、安装便捷',
    prod2_name: 'UPVC波浪瓦', prod2_desc: '采用高品质UPVC原料配以UV稳定剂，出色的耐化学腐蚀性能。适用于工厂、仓库、养殖场、车棚和临时建筑。比金属瓦更轻，隔热性能更好。',
    spec_weight: '重量', prod_inquiry2: '询价 PVC 波浪瓦 ▸',

    compare_title: '树脂瓦 vs 传统材料对比',
    cmp_item: '对比项目', cmp_weight: '每平米重量', cmp_life: '使用寿命', cmp_fire: '防火等级',
    cmp_impact: '抗冲击性', cmp_sound: '隔音效果', cmp_install: '安装速度', cmp_cost: '综合性价比', cmp_eco: '环保可回收',

    why_overline: '为什么选择 Dingshengan', why_title: '我们的产品有何不同',
    why1_title: 'ASA工程树脂表层', why1_desc: '进口ASA树脂+UV稳定剂，20年以上不褪色不开裂。-40°C至+80°C极端环境稳定运行。',
    why2_title: 'B1级防火阻燃', why2_desc: '国家权威检测B1级防火认证。离火自熄，无熔融滴落物，安全保障。',
    why3_title: '重量仅为陶瓦1/6', why3_desc: '每平米仅6-8kg，大幅减轻屋面结构负荷、节省运费、降低安装难度。',
    why4_title: '100%防水防腐', why4_desc: '零吸水率，耐酸雨盐雾化工侵蚀。沿海和高湿环境首选。',
    why5_title: '隔音降噪30dB+', why5_desc: '多层复合结构吸收雨水撞击噪音，比金属屋面安静30分贝以上。',
    why6_title: '定制颜色 & OEM', why6_desc: '自有配色实验室，任意RAL色卡可配。定制厚度、长度、包装，按需生产。',

    apps_title: '应用场景', app1: '住宅别墅', app2: '商业建筑',
    app3: '度假村&寺庙', app4: '工业厂房', app5: '农业&农村', app6: '车棚&雨棚',

    factory_title: '佛山工厂实拍', factory_subtitle: '广东现代化生产基地 — 随时欢迎实地参观考察',
    fac1: '全自动共挤生产线', fac2: '质量检测实验室', fac3: '成品仓库', fac4: '集装箱装货发运',

    cases_title: '全球工程案例', cases_subtitle: '产品远销30+国家，品质受全球客户信赖',
    case1_title: '马尼拉住宅小区', case1_desc: '500套住宅，80,000㎡ ASA西班牙式树脂瓦',
    case2_title: '内罗毕大教堂', case2_desc: '标志性教堂屋面翻新项目',
    case3_title: '曼谷豪华度假村', case3_desc: '定制赤陶色ASA瓦，适应热带气候',
    case4_title: '圣保罗工业园', case4_desc: '12栋厂房，100,000㎡ PVC波浪瓦',

    certs_title: '资质认证与品质保障',
    cert1_desc: '质量管理体系认证', cert2_desc: 'B1级难燃认证',
    cert3_desc: '欧盟CE产品认证', cert4_desc: '第三方质量检测',

    faq_title: '常见问题',
    faq1_q: '最小起订量是多少？', faq1_a: '标准颜色/规格：500㎡。定制颜色/规格：1000㎡。样品订单无起订量限制，0.5㎡内免费。',
    faq2_q: '交货周期多久？', faq2_a: '标准订单收到定金后15-20天发货。定制订单25-30天。佛山工厂FCL整柜装货。',
    faq3_q: '提供OEM/ODM代工吗？', faq3_a: '是的。全面OEM/ODM服务：定制配色、定制尺寸、品牌包装、私人标签。',
    faq4_q: '接受哪些付款方式？', faq4_a: 'T/T电汇（30%定金，70%发货前）、即期信用证、西联汇款。样品支持PayPal。',
    faq5_q: '出口包装如何保障？', faq5_a: '珍珠棉隔层→免熏蒸木托盘→缠绕膜密封→外层木箱。运输破损率低于0.1%。',
    faq6_q: '可以参观工厂吗？', faq6_a: '当然！我们位于广东佛山，距广州白云机场约1小时车程。联系我们安排接送。',

    cta_title: '准备开始您的项目？', cta_subtitle: '24小时内获取免费样品、技术支持与优惠报价',

    contact_title: '联系我们', contact_subtitle: '告诉我们您的需求 — 24小时内回复详细报价',
    form_name: '您的姓名 *', form_email: '电子邮箱 *', form_phone: '电话 / WhatsApp',
    form_country: '所在国家', form_product: '感兴趣的产品', form_select: '— 请选择 —',
    form_message: '您的留言 *', form_submit: '✉️ 立即发送询价',
    cinfo_address_label: '工厂地址', cinfo_address: '中国广东省佛山市',
    cinfo_phone_label: '电话 / WhatsApp', cinfo_email_label: '电子邮箱',
    cinfo_hours_label: '工作时间', cinfo_hours: '周一至周六：8:00-18:00 (UTC+8)',

    footer_desc: 'Dingshengan 专业ASA合成树脂瓦和PVC波浪瓦制造商，位于中国广东佛山。优质产品、实惠价格、全球发货。',
    footer_products_title: '产品', footer_links_title: '快速导航', footer_contact_title: '联系我们',
    footer_asa: 'ASA合成树脂瓦', footer_pvc: 'PVC波浪瓦', footer_oem: '定制/OEM订单',

    form_success_title: '询价已发送！✅', form_success_text: '感谢您的咨询，我们将在24小时内回复。',
  },

  en: {
    logo_tag: 'Roofing Manufacturer',
    nav_home: 'Home', nav_asa: 'ASA Tile', nav_pvc: 'PVC Sheet', nav_why: 'Why Us',
    nav_factory: 'Factory', nav_faq: 'FAQ', nav_contact: 'Contact', get_quote: 'Get Quote',

    hero_badge: '10 Years Professional Roofing Manufacturer',
    hero_title: 'ASA Synthetic Resin Tile & PVC Corrugated Roofing Sheet',
    hero_subtitle: 'B1 Fireproof · 30-Year Warranty · OEM & ODM · Global Shipping · Foshan China Factory',
    hero_inquiry: 'Send Inquiry Now', hero_products: 'Explore Products ▸',
    trust1: 'ISO 9001 Certified', trust2: 'B1 Fire Rating', trust3: 'CE & SGS Tested', trust4: 'Export 30+ Countries',
    stat1: 'Years Experience', stat2: '㎡ Annual Output', stat3: 'Production Lines', stat4: 'Happy Clients',

    about_heading: 'Dingshengan — Your Trusted Roofing Manufacturer in Foshan',
    about_p1: 'Founded in 2016, <strong>Dingshengan</strong> is a professional manufacturer of ASA synthetic resin roof tiles and PVC corrugated sheets. Located in <strong>Foshan, Guangdong</strong> — the heart of China\'s building materials industry — we integrate R&D, production, and global sales.',
    about_p2: 'Our modern factory is equipped with 8 automated co-extrusion lines and an in-house QC lab. With 50M+ ㎡ annual output, we serve distributors, contractors, and wholesalers across Southeast Asia, the Middle East, Africa, South America, and beyond.',
    about_li1: '8 automated co-extrusion lines', about_li2: 'In-house color lab & QC center',
    about_li3: 'ISO 9001 · CE · SGS certified', about_li4: 'OEM/ODM — custom color, size, packaging',
    about_btn: 'Partner With Us ▸', about_badge_year: 'Since',

    prod1_overline: 'Flagship Product', prod1_title: 'ASA Spanish-style Synthetic Resin Roof Tile',
    prod1_subtitle: 'Premium 3-layer co-extrusion — the ultimate roofing solution for residential, commercial & villa projects',
    prod1_name: 'ASA Synthetic Resin Roof Tile', prod1_tag: 'Best Seller',
    prod1_desc: '3-layer co-extrusion: ASA weather-proof surface + impact-resistant PVC core + reinforced bottom layer. Classic Spanish profile with 219mm pitch, delivering elegant Mediterranean aesthetics with modern material science.',
    spec_width: 'Width', spec_thick: 'Thickness', spec_length2: 'Length', spec_life: 'Service Life',
    spec_fire: 'Fire Rating', spec_warranty2: 'Warranty', spec_colors: 'Available Colors:',
    prod_inquiry: 'Inquire ASA Resin Tile ▸',

    prod2_overline: 'Economy Series', prod2_title: 'UPVC Corrugated Roofing Sheet',
    prod2_subtitle: 'Cost-effective industrial & agricultural roofing — lightweight, durable, and easy to install',
    prod2_name: 'UPVC Corrugated Roofing Sheet',
    prod2_desc: 'Made from high-quality UPVC with UV stabilizers. Excellent chemical and corrosion resistance — ideal for factories, warehouses, farms, carports, and temporary structures. Much lighter than metal sheets with better insulation.',
    spec_weight: 'Weight', prod_inquiry2: 'Inquire PVC Sheet ▸',

    compare_title: 'Why Resin Tile Beats Traditional Materials',
    cmp_item: 'Item', cmp_weight: 'Weight per ㎡', cmp_life: 'Service Life', cmp_fire: 'Fire Rating',
    cmp_impact: 'Impact Resistance', cmp_sound: 'Sound Insulation', cmp_install: 'Install Speed', cmp_cost: 'Overall Value', cmp_eco: 'Eco-friendly',

    why_overline: 'Why Dingshengan', why_title: 'What Makes Our Tiles Different',
    why1_title: 'ASA Engineering Resin Surface', why1_desc: 'Imported ASA resin with UV stabilizers. Zero fading for 20+ years. Performs in -40°C to +80°C without cracking or warping.',
    why2_title: 'B1 Fire Retardant Grade', why2_desc: 'Certified to China B1 fire safety standard. Self-extinguishes within seconds. No burning droplets.',
    why3_title: '1/6 the Weight of Clay Tiles', why3_desc: 'At just 6-8 kg/㎡, our tiles dramatically reduce structural load, shipping costs, and installation time.',
    why4_title: '100% Waterproof & Corrosion-free', why4_desc: 'Zero water absorption. Impervious to acid rain, salt spray, and industrial chemicals. Ideal for coastal areas.',
    why5_title: '30dB+ Noise Reduction', why5_desc: 'Multi-layer structure absorbs rain impact. 30+ decibels quieter than metal roofing — noticeably more comfortable.',
    why6_title: 'Custom Colors & OEM Service', why6_desc: 'In-house color lab matches any RAL color. Custom thickness, length, and branded packaging. Built to your specs.',

    apps_title: 'Where Our Tiles Are Used',
    app1: 'Residential Villas', app2: 'Commercial Buildings', app3: 'Resorts & Temples',
    app4: 'Industrial Plants', app5: 'Rural & Farm', app6: 'Carports & Shelters',

    factory_title: 'Inside Our Foshan Factory',
    factory_subtitle: 'Modern production facility in Guangdong — welcome to visit anytime',
    fac1: 'Automated Co-extrusion Lines', fac2: 'Quality Control Lab',
    fac3: 'Finished Goods Warehouse', fac4: 'Container Loading & Export',

    cases_title: 'Global Project Cases', cases_subtitle: 'Trusted by contractors & distributors across 30+ countries',
    case1_title: 'Manila Residential Complex', case1_desc: '80,000㎡ ASA tiles for 500-unit development',
    case2_title: 'Nairobi Cathedral Roof', case2_desc: 'Landmark church renovation project',
    case3_title: 'Bangkok Luxury Resort', case3_desc: 'Custom terracotta ASA tiles for tropical climate',
    case4_title: 'São Paulo Industrial Park', case4_desc: '100,000㎡ PVC corrugated for 12 factory buildings',

    certs_title: 'Certifications & Quality Assurance',
    cert1_desc: 'Quality Management System', cert2_desc: 'B1 Fire Safety Certified',
    cert3_desc: 'European Conformity', cert4_desc: 'Third-party Quality Verified',

    faq_title: 'Frequently Asked Questions',
    faq1_q: 'What is the MOQ?', faq1_a: 'Standard colors: 500㎡. Custom: 1000㎡. Free samples within 0.5㎡ — no MOQ for samples.',
    faq2_q: 'How long is delivery?', faq2_a: 'Standard: 15-20 days after deposit. Custom: 25-30 days. FCL loading at our Foshan factory.',
    faq3_q: 'Do you offer OEM/ODM?', faq3_a: 'Yes. Full OEM/ODM: custom colors, dimensions, branded packaging, and private labeling.',
    faq4_q: 'Payment terms?', faq4_a: 'T/T (30% deposit, 70% before shipment), L/C at sight, Western Union. Sample: PayPal or full T/T.',
    faq5_q: 'How are tiles packaged?', faq5_a: 'PE foam between tiles → fumigated pallets → stretch wrap → wooden crate. Damage rate below 0.1%.',
    faq6_q: 'Can I visit the factory?', faq6_a: 'Absolutely! We\'re in Foshan, Guangdong — 1 hour from Guangzhou Airport. Contact us for pickup.',

    cta_title: 'Ready to Start Your Project?', cta_subtitle: 'Free samples, technical support & competitive pricing — reply within 24 hours',

    contact_title: 'Get In Touch', contact_subtitle: 'Tell us your requirements — detailed quotation within 24 hours',
    form_name: 'Your Name *', form_email: 'Email Address *', form_phone: 'Phone / WhatsApp',
    form_country: 'Country', form_product: 'Product Interested In', form_select: '— Please Select —',
    form_message: 'Your Message *', form_submit: '✉️ Send Inquiry Now',
    cinfo_address_label: 'Factory Address', cinfo_address: 'Foshan City, Guangdong Province, China',
    cinfo_phone_label: 'Phone / WhatsApp', cinfo_email_label: 'Email',
    cinfo_hours_label: 'Working Hours', cinfo_hours: 'Mon-Sat: 8:00-18:00 (UTC+8)',

    footer_desc: 'Professional ASA resin tile & PVC roofing sheet manufacturer based in Foshan, Guangdong, China. Quality products, competitive pricing, global shipping since 2016.',
    footer_products_title: 'Products', footer_links_title: 'Quick Links', footer_contact_title: 'Contact',
    footer_asa: 'ASA Resin Tile', footer_pvc: 'PVC Corrugated Sheet', footer_oem: 'Custom / OEM Orders',

    form_success_title: 'Inquiry Sent! ✅', form_success_text: 'Thank you! We will reply within 24 hours.',
  }
};

// ==================== LANGUAGE ====================
const LK = 'dga_lang';
let lang = localStorage.getItem(LK) || 'zh';

function applyLang(l) {
  lang = l;
  localStorage.setItem(LK, l);
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('.topbar__lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[l]?.[k]) {
      /<[a-z][\s\S]*>/i.test(i18n[l][k]) ? el.innerHTML = i18n[l][k] : el.textContent = i18n[l][k];
    }
  });
  document.title = l === 'zh'
    ? 'Dingshengan — ASA合成树脂瓦 & PVC波浪瓦制造商 | 中国佛山'
    : 'Dingshengan — ASA Resin Tile & PVC Roofing Sheet Manufacturer | Foshan China';
  // Update select
  const sel = document.querySelector('select[name="product"]');
  if (sel && sel.options) {
    const opts = [[l === 'zh' ? '— 请选择 —' : '— Please Select —', ''],
      ['ASA Spanish Resin Tile', 'ASA'], ['UPVC Corrugated Sheet', 'PVC'],
      [l === 'zh' ? '两种都需要' : 'Both Products', 'Both']];
    opts.forEach((o, i) => { if (sel.options[i]) sel.options[i].textContent = o[0]; });
  }
}

// ==================== HEADER SCROLL ====================
let lastY = 0;
function onScroll() {
  const y = window.scrollY;
  document.getElementById('header').classList.toggle('header--hidden', y > 120 && y > lastY);
  lastY = y;
  document.getElementById('backToTop').classList.toggle('visible', y > 600);
}

// ==================== SCROLL ANIMATION ====================
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

function initAnims() {
  document.querySelectorAll('.why-card,.product-detail,.case-card,.factory__card,.app-card,.cert-card,.faq-item,.contact-card,.about-strip__image,.about-strip__content').forEach(el => {
    el.classList.add('fade-in'); io.observe(el);
  });
}

// ==================== MOBILE NAV ====================
const menuBtn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active'); nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menuBtn.classList.remove('active'); nav.classList.remove('active'); document.body.style.overflow = '';
}));

// ==================== FAQ ====================
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement, was = item.classList.contains('active');
    const col = item.closest('.faq__col');
    if (col) col.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
    if (!was) item.classList.add('active');
  });
});

// ==================== CONTACT FORM ====================
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(e.target), data = Object.fromEntries(fd.entries());
  if (!data.name || !data.email || !data.message) {
    alert(lang === 'zh' ? '请填写姓名、邮箱和留言。' : 'Please fill in Name, Email, and Message.');
    return;
  }
  const btn = e.target.querySelector('button'), orig = btn.textContent;
  btn.textContent = lang === 'zh' ? '发送中...' : 'Sending...'; btn.disabled = true;
  setTimeout(() => {
    e.target.style.display = 'none';
    let s = e.target.nextElementSibling;
    if (!s || !s.classList.contains('form-success')) {
      s = document.createElement('div'); s.className = 'form-success';
      s.innerHTML = `<div class="form-success__icon">✅</div><h3>${i18n[lang].form_success_title}</h3><p>${i18n[lang].form_success_text}</p>`;
      e.target.parentNode.insertBefore(s, e.target.nextSibling);
    } else {
      s.querySelector('h3').textContent = i18n[lang].form_success_title;
      s.querySelector('p').textContent = i18n[lang].form_success_text;
    }
    s.classList.add('show');
    setTimeout(() => { s.classList.remove('show'); e.target.style.display = 'block'; btn.textContent = orig; btn.disabled = false; }, 5000);
  }, 1200);
});

// ==================== BACK TO TOP ====================
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== LANG SWITCH ====================
document.querySelectorAll('.topbar__lang-btn').forEach(b => {
  b.addEventListener('click', () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang); });
});

// ==================== INIT ====================
function init() { applyLang(lang); initAnims(); onScroll(); }
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('DOMContentLoaded', init);
