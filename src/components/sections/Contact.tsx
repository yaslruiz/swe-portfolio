'use client'

import { motion } from 'framer-motion'

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: 'var(--space-24) var(--space-6)',
        maxWidth: '900px',
        margin: '0 auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          style={{
            fontSize: 'var(--text-sm)',
            color: 'var(--color-text-tertiary)',
            marginBottom: 'var(--space-4)',
            letterSpacing: '0.05em',
          }}
        >
          Get in touch
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            marginBottom: 'var(--space-6)',
            color: 'var(--color-text-primary)',
          }}
        >
          Let&apos;s work together
        </h2>
        <p
          style={{
            fontSize: 'var(--text-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '540px',
            lineHeight: 1.7,
            marginBottom: 'var(--space-12)',
          }}
        >
          I am currently open to new opportunities. Whether you have a role in
          mind or just want to connect, my inbox is always open.
        </p>

        <div
          style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
        >
          <a
            href="mailto:yassine.lruiz@gmail.com"
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
            Say hello
          </a>

          <a
            href="https://github.com/yaslruiz"
            target="_blank"
            rel="noopener noreferrer"
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
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
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
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  )
}
