import { useState } from "react"

const tabs = [
  { id: "install", label: "安装" },
  { id: "plugin", label: "安装插件" },
  { id: "develop", label: "开发" },
]

const content = {
  install: {
    title: "一行命令，即刻起步",
    desc: "在虚拟环境中安装 NexusOpenCLI，然后查看可用命令。",
    code: `# 创建虚拟环境
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\\Scripts\\activate

# 安装 NexusOpenCLI
pip install nexus-open-cli

# 查看帮助
ncli --help
ncli plugin list`,
    tip: "推荐在项目专属的虚拟环境中安装，避免依赖冲突。",
  },
  plugin: {
    title: "像逛 App Store 一样装插件",
    desc: "通过内置的 repo 命令浏览和安装官方注册中心里的插件。",
    code: `# 搜索可用插件
ncli repo search

# 安装插件（示例：系统诊断工具）
ncli repo install nexus-open-cli-doctor

# 验证安装
ncli --help`,
    tip: "也可以通过 pip install 直接安装 PyPI 或本地目录中的插件。",
  },
  develop: {
    title: "零基础开发你的第一个插件",
    desc: "使用仓库提供的 Skill 辅助工具，快速搭建第三方插件。",
    code: `# 克隆仓库
git clone https://github.com/PersonalViolet/nexus_cli

# 安装开发依赖
pip install -e ".[dev]"

# 运行测试
pytest

# 使用 Skill 引导开发插件
# 参考 skill/ncli-plugin-dev-helper/SKILL.md`,
    tip: "插件通过 nexuscli.command entry point 注册，NexusCLI 启动时自动发现。",
  },
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-bg-primary/80 border border-border/50 text-text-muted text-xs font-mono hover:text-text-primary hover:border-accent-border transition-all duration-200"
    >
      {copied ? "已复制" : "复制"}
    </button>
  )
}

export default function QuickStart() {
  const [active, setActive] = useState("install")

  return (
    <section id="quickstart" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-accent text-sm tracking-widest mb-4">GET STARTED</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight">
            快速开始
          </h2>
        </div>

        <div className="flex justify-center gap-1 mb-10 bg-bg-secondary rounded-xl p-1 w-fit mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`px-5 py-2 rounded-lg font-display font-medium text-sm transition-all duration-200 ${
                active === tab.id
                  ? "bg-accent text-white"
                  : "text-text-secondary hover:text-text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-bg-secondary rounded-2xl border border-border/40 p-8 lg:p-10">
          <h3 className="font-display font-semibold text-xl mb-2">
            {content[active].title}
          </h3>
          <p className="text-text-secondary mb-6">
            {content[active].desc}
          </p>
          <div className="relative rounded-xl bg-bg-tertiary border border-border/30 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              <span className="ml-2 font-mono text-xs text-text-muted">shell</span>
            </div>
            <CopyButton text={content[active].code} />
            <pre className="p-6 font-mono text-sm leading-relaxed text-text-secondary overflow-x-auto">
              <code>{content[active].code}</code>
            </pre>
          </div>
          <p className="mt-4 text-text-muted text-sm flex items-start gap-2">
            <svg className="w-4 h-4 mt-0.5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            {content[active].tip}
          </p>
        </div>
      </div>
    </section>
  )
}
