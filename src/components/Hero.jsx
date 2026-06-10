import { useState, useEffect } from "react"

const commands = [
  { text: "ncli --help", delay: 800 },
  { text: "ncli plugin list", delay: 1200 },
  { text: "ncli repo search", delay: 1000 },
  { text: "ncli repo install nexus-open-cli-doctor", delay: 1500 },
]

function NetworkNodes() {
  const nodes = [
    { cx: 120, cy: 80, r: 3, delay: 0 },
    { cx: 280, cy: 40, r: 2, delay: 0.5 },
    { cx: 440, cy: 90, r: 3, delay: 0.3 },
    { cx: 560, cy: 30, r: 2, delay: 0.7 },
    { cx: 680, cy: 70, r: 3, delay: 0.2 },
    { cx: 80, cy: 200, r: 2, delay: 0.4 },
    { cx: 220, cy: 170, r: 3, delay: 0.6 },
    { cx: 400, cy: 160, r: 4, delay: 0.1 },
    { cx: 520, cy: 190, r: 2, delay: 0.8 },
    { cx: 640, cy: 150, r: 3, delay: 0.35 },
    { cx: 160, cy: 280, r: 3, delay: 0.15 },
    { cx: 340, cy: 250, r: 2, delay: 0.55 },
    { cx: 480, cy: 270, r: 3, delay: 0.25 },
    { cx: 600, cy: 250, r: 2, delay: 0.65 },
    { cx: 720, cy: 220, r: 3, delay: 0.45 },
  ]

  const connections = [
    "M120,80 L280,40", "M280,40 L440,90", "M440,90 L560,30",
    "M560,30 L680,70", "M120,80 L220,170", "M280,40 L400,160",
    "M440,90 L520,190", "M560,30 L640,150", "M220,170 L400,160",
    "M400,160 L520,190", "M80,200 L220,170", "M400,160 L340,250",
    "M520,190 L480,270", "M640,150 L600,250", "M680,70 L720,220",
    "M160,280 L340,250", "M340,250 L480,270", "M480,270 L600,250",
    "M120,80 L160,280", "M440,90 L340,250", "M680,70 L600,250",
  ]

  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-30"
      viewBox="0 0 800 320"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {connections.map((d, i) => (
        <path
          key={`conn-${i}`}
          d={d}
          stroke="rgba(139,124,246,0.12)"
          strokeWidth="1"
          fill="none"
          style={{
            strokeDasharray: "200",
            strokeDashoffset: "200",
            animation: `draw-line 1.5s ease-out ${1 + i * 0.08}s forwards`,
          }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={`node-${i}`}
          cx={n.cx}
          cy={n.cy}
          r={n.r}
          fill="rgba(139,124,246,0.5)"
          style={{ animation: `pulse-node 3s ease-in-out ${n.delay}s infinite` }}
        />
      ))}
    </svg>
  )
}

function Terminal({ activeCmd }) {
  const lines = [
    { type: "dim", text: "$ ncli --help" },
    { type: "out", text: "Usage: ncli [OPTIONS] COMMAND [ARGS]..." },
    { type: "dim", text: "$ ncli plugin list" },
    { type: "out", text: "  plugin          Manage plugins" },
    { type: "out", text: "  repo            Browse & install from registry" },
    { type: "out", text: "  rename          Batch file renaming" },
    { type: "dim", text: "$ ncli repo search" },
    { type: "out", text: "  nexus-open-cli-doctor     System diagnostics toolkit" },
    { type: "out", text: "  nexus-open-cli-git        Git workflow helpers" },
    { type: "dim", text: "$" },
    { type: "cursor", text: "" },
  ]

  return (
    <div className="relative rounded-xl border border-accent-border bg-bg-tertiary/80 backdrop-blur overflow-hidden glow-accent">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
        <div className="w-3 h-3 rounded-full bg-red-500/70" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <div className="w-3 h-3 rounded-full bg-green-500/70" />
        <span className="ml-2 font-mono text-xs text-text-muted">terminal</span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 overflow-x-auto">
        {lines.map((line, i) => (
          <div key={i}>
            {line.type === "dim" && (
              <span className="text-text-muted">{line.text}</span>
            )}
            {line.type === "out" && (
              <span className="text-text-secondary">{line.text}</span>
            )}
            {line.type === "cursor" && (
              <span className="inline-block w-2 h-5 bg-accent align-middle" style={{ animation: "blink 1s step-end infinite" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background network */}
      <div className="absolute inset-0 z-0">
        <NetworkNodes />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-up">
            <p className="font-mono text-accent text-sm tracking-widest mb-4">
              PIP INSTALL NEXUS-OPEN-CLI
            </p>
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              CLI 工具的{" "}
              <span className="text-gradient">App Store</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-md mb-10">
              NexusOpenCLI 是一个可扩展的 CLI 生态基础设施。
              安装插件即可获得新命令 — 像逛应用商店一样，发现和使用 CLI 工具。
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#quickstart"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold font-display hover:bg-accent-glow transition-colors duration-200"
              >
                快速开始
              </a>
              <a
                href="https://github.com/PersonalViolet/nexus_cli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-accent-border text-text-primary font-semibold font-display hover:bg-accent-subtle transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success" />
                MIT License
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Python 3.10+
              </div>
            </div>
          </div>

          <div className="animate-fade-up animate-fade-up-delay-2">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
