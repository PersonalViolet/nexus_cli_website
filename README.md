# NexusOpenCLI

NexusOpenCLI 的官方落地页 / 产品展示网站 —— 一个开源、可扩展的 Python CLI 生态系统，被称为"CLI 工具的 App Store"。

## 技术栈

| 类别 | 技术 |
|------|------|
| 构建工具 | Vite 8 |
| UI 框架 | React 19 |
| 样式方案 | Tailwind CSS 4 |
| 字体 | Inter、JetBrains Mono、Plus Jakarta Sans (Google Fonts) |
| 部署 | GitHub Pages (自动化 CI/CD) |

## 项目结构

```
src/
├── main.jsx          # 入口
├── App.jsx           # 根组件（单页布局）
├── index.css         # Tailwind 导入 + 自定义主题 + 动画
└── components/
    ├── Hero.jsx      # 首屏（网络动画 + 终端模拟器）
    ├── Features.jsx  # 六大特性卡片
    ├── QuickStart.jsx # 分标签代码示例（安装 / 插件 / 开发）
    └── Footer.jsx    # 页脚
```

## 本地开发

```bash
# 安装依赖
npm ci

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview
```

## 部署

推送到 `master` 分支会触发 GitHub Actions 自动构建并部署到 GitHub Pages。

**注意：** `vite.config.js` 中的 `base` 设置为 `'/nexus_cli_website/'`，匹配仓库名。如果部署到其他路径，需修改此配置。

## 相关项目

- [NexusOpenCLI](https://github.com/PersonalViolet/nexus_cli) —— 核心 CLI 项目
- [插件注册中心](https://github.com/PersonalViolet/NexusOpenCLI-plugins-registry) —— 官方插件仓库

## 许可

MIT
