'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Feebbo',
    role: 'Frontend Engineer',
    period: '2020 — Present',
    description:
      'Joined as a junior engineer, grew into a senior role over 4+ years. Led frontend architecture decisions, built scalable component systems, and collaborated closely on backend and systems design.',
    tags: ['React', 'TypeScript', 'Next.js', 'Node.js'],
  },
]

export function Experience() {
  return (
    <section
      id="experience"
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
          Where I have worked
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 500,
            letterSpacing: '-0.03em',
            marginBottom: 'var(--space-12)',
            color: 'var(--color-text-primary)',
          }}
        >
          Experience
        </h2>
      </motion.div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              padding: 'var(--space-8)',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'var(--space-2)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                }}
              >
                {exp.role}
              </h3>
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                {exp.period}
              </span>
            </div>

            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-accent)',
                marginBottom: 'var(--space-4)',
                fontWeight: 500,
              }}
            >
              {exp.company}
            </p>

            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                marginBottom: 'var(--space-6)',
              }}
            >
              {exp.description}
            </p>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                flexWrap: 'wrap',
              }}
            >
              {exp.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 'var(--text-xs)',
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    border: '0.5px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
