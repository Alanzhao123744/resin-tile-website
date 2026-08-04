/* ============================================================
   Dingshengan — Main JS v26 (Formspree live backend)
   ============================================================ */
const i18n={
zh:{
logo_name:'Dingshengan',
nav_asa:'ASA树脂瓦',nav_pvc:'PVC波浪瓦',nav_acc:'配件',nav_order:'采购流程',nav_factory:'工厂',nav_contact:'联系我们',
hero_title:'ASA树脂瓦 & PVC波浪瓦制造商',hero_subtitle:'中国佛山 · 20条生产线 · B1防火 · OEM/ODM · 始于2016',hero_cta:'查看产品',
prod1_tag:'主打产品',prod1_name:'ASA合成树脂瓦',prod1_desc:'三层共挤技术：ASA耐候表层 + 抗冲击PVC芯层 + 增强底层。经典瓦型，219mm节距。30年寿命，B1防火等级。',
s_width:'宽度',s_thick:'厚度',s_len:'长度',s_life:'使用寿命',s_fire:'防火',s_weight:'重量',s_colors:'颜色：',
inquiry_btn:'发送询价',
prod2_tag:'经济系列',prod2_name:'UPVC波浪瓦',prod2_desc:'高性价比工业及农业屋面方案。UV稳定UPVC材质，出色的耐化学腐蚀性。适用于工厂、仓库、养殖场、车棚。',
acc_tag:'配件',acc_title:'屋面辅材 & 配件',
acc1:'脊瓦',acc2:'螺丝套件',acc3:'封檐板',acc4:'天沟系统',acc5:'防水帽',
why_tag:'为什么选择我们',
why1:'ASA工程树脂表层',why1d:'进口ASA树脂，20年以上色彩稳定，-40至+80°C。',
why2:'B1级防火阻燃',why2d:'认证自熄材料，无熔融滴落物。',
why3:'20条自动化产线',why3d:'年产能5000万+㎡，交货期15-25天。',
why4:'100%防水防腐',why4d:'零吸水率，耐酸雨、盐雾侵蚀。',
why5:'定制颜色 & OEM',why5d:'任意RAL色卡，定制尺寸，品牌包装。',
why6:'轻质6-8 kg/㎡',why6d:'仅为陶瓦1/6，降低运输和人工成本。',
cmp_tag:'对比',cmp_i:'项目',cmp_w:'重量/㎡',cmp_l:'寿命',cmp_f:'防火',cmp_im:'抗冲击',cmp_s:'隔音',cmp_in:'安装',cmp_c:'性价比',cmp_e:'环保',
app_tag:'应用场景',app1:'住宅别墅',app2:'商业建筑',app4:'工业厂房',app5:'农业农村',
order_tag:'流程',order_title:'采购流程',
order1t:'询价',order1d:'发送需求，12h内报价。',order2t:'确认',order2d:'规格、颜色、样品确认。',
order3t:'生产',order3d:'30%定金，15-25天，每周进度。',order4t:'发货',order4d:'付尾款，装箱，出口单证。',
fac_tag:'工厂',fac_title:'佛山工厂实拍',
fac1:'共挤生产线',fac2:'生产车间',fac3:'产品制造',fac4:'质检包装',
testi_tag:'客户评价',
testi1:'"与 Dingshengan 合作进口 ASA 树脂瓦3年。品质稳定，交货准时。我们在菲律宾的首选屋面供应商。"',
testi2:'"为肯尼亚项目订购3个集装箱 PVC 瓦。包装完美零破损。团队还帮忙处理了清关文件。"',
testi3:'"曼谷度假村定制赤陶色，3年热带气候无褪色。即将追加订单。"',
about_title:'Dingshengan — 佛山，始于2016',
about_p1:'位于广东佛山——中国建材行业中心。20条自动化共挤生产线，30,000㎡工厂，年产能超5,000万㎡。',
about_p2:'产品远销东南亚、中东、非洲、南美市场。提供OEM/ODM定制服务。',
faq_tag:'常见问题',
faq1q:'起订量？',faq1a:'5000㎡标准。10000㎡定制。免费寄样。',
faq2q:'交货期？',faq2a:'定金后15-25天。佛山FCL装箱。',
faq3q:'OEM/ODM？',faq3a:'支持。定制颜色、尺寸、包装、自有品牌。',
faq4q:'付款方式？',faq4a:'T/T电汇、WorldFirst万里汇。样品支持PayPal。',
faq5q:'包装？',faq5a:'珍珠棉隔层 + 免熏蒸托盘 + 缠绕膜 + 木箱。',
faq6q:'参观工厂？',faq6a:'欢迎！广东佛山，距广州机场1小时车程。联系我们安排。',
con_tag:'联系',con_title:'联系我们',con_sub:'12小时内回复',
con_sel:'感兴趣的产品',con_btn:'发送询价',
footer_p:'ASA树脂瓦 & PVC波浪瓦制造商。中国佛山。始于2016。',
form_success_title:'询价已发送',form_success_text:'感谢您的咨询，我们将在12小时内通过邮件回复您。',
privacy_note:'您的信息仅用于回复询价，绝不会被分享。',
},
en:{
logo_name:'Dingshengan',
nav_asa:'ASA Tile',nav_pvc:'PVC Sheet',nav_acc:'Parts',nav_order:'Order',nav_factory:'Factory',nav_contact:'Contact',
hero_title:'ASA Resin Tile & PVC Roofing Sheet Manufacturer',hero_subtitle:'Foshan, China · 20 Lines · B1 Fireproof · OEM/ODM · Since 2016',hero_cta:'Explore Products',
prod1_tag:'Main Product',prod1_name:'ASA Synthetic Resin Roof Tile',prod1_desc:'3-layer co-extrusion: ASA weather-proof surface + impact-resistant PVC core + reinforced base. Classic wave profile, 219mm pitch. 30-year lifespan, B1 fire rating.',
s_width:'Width',s_thick:'Thickness',s_len:'Length',s_life:'Lifespan',s_fire:'Fire',s_weight:'Weight',s_colors:'Colors:',
inquiry_btn:'Send Inquiry',
prod2_tag:'Economy Series',prod2_name:'UPVC Corrugated Roofing Sheet',prod2_desc:'Cost-effective industrial & agricultural roofing. UV-stabilized UPVC, superior chemical resistance. Ideal for factories, warehouses, farms, carports.',
acc_tag:'Accessories',acc_title:'Roofing Parts & Components',
acc1:'Ridge Tile',acc2:'Fastener Kit',acc3:'Edge Trim',acc4:'Gutter System',acc5:'Waterproof Cap',
why_tag:'Why Dingshengan',
why1:'ASA Engineering Surface',why1d:'Imported ASA resin, 20+ year color stability, -40 to +80°C.',
why2:'B1 Fire Retardant',why2d:'Certified self-extinguishing, no burning droplets.',
why3:'20 Automated Lines',why3d:'50M+ ㎡ annual output, fast delivery 15-25 days.',
why4:'100% Waterproof',why4d:'Zero absorption, acid rain & salt spray resistant.',
why5:'Custom Colors & OEM',why5d:'Any RAL color, custom size, branded packaging.',
why6:'Lightweight 6-8 kg/㎡',why6d:'1/6 of clay tiles. Lower shipping & labor costs.',
cmp_tag:'Comparison',cmp_i:'Item',cmp_w:'Weight/㎡',cmp_l:'Life',cmp_f:'Fire',cmp_im:'Impact',cmp_s:'Sound',cmp_in:'Install',cmp_c:'Value',cmp_e:'Eco',
app_tag:'Applications',app1:'Villas',app2:'Commercial',app4:'Industrial',app5:'Rural & Farm',
order_tag:'Process',order_title:'How to Order',
order1t:'Inquiry',order1d:'Send requirements. Quote within 12h.',order2t:'Confirm',order2d:'Specs, colors, sample approval.',
order3t:'Production',order3d:'30% deposit. 15-25 days. Weekly updates.',order4t:'Shipping',order4d:'Balance paid. Container loading. Export docs.',
fac_tag:'Factory',fac_title:'Inside Our Foshan Facility',
fac1:'Co-extrusion Lines',fac2:'Production Workshop',fac3:'Tile Manufacturing',fac4:'QC & Packaging',
testi_tag:'Testimonials',
testi1:'"Importing ASA tiles from Dingshengan for 3 years. Quality consistent, delivery on time. Our go-to roofing supplier in the Philippines."',
testi2:'"3 containers of PVC sheets for Kenya. Perfect packing, zero damage. Team helped with customs docs."',
testi3:'"Custom terracotta for Bangkok resort. 3 years tropical climate, no fading. Reordering soon."',
about_title:'Dingshengan — Foshan, Since 2016',
about_p1:'Located in Foshan, Guangdong — the heart of China\'s building materials industry. 20 automated co-extrusion lines, 30,000㎡ factory, 50M+ ㎡ annual output.',
about_p2:'We serve distributors, contractors, and wholesalers across Southeast Asia, Middle East, Africa, and South America. OEM & ODM available.',
faq_tag:'FAQ',
faq1q:'MOQ?',faq1a:'5000㎡ standard. 10000㎡ custom. Free samples.',
faq2q:'Delivery?',faq2a:'15-25 days after deposit. FCL from Foshan.',
faq3q:'OEM/ODM?',faq3a:'Yes. Custom colors, sizes, packaging, private label.',
faq4q:'Payment?',faq4a:'T/T, WorldFirst. Sample: PayPal.',
faq5q:'Packaging?',faq5a:'PE foam + pallets + stretch film + wooden crate.',
faq6q:'Visit factory?',faq6a:'Yes! Foshan, 1h from Guangzhou airport. Contact us.',
con_tag:'Contact',con_title:'Get In Touch',con_sub:'Reply within 12 hours',
con_sel:'Product interested in',con_btn:'Send Inquiry',
footer_p:'ASA resin tile & PVC roofing sheet manufacturer. Foshan, China. Since 2016.',
form_success_title:'Inquiry Sent',form_success_text:'Thank you! We will reply within 12 hours.',
privacy_note:'Your data will only be used to respond to your inquiry.',
}
};

/* Language */
var lang='zh';
try{lang=localStorage.getItem('dga_lang')||'zh'}catch(e){}
function applyLang(l){
lang=l;try{localStorage.setItem('dga_lang',l)}catch(e){}
document.documentElement.lang=l==='zh'?'zh-CN':'en';
document.querySelectorAll('.topbar__lang-btn').forEach(function(b){b.classList.toggle('active',b.dataset.lang===l)});
document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.dataset.i18n;if(i18n[l]&&i18n[l][k])el.textContent=i18n[l][k]});
document.title=l==='zh'?'Dingshengan — ASA树脂瓦 & PVC波浪瓦制造商 | 佛山':'Dingshengan — ASA Resin Tile & PVC Roofing Sheet Manufacturer | Foshan';
var sel=document.querySelector('select[name="product"]');
if(sel&&sel.options){var o=l==='zh'?[['— 请选择 —',''],['ASA合成树脂瓦','ASA'],['UPVC波浪瓦','PVC'],['两种都需要','Both']]:[['— Please Select —',''],['ASA Resin Tile','ASA'],['PVC Sheet','PVC'],['Both','Both']];o.forEach(function(v,i){if(sel.options[i])sel.options[i].textContent=v[0]})}
}

/* Scroll spy + throttle */
var lastY=0,ticking=false;
function onScroll(){
if(ticking)return;ticking=true;
requestAnimationFrame(function(){
var y=window.scrollY;
var hdr=document.getElementById('header'),bt=document.getElementById('backToTop');
if(hdr)hdr.classList.toggle('header--hidden',y>80&&y>lastY);
if(bt)bt.classList.toggle('visible',y>500);
lastY=y;
var sections=document.querySelectorAll('section[id]');
var navLinks=document.querySelectorAll('.header__nav-list a[href^="#"]');
var current='';
sections.forEach(function(s){var top=s.offsetTop-100;if(y>=top)current=s.getAttribute('id')});
navLinks.forEach(function(a){a.classList.toggle('nav-active',a.getAttribute('href')==='#'+current)});
ticking=false;
});
}

/* Animations */
var io=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');io.unobserve(entry.target)}})},{threshold:.12});
function initAnims(){document.querySelectorAll('.why-grid>div,.acc-item,.step,.fac-grid>div,.testi,.product-hero,.about-row__img,.about-row__txt').forEach(function(el){el.classList.add('fade-in');io.observe(el)})}

/* Mobile nav */
var mb=document.getElementById('menuBtn'),nv=document.getElementById('nav');
if(mb&&nv){mb.addEventListener('click',function(){mb.classList.toggle('active');nv.classList.toggle('active');document.body.style.overflow=nv.classList.contains('active')?'hidden':''});nv.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){mb.classList.remove('active');nv.classList.remove('active');document.body.style.overflow=''})})}

/* FAQ */
document.querySelectorAll('.faq-q').forEach(function(b){b.addEventListener('click',function(){var i=b.parentElement,w=i.classList.contains('active'),col=i.closest('.faq-grid-2');if(col)col.querySelectorAll('.faq-item').forEach(function(f){f.classList.remove('active')});if(!w)i.classList.add('active')})});

/* Form — LIVE Formspree backend */
var form=document.getElementById('contactForm');
if(form){form.addEventListener('submit',function(e){
e.preventDefault();
var fd=new FormData(e.target),d=Object.fromEntries(fd.entries());
if(!d.name||!d.email||!d.message){alert(lang==='zh'?'请填写姓名、邮箱和留言':'Please fill in Name, Email, and Message.');return}
var btn=e.target.querySelector('button'),orig=btn.textContent;
btn.textContent=lang==='zh'?'发送中...':'Sending...';btn.disabled=true;
fetch('https://formspree.io/f/xeajjazr',{method:'POST',body:fd,headers:{'Accept':'application/json'}}).then(function(r){
if(!r.ok)throw new Error('fail');
e.target.style.display='none';var s=e.target.nextElementSibling;
if(!s||!s.classList.contains('form-success')){s=document.createElement('div');s.className='form-success';var h3=document.createElement('h3');h3.textContent=i18n[lang].form_success_title;var p=document.createElement('p');p.textContent=i18n[lang].form_success_text;s.appendChild(h3);s.appendChild(p);e.target.parentNode.insertBefore(s,e.target.nextSibling)}
s.classList.add('show');
setTimeout(function(){s.classList.remove('show');e.target.style.display='block';btn.textContent=orig;btn.disabled=false},5000);
}).catch(function(err){
btn.textContent=orig;btn.disabled=false;alert(lang==='zh'?'发送失败，请尝试邮件或WhatsApp联系':'Send failed. Please try email or WhatsApp.');
});
});}

/* Back to top */
var btEl=document.getElementById('backToTop');if(btEl)btEl.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});

/* Lang switcher */
document.querySelectorAll('.topbar__lang-btn').forEach(function(b){b.addEventListener('click',function(){if(b.dataset.lang!==lang)applyLang(b.dataset.lang)})});

/* Init */
function init(){applyLang(lang);initAnims();onScroll()}
window.addEventListener('scroll',onScroll,{passive:true});
document.addEventListener('DOMContentLoaded',init);
