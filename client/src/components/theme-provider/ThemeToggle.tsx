'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className="text-2xl text-emerald-400 shadow-sm"
      onClick={() =>setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
    >
      {resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  )
}

export default ThemeToggle
