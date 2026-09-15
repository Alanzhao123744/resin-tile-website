"""Synchronize static translations and their SEO metadata using lxml."""
import copy
import json
from pathlib import Path
import sys
from lxml import html, etree

root = Path(__file__).resolve().parent.parent
catalog = json.load(sys.stdin)
base = 'https://dingshengan.com/'
doc = html.document_fromstring((root / 'index.html').read_text(encoding='utf-8'))

def content(el, value):
    for child in list(el):
        el.remove(child)
    el.text = None
    for part in html.fragments_fromstring(value):
        if isinstance(part, str):
            if len(el):
                el[-1].tail = (el[-1].tail or '') + part
            else:
                el.text = (el.text or '') + part
        else:
            el.append(part)

def meta(tree, key, value, attr='name'):
    found = tree.xpath(f'//head/meta[@{attr}="{key}"]')
    el = found[0] if found else etree.SubElement(tree.find('head'), 'meta')
    el.set(attr, key)
    el.set('content', value)

# Keep the brand icon crawlable; reserve blank alt text for decorative imagery.
for el in doc.xpath('//link[@rel="icon"]'):
    el.set('href', 'images/logo.png')
    el.set('type', 'image/png')
for script in doc.xpath('//script[contains(@src,"unpkg.com")]'):
    script.getparent().remove(script)
main_script = doc.xpath('//script[contains(@src,"js/main-v11.js")]')[0]
main_script.set('src', 'js/main-v11.js?v=3')
if not doc.xpath('//script[contains(@src,"js/seo-content.js")]'):
    script = etree.Element('script', src='js/seo-content.js?v=1')
    main_script.addprevious(script)
for el in doc.xpath('//link[contains(@href,"css/style2.css")]'):
    el.set('href', 'css/style2.css?v=10')

# Linkable language versions remain available when JavaScript is disabled.
for el in doc.xpath('//*[@data-lang]'):
    el.tag = 'a'
    el.attrib.pop('type', None)
    el.set('href', 'zh.html' if el.get('data-lang') == 'zh' else './')
    el.set('hreflang', 'zh-CN' if el.get('data-lang') == 'zh' else 'en')
    el.set('lang', el.get('hreflang'))

if not doc.xpath('//a[@class="skip-link"]'):
    skip = etree.Element('a', href='#main', attrib={'class':'skip-link','data-i18n':'skip_main'})
    doc.find('body').insert(0, skip)

# Retain specification fields, replacing unsupported universal guarantees.
for label in doc.xpath('//*[@data-i18n="spec_life"]'):
    label.getnext().set('data-i18n', 'spec_life_value')
for label in doc.xpath('//*[@data-i18n="spec_fire"]'):
    label.getnext().set('data-i18n', 'spec_fire_value')
for key, value in [('why1_stat','ASA'),('why2_stat','SPEC'),('why4_stat','ROOF')]:
    doc.xpath(f'//*[@data-i18n="{key}"]')[0].getprevious().text = value

# Replace generic photos in the UPVC product gallery with actual supplied references.
pvc_images = doc.xpath('//*[@id="pvc"]//img')
references = [
    ('images/references/profile-catalog.jpg', 'Roof sheet profile catalogue', '屋面板瓦型目录', 1183, 1432),
    ('images/references/hollow-sheet-spec.jpg', 'UPVC hollow roof sheet technical reference', 'UPVC 中空屋面板技术资料', 1320, 807),
    ('images/references/color-palette.jpg', 'Roofing color reference', '屋面产品颜色参考', 1461, 1077),
    ('images/factory-1.jpg', 'Roofing sheets stacked in a factory warehouse', '工厂仓库内堆放的屋面板材', 1600, 1200)
]
for i, el in enumerate(pvc_images):
    src, en, zh, width, height = references[i % 4]
    el.set('src', src)
    el.set('width', str(width)); el.set('height', str(height))
    el.set('alt', en); el.set('data-alt-zh', zh)
for section in ['asa','pvc']:
    info = doc.xpath(f'//*[@id="{section}"]//*[@class="product-detail__info"]')[0]
    if not info.xpath('.//*[@data-i18n="product_reference_note"]'):
        el = etree.SubElement(info, 'p', attrib={'class':'inquiry-notice','data-i18n':'product_reference_note'})

alt_map = {
    'images/hero-products.webp': ('Illustration of a Mediterranean-style villa with a tiled roof','地中海风格瓦屋顶别墅示意图'),
    'images/hero-asa-tile.webp': ('Red profiled roofing sheets installed on buildings','建筑上安装的红色压型屋面瓦'),
    'images/hero-roof-application.webp': ('Close-up of overlapping dark roof tiles','深色屋面瓦搭接特写'),
    'images/asa-slide-new.jpg': ('Roof tile samples displayed in white, dark blue and terracotta','白色、深蓝色和陶红色屋面瓦样品'),
    'images/asa-slide-1.jpg': ('Profiled roof tiles in several colors','多种颜色的压型屋面瓦'),
    'images/asa-slide-2.jpg': ('Red profiled roofing sheets installed on buildings','建筑上安装的红色压型屋面瓦'),
    'images/asa-slide-3.jpg': ('Roofing sheets stacked in a factory warehouse','工厂仓库内堆放的屋面板材'),
    'images/factory-1.jpg': ('Roofing sheets stacked in a factory warehouse','工厂仓库内堆放的屋面板材'),
    'images/factory-2.jpg': ('Roofing sheets being loaded on a truck','屋面板材装车作业')
}
for el in doc.xpath('//img[@src]'):
    if el.get('src') in alt_map:
        en, zh = alt_map[el.get('src')]
        if el.get('alt'):
            el.set('alt', en); el.set('data-alt-zh', zh)

# A comparison should guide a buyer, not assign unsupported fire/lifetime rankings.
table = doc.xpath('//*[@id="specs"]//table')[0]
table.getparent().remove(table)
wrap = doc.xpath('//*[@id="specs"]//*[@class="table-wrap"]')[0]
table = etree.SubElement(wrap, 'table', attrib={'class':'cmp-table seo-comparison'})
thead = etree.SubElement(table, 'thead'); tr = etree.SubElement(thead, 'tr')
for en, zh in [('Selection factor','选型因素'),('What to confirm','需确认的内容')]:
    el = etree.SubElement(tr, 'th', scope='col'); el.text=en; el.set('data-text-zh',zh)
tbody=etree.SubElement(table,'tbody')
rows=[
    ('Roof profile','瓦型','Pitch, support spacing, overlaps and compatible accessories','坡度、支撑间距、搭接及配套辅材'),
    ('Material and coating','材质与表层','ASA/PVC composition, surface layer and relevant test documents','ASA/PVC 材质、表层及相关检测资料'),
    ('Dimensions and weight','尺寸与重量','Effective width, thickness, sheet length and product weight','有效宽度、厚度、板长及产品重量'),
    ('Project requirements','工程要求','Local building standards, weather exposure and installation guidance','当地建筑标准、环境条件及安装指导'),
    ('Total cost','总成本','Product, accessories, packing, freight, installation and maintenance','产品、配件、包装、运费、安装及维护')
]
for en,zh,answer,answer_zh in rows:
    tr=etree.SubElement(tbody,'tr')
    for tag,text,translated in [('th',en,zh),('td',answer,answer_zh)]:
        el=etree.SubElement(tr,tag);el.text=text;el.set('data-text-zh',translated)
        if tag=='th':el.set('scope','row')
section=doc.xpath('//*[@id="specs"]//*[@class="container"]')[0]
if not section.xpath('.//*[@data-i18n="comparison_note"]'):
    etree.SubElement(section,'p',attrib={'class':'inquiry-notice','data-i18n':'comparison_note'})

for label,key in [('f-quantity','form_quantity'),('f-color','form_color'),('f-size','form_size'),('f-port','form_port')]:
    doc.xpath(f'//label[@for="{label}"]')[0].set('data-i18n',key)
for el in doc.xpath('//a[contains(@class,"btn--whatsapp")]'):
    el.set('data-i18n','whatsapp_cta')
for xpath,key in [('//*[@id="factory"]//h2','applications_heading'),('//*[@id="factory"]//*[@class="section__subtitle"]','applications_intro'),('//*[@id="factory"]//h3[contains(@class,"media-group__title--factory")]','factory_label')]:
    for el in doc.xpath(xpath):el.set('data-i18n',key)
for el in doc.xpath('//h3[contains(@class,"media-group__title") and not(contains(@class,"media-group__title--factory"))]'):
    el.set('data-i18n','applications_label')
if not doc.xpath('//*[@data-i18n="image_note"]'):
    note=etree.Element('p',attrib={'class':'inquiry-notice','data-i18n':'image_note'})
    doc.xpath('//*[@id="factory"]//*[@class="section__header"]')[0].append(note)

# Product taxonomy is descriptive: no invented prices, availability or ratings.
graph_el=doc.xpath('//script[@type="application/ld+json"]')[0]
graph=json.loads(graph_el.text)
for node in graph['@graph']:
    if node.get('@type')=='Product':
        node['url']=base+('#asa' if 'asa-resin' in node['@id'] else '#pvc')
        node['image']=base+('images/asa-slide-1.jpg' if 'asa-resin' in node['@id'] else 'images/references/profile-catalog.jpg')
        if 'asa-resin' in node['@id']:
            node['description']=catalog['en']['prod1_desc']
    if node.get('@type')=='WebSite':node['inLanguage']=['en','zh-CN']
graph_el.text=json.dumps(graph,ensure_ascii=False,indent=2)

for language,filename in [('en','index.html'),('zh','zh.html')]:
    page=copy.deepcopy(doc)
    page.set('lang','zh-CN' if language=='zh' else 'en')
    words=catalog[language]
    for el in page.xpath('//*[@data-i18n]'):
        key=el.get('data-i18n')
        if key in words:content(el,words[key])
    for el in page.xpath('//*[@data-i18n="nav_buying_guide"]'):
        el.set('href', 'zh-buying-guide.html' if language == 'zh' else 'buying-guide.html')
    if language=='zh':
        for el in page.xpath('//*[@data-text-zh]'):content(el,el.get('data-text-zh'))
        for el in page.xpath('//*[@data-alt-zh]'):el.set('alt',el.get('data-alt-zh'))
        placeholders={'f-quantity':'例如：5,000 平方米','f-color':'陶红、蓝色、灰色或 RAL 色号','f-size':'屋面面积或所需板长','f-port':'国家 / 港口城市','f-message':'工程类型、交期、包装或其他要求……'}
        for ident,value in placeholders.items():page.get_element_by_id(ident).set('placeholder',value)
        for el,text in zip(page.xpath('//*[@id="f-product"]/option')[1:],['ASA 合成树脂瓦','UPVC 波浪瓦','两种产品']):el.text=text
    url=base+('zh.html' if language=='zh' else '')
    page.xpath('//link[@rel="canonical"]')[0].set('href',url)
    for el in page.xpath('//head/link[@hreflang]'):el.getparent().remove(el)
    for code,target in [('en',base),('zh-CN',base+'zh.html'),('x-default',base)]:
        etree.SubElement(page.find('head'),'link',rel='alternate',hreflang=code,href=target)
    title='ASA合成树脂瓦与UPVC波浪瓦厂家 | Dingshengan 佛山' if language=='zh' else 'ASA Resin Roof Tiles & UPVC Sheets Manufacturer | Dingshengan'
    desc='Dingshengan 位于广东佛山，提供 ASA 合成树脂瓦、UPVC 波浪瓦及屋面配件，为经销商与工程采购方提供颜色、尺寸、包装定制及出口询价支持。' if language=='zh' else 'Foshan manufacturer of ASA synthetic resin roof tiles, UPVC corrugated roofing sheets and accessories. OEM/ODM support for global distributors and projects.'
    page.find('head/title').text=title
    meta(page,'description',desc)
    for key,value in [('og:title',title),('og:description',desc),('og:url',url),('og:locale','zh_CN' if language=='zh' else 'en_US')]:meta(page,key,value,'property')
    for key,value in [('twitter:title',title),('twitter:description',desc)]:meta(page,key,value)
    for el in page.xpath('//*[@data-lang]'):
        active=el.get('data-lang')==language
        el.set('class','header__lang-btn'+(' is-active' if active else ''))
        if active:el.set('aria-current','page')
        else:el.attrib.pop('aria-current',None)
    # The FAQ schema must describe the visible answers in this language.
    faq=page.xpath('//script[@type="application/ld+json"]')[1]
    faq.text=json.dumps({'@context':'https://schema.org','@type':'FAQPage','inLanguage':page.get('lang'),'mainEntity':[{'@type':'Question','name':d.find('summary').text_content(),'acceptedAnswer':{'@type':'Answer','text':d.find('p').text_content()}} for d in page.xpath('//*[@id="faq"]//details')]},ensure_ascii=False,indent=2)
    for el in page.xpath('//*[@data-text-zh or @data-alt-zh]'):
        el.attrib.pop('data-text-zh',None);el.attrib.pop('data-alt-zh',None)
    output='<!DOCTYPE html>\n'+html.tostring(page,encoding='unicode',method='html')+'\n'
    output='\n'.join(line.rstrip() for line in output.splitlines())+'\n'
    (root/filename).write_text(output,encoding='utf-8',newline='\n')
    print('Built',filename)
