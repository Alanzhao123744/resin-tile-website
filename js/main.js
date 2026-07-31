/* ============================================================
   RESIN TILE WEBSITE — Main JavaScript
   i18n, Navigation, Animations, Form Handling
   ============================================================ */

// ==================== i18n TRANSLATIONS ====================
const translations = {
  zh: {
    // Nav
    nav_home: '首页',
    nav_about: '关于树脂瓦',
    nav_features: '产品优势',
    nav_products: '产品展示',
    nav_scenarios: '应用场景',
    nav_cases: '工程案例',
    nav_contact: '联系我们',
    header_phone: '📞 400-888-9999',

    // Hero
    hero_title: '高品质合成树脂瓦',
    hero_subtitle: '专业ASA合成树脂瓦制造商 · 15年行业经验 · 出口全球30+国家',
    hero_btn_products: '查看产品',
    hero_btn_contact: '立即咨询',
    stat_years: '年行业经验',
    stat_projects: '工程项目',
    stat_countries: '出口国家',
    stat_sqm: '年产量(㎡)',

    // About
    about_title: '什么是合成树脂瓦？',
    about_subtitle: '新一代环保屋面材料，引领绿色建筑潮流',
    about_p1: '合成树脂瓦是采用高耐候性ASA工程树脂与PVC共挤复合而成的新型屋面材料，具有重量轻、强度高、耐腐蚀、色彩艳丽等优异性能，是国家大力推广的环保节能建材。',
    about_p2: '产品广泛应用于住宅小区、别墅、景区建筑、工业厂房、新农村建设、平改坡工程等领域，是现代建筑屋面的理想选择。',
    about_li1: 'ASA工程树脂表层 — 超强耐候，色彩持久不褪',
    about_li2: 'PVC芯层 — 高强度、抗冲击、隔音隔热',
    about_li3: '环保配方 — 无毒无害，可回收再利用',
    about_li4: '使用寿命 — 正常使用可达30年以上',

    // Features
    features_title: '产品核心优势',
    features_subtitle: '六大核心优势，重新定义屋面材料标准',
    feat1_title: '超强耐候',
    feat1_desc: 'ASA工程树脂表层，抗紫外线能力卓越，-40°C至80°C环境不变形，使用寿命长达30年以上',
    feat2_title: '防火阻燃',
    feat2_desc: '达到国家B1级防火标准，离火自熄，不产生熔滴，有效保障建筑消防安全',
    feat3_title: '隔音降噪',
    feat3_desc: '多层复合结构有效阻隔雨声和外界噪音，隔音效果比传统瓦片提升60%以上',
    feat4_title: '隔热保温',
    feat4_desc: '导热系数低至0.15W/(m·K)，夏季有效阻隔室外热量，冬季减少室内热量流失',
    feat5_title: '色彩持久',
    feat5_desc: '采用进口色母粒，颜色均匀持久，历经风雨日晒不褪色，保持建筑美观长达20年',
    feat6_title: '安装便捷',
    feat6_desc: '重量仅为传统瓦片的1/6，搬运轻便，施工效率提升3倍，大幅降低人工成本',

    // Comparison
    compare_title: '与传统屋面材料对比',
    compare_col_item: '对比项目',
    compare_row1: '使用寿命',
    compare_row2: '重量(kg/㎡)',
    compare_row3: '抗冲击性',
    compare_row4: '隔音效果',
    compare_row5: '防火等级',
    compare_row6: '安装难度',
    compare_row7: '综合成本',

    // Products
    products_title: '产品展示',
    products_subtitle: '多款经典产品，满足不同建筑风格需求',
    prod1_name: '仿古树脂瓦',
    prod1_spec: '规格: 1050mm × 960mm',
    prod2_name: 'ASA合成树脂瓦',
    prod2_spec: '规格: 1050mm × 960mm / 可定制',
    prod3_name: 'PVC波浪瓦',
    prod3_spec: '规格: 830mm / 930mm / 1130mm',
    prod4_name: '平板树脂瓦',
    prod4_spec: '规格: 1000mm × 2000mm / 可定制',

    // Specs
    specs_title: '产品技术参数',
    spec1_label: '标准宽度',
    spec2_label: '标准长度',
    spec3_label: '厚度范围',
    spec4_label: '有效面积',
    spec5_label: '耐温范围',
    spec6_label: '拉伸强度',
    spec7_label: '防火等级',
    spec8_label: '质保年限',

    // Scenarios
    scenarios_title: '应用场景',
    scenarios_subtitle: '广泛适用于各类建筑屋面，满足多元化需求',
    scene1: '住宅小区',
    scene2: '豪华别墅',
    scene3: '景区建筑',
    scene4: '工业厂房',
    scene5: '新农村建设',
    scene6: '平改坡工程',

    // Cases
    cases_title: '工程案例',
    cases_subtitle: '5000+工程项目的共同选择，品质值得信赖',
    case1_title: '绿地·国际花都',
    case1_desc: '10万㎡高端住宅小区屋面工程',
    case2_title: '苏州园林改造',
    case2_desc: '仿古建筑屋面翻新，仿古树脂瓦应用',
    case3_title: '马来西亚度假村',
    case3_desc: '热带气候条件，ASA耐候树脂瓦应用',
    case4_title: '昆山工业园区',
    case4_desc: '20万㎡工业厂房PVC波浪瓦工程',

    // Company
    company_title: '关于我们',
    company_p1: '鑫源建材成立于2009年，是一家集研发、生产、销售、服务于一体的合成树脂瓦专业制造商。公司位于中国建材之都——广东省佛山市，占地面积超过30,000平方米，拥有10条全自动生产线。',
    company_p2: '公司先后通过ISO9001质量管理体系认证、ISO14001环境管理体系认证，产品远销东南亚、中东、非洲、南美等30多个国家和地区，深受国内外客户信赖。',
    cert1: 'ISO 9001:2015',
    cert2: 'ISO 14001:2015',
    cert3: 'CE 认证',
    cert4: 'SGS 检测报告',

    // Testimonials
    testimonials_title: '客户评价',
    testi1_text: '"与鑫源合作5年，产品品质始终稳定，发货准时，是我们最信赖的屋面材料供应商。"',
    testi1_author: '— 王建国 · 恒大建工集团采购总监',
    testi2_text: '"我们非洲项目的树脂瓦全由鑫源供应，耐候表现优异，客户满意度非常高。"',
    testi2_author: '— Ahmed Hassan · Dubai Construction LLC',
    testi3_text: '"产品颜色非常正，仿古效果逼真，安装师傅都夸好施工，客户很满意。"',
    testi3_author: '— 李明 · 绿城建筑装饰总经理',

    // FAQ
    faq_title: '常见问题',
    faq1_q: '树脂瓦的使用寿命是多长？',
    faq1_a: '优质ASA合成树脂瓦在正常使用条件下，使用寿命可达30年以上。表层ASA材料的耐候性能决定了产品的使用寿命，鑫源采用进口ASA原料，确保超长使用寿命。',
    faq2_q: '树脂瓦会不会褪色？',
    faq2_a: 'ASA工程树脂具有优异的抗紫外线和耐候性能，颜色稳定性极佳。鑫源树脂瓦采用进口色母粒，颜色持久不褪，正常使用20年内无明显色差。',
    faq3_q: '最小起订量是多少？',
    faq3_a: '常规颜色和规格起订量为500㎡，特殊颜色和定制规格起订量为1000㎡。样品订单不受起订量限制，欢迎联系我们索取样品。',
    faq4_q: '运输过程中瓦片会损坏吗？',
    faq4_a: '我们采用专业的包装方案：每片瓦之间用珍珠棉隔离，托盘加固，缠绕膜密封，外层木箱防护。正常运输破损率低于0.1%。',

    // Contact
    contact_title: '联系我们',
    contact_subtitle: '立即联系我们，获取免费样品和报价方案',
    form_name: '姓名 / Name',
    form_email: '邮箱 / Email',
    form_phone: '电话 / Phone',
    form_message: '留言内容 / Message',
    form_submit: '发送询价 / Send Inquiry',
    form_success_title: '提交成功！',
    form_success_text: '感谢您的咨询，我们将在24小时内与您联系。',
    info_address_label: '公司地址',
    info_address: '广东省佛山市顺德区乐从镇塑料大道88号',
    info_phone_label: '联系电话',
    info_email_label: '电子邮箱',
    info_hours_label: '工作时间',
    info_hours: '周一至周六 8:00 - 18:00',

    // Footer
    footer_about: '专业合成树脂瓦制造商，15年行业深耕，服务全球30+国家和地区。提供高品质ASA树脂瓦、仿古瓦、PVC波浪瓦等系列产品。',
    footer_quick_links: '快速导航',
    footer_products: '产品系列',
    footer_contact_title: '联系方式',
  },

  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About',
    nav_features: 'Features',
    nav_products: 'Products',
    nav_scenarios: 'Applications',
    nav_cases: 'Projects',
    nav_contact: 'Contact',
    header_phone: '📞 +86-400-888-9999',

    // Hero
    hero_title: 'Premium Synthetic Resin Tiles',
    hero_subtitle: 'Professional ASA Resin Tile Manufacturer · 15 Years Experience · Exported to 30+ Countries',
    hero_btn_products: 'View Products',
    hero_btn_contact: 'Get a Quote',
    stat_years: 'Years Experience',
    stat_projects: 'Completed Projects',
    stat_countries: 'Export Countries',
    stat_sqm: 'Annual Output (㎡)',

    // About
    about_title: 'What Are Synthetic Resin Tiles?',
    about_subtitle: 'Next-generation eco-friendly roofing material leading the green building trend',
    about_p1: 'Synthetic resin tiles are innovative roofing materials made from highly weather-resistant ASA engineering resin co-extruded with PVC. They feature lightweight construction, high strength, corrosion resistance, and vibrant colors — recognized as eco-friendly building materials promoted by national standards.',
    about_p2: 'Our products are widely used in residential communities, villas, scenic buildings, industrial plants, new rural construction, and flat-to-pitched roof conversion projects — the ideal choice for modern building roofing.',
    about_li1: 'ASA Engineering Resin Surface — Superior weather resistance, long-lasting color',
    about_li2: 'PVC Core Layer — High strength, impact resistant, sound & heat insulation',
    about_li3: 'Eco-friendly Formula — Non-toxic, recyclable',
    about_li4: 'Service Life — 30+ years under normal conditions',

    // Features
    features_title: 'Core Product Advantages',
    features_subtitle: 'Six major advantages that redefine roofing material standards',
    feat1_title: 'Superior Weatherability',
    feat1_desc: 'ASA engineering resin surface with excellent UV resistance. Performs flawlessly from -40°C to 80°C. Service life exceeding 30 years.',
    feat2_title: 'Fire Retardant',
    feat2_desc: 'Meets national B1 fire rating standard. Self-extinguishing, no molten droplets. Effectively ensures building fire safety.',
    feat3_title: 'Sound Insulation',
    feat3_desc: 'Multi-layer composite structure effectively blocks rain noise and external sounds. Sound insulation improved by over 60% compared to traditional tiles.',
    feat4_title: 'Thermal Insulation',
    feat4_desc: 'Thermal conductivity as low as 0.15W/(m·K). Effectively blocks outdoor heat in summer and reduces indoor heat loss in winter.',
    feat5_title: 'Long-lasting Color',
    feat5_desc: 'Imported color masterbatch ensures uniform, durable color. No fading through years of rain and sun exposure. Maintains beauty for up to 20 years.',
    feat6_title: 'Easy Installation',
    feat6_desc: 'Weighing only 1/6 of traditional tiles. Lightweight and easy to handle. Installation efficiency increased 3x, significantly reducing labor costs.',

    // Comparison
    compare_title: 'Comparison with Traditional Roofing Materials',
    compare_col_item: 'Item',
    compare_row1: 'Service Life',
    compare_row2: 'Weight (kg/㎡)',
    compare_row3: 'Impact Resistance',
    compare_row4: 'Sound Insulation',
    compare_row5: 'Fire Rating',
    compare_row6: 'Installation Difficulty',
    compare_row7: 'Overall Cost',

    // Products
    products_title: 'Product Showcase',
    products_subtitle: 'Multiple classic product lines to meet diverse architectural style needs',
    prod1_name: 'Antique-style Resin Tile',
    prod1_spec: 'Size: 1050mm × 960mm',
    prod2_name: 'ASA Synthetic Resin Tile',
    prod2_spec: 'Size: 1050mm × 960mm / Customizable',
    prod3_name: 'PVC Corrugated Sheet',
    prod3_spec: 'Size: 830mm / 930mm / 1130mm',
    prod4_name: 'Flat Resin Tile',
    prod4_spec: 'Size: 1000mm × 2000mm / Customizable',

    // Specs
    specs_title: 'Technical Specifications',
    spec1_label: 'Standard Width',
    spec2_label: 'Standard Length',
    spec3_label: 'Thickness Range',
    spec4_label: 'Effective Area',
    spec5_label: 'Temperature Range',
    spec6_label: 'Tensile Strength',
    spec7_label: 'Fire Rating',
    spec8_label: 'Warranty Period',

    // Scenarios
    scenarios_title: 'Application Scenarios',
    scenarios_subtitle: 'Widely applicable to various building types, meeting diverse needs',
    scene1: 'Residential Community',
    scene2: 'Luxury Villa',
    scene3: 'Scenic Architecture',
    scene4: 'Industrial Plant',
    scene5: 'New Rural Construction',
    scene6: 'Flat-to-Pitched Conversion',

    // Cases
    cases_title: 'Project Cases',
    cases_subtitle: 'The trusted choice of 5000+ engineering projects worldwide',
    case1_title: 'Greenland · International City',
    case1_desc: '100,000 ㎡ premium residential roofing project',
    case2_title: 'Suzhou Garden Renovation',
    case2_desc: 'Heritage building roof renovation with antique-style resin tiles',
    case3_title: 'Malaysia Resort',
    case3_desc: 'Tropical climate ASA weather-resistant resin tile application',
    case4_title: 'Kunshan Industrial Park',
    case4_desc: '200,000 ㎡ industrial plant PVC corrugated sheet project',

    // Company
    company_title: 'About Us',
    company_p1: 'Founded in 2009, Xinyuan Building Materials is a professional synthetic resin tile manufacturer integrating R&D, production, sales, and service. Located in Foshan City, Guangdong Province — China\'s building materials hub — our factory spans over 30,000 ㎡ with 10 fully automated production lines.',
    company_p2: 'The company has obtained ISO9001 quality management system certification and ISO14001 environmental management system certification. Our products are exported to over 30 countries and regions across Southeast Asia, the Middle East, Africa, and South America, earning the trust of customers worldwide.',
    cert1: 'ISO 9001:2015',
    cert2: 'ISO 14001:2015',
    cert3: 'CE Certified',
    cert4: 'SGS Test Report',

    // Testimonials
    testimonials_title: 'Customer Testimonials',
    testi1_text: '"We have been cooperating with Xinyuan for 5 years. Their product quality is consistently stable and deliveries are on time. They are our most trusted roofing material supplier."',
    testi1_author: '— Jianguo Wang · Purchasing Director, Hengda Construction Group',
    testi2_text: '"All resin tiles for our Africa projects are supplied by Xinyuan. The weather resistance performance is outstanding, and customer satisfaction is very high."',
    testi2_author: '— Ahmed Hassan · Dubai Construction LLC',
    testi3_text: '"The product colors are excellent with a realistic antique effect. The installers praise how easy they are to work with. Our clients are very satisfied."',
    testi3_author: '— Ming Li · General Manager, Greentown Building Decoration',

    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq1_q: 'How long is the service life of resin tiles?',
    faq1_a: 'High-quality ASA synthetic resin tiles can last over 30 years under normal use conditions. The weather resistance of the ASA surface layer determines the product\'s lifespan. Xinyuan uses imported ASA raw materials to ensure an exceptionally long service life.',
    faq2_q: 'Do resin tiles fade over time?',
    faq2_a: 'ASA engineering resin features excellent UV and weather resistance with outstanding color stability. Xinyuan resin tiles use imported color masterbatch for long-lasting, fade-resistant color — no noticeable color difference within 20 years of normal use.',
    faq3_q: 'What is the minimum order quantity?',
    faq3_a: 'The MOQ for standard colors and specifications is 500 ㎡. For special colors and custom specifications, the MOQ is 1000 ㎡. Sample orders are not subject to MOQ restrictions — contact us to request samples.',
    faq4_q: 'Will the tiles be damaged during transportation?',
    faq4_a: 'We use professional packaging: each tile is separated by pearl cotton, palletized and reinforced, sealed with stretch film, and protected with an outer wooden crate. Normal transportation damage rate is below 0.1%.',

    // Contact
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch today for free samples and a quotation',
    form_name: 'Name',
    form_email: 'Email',
    form_phone: 'Phone',
    form_message: 'Message',
    form_submit: 'Send Inquiry',
    form_success_title: 'Submitted Successfully!',
    form_success_text: 'Thank you for your inquiry. We will contact you within 24 hours.',
    info_address_label: 'Company Address',
    info_address: 'No. 88, Plastic Avenue, Lecong Town, Shunde District, Foshan City, Guangdong Province, China',
    info_phone_label: 'Phone',
    info_email_label: 'Email',
    info_hours_label: 'Working Hours',
    info_hours: 'Monday - Saturday, 8:00 - 18:00',

    // Footer
    footer_about: 'Professional synthetic resin tile manufacturer with 15 years of industry expertise, serving 30+ countries and regions worldwide. We provide high-quality ASA resin tiles, antique-style tiles, PVC corrugated sheets, and more.',
    footer_quick_links: 'Quick Links',
    footer_products: 'Product Lines',
    footer_contact_title: 'Contact Info',
  }
};

// ==================== LANGUAGE MANAGEMENT ====================
let currentLang = localStorage.getItem('lang') || 'zh';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update lang buttons
  document.querySelectorAll('.header__lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholder translations
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update comparison table content since some cells have HTML structure
  updateComparisonTable(lang);
}

function updateComparisonTable(lang) {
  // Comparison table items: row1-row7 map to translate keys
  const rowKeys = ['compare_row1','compare_row2','compare_row3','compare_row4','compare_row5','compare_row6','compare_row7'];
  const rows = document.querySelectorAll('.comparison__table tbody tr');
  rows.forEach((row, i) => {
    const firstCell = row.querySelector('td');
    if (firstCell && rowKeys[i]) {
      firstCell.textContent = translations[lang][rowKeys[i]];
    }
  });

  // Update table header
  const headerItem = document.querySelector('.comparison__table thead th');
  if (headerItem) {
    headerItem.textContent = translations[lang]['compare_col_item'];
  }
}

// ==================== HEADER SCROLL BEHAVIOR ====================
const header = document.getElementById('header');
let lastScrollY = 0;

function onScroll() {
  const scrollY = window.scrollY;

  // Header hide/show
  if (scrollY > 100) {
    if (scrollY > lastScrollY) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
  } else {
    header.classList.remove('header--hidden');
  }
  lastScrollY = scrollY;

  // Back to top button
  const backToTop = document.getElementById('backToTop');
  if (scrollY > 500) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  // Scroll animations
  animateOnScroll();
}

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Elements to animate
const animatableSelectors = [
  '.feature-card',
  '.product-card',
  '.scenario-card',
  '.case-card',
  '.testimonial-card',
  '.contact__info-card',
  '.faq__item',
  '.about__image',
  '.about__content',
  '.company__image',
  '.company__content',
  '.hero__stat'
];

function initScrollAnimations() {
  animatableSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add('fade-in');
      observer.observe(el);
    });
  });
  // Trigger initial check
  animateOnScroll();
}

function animateOnScroll() {
  // The IntersectionObserver handles most animations automatically.
  // This function exists for additional scroll-based logic if needed.
}

// ==================== MOBILE NAVIGATION ====================
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  nav.classList.toggle('active');
  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// Close mobile nav when a link is clicked
nav.querySelectorAll('.header__nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close mobile nav when clicking outside
document.addEventListener('click', (e) => {
  if (nav.classList.contains('active') &&
      !nav.contains(e.target) &&
      !menuBtn.contains(e.target)) {
    menuBtn.classList.remove('active');
    nav.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// ==================== FAQ ACCORDION ====================
document.querySelectorAll('.faq__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq__item').forEach(faq => {
      faq.classList.remove('active');
    });

    // Toggle current
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// ==================== CONTACT FORM ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  // Simple validation
  if (!data.name || !data.email || !data.message) {
    showFormMessage('error', translations[currentLang].form_success_title === '提交成功！' ? '请填写必填字段' : 'Please fill in required fields');
    return;
  }

  // Simulate submission (replace with actual API endpoint)
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = currentLang === 'zh' ? '发送中...' : 'Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    // Show success
    showFormSuccess();
    contactForm.reset();
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }, 1500);
});

function showFormSuccess() {
  // Hide form, show success message
  contactForm.style.display = 'none';

  let successEl = contactForm.nextElementSibling;
  if (!successEl || !successEl.classList.contains('form-success')) {
    successEl = document.createElement('div');
    successEl.className = 'form-success';
    successEl.innerHTML = `
      <div class="form-success__icon">✅</div>
      <h3 data-i18n="form_success_title">${translations[currentLang].form_success_title}</h3>
      <p data-i18n="form_success_text">${translations[currentLang].form_success_text}</p>
    `;
    contactForm.parentNode.insertBefore(successEl, contactForm.nextSibling);
  } else {
    successEl.querySelector('h3').textContent = translations[currentLang].form_success_title;
    successEl.querySelector('p').textContent = translations[currentLang].form_success_text;
  }

  successEl.classList.add('show');

  // Reset form after 5 seconds
  setTimeout(() => {
    successEl.classList.remove('show');
    contactForm.style.display = 'block';
  }, 5000);
}

// ==================== BACK TO TOP ====================
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ==================== LANGUAGE SWITCHER ====================
document.querySelectorAll('.header__lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang !== currentLang) {
      setLanguage(lang);

      // Update form labels (they need special handling because of the floating label structure)
      updateFormPlaceholders(lang);
    }
  });
});

function updateFormPlaceholders(lang) {
  const formGroups = document.querySelectorAll('.contact__form-group');
  formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');
    if (input && label) {
      const key = input.dataset.i18nPlaceholder;
      if (key && translations[lang][key]) {
        input.placeholder = translations[lang][key];
        label.textContent = translations[lang][key];
      }
    }
  });
}

// ==================== INITIALIZATION ====================
function init() {
  setLanguage(currentLang);
  initScrollAnimations();
  updateFormPlaceholders(currentLang);

  // Initial scroll check
  onScroll();
}

// Event listeners
window.addEventListener('scroll', onScroll, { passive: true });

// Initialize
document.addEventListener('DOMContentLoaded', init);
