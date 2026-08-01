/* ============================================================
   Dingshengan Building Materials — Main JavaScript
   i18n (Chinese + English), Navigation, FAQ, Form, Animations
   ============================================================ */

// ==================== i18n DATA ====================
const i18n = {
  zh: {
    logo_tag: '建材',

    // Topbar
    nav_home: '首页',
    nav_products: '产品展示',
    nav_features: '核心优势',
    nav_specs: '参数对比',
    nav_factory: '工厂实拍',
    nav_cases: '工程案例',
    nav_faq: '常见问题',
    nav_contact: '联系我们',
    get_quote: '立即询价',

    // Hero
    hero_badge: '15+ 年专业制造经验',
    hero_title: 'ASA合成树脂瓦 & UPVC屋面瓦专家',
    hero_subtitle: 'B1防火 · 30年质保 · OEM/ODM · 全球发货 · ISO认证工厂 · 中国佛山',
    hero_inquiry: '立即询价',
    hero_products: '查看产品 ▸',
    trust1: 'ISO 9001 认证',
    trust2: 'B1 防火等级',
    trust3: 'SGS 检测报告',
    trust4: '出口 30+ 国家',
    stat1: '年行业经验',
    stat2: '㎡ 年产量',
    stat3: '条生产线',
    stat4: '满意客户',

    // About
    about_heading: '关于我们 — Dingshengan 鼎盛安建材',
    about_p1: '<strong>Dingshengan（鼎盛安建材）</strong>成立于2010年，坐落于中国建材之都——广东佛山，是一家集研发、生产、销售、售后于一体的ASA合成树脂瓦和UPVC屋面瓦专业制造商。',
    about_p2: '工厂占地30,000㎡，拥有10条全自动共挤生产线，年产能超过5,000万㎡。产品远销东南亚、中东、非洲、南美等30多个国家和地区，服务于全球各地的经销商、建筑承包商和批发商。',
    about_li1: '10条全自动ASA/PVC共挤生产线',
    about_li2: '30,000㎡工厂，配备自有实验室和配色中心',
    about_li3: 'ISO 9001 · ISO 14001 · CE · SGS 认证',
    about_li4: 'OEM & ODM — 定制颜色、尺寸、厚度、包装',
    about_btn: '合作洽谈 ▸',
    about_badge_year: '始于',

    // Products
    products_title: '产品系列',
    products_subtitle: '全系列屋面解决方案 — 标准规格和定制规格均可提供',

    prod1_tag: '畅销',
    prod1_name: 'ASA西班牙式合成树脂瓦',
    prod1_desc: '旗舰产品，经典西班牙式瓦型。三层共挤技术 — ASA耐候表层 + PVC结构芯层。住宅别墅、商业建筑、平改坡工程的首选方案。',
    spec_width: '宽度：',
    spec_thickness: '厚度：',
    spec_length: '长度：',
    spec_colors: '颜色：',
    spec_warranty: '质保：',
    prod_inquiry: '询价此产品',

    prod2_name: 'UPVC波浪瓦/梯形瓦',
    prod2_desc: '高性价比工业及农业屋面方案。轻质耐用，适用于工厂、仓库、养殖场、车棚和临时建筑。出色的耐化学腐蚀性能。',
    spec_width2: '宽度：',
    spec_thickness2: '厚度：',
    spec_length2: '长度：',
    spec_colors2: '颜色：',
    spec_warranty2: '质保：',

    prod3_tag: '新品',
    prod3_name: '仿古/中式树脂瓦',
    prod3_desc: '传统中式建筑美学与现代ASA耐久性的完美结合。适用于寺庙、古建翻新、度假酒店、园林亭阁等需要仿古效果的文化建筑。',
    spec_colors3: '颜色：',
    spec_warranty3: '质保：',

    // Why Choose Us
    why_overline: '为什么选择 Dingshengan',
    why_title: '我们的树脂瓦有何不同',
    why1_title: 'ASA工程树脂表层',
    why1_desc: '进口ASA树脂配以UV稳定剂，确保20年以上不褪色、不开裂。-40°C至+80°C极端温度下性能稳定。',
    why2_title: 'B1级防火阻燃',
    why2_desc: '经国家权威检测认证达到B1级（难燃）防火标准。离火自熄，数秒内停止燃烧，无熔融滴落物。',
    why3_title: '重量仅为陶瓦的1/6',
    why3_desc: '每平方米仅重6-8kg，大幅减轻屋面结构负荷、节省运输成本、降低安装难度。无需重型吊装设备。',
    why4_title: '100%防水防腐蚀',
    why4_desc: '零吸水率。耐酸雨、盐雾、工业化学品侵蚀。特别适合沿海地区、化工厂区和高湿度环境使用。',
    why5_title: '隔音降噪30dB+',
    why5_desc: '多层复合结构有效吸收雨水撞击噪音。经测试比金属屋面降噪30分贝以上，室内更安静舒适。',
    why6_title: '定制颜色 & OEM服务',
    why6_desc: '自有配色实验室，可调配任意RAL色卡颜色。定制厚度、长度、包装。您的品牌、您的规格 — 我们按需生产。',

    // Comparison
    compare_title: '树脂瓦 vs 传统屋面材料',
    compare_subtitle: '看看为什么全球领先的承包商都在改用ASA合成树脂瓦',
    cmp_item: '对比项目',
    cmp_weight: '每平米重量',
    cmp_life: '使用寿命',
    cmp_fire: '防火等级',
    cmp_impact: '抗冲击性',
    cmp_sound: '隔音效果',
    cmp_install: '安装难度',
    cmp_cost: '综合成本',
    cmp_eco: '环保可回收',

    // Applications
    apps_title: '应用场景',
    app1: '住宅别墅',
    app2: '商业建筑',
    app3: '古建寺庙',
    app4: '工业厂房',
    app5: '新农村建设',
    app6: '车棚雨棚',

    // Factory
    factory_title: '工厂实拍',
    factory_subtitle: '30,000㎡现代化生产基地 · 广东佛山 — 随时欢迎实地考察',
    fac1: '全自动共挤生产线',
    fac2: '质量检测实验室',
    fac3: '成品仓库',
    fac4: '集装箱装货发运',

    // Cases
    cases_title: '全球工程案例',
    cases_subtitle: '产品远销30+国家和地区，品质受全球客户信赖',
    case1_title: '马尼拉住宅小区',
    case1_desc: '500套住宅，80,000㎡西班牙式ASA瓦',
    case2_title: '内罗毕大教堂翻新',
    case2_desc: '标志性教堂屋面改造，仿古树脂瓦',
    case3_title: '曼谷度假别墅',
    case3_desc: '豪华度假村定制赤陶色ASA瓦',
    case4_title: '圣保罗工业园',
    case4_desc: '12栋厂房，100,000㎡UPVC波浪瓦',

    // Certifications
    certs_title: '资质认证',
    cert1_desc: '质量管理体系认证',
    cert2_desc: '环境管理体系认证',
    cert3_desc: '欧盟CE产品认证',
    cert4_desc: '第三方质量检测',

    // FAQ
    faq_title: '常见问题',
    faq1_q: '最小起订量（MOQ）是多少？',
    faq1_a: '标准颜色和规格：500㎡起订。定制颜色/规格：1000㎡起订。样品订单无起订量限制 — 0.5㎡以内免费提供样品。',
    faq2_q: '交货周期多久？',
    faq2_a: '标准订单：收到定金后15-20天发货。定制订单：25-30天发货。FCL整柜在佛山工厂装箱。',
    faq3_q: '是否提供OEM/ODM代工？',
    faq3_a: '是的。我们提供全面的OEM/ODM服务 — 定制配色、定制尺寸、品牌包装、私人标签。',
    faq4_q: '接受哪些付款方式？',
    faq4_a: 'T/T电汇（30%定金，70%发货前付清）、即期信用证、西联汇款。样品订单支持PayPal或全额T/T预付。',
    faq5_q: '出口包装如何保障运输安全？',
    faq5_a: '每片瓦之间珍珠棉隔离 → 免熏蒸木托盘加固 → 缠绕膜密封 → 外层木箱防护。正常运输破损率低于0.1%。',
    faq6_q: '可以来工厂参观吗？',
    faq6_a: '当然可以！我们热烈欢迎客户实地考察。工厂位于广东佛山，距广州白云机场约1小时车程。联系我们安排接送。',

    // CTA
    cta_title: '准备开始您的项目？',
    cta_subtitle: '24小时内获取免费样品、技术咨询和优惠报价',

    // Contact
    contact_title: '联系我们',
    contact_subtitle: '告诉我们您的需求 — 24小时内回复详细报价',
    form_name: '您的姓名 *',
    form_email: '电子邮箱 *',
    form_phone: '电话 / WhatsApp',
    form_country: '所在国家',
    form_product: '您感兴趣的产品',
    form_select: '— 请选择 —',
    form_message: '您的留言 *',
    form_submit: '✉️ 立即发送询价',
    cinfo_address_label: '工厂地址',
    cinfo_address: '广东省佛山市顺德区乐从镇建材大道188号',
    cinfo_phone_label: '电话 / WhatsApp',
    cinfo_email_label: '电子邮箱',
    cinfo_hours_label: '工作时间',
    cinfo_hours: '周一至周六：8:00 - 18:00（北京时间）',

    // Footer
    footer_desc: 'Dingshengan（鼎盛安建材）专业ASA合成树脂瓦和UPVC屋面瓦制造商，位于中国广东佛山。优质产品、实惠价格、全球发货。',
    footer_products_title: '产品',
    footer_links_title: '快速导航',
    footer_contact_title: '联系我们',

    // Form success
    form_success_title: '询价已发送！✅',
    form_success_text: '感谢您的咨询，我们将在24小时内通过邮件或电话回复您。',
  },

  en: {
    logo_tag: 'Building Materials',

    // Topbar
    nav_home: 'Home',
    nav_products: 'Products',
    nav_features: 'Features',
    nav_specs: 'Specs',
    nav_factory: 'Factory',
    nav_cases: 'Projects',
    nav_faq: 'FAQ',
    nav_contact: 'Contact',
    get_quote: 'Get Quote',

    // Hero
    hero_badge: '15+ Years Professional Manufacturer',
    hero_title: 'ASA Synthetic Resin Tile<br>& UPVC Roofing Sheet Expert',
    hero_subtitle: 'B1 Fireproof · 30-Year Warranty · OEM & ODM · Global Shipping · ISO Certified Factory in Foshan, China',
    hero_inquiry: 'Send Inquiry Now',
    hero_products: 'Explore Products ▸',
    trust1: 'ISO 9001 Certified',
    trust2: 'B1 Fire Rating',
    trust3: 'SGS Tested',
    trust4: '30+ Countries Exported',
    stat1: 'Years Experience',
    stat2: '㎡ Annual Output',
    stat3: 'Production Lines',
    stat4: 'Happy Clients',

    // About
    about_heading: 'Who We Are — Dingshengan Building Materials',
    about_p1: 'Founded in 2010 and located in Foshan City — China\'s building materials capital — <strong>Dingshengan</strong> is a professional manufacturer specializing in ASA synthetic resin roof tiles and UPVC roofing sheets. We integrate R&D, production, sales, and after-sales service under one roof.',
    about_p2: 'Our 30,000㎡ factory houses 10 fully-automated co-extrusion lines with an annual capacity exceeding 50 million square meters. We serve distributors, contractors, and wholesalers across Southeast Asia, the Middle East, Africa, South America, and beyond.',
    about_li1: '10 automated ASA/PVC co-extrusion production lines',
    about_li2: '30,000㎡ factory with in-house lab & color-matching center',
    about_li3: 'ISO 9001 · ISO 14001 · CE · SGS certified',
    about_li4: 'OEM & ODM — custom color, size, thickness, packaging',
    about_btn: 'Partner With Us ▸',
    about_badge_year: 'Since',

    // Products
    products_title: 'Our Product Range',
    products_subtitle: 'Comprehensive roofing solutions — standard & custom specifications available',

    prod1_tag: 'Best Seller',
    prod1_name: 'ASA Spanish-style Synthetic Resin Roof Tile',
    prod1_desc: 'Our flagship product with classic Spanish profile. 3-layer co-extrusion technology — ASA weather-resistant surface + PVC structural core. The most popular choice for residential villas, commercial buildings, and flat-to-pitched conversions.',
    spec_width: 'Width: ',
    spec_thickness: 'Thickness: ',
    spec_length: 'Length: ',
    spec_colors: 'Colors: ',
    spec_warranty: 'Warranty: ',
    prod_inquiry: 'Inquire This Product',

    prod2_name: 'UPVC Corrugated Roofing Sheet',
    prod2_desc: 'Cost-effective industrial & agricultural roofing solution. Lightweight yet durable, ideal for factories, warehouses, farms, carports, and temporary structures. Excellent chemical and corrosion resistance.',
    spec_width2: 'Width: ',
    spec_thickness2: 'Thickness: ',
    spec_length2: 'Length: ',
    spec_colors2: 'Colors: ',
    spec_warranty2: 'Warranty: ',

    prod3_tag: 'New',
    prod3_name: 'Antique / Heritage-style Resin Roof Tile',
    prod3_desc: 'Traditional Chinese & Asian architectural aesthetics combined with modern ASA durability. Perfect for temples, heritage renovations, resort hotels, garden pavilions, and cultural buildings requiring authentic antique appearance.',
    spec_colors3: 'Colors: ',
    spec_warranty3: 'Warranty: ',

    // Why Choose Us
    why_overline: 'Why Dingshengan',
    why_title: 'What Makes Our Resin Tiles Different',
    why1_title: 'ASA Engineering Resin Surface',
    why1_desc: 'Imported ASA resin with UV stabilizers ensures zero fading and cracking for 20+ years. Performs in extreme temperatures from -40°C to +80°C.',
    why2_title: 'B1 Fire Retardant Grade',
    why2_desc: 'Officially tested and certified to China B1 (difficult to ignite) fire safety standard. Self-extinguishes within seconds of flame removal. No burning droplets.',
    why3_title: '1/6 the Weight of Clay Tiles',
    why3_desc: 'At just 6-8 kg/㎡, our tiles dramatically reduce structural load, shipping costs, and installation time. No heavy equipment needed.',
    why4_title: '100% Waterproof & Corrosion-free',
    why4_desc: 'Zero water absorption. Unaffected by acid rain, salt spray, or industrial chemicals. Ideal for coastal, chemical plant, and high-humidity environments.',
    why5_title: '30dB+ Noise Reduction',
    why5_desc: 'Multi-layer composite structure absorbs rain impact noise. Significantly quieter than metal roofing — tested to reduce noise by over 30 decibels.',
    why6_title: 'Custom Colors & OEM Service',
    why6_desc: 'In-house color matching lab. Any RAL color available. Custom thickness, length, and packaging. Your brand, your specifications — we manufacture to order.',

    // Comparison
    compare_title: 'Resin Tile vs Traditional Materials',
    compare_subtitle: 'See why leading contractors worldwide are switching to ASA synthetic resin tiles',
    cmp_item: 'Item',
    cmp_weight: 'Weight per ㎡',
    cmp_life: 'Service Life',
    cmp_fire: 'Fire Rating',
    cmp_impact: 'Impact Resistance',
    cmp_sound: 'Sound Insulation',
    cmp_install: 'Installation',
    cmp_cost: 'Overall Cost',
    cmp_eco: 'Eco-friendly',

    // Applications
    apps_title: 'Where Our Tiles Are Used',
    app1: 'Residential Villas',
    app2: 'Commercial Buildings',
    app3: 'Heritage & Temples',
    app4: 'Industrial Plants',
    app5: 'Rural Development',
    app6: 'Carports & Shelters',

    // Factory
    factory_title: 'Inside Our Factory',
    factory_subtitle: '30,000㎡ modern production facility in Foshan, Guangdong — welcome to visit anytime',
    fac1: 'Automated Co-extrusion Lines',
    fac2: 'Quality Control Laboratory',
    fac3: 'Finished Goods Warehouse',
    fac4: 'Container Loading & Shipping',

    // Cases
    cases_title: 'Featured Projects Worldwide',
    cases_subtitle: 'Trusted by clients across 30+ countries',
    case1_title: 'Manila Residential Complex',
    case1_desc: '80,000㎡ Spanish-style ASA tiles for 500-unit housing development',
    case2_title: 'Nairobi Church Roof',
    case2_desc: 'Antique-style resin tiles for a landmark cathedral renovation project',
    case3_title: 'Bangkok Resort Villa',
    case3_desc: 'Luxury resort using custom terracotta ASA tiles for tropical climate',
    case4_title: 'São Paulo Industrial Park',
    case4_desc: '100,000㎡ UPVC corrugated roofing for 12 factory buildings',

    // Certifications
    certs_title: 'Certifications & Quality Assurance',
    cert1_desc: 'Quality Management System',
    cert2_desc: 'Environmental Management',
    cert3_desc: 'European Conformity Certified',
    cert4_desc: 'Third-party Quality Verified',

    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq1_q: 'What is the MOQ (Minimum Order Quantity)?',
    faq1_a: 'Standard colors: 500㎡. Custom colors/specs: 1000㎡. Sample orders have no MOQ — we offer free samples within 0.5㎡.',
    faq2_q: 'How long is the delivery time?',
    faq2_a: 'Standard orders: 15-20 days after deposit. Custom orders: 25-30 days. FCL container loading at our Foshan factory.',
    faq3_q: 'Do you provide OEM / ODM service?',
    faq3_a: 'Yes. We offer full OEM/ODM — custom color matching, custom dimensions, branded packaging, and private labeling.',
    faq4_q: 'What payment terms do you accept?',
    faq4_a: 'T/T (30% deposit, 70% before shipment), L/C at sight, Western Union. For sample orders: PayPal or full T/T in advance.',
    faq5_q: 'How do you package the tiles for export?',
    faq5_a: 'Each tile separated by PE foam, packed on fumigated wooden pallets, wrapped with stretch film, outer wooden crate protection. Damage rate < 0.1%.',
    faq6_q: 'Can I visit your factory?',
    faq6_a: 'Absolutely. We welcome factory visits. We\'re located in Foshan City, Guangdong — 1 hour from Guangzhou Baiyun Airport. Contact us to arrange pickup.',

    // CTA
    cta_title: 'Ready to Start Your Project?',
    cta_subtitle: 'Get free samples, technical consultation, and competitive pricing within 24 hours',

    // Contact
    contact_title: 'Get In Touch',
    contact_subtitle: 'Send us your requirements — we\'ll reply with a detailed quotation within 24 hours',
    form_name: 'Your Name *',
    form_email: 'Email Address *',
    form_phone: 'Phone / WhatsApp',
    form_country: 'Country',
    form_product: 'Product You\'re Interested In',
    form_select: '— Please Select —',
    form_message: 'Your Message *',
    form_submit: '✉️ Send Inquiry Now',
    cinfo_address_label: 'Factory Address',
    cinfo_address: 'No. 188, Jiancai Avenue, Lecong Town, Shunde District, Foshan City, Guangdong Province, China',
    cinfo_phone_label: 'Phone / WhatsApp',
    cinfo_email_label: 'Email',
    cinfo_hours_label: 'Working Hours',
    cinfo_hours: 'Mon-Sat: 8:00 AM - 6:00 PM (UTC+8)',

    // Footer
    footer_desc: 'Professional ASA synthetic resin tile and UPVC roofing sheet manufacturer based in Foshan, China. Quality products, competitive pricing, global shipping.',
    footer_products_title: 'Products',
    footer_links_title: 'Quick Links',
    footer_contact_title: 'Contact',

    // Form success
    form_success_title: 'Inquiry Sent! ✅',
    form_success_text: 'Thank you for your inquiry. We will reply via email or phone within 24 hours.',
  }
};

// ==================== LANGUAGE STATE ====================
const LANG_KEY = 'dga_lang';
let lang = localStorage.getItem(LANG_KEY) || 'zh';

// ==================== APPLY TRANSLATIONS ====================
function t(key) {
  return i18n[lang]?.[key] ?? i18n.en[key] ?? key;
}

function applyLang(l) {
  lang = l;
  localStorage.setItem(LANG_KEY, l);
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';

  // Update lang button states
  document.querySelectorAll('.topbar__lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });

  // Walk all [data-i18n]
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[l]?.[k]) {
      // If the translation contains HTML tags, use innerHTML, otherwise textContent
      if (/<[a-z][\s\S]*>/i.test(i18n[l][k])) {
        el.innerHTML = i18n[l][k];
      } else {
        el.textContent = i18n[l][k];
      }
    }
  });

  // Update document title
  document.title = l === 'zh'
    ? 'Dingshengan 鼎盛安建材 — ASA合成树脂瓦 & UPVC屋面瓦制造商 | 中国佛山'
    : 'Dingshengan — ASA Resin Tile & UPVC Roofing Sheet Manufacturer | Foshan China';

  // Update meta description
  const desc = document.querySelector('meta[name="description"]');
  if (desc) {
    desc.content = l === 'zh'
      ? 'Dingshengan（鼎盛安建材）— 佛山专业ASA合成树脂瓦 & UPVC屋面瓦制造商。15+年经验，B1防火，30年质保，OEM/ODM，全球发货。'
      : 'Dingshengan Building Materials — Professional ASA synthetic resin tile & UPVC roofing sheet manufacturer in Foshan China. 15+ years experience, B1 fireproof, 30-year warranty, OEM/ODM.';
  }

  // Update select options text
  const select = document.querySelector('select[name="product"]');
  if (select) {
    const opts = select.options;
    if (l === 'zh') {
      if (opts[0]) opts[0].textContent = '— 请选择 —';
      if (opts[1]) opts[1].textContent = 'ASA西班牙式合成树脂瓦';
      if (opts[2]) opts[2].textContent = '仿古/中式树脂瓦';
      if (opts[3]) opts[3].textContent = 'UPVC波浪瓦';
      if (opts[4]) opts[4].textContent = '其他 / 不确定';
    } else {
      if (opts[0]) opts[0].textContent = '— Please Select —';
      if (opts[1]) opts[1].textContent = 'ASA Spanish-style Resin Tile';
      if (opts[2]) opts[2].textContent = 'Antique/Heritage Resin Tile';
      if (opts[3]) opts[3].textContent = 'UPVC Corrugated Sheet';
      if (opts[4]) opts[4].textContent = 'Other / Not Sure';
    }
  }
}

// ==================== HEADER SCROLL ====================
let lastY = 0;
const header = document.getElementById('header');

function onScroll() {
  const y = window.scrollY;
  if (y > 120) header.classList.toggle('header--hidden', y > lastY);
  else header.classList.remove('header--hidden');
  lastY = y;

  const bt = document.getElementById('backToTop');
  bt.classList.toggle('visible', y > 600);
}

// ==================== SCROLL ANIMATIONS ====================
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.12 });

function initAnims() {
  document.querySelectorAll('.why-card, .product-row, .case-card, .factory__card, .app-card, .cert-card, .faq-item, .contact-card, .about-strip__image, .about-strip__content').forEach(el => {
    el.classList.add('fade-in');
    io.observe(el);
  });
}

// ==================== MOBILE NAV ====================
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});
nav.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// ==================== FAQ ====================
document.querySelectorAll('.faq-item__q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const was = item.classList.contains('active');
    // Close all siblings in the same column
    const col = item.closest('.faq__col');
    if (col) col.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
    if (!was) item.classList.add('active');
  });
});

// ==================== CONTACT FORM ====================
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());
  if (!data.name || !data.email || !data.message) {
    alert(lang === 'zh' ? '请填写必填字段（姓名、邮箱、留言）。' : 'Please fill in all required fields (Name, Email, Message).');
    return;
  }

  const btn = form.querySelector('button[type="submit"]');
  const orig = btn.textContent;
  btn.textContent = lang === 'zh' ? '发送中...' : 'Sending...';
  btn.disabled = true;

  // Simulate submit
  setTimeout(() => {
    form.style.display = 'none';
    let succ = form.nextElementSibling;
    if (!succ || !succ.classList.contains('form-success')) {
      succ = document.createElement('div');
      succ.className = 'form-success';
      succ.innerHTML = `<div class="form-success__icon">✅</div><h3>${t('form_success_title')}</h3><p>${t('form_success_text')}</p>`;
      form.parentNode.insertBefore(succ, form.nextSibling);
    } else {
      succ.querySelector('h3').textContent = t('form_success_title');
      succ.querySelector('p').textContent = t('form_success_text');
    }
    succ.classList.add('show');
    setTimeout(() => { succ.classList.remove('show'); form.style.display = 'block'; btn.textContent = orig; btn.disabled = false; }, 5000);
  }, 1200);
});

// ==================== BACK TO TOP ====================
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== LANGUAGE SWITCH ====================
document.querySelectorAll('.topbar__lang-btn').forEach(b => {
  b.addEventListener('click', () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang); });
});

// ==================== INIT ====================
function init() {
  applyLang(lang);
  initAnims();
  onScroll();
}
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('DOMContentLoaded', init);
