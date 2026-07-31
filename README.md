# 🏠 鑫源建材 — 合成树脂瓦企业品牌独立站

企业品牌官网，展示合成树脂瓦产品。纯静态站点，中英双语，响应式设计。

## 技术栈

- 纯 HTML + CSS + JavaScript
- 无需构建工具，无框架依赖
- 中英双语（i18n）
- 响应式设计（手机/平板/桌面全适配）

## 项目结构

```
resin-tile-website/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── main.js         # 交互逻辑 + 中英翻译
├── images/             # 图片目录（可存放自定义图片）
└── README.md           # 项目说明
```

## 快速开始

### 本地预览

直接双击 `index.html` 在浏览器中打开即可预览。

或使用任意本地服务器：

```bash
# Python 3
python -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code Live Server 插件
```

### 部署

项目为纯静态文件，可部署到任何静态服务器：

- **GitHub Pages** — 推送至 GitHub 仓库，启用 Pages
- **Vercel / Netlify** — 拖拽文件夹即可部署
- **Nginx / Apache** — 将文件拷贝至 web 根目录
- **阿里云 OSS / 腾讯云 COS** — 上传至对象存储 + CDN

## 页面结构

| 区块 | 说明 |
|------|------|
| Header | Logo、导航、语言切换、联系电话 |
| Hero | 全屏主视觉 + 数据统计 |
| 关于树脂瓦 | 产品介绍 + 材质说明 |
| 产品优势 | 6 大核心优势卡片 |
| 对比表格 | 与传统屋面材料对比 |
| 产品展示 | 4 款产品卡片 + 颜色选择 |
| 技术参数 | 规格参数表 |
| 应用场景 | 6 大应用场景 |
| 工程案例 | 4 个精选案例 |
| 关于我们 | 公司简介 + 资质证书 |
| 客户评价 | 3 条客户感言 |
| 常见问题 | FAQ 折叠面板 |
| 联系我们 | 联系表单 + 联系信息 |
| Footer | 快速导航 + 社交媒体 + 版权 |

## 自定义修改

### 修改颜色主题

编辑 `css/style.css` 中的 CSS 变量：

```css
:root {
  --color-primary: #1B3A5C;      /* 主色 */
  --color-accent: #D4943A;       /* 强调色 */
  --color-bg-alt: #F5F7FA;       /* 灰色背景 */
}
```

### 修改公司信息

编辑 `js/main.js` 中的 `translations` 对象（中文和英文版本）。

### 替换图片

1. 将自定义图片放入 `images/` 文件夹
2. 在 `index.html` 中替换对应的 `src` 路径

### 添加公司 Logo

在 CSS 中修改 `.header__logo` 样式，或直接替换 HTML 中的 Logo 文本/图标。

## 浏览器兼容

- Chrome / Edge (最新)
- Firefox (最新)
- Safari (最新)
- 移动端浏览器

## License

MIT
