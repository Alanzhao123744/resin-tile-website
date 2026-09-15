/* ============================================================
   Dingshengan | Main JS v3
   i18n (zh + en) + Google Translate + FAQ + Form + Animations
   ============================================================ */

const i18n = {
  zh: {
    logo_tag: '屋面瓦制造商',
    nav_home: '首页', nav_asa_cat: 'ASA树脂瓦', nav_pvc_cat: 'PVC波浪瓦', nav_acc_cat: '配件辅材', nav_order: '采购流程', nav_why: '为什么选我们',
    nav_factory: '工厂实拍', nav_faq: '常见问题', nav_contact: '联系我们', get_quote: '立即询价',

    quick_asa_title: 'ASA合成树脂瓦', quick_asa_desc: '高端屋面材料 · 30年质保', quick_asa_cta: '查看产品 ▸',
    quick_pvc_title: 'PVC波浪瓦', quick_pvc_desc: '工业农业屋面 · 高性价比', quick_pvc_cta: '查看产品 ▸',
    quick_acc_title: '配件 & 辅材', quick_acc_desc: '脊瓦螺丝天沟 · 一站采购', quick_acc_cta: '查看配件 ▸',

    hero_badge: 'Since 2016 · 20条生产线 · 中国佛山',
    hero_title: 'ASA合成树脂瓦 & PVC波浪瓦屋面材料',
    hero_subtitle: 'B1防火 · 30年质保 · OEM/ODM · 全球发货 · 中国佛山工厂',
    hero_inquiry: '立即询价', hero_products: '查看产品 ▸',
    hero_card_asa: 'ASA树脂瓦', hero_card_pvc: 'PVC波浪瓦',
    hero_card_fire: '防火等级', hero_card_life: '使用寿命', hero_card_weight: '重量',
    hero_card_cta: '获取报价',
    trust1: 'ISO 9001 认证', trust2: 'B1 防火等级', trust3: 'CE & SGS 检测', trust4: '出口30+国家',
    trust_stat1: '月均出货：420万+ ㎡', trust_stat2: '服务30+个国家地区', trust_stat3: '全球1000+客户信赖',
    stat1: '生产线', stat2: '㎡ 年产量', stat3: '成立年份', stat4: '出口国家',
    hero_overline: '优质屋面瓦', hero_headline: '<span style="color:#D9A64A">升华</span>每一片屋顶。<span style="color:#D9A64A">点亮</span>每一个家。', hero_tagline: '创新材料，卓越耐久。<br>坚固持久，激励人心。', hero_cta: '查看产品',
    best_for: '适用于', app_villas: '别墅', app_resorts: '度假村', app_temples: '寺庙', app_premium: '高端住宅',
    app_factories: '工厂', app_warehouses: '仓库', app_farms: '农场', app_carports: '车棚',
    compare_materials: '材料对比', order_process: '采购流程',
    cmp_asa: 'ASA 树脂瓦', cmp_clay: '陶瓦', cmp_metal: '金属瓦', cmp_cement: '水泥瓦',

    about_heading: 'Dingshengan，您值得信赖的佛山屋面瓦制造商',
    about_p1: '<strong>Dingshengan（鼎晟安建材）</strong>成立于2016年，是一家专业生产ASA合成树脂瓦和PVC波浪瓦的制造商。公司位于<strong>广东省佛山市</strong>——中国建材行业的中心地带，集研发、生产和全球销售于一体。',
    about_p2: '现代化工厂配备20条全自动共挤生产线和自有质检实验室。年产能超过5,000万㎡，产品远销东南亚、中东、非洲、南美等30多个国家和地区。',
    about_li1: '20条全自动共挤生产线', about_li2: '自有实验室 & 配色中心',
    about_li3: '自有配色实验室 & 质检中心', about_li4: 'OEM/ODM:定制颜色、尺寸、厚度、包装',
    about_btn: '合作洽谈 ▸', about_badge_year: '始于',

    acc_overline: '一站式采购', acc_title: '配件 & 屋面辅材', acc_subtitle: '完善您的屋面系统:脊瓦、螺丝套件、封檐板、天沟一应俱全',
    refs_overline: '产品资料', refs_title: '完整规格与颜色范围', refs_subtitle: '瓦型目录、标准色系及技术规格表。点击卡片查看高清原图。',
    refs_1_eyebrow: '瓦型目录', refs_1_title: '17 款瓦型', refs_1_meta: '梯形 · 波浪 · 中空 · 罗马大波 · 树脂瓦 — 含实际与有效宽度',
    refs_2_eyebrow: '颜色范围', refs_2_title: '16 款标准色 + RAL 定制', refs_2_meta: '宽度 1050 / 880 mm · 厚度 2.0–3.0 mm · 波距 160 mm',
    refs_3_eyebrow: '中空瓦规格', refs_3_title: 'UPVC 中空隔热瓦', refs_3_meta: '10 年质保 · 20 年使用寿命 · 隔热 10–15°C',
    acc1_name: '脊瓦 / Ridge Tile', acc1_desc: '配套ASA脊瓦，无缝屋脊收口',
    acc2_name: '螺丝套件 / Fastener Kit', acc2_desc: '防腐蚀螺丝 + EPDM防水垫圈',
    acc3_name: '封檐板 / Edge Trim', acc3_desc: '抗UV PVC封边，整洁山墙收口',
    acc4_name: '天沟系统 / Gutter', acc4_desc: 'PVC雨水槽+落水管，完整排水方案',
    acc5_name: '防水帽 / Waterproof Cap', acc5_desc: '卡扣式防水帽保护螺丝，延长屋面寿命10+年',

    prod1_overline: '旗舰产品', prod1_title: 'ASA高耐候合成树脂瓦',
    prod1_subtitle: '3层共挤核心技术,住宅、商业建筑、别墅项目的终极屋面方案',
    prod1_name: 'ASA合成树脂瓦', prod1_tag: '畅销产品',
    prod1_desc: '三层共挤技术：ASA耐候表层 + 抗冲击PVC芯层 + 增强底层。经典建筑瓦型，219mm节距，融合现代建筑美学与尖端材料科学。',
    spec_width: '宽度', spec_thick: '厚度', spec_length2: '长度', spec_life: '使用寿命',
    spec_fire: '防火等级', spec_warranty2: '质保', spec_thick_range: '厚度范围', spec_colors: '可选颜色：',
    prod_inquiry: '询价 ASA 树脂瓦 ▸',

    prod2_overline: '经济系列', prod2_title: 'UPVC波浪瓦/梯形瓦',
    prod2_subtitle: '高性价比工业&农业屋面方案:轻质、耐用、安装便捷',
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
    why1_stat: '年不褪色', why2_stat: '防火等级', why3_stat: '条生产线', why4_stat: '吸水率', why5_stat: '任意定制色', why6_stat: '每平米',

    apps_title: '应用场景', app1: '住宅别墅', app2: '商业建筑',
    app3: '度假村&寺庙', app4: '工业厂房', app5: '农业&农村', app6: '车棚&雨棚',

    order_overline: '采购流程', order_title: '如何订购:4步简单流程', order_subtitle: '从询价到交货,让全球采购变得简单',
    order1_title: '发送询价', order1_desc: '告诉我们您的需求:数量、颜色、尺寸、目的港。24小时内回复详细报价。',
    order2_title: '确认细节', order2_desc: '确认规格、颜色、包装和运输条款。大货前可先寄免费样品确认。',
    order3_title: '生产制造', order3_desc: '30%定金确认订单。20条自动生产线15-25天完成。每周发送生产进度照片。',
    order4_title: '发货交付', order4_desc: '发货前付清尾款。集装箱从佛山发往您的港口。我们处理所有出口单证。',

    faq_overline: '采购指南', seo_faq_title: '屋面产品与采购常见问题', faq_intro: '为经销商、承包商和工程采购方提供实用解答。',
    seo_faq1_q: '屋面产品报价需要提供哪些信息？', seo_faq1_a: '请提供产品或瓦型、厚度、颜色、数量、所需板长、目的国家或港口，以及包装要求。销售团队据此确认规格并准备报价。',
    seo_faq2_q: 'ASA 合成树脂瓦与 UPVC 波浪瓦有什么区别？', seo_faq2_a: 'ASA 合成树脂瓦常用于重视外观的别墅、度假村、寺庙和住宅项目；UPVC 波浪瓦重量较轻，常用于工厂、仓库、农场和车棚。合适的瓦型需结合建筑、气候和工程规格确定。',
    seo_faq3_q: '屋面板的颜色、厚度和长度可以定制吗？', seo_faq3_a: 'Dingshengan 支持定制颜色、尺寸和包装。可用瓦型、生产公差和订单要求由销售团队按具体项目确认。',
    seo_faq4_q: '可以申请屋面样品或技术规格资料吗？', seo_faq4_a: '可以。请告知正在评估的产品和瓦型、目的地，以及需要的测试或尺寸。销售团队将确认当前样品供应、寄送费用和相关技术文件。',
    seo_faq5_q: '是否支持经销商和承包商的出口订单？', seo_faq5_a: '支持。我们服务经销商、批发商、承包商和工程采购方。请联系销售团队讨论包装、贸易条款、目的港要求和订单所需出口单证。',
    seo_faq6_q: '如何联系 Dingshengan 销售团队？', seo_faq6_a: '发送邮件至 info@dingshengan.com，或通过 WhatsApp +852 9826 6341 联系。请附上产品、数量和目的地，以便我们高效回复。',

    scroll_down: 'Scroll to explore',

    factory_title: '佛山工厂实拍', factory_subtitle: '广东现代化生产基地,随时欢迎实地参观考察',
    fac1: 'ASA树脂瓦共挤生产线', fac2: '生产制造车间', fac3: '树脂瓦产品制造', fac4: '产品质检与包装',

    cases_title: '全球工程案例', cases_subtitle: '产品远销30+国家，品质受全球客户信赖',
    case1_title: '马尼拉住宅小区', case1_desc: '500套住宅，80,000㎡ ASA树脂瓦',
    case2_title: '内罗毕大教堂', case2_desc: '标志性教堂屋面翻新项目',
    case3_title: '曼谷豪华度假村', case3_desc: '定制赤陶色ASA瓦，适应热带气候',
    case4_title: '圣保罗工业园', case4_desc: '12栋厂房，100,000㎡ PVC波浪瓦',

    certs_title: '资质认证与品质保障',
    cert1_desc: '质量管理体系认证', cert2_desc: 'B1级难燃认证',
    cert3_desc: '欧盟CE产品认证', cert4_desc: '第三方质量检测',

    faq_title: '常见问题',
    faq1_q: '最小起订量是多少？', faq1_a: '标准颜色/规格：5000㎡。定制颜色/规格：10000㎡。样品订单无起订量限制，0.5㎡内免费。',
    faq2_q: '交货周期多久？', faq2_a: '标准订单收到定金后15-20天发货。定制订单25-30天。佛山工厂FCL整柜装货。',
    faq3_q: '提供OEM/ODM代工吗？', faq3_a: '是的。全面OEM/ODM服务：定制配色、定制尺寸、品牌包装、私人标签。',
    faq4_q: '接受哪些付款方式？', faq4_a: 'WorldFirst（万里汇）、T/T电汇（30%定金，70%发货前）、即期信用证。样品支持PayPal。',
    faq5_q: '出口包装如何保障？', faq5_a: '珍珠棉隔层→免熏蒸木托盘→缠绕膜密封→外层木箱。运输破损率低于0.1%。',
    faq6_q: '可以参观工厂吗？', faq6_a: '当然！我们位于广东佛山，距广州白云机场约1小时车程。联系我们安排接送。',

    cta_catalog: '下载产品目录', cta_title: '准备开始您的项目？', cta_subtitle: '24小时内获取免费样品、技术支持与优惠报价',

    contact_title: '联系我们', contact_subtitle: '在下方整理需求，再通过您的邮箱将草稿发送给销售团队。',
    form_name: '您的姓名 *', form_email: '电子邮箱 *', form_phone: '电话 / WhatsApp',
    form_country: '所在国家', form_product: '感兴趣的产品', form_select: '请选择',
    form_message: '您的留言 *', form_submit: '生成询价邮件',
    form_notice: '您选择发送的资料将用于处理询价及相关业务沟通。',
    form_optin: '选填：我愿意接收 Dingshengan 的产品更新和经销商优惠邮件，可随时通过邮件退订。',
    form_delivery_note: '生成草稿不会发送询价。请在邮箱中点击发送，或通过 WhatsApp 联系我们。营销订阅不是询价的必要条件。',
    form_draft_title: '询价邮件草稿已生成，尚未发送',
    form_draft_note: '打开邮箱，核对草稿并点击发送。如未打开邮箱，请复制下方内容，发送至 info@dingshengan.com。',
    form_draft_label: '询价正文', form_draft_open: '打开邮箱',
    form_draft_long: '询价内容较长，请将上方正文复制到邮箱后发送。',
    privacy_link: '隐私政策', cookie_settings: 'Cookie 设置',
    cinfo_team_label: '销售联系人', cinfo_team: 'Dingshengan 销售团队',
    cinfo_visit: '到访前请联系销售团队获取完整地址并预约。',
    cinfo_address_label: '工厂所在地', cinfo_address: '中国广东省佛山市',
    cinfo_phone_label: '电话 / WhatsApp', cinfo_email_label: '电子邮箱',
    cinfo_hours_label: '工作时间', cinfo_hours: '周一至周六：8:00-18:00 (UTC+8)',

    footer_desc: 'Dingshengan 专业ASA合成树脂瓦和PVC波浪瓦制造商，位于中国广东佛山。优质产品、实惠价格、全球发货。',
    footer_products_title: '产品', footer_links_title: '快速导航', footer_contact_title: '联系我们',
    privacy_note: '询价资料用于处理您的需求及相关业务沟通。服务商处理及您的选择详见隐私政策。',
    footer_asa: 'ASA合成树脂瓦', footer_pvc: 'PVC波浪瓦', footer_oem: '定制/OEM订单',

  },

  en: {
    logo_tag: 'Roofing Manufacturer',
    nav_home: 'Home', nav_asa_cat: 'ASA Resin Tile', nav_pvc_cat: 'PVC Sheet', nav_acc_cat: 'Accessories', nav_order: 'How to Order', nav_why: 'Why Us',
    nav_factory: 'Factory', nav_faq: 'FAQ', nav_contact: 'Contact', get_quote: 'Get Quote',

    quick_asa_title: 'ASA Resin Tile', quick_asa_desc: 'Premium roofing, 30 year warranty', quick_asa_cta: 'View Product ▸',
    quick_pvc_title: 'PVC Sheet', quick_pvc_desc: 'Industrial & agricultural, affordable', quick_pvc_cta: 'View Product ▸',
    quick_acc_title: 'Accessories', quick_acc_desc: 'Ridge, fasteners, gutters, all in one', quick_acc_cta: 'View Parts ▸',

    hero_badge: 'Since 2016 · 20 Production Lines · Foshan China',
    hero_title: 'ASA Synthetic Resin Tile & PVC Corrugated Roofing Sheet',
    hero_subtitle: 'B1 Fireproof · 30-Year Warranty · OEM & ODM · Global Shipping · Foshan China Factory',
    hero_inquiry: 'Send Inquiry Now', hero_products: 'Explore Products ▸',
    hero_card_asa: 'ASA Resin Tile', hero_card_pvc: 'PVC Sheet',
    hero_card_fire: 'Fire rating', hero_card_life: 'Lifespan', hero_card_weight: 'Weight',
    hero_card_cta: 'Request a quote',
    trust1: 'ISO 9001 Certified', trust2: 'B1 Fire Rating', trust3: 'CE & SGS Tested', trust4: 'Export 30+ Countries',
    trust_stat1: 'Monthly output: 4.2M+ ㎡', trust_stat2: 'Serving 30+ countries', trust_stat3: '1,000+ global clients',
    stat1: 'Production Lines', stat2: 'Annual Output', stat3: 'Established', stat4: 'Export Countries',
    hero_overline: 'Premium Roof Tiles', hero_headline: '<span style="color:#D9A64A">Elevate</span> Every Roof. <span style="color:#D9A64A">Enhance</span> Every Home.', hero_tagline: 'Innovation materials. Superior durability.<br>Built to withstand. Built to inspire.', hero_cta: 'Explore products',
    best_for: 'Best for', app_villas: 'Villas', app_resorts: 'Resorts', app_temples: 'Temples', app_premium: 'Premium housing',
    app_factories: 'Factories', app_warehouses: 'Warehouses', app_farms: 'Farms', app_carports: 'Carports',
    compare_materials: 'Compare materials', order_process: 'Order process',
    cmp_asa: 'ASA Resin Tile', cmp_clay: 'Clay Tile', cmp_metal: 'Metal Sheet', cmp_cement: 'Cement Tile',

    about_heading: 'Dingshengan, Your Trusted Roofing Manufacturer in Foshan',
    about_p1: 'Founded in 2016, <strong>Dingshengan</strong> is a professional manufacturer of ASA synthetic resin roof tiles and PVC corrugated sheets. Located in <strong>Foshan, Guangdong</strong>, we integrate R&D, production, and global sales. Foshan is the heart of China\'s building materials industry.',
    about_p2: 'Our modern factory is equipped with 20 automated co-extrusion lines and an in-house QC lab. With 50M+ ㎡ annual output, we serve distributors, contractors, and wholesalers across Southeast Asia, the Middle East, Africa, South America, and beyond.',
    about_li1: '20 automated co-extrusion lines', about_li2: 'In-house color lab & QC center',
    about_li3: 'In-house color lab & QC center', about_li4: 'OEM/ODM: custom color, size, packaging',
    about_btn: 'Partner With Us ▸', about_badge_year: 'Since',

    acc_overline: 'One-Stop Procurement', acc_title: 'Accessories & Roofing Parts', acc_subtitle: 'Complete your roofing system: ridge tiles, fasteners, edge trims, gutters & more',
    refs_overline: 'Product Documentation', refs_title: 'Full Specifications & Color Range', refs_subtitle: 'Profile catalog, standard color range and technical spec sheets. Tap any card to open the full-resolution reference.',
    refs_1_eyebrow: 'Profile Catalog', refs_1_title: '17 Tile Profiles', refs_1_meta: 'Trapezoidal · Corrugated · Hollow · Roman · Resin — actual & effective widths',
    refs_2_eyebrow: 'Color Range', refs_2_title: '16 Stock Colors + Custom RAL', refs_2_meta: 'Width 1050 / 880 mm · Thickness 2.0–3.0 mm · Wave pitch 160 mm',
    refs_3_eyebrow: 'Hollow Sheet Spec', refs_3_title: 'UPVC Hollow Roof Sheet', refs_3_meta: '10-year warranty · 20-year service · 10–15 °C insulation gain',
    acc1_name: 'Ridge Tile', acc1_desc: 'Matching ASA ridge caps for seamless roof peak finish',
    acc2_name: 'Fastener Kit', acc2_desc: 'Corrosion-resistant screws with waterproof EPDM washers',
    acc3_name: 'Edge Trim', acc3_desc: 'UV-resistant PVC edge closures for clean gable finish',
    acc4_name: 'Gutter System', acc4_desc: 'PVC rainwater gutters & downpipes: full drainage solution',
    acc5_name: 'Waterproof Cap', acc5_desc: 'Snap-on caps protect fasteners, extend roof life 10+ years',

    prod1_overline: 'Flagship Product', prod1_title: 'ASA Premium Synthetic Resin Roof Tile',
    prod1_subtitle: 'Premium 3-layer co-extrusion for residential, commercial and villa projects',
    prod1_name: 'ASA Synthetic Resin Roof Tile', prod1_tag: 'Best Seller',
    prod1_desc: '3-layer co-extrusion: ASA weather-proof surface + impact-resistant PVC core + reinforced bottom layer. Classic wave profile with 219mm pitch, delivering elegant architectural aesthetics with modern material science.',
    spec_width: 'Width', spec_thick: 'Thickness', spec_length2: 'Length', spec_life: 'Service Life',
    spec_fire: 'Fire Rating', spec_warranty2: 'Warranty', spec_colors: 'Available Colors:',
    prod_inquiry: 'Inquire ASA Resin Tile ▸',

    prod2_overline: 'Economy Series', prod2_title: 'UPVC Corrugated Roofing Sheet',
    prod2_subtitle: 'Cost-effective industrial & agricultural roofing: lightweight, durable, and easy to install',
    prod2_name: 'UPVC Corrugated Roofing Sheet',
    prod2_desc: 'Made from high-quality UPVC with UV stabilizers. Excellent chemical and corrosion resistance, ideal for factories, warehouses, farms, carports, and temporary structures. Much lighter than metal sheets with better insulation.',
    spec_weight: 'Weight', prod_inquiry2: 'Inquire PVC Sheet ▸',

    compare_title: 'Why Resin Tile Beats Traditional Materials',
    cmp_item: 'Item', cmp_weight: 'Weight per ㎡', cmp_life: 'Service Life', cmp_fire: 'Fire Rating',
    cmp_impact: 'Impact Resistance', cmp_sound: 'Sound Insulation', cmp_install: 'Install Speed', cmp_cost: 'Overall Value', cmp_eco: 'Eco-friendly',

    why_overline: 'Why Dingshengan', why_title: 'What Makes Our Tiles Different',
    why1_title: 'ASA Engineering Resin Surface', why1_desc: 'Imported ASA resin with UV stabilizers. Zero fading for 20+ years. Performs in -40°C to +80°C without cracking or warping.',
    why2_title: 'B1 Fire Retardant Grade', why2_desc: 'Certified to China B1 fire safety standard. Self-extinguishes within seconds. No burning droplets.',
    why3_title: '1/6 the Weight of Clay Tiles', why3_desc: 'At just 6-8 kg/㎡, our tiles dramatically reduce structural load, shipping costs, and installation time.',
    why4_title: '100% Waterproof & Corrosion-free', why4_desc: 'Zero water absorption. Impervious to acid rain, salt spray, and industrial chemicals. Ideal for coastal areas.',
    why5_title: '30dB+ Noise Reduction', why5_desc: 'Multi-layer structure absorbs rain impact. 30+ decibels quieter than metal roofing, noticeably more comfortable.',
    why6_title: 'Custom Colors & OEM Service', why6_desc: 'In-house color lab matches any RAL color. Custom thickness, length, and branded packaging. Built to your specs.',
    why1_stat: 'Years, zero fade', why2_stat: 'Fire rating', why3_stat: 'Production lines', why4_stat: 'Water absorption', why5_stat: 'Any custom color', why6_stat: 'Per m²',

    apps_title: 'Where Our Tiles Are Used',
    app1: 'Residential Villas', app2: 'Commercial Buildings', app3: 'Resorts & Temples',
    app4: 'Industrial Plants', app5: 'Rural & Farm', app6: 'Carports & Shelters',

    order_overline: 'How It Works', order_title: 'How to Order in 4 Simple Steps', order_subtitle: 'From inquiry to delivery, we make global sourcing easy',
    order1_title: 'Send Inquiry', order1_desc: 'Tell us your requirements: quantity, color, size, destination port. We reply within 24 hours.',
    order2_title: 'Confirm Details', order2_desc: 'We confirm specs, colors, packaging, and shipping terms. Free samples before bulk order.',
    order3_title: 'Production', order3_desc: '30% deposit confirms your order. 20 automated lines produce within 15-25 days. Weekly progress photos.',
    order4_title: 'Shipping & Delivery', order4_desc: 'Balance payment before loading. Container shipped from Foshan to your port. All export docs handled.',

    faq_overline: 'Buyer Guide', seo_faq_title: 'Roofing Product & Ordering FAQ', faq_intro: 'Practical answers for distributors, contractors and project buyers.',
    seo_faq1_q: 'What information is needed for a roofing quotation?', seo_faq1_a: 'Send the product or profile, thickness, color, quantity, required sheet length, destination country or port, and any packaging requirements. Our sales team can then confirm the specification and prepare a quotation.',
    seo_faq2_q: 'What is the difference between ASA resin tiles and UPVC corrugated sheets?', seo_faq2_a: 'ASA synthetic resin tiles are commonly selected for villas, resorts, temples and residential projects where appearance matters. UPVC corrugated sheets are a lightweight option for factories, warehouses, farms and carports. The suitable profile depends on the building, climate and project specification.',
    seo_faq3_q: 'Can roof sheet colors, thicknesses and lengths be customized?', seo_faq3_a: 'Dingshengan supports custom colors, sizes and packaging. Available profiles, production tolerances and order requirements are confirmed by our sales team for each project.',
    seo_faq4_q: 'Can I request roofing samples or technical specifications?', seo_faq4_a: 'Yes. Send the product and profile you are evaluating, your destination and the tests or dimensions you need. Our sales team will confirm current sample availability, delivery cost and relevant technical documents.',
    seo_faq5_q: 'Do you support export orders for distributors and contractors?', seo_faq5_a: 'Yes. We work with distributors, wholesalers, contractors and project buyers. Contact our sales team to discuss packaging, trade terms, destination-port requirements and export documents for your order.',
    seo_faq6_q: 'How can I contact Dingshengan sales?', seo_faq6_a: 'Email info@dingshengan.com or contact us on WhatsApp at +852 9826 6341. Include your product, quantity and destination so we can respond efficiently.',

    scroll_down: 'Scroll to explore',

    factory_title: 'Inside Our Foshan Factory',
    factory_subtitle: 'Modern production facility in Guangdong. Welcome to visit anytime',
    fac1: 'ASA Tile Co-extrusion Lines', fac2: 'Production Workshop',
    fac3: 'Resin Tile Manufacturing', fac4: 'QC & Packaging',

    cases_title: 'Global Project Cases', cases_subtitle: 'Trusted by contractors & distributors across 30+ countries',
    case1_title: 'Manila Residential Complex', case1_desc: '80,000㎡ ASA tiles for 500-unit development',
    case2_title: 'Nairobi Cathedral Roof', case2_desc: 'Landmark church renovation project',
    case3_title: 'Bangkok Luxury Resort', case3_desc: 'Custom terracotta ASA tiles for tropical climate',
    case4_title: 'São Paulo Industrial Park', case4_desc: '100,000㎡ PVC corrugated for 12 factory buildings',

    certs_title: 'Certifications & Quality Assurance',
    cert1_desc: 'Quality Management System', cert2_desc: 'B1 Fire Safety Certified',
    cert3_desc: 'European Conformity', cert4_desc: 'Third-party Quality Verified',

    faq_title: 'Frequently Asked Questions',
    faq1_q: 'What is the MOQ?', faq1_a: 'Standard colors: 5000㎡. Custom: 10000㎡. Free samples within 0.5㎡, no MOQ for samples.',
    faq2_q: 'How long is delivery?', faq2_a: 'Standard: 15-20 days after deposit. Custom: 25-30 days. FCL loading at our Foshan factory.',
    faq3_q: 'Do you offer OEM/ODM?', faq3_a: 'Yes. Full OEM/ODM: custom colors, dimensions, branded packaging, and private labeling.',
    faq4_q: 'Payment terms?', faq4_a: 'WorldFirst, T/T (30% deposit, 70% before shipment), L/C at sight. Sample: PayPal or full T/T.',
    faq5_q: 'How are tiles packaged?', faq5_a: 'PE foam between tiles → fumigated pallets → stretch wrap → wooden crate. Damage rate below 0.1%.',
    faq6_q: 'Can I visit the factory?', faq6_a: 'Absolutely! We\'re in Foshan, Guangdong, one hour from Guangzhou Airport. Contact us for pickup.',

    cta_catalog: 'Download Catalog', cta_title: 'Ready to Start Your Project?', cta_subtitle: 'Free samples, technical support and competitive pricing. Reply within 24 hours.',

    contact_title: 'Get In Touch', contact_subtitle: 'Prepare your requirements below, then send the draft from your email app to our sales team.',
    form_name: 'Your Name *', form_email: 'Email Address *', form_phone: 'Phone / WhatsApp',
    form_country: 'Country', form_product: 'Product Interested In', form_select: 'Please Select',
    form_message: 'Your Message *', form_submit: 'Prepare email inquiry',
    form_notice: 'We use the details you choose to send to handle your inquiry and related business communication.',
    form_optin: 'Optional: email me product updates and distributor offers from Dingshengan. I can unsubscribe by email at any time.',
    form_delivery_note: 'Preparing a draft does not send your inquiry. Please send it from your email app, or contact us on WhatsApp. Marketing subscription is optional.',
    form_draft_title: 'Your email draft is ready — not sent yet',
    form_draft_note: 'Open your email app, review the draft and click Send there. If it does not open, copy the text below and email info@dingshengan.com.',
    form_draft_label: 'Inquiry text', form_draft_open: 'Open email app',
    form_draft_long: 'For this longer inquiry, copy the text above into your email app before sending.',
    privacy_link: 'Privacy Policy', cookie_settings: 'Cookie settings',
    cinfo_team_label: 'Sales contact', cinfo_team: 'Dingshengan Sales Team',
    cinfo_visit: 'Please contact our sales team for the full visiting address and an appointment before travelling.',
    cinfo_address_label: 'Factory location', cinfo_address: 'Foshan City, Guangdong Province, China',
    cinfo_phone_label: 'Phone / WhatsApp', cinfo_email_label: 'Email',
    cinfo_hours_label: 'Working Hours', cinfo_hours: 'Mon-Sat: 8:00-18:00 (UTC+8)',

    footer_desc: 'Professional ASA resin tile & PVC roofing sheet manufacturer based in Foshan, Guangdong, China. Quality products, competitive pricing, global shipping since 2016.',
    footer_products_title: 'Products', footer_links_title: 'Quick Links', footer_contact_title: 'Contact',
    privacy_note: 'We use inquiry details for your request and related business communication. Read our Privacy Policy for information about service providers and your choices.',
    footer_asa: 'ASA Resin Tile', footer_pvc: 'PVC Corrugated Sheet', footer_oem: 'Custom / OEM Orders',

  }
};

// ==================== LANGUAGE ====================
Object.assign(i18n.en, seoContent.en);
Object.assign(i18n.zh, seoContent.zh);
const LK = 'dga_lang';
let lang = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';

function applyLang(l) {
  l = l === 'zh' ? 'zh' : 'en';
  lang = l;
  try { localStorage.setItem(LK, l); } catch (_) { /* Keep the page usable without storage. */ }
  document.documentElement.lang = l === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('.topbar__lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (i18n[l]?.[k]) {
      /<[a-z][\s\S]*>/i.test(i18n[l][k]) ? el.innerHTML = i18n[l][k] : el.textContent = i18n[l][k];
    }
  });
  document.title = l === 'zh'
    ? 'ASA合成树脂瓦与UPVC波浪瓦厂家 | Dingshengan 佛山'
    : 'ASA Resin Roof Tiles & UPVC Sheets Manufacturer | Dingshengan';
  // Update select
  const sel = document.querySelector('select[name="product"]');
  if (sel && sel.options) {
    const opts = [[l === 'zh' ? '请选择' : 'Please Select', ''],
      [l === 'zh' ? 'ASA 合成树脂瓦' : 'ASA Synthetic Resin Tile', 'ASA'], [l === 'zh' ? 'UPVC 波浪瓦' : 'UPVC Corrugated Sheet', 'PVC'],
      [l === 'zh' ? '两种都需要' : 'Both Products', 'Both']];
    opts.forEach((o, i) => { if (sel.options[i]) sel.options[i].textContent = o[0]; });
  }
  document.dispatchEvent(new CustomEvent('dsa:languagechange', { detail: l }));
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
}, { threshold: 0 });

function initAnims() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.section__title,.section__subtitle,.section__overline,.why-row,.product-detail,.factory__card,.app-card,.contact-card,.about-strip__image,.about-strip__content,.order-step').forEach(el => {
    el.classList.add('fade-in'); io.observe(el);
  });
}

// ==================== HERO CARD ====================
const heroSpecs = {
  asa: { fire: 'B1', life: '30+ yrs', weight: '6-8 kg/m²' },
  pvc: { fire: 'B1', life: '10-15 yrs', weight: '3-5 kg/m²' }
};
function initHeroCard() {
  const card = document.getElementById('heroCard');
  if (!card) return;
  const tabs = card.querySelectorAll('.hero__card-tab');
  const specEls = card.querySelectorAll('.hero__card-specs dd');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      if (tab.classList.contains('is-active')) return;
      tabs.forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
      tab.classList.add('is-active'); tab.setAttribute('aria-selected', 'true');
      const data = heroSpecs[tab.dataset.material];
      specEls[0].textContent = data.fire;
      specEls[1].textContent = data.life;
      specEls[2].textContent = data.weight;
    });
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

// ==================== PRODUCT THUMBNAILS ====================
function initProductThumbs() {
  document.querySelectorAll('.product-detail__gallery').forEach(gallery => {
    const slides = gallery.querySelector('.product-carousel__slides');
    const thumbs = Array.from(gallery.querySelectorAll('.product-detail__thumb'));
    if (!slides || !thumbs.length) return;
    slides.style.transition = 'transform .35s var(--ease-out)';
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        slides.style.animation = 'none';
        slides.style.transform = `translateX(-${index * (100 / thumbs.length)}%)`;
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  });
}

// ==================== CONTACT FORM ====================
let inquiryEmailUrl = 'mailto:info@dingshengan.com';
document.getElementById('draftEmail').addEventListener('click', () => {
  // Keep inquiry data out of anchor URLs that automatic outbound-link analytics may collect.
  window.location.href = inquiryEmailUrl;
});
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  if (!e.target.reportValidity()) return;
  const fd = new FormData(e.target), data = Object.fromEntries(fd.entries());
  if (!data.name || !data.email || !data.message) {
    alert(lang === 'zh' ? '请填写姓名、邮箱和留言。' : 'Please fill in Name, Email, and Message.');
    return;
  }
  const fields = [
    ['Name', 'name'], ['Email', 'email'], ['Phone / WhatsApp', 'phone'],
    ['Country', 'country'], ['Product', 'product'], ['Quantity', 'quantity'],
    ['Color', 'color'], ['Roof size / sheet length', 'roof_size'],
    ['Destination port', 'destination_port'], ['Message', 'message']
  ];
  const body = fields.map(([label, key]) => `${label}: ${data[key] || '-'}`).join('\n')
    + '\n\nEmail product updates and distributor offers: '
    + (data.email_marketing_opt_in === 'yes' ? 'Yes, I opt in. I can unsubscribe by email at any time.' : 'Not requested.')
    + '\nPrivacy notice: https://dingshengan.com/privacy.html (2026-09-13)';
  const subject = encodeURIComponent('Dingshengan roofing inquiry');
  const emailUrl = `mailto:info@dingshengan.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  document.getElementById('draftBody').value = body;
  inquiryEmailUrl = emailUrl.length <= 8000
    ? emailUrl : `mailto:info@dingshengan.com?subject=${subject}`;
  document.getElementById('draftLengthNote').hidden = emailUrl.length <= 8000;
  document.getElementById('inquiryDraft').hidden = false;
  document.getElementById('draftBody').focus();
});
document.getElementById('prepareInquiry').disabled = false;

// ==================== BACK TO TOP ====================
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== LANG SWITCH ====================
document.querySelectorAll('.header__lang-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const next = btn.dataset.lang;
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    window.location.href = (next === 'zh' ? 'zh.html' : './') + window.location.hash;
  });
});

// ==================== INIT ====================
function init() { applyLang(lang); initAnims(); initProductThumbs(); initHeroCard(); onScroll(); }
window.addEventListener('scroll', onScroll, { passive: true });
document.addEventListener('DOMContentLoaded', init);



// ==================== SMOOTH SCROLL (LENIS) ====================
(function initLenis(){
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof Lenis === 'undefined') return;
  const lenis = new Lenis({
    duration: 1.1,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false
  });
  function raf(time){ lenis.raf(time); requestAnimationFrame(raf); }
  requestAnimationFrame(raf);

  // Hook up anchor links so they animate through Lenis too
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -20 });
    });
  });
})();
