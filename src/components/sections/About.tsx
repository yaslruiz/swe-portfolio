'use client'

import { motion } from 'framer-motion'

const skills = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'tRPC',
  'Prisma',
  'Tailwind CSS',
  'Framer Motion',
  'Git',
  'CI/CD',
  'REST APIs',
]

export function About() {
  return (
    <section
      id="about"
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
          A bit about me
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            marginBottom: 'var(--space-8)',
            color: 'var(--color-text-primary)',
          }}
        >
          About
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-16)',
        }}
      >
        <div>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
              marginBottom: 'var(--space-6)',
            }}
          >
            I&apos;m a software engineer with 4+ years of experience building
            web products. I started as a junior engineer and grew into a senior
            role, taking ownership of frontend architecture and contributing
            across the full stack.
          </p>
          <p
            style={{
              fontSize: 'var(--text-base)',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.8,
            }}
          >
            I care deeply about code quality, performance, and building things
            that are both technically sound and great to use. Currently based in
            Spain and open to remote opportunities.
          </p>
        </div>

        <div>
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--color-text-tertiary)',
              marginBottom: 'var(--space-4)',
              fontWeight: 500,
            }}
          >
            Technologies I work with
          </p>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}
          >
            {skills.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: 'var(--text-xs)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  border: '0.5px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
