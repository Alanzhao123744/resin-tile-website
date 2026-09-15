"""Small offline release check for the generated bilingual pages."""
import json
from pathlib import Path
from lxml import html

root = Path(__file__).resolve().parent.parent
pages = [
    ('index.html', 'en', 'https://dingshengan.com/'),
    ('zh.html', 'zh-CN', 'https://dingshengan.com/zh.html'),
]

for filename, language, canonical in pages:
    tree = html.parse(str(root / filename))
    assert tree.getroot().get('lang') == language, f'{filename}: html language'
    assert len(tree.xpath('//h1')) == 1, f'{filename}: exactly one H1 required'
    assert tree.xpath(f'//link[@rel="canonical" and @href="{canonical}"]'), f'{filename}: canonical'
    assert len(tree.xpath('//link[@hreflang]')) == 3, f'{filename}: hreflang links'
    assert len(tree.xpath('//details')) == 6, f'{filename}: FAQ count'
    assert not tree.xpath('//*[@data-text-zh or @data-alt-zh]'), f'{filename}: untranslated build attribute'
    for image in tree.xpath('//img'):
        for attribute in ('alt', 'width', 'height'):
            assert image.get(attribute) is not None, f'{filename}: image missing {attribute}'
        source = image.get('src', '')
        if source and not source.startswith(('http://', 'https://')):
            assert (root / source).is_file(), f'{filename}: missing image {source}'
    for schema in tree.xpath('//script[@type="application/ld+json"]'):
        json.loads(schema.text)

print('Static SEO checks passed: metadata, images, FAQs and JSON-LD for both pages.')
