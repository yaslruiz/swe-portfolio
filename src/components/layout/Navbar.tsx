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
  const [menuOpen, setMenuOpen] = useState(false)

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
          ? 'color-mix(in srgb, var(--color-bg) 90%, transparent)'
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
          flexShrink: 0,
        }}
      >
        yl.
      </Link>

      {/* Desktop nav */}
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-8)',
        }}
        className="desktop-nav"
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

      {/* Mobile right side */}
      <div
        style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}
        className="mobile-nav"
      >
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
            }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        )}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: '0.5px solid var(--color-border)',
            borderRadius: 'var(--radius-md)',
            padding: '6px 10px',
            cursor: 'pointer',
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)',
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--color-bg)',
            borderBottom: '0.5px solid var(--color-border)',
            padding: 'var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-6)',
          }}
          className="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
