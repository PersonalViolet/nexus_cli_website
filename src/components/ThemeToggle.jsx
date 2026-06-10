import { useState, useEffect } from "react"

function getTheme() {
  if (typeof window === "undefined") return "dark"
  return document.documentElement.classList.contains("light") ? "light" : "dark"
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme)

  useEffect(() => {
    const html = document.documentElement
    if (theme === "light") {
      html.classList.add("light")
    } else {
      html.classList.remove("light")
    }
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 w-10 h-10 rounded-xl border border-accent-border bg-bg-secondary/80 backdrop-blur flex items-center justify-center hover:bg-accent-subtle transition-all duration-200"
      aria-label={theme === "dark" ? "切换到浅色模式" : "切换到深色模式"}
    >
      {theme === "dark" ? (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  )
}
