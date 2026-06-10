export default function Footer() {
  return (
    <footer className="relative border-t border-border/30 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-accent-subtle flex items-center justify-center">
            <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 1.5L2.25 7.104v9.792l9.694 5.604 9.695-5.604V7.104L11.944 1.5zM4.75 8.396l7.194-4.16 7.195 4.16-7.195 4.16-7.194-4.16zm13.89 2.708v4.292l-6.695 3.87-6.696-3.87v-4.292l6.696 3.87 6.695-3.87z" />
            </svg>
          </div>
          <span className="font-display font-semibold text-text-primary">NexusOpenCLI</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-text-secondary">
          <a
            href="https://github.com/PersonalViolet/nexus_cli"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/PersonalViolet/nexus_cli/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            MIT License
          </a>
          <a
            href="https://github.com/PersonalViolet/NexusOpenCLI-plugins-registry"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            插件注册中心
          </a>
        </div>

        <p className="text-text-muted text-xs">
          &copy; {new Date().getFullYear()} NexusOpenCLI. Built with care.
        </p>
      </div>
    </footer>
  )
}
