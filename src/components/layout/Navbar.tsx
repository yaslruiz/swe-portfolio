'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: '0 var(--space-6)',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled
          ? 'color-mix(in srgb, var(--color-bg) 80%, transparent)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? '0.5px solid var(--color-border)'
          : '0.5px solid transparent',
        transition: 'all var(--transition-base)',
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: 'var(--text-sm)',
          fontWeight: 500,
          color: 'var(--color-text-primary)',
          textDecoration: 'none',
          letterSpacing: '-0.02em',
        }}
      >
        yl.
      </Link>

      <nav
        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-8)' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color var(--transition-fast)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = 'var(--color-text-primary)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = 'var(--color-text-secondary)')
            }
          >
            {link.label}
          </a>
        ))}

        {mounted && (
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            style={{
              background: 'none',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '6px 10px',
              cursor: 'pointer',
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-secondary)',
              transition: 'all var(--transition-fast)',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}
      </nav>
    </header>
  )
}
