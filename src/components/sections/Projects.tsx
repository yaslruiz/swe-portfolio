'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project One',
    description:
      'A full-stack SaaS application built with Next.js, tRPC, Prisma and Stripe.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    href: '#',
    year: '2024',
  },
  {
    title: 'Project Two',
    description:
      'High-performance data visualization tool with custom Canvas rendering.',
    tags: ['React', 'Canvas API', 'D3.js', 'TypeScript'],
    href: '#',
    year: '2024',
  },
  {
    title: 'Project Three',
    description:
      'CLI developer tool published to npm for scaffolding TypeScript projects.',
    tags: ['Node.js', 'TypeScript', 'CLI', 'npm'],
    href: '#',
    year: '2024',
  },
]

export function Projects() {
  return (
    <section
      id="projects"
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
          Selected work
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
          Projects
        </h2>
      </motion.div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-4)',
        }}
      >
        {projects.map((project, index) => (
          <motion.a
            key={project.title}
            href={project.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{
              display: 'block',
              padding: 'var(--space-8)',
              border: '0.5px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              textDecoration: 'none',
              color: 'inherit',
              transition:
                'border-color var(--transition-fast), background-color var(--transition-fast)',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border-hover)'
              e.currentTarget.style.backgroundColor =
                'var(--color-bg-secondary)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)'
              e.currentTarget.style.backgroundColor = 'transparent'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'var(--space-3)',
              }}
            >
              <h3
                style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 500,
                  color: 'var(--color-text-primary)',
                }}
              >
                {project.title}
              </h3>
              <span
                style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-tertiary)',
                }}
              >
                {project.year}
              </span>
            </div>

            <p
              style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-6)',
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-2)',
                flexWrap: 'wrap',
              }}
            >
              {project.tags.map((tag) => (
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
          </motion.a>
        ))}
      </div>
    </section>
  )
}
