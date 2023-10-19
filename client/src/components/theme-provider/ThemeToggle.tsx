'use client'
import { useState, useEffect } from 'react'
import {BsFillSunFill,BsMoon} from 'react-icons/bs'
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

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
      onClick={() =>setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light'
      ?<BsMoon />
      : <BsFillSunFill className='text-yellow-400' />
  }
    </button>
  )
}

export default ThemeToggle
