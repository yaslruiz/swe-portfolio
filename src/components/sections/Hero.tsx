'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--space-6)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-accent)',
            fontWeight: 500,
            marginBottom: 'var(--space-4)',
            letterSpacing: '0.05em',
          }}
        >
          Available for new opportunities
        </p>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 500,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: 'var(--color-text-primary)',
            marginBottom: 'var(--space-6)',
          }}
        >
          Yassine Laazizi —
          <br />
          <span style={{ color: 'var(--color-text-tertiary)' }}>
            Software Engineer
          </span>
        </h1>

        <p
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.7,
            marginBottom: 'var(--space-12)',
          }}
        >
          I build fast, accessible, and well-architected web products. Currently
          focused on frontend systems and full-stack TypeScript. Based in Spain,
          open to remote.
        </p>

        <div
          style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: 'var(--color-text-primary)',
              color: 'var(--color-bg)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity var(--transition-fast)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            View projects
          </a>

          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: 'var(--color-text-primary)',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: 'var(--text-sm)',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'border-color var(--transition-fast)',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'var(--color-border-hover)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'var(--color-border)')
            }
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}
