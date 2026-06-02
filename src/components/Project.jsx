import React, { useEffect, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const formatDate = (value) => {
  if (!value) return 'Recently updated'

  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    return 'Recently updated'
  }

  return parsed.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const toShowcaseProject = (repo, index) => ({
  title: repo.name,
  category: repo.primaryLanguage?.name || 'Pinned Repo',
  date: formatDate(repo.updatedAt),
  description: repo.description || 'Pinned GitHub repository from the portfolio showcase.',
  url: repo.url,
  language: repo.primaryLanguage?.name || 'Code',
  variant: index % 2 === 0 ? 'editorial' : 'workspace',
})

const ProjectArtwork = ({ variant }) => {
  if (variant === 'workspace') {
    return (
      <div className="relative h-full overflow-hidden rounded-[2rem] bg-linear-to-br from-[#f2f2f0] via-[#ece7df] to-[#ded6ca]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.9),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(255,89,59,0.12),transparent_30%)]" />

        <div className="absolute left-[12%] top-[16%] h-[42%] w-[18%] rounded-[1.2rem] bg-[#d9dad7] shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
          <div className="absolute left-[22%] top-[30%] h-[12%] w-[56%] rounded-sm bg-[#0f1117]" />
        </div>

        <div className="absolute left-[36%] top-[18%] h-[18%] w-[14%] rounded-[1rem] bg-[#efefef] shadow-[0_12px_30px_rgba(15,23,42,0.08)]" />

        <div className="absolute right-[12%] top-[10%] h-[54%] w-[26%] rounded-[1.5rem] bg-[#ff3a22] shadow-[0_24px_60px_rgba(255,58,34,0.24)]" />

        <div className="absolute left-[18%] bottom-[16%] h-[22%] w-[48%] rounded-[1.5rem] bg-[#f3f0e9] shadow-[0_18px_36px_rgba(15,23,42,0.08)]">
          <div className="absolute left-[8%] top-[20%] h-[26%] w-[36%] rounded-md bg-[#1b1b1d]" />
          <div className="absolute right-[8%] bottom-[16%] h-[28%] w-[18%] rounded-md bg-[#c9c2b7]" />
        </div>

        <div className="absolute bottom-[12%] left-[48%] h-24 w-24 rounded-full bg-black/75 blur-[1px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/6 to-transparent" />
      </div>
    )
  }

  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] bg-linear-to-br from-[#f6f3ef] via-[#f1ede7] to-[#e2ddd3]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.8),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(92,99,255,0.14),transparent_28%)]" />

      <div className="absolute left-[10%] top-[10%] h-[62%] w-[34%] rounded-[1.5rem] bg-[#fff] shadow-[0_22px_60px_rgba(15,23,42,0.08)]">
        <div className="absolute left-[18%] top-[16%] h-[28%] w-[38%] rounded-[1rem] bg-[#6547c4]" />
        <div className="absolute right-[18%] top-[20%] h-[22%] w-[18%] rounded-full bg-[#6e58d0]" />
        <div className="absolute left-[18%] bottom-[18%] h-[24%] w-[32%] rounded-[1rem] bg-[#d84031]" />
        <div className="absolute right-[14%] bottom-[14%] h-[22%] w-[24%] rounded-[1rem] bg-[#4c3ba8]/80" />
      </div>

      <div className="absolute left-[34%] top-[4%] h-[28%] w-[30%] rounded-[1.25rem] bg-linear-to-br from-[#ea4b3a] to-[#be2f24] shadow-[0_20px_45px_rgba(234,75,58,0.18)]" />
      <div className="absolute right-[11%] top-[15%] h-[40%] w-[18%] rounded-[1.25rem] bg-[#f4b8ab] shadow-[0_22px_55px_rgba(15,23,42,0.08)]" />
      <div className="absolute right-[18%] bottom-[18%] h-[28%] w-[36%] rounded-[1.75rem] bg-[#111111] shadow-[0_24px_50px_rgba(15,23,42,0.16)]" />
      <div className="absolute left-[24%] bottom-[12%] h-[14%] w-[52%] rounded-full bg-black/10 blur-[14px]" />
    </div>
  )
}

const ProjectCard = ({ project }) => (
  <article className="relative group overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-out hover:-translate-y-1.5">
    <div className="relative p-3 sm:p-4">
      <div className="h-[22rem] overflow-hidden rounded-[1.75rem]">
        <ProjectArtwork variant={project.variant} />
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
        className="absolute right-6 top-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 text-white shadow-[0_18px_40px_rgba(99,102,241,0.35)] transition-transform duration-300 ease-out group-hover:scale-110"
      >
        <ArrowUpRight className="h-7 w-7" />
      </a>
    </div>

    <div className="px-6 pb-16 sm:px-7 sm:pb-20">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
          {project.category}
        </span>
        <span className="text-sm text-slate-500">{project.date}</span>
      </div>

      <h3 className="mt-5 text-[clamp(2rem,3.8vw,3.35rem)] font-black uppercase tracking-[-0.06em] leading-[0.92] text-slate-900">
        {project.title}
      </h3>

      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
        {project.description}
      </p>

      <div className="mt-7 flex items-center justify-end gap-4 border-t border-black/5 pt-5" />
    </div>

    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${project.title}`}
      className="absolute right-6 bottom-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-black text-white shadow-md hover:bg-indigo-500 hover:text-white hover:shadow-lg"
    >
      View Project
      <ArrowUpRight className="h-4 w-4" />
    </a>
  </article>
)

const Project = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/pinned')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }

        return response.json()
      })
      .then((data) => {
        setRepos(data.repos || [])
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching pinned repos:', err)
        setError('Failed to load projects.')
        setLoading(false)
      })
  }, [])

  const projects = repos.map(toShowcaseProject)

  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden bg-[#f4f1ea] px-6 py-20 sm:px-10 lg:px-20"
    >
      <span className="sr-only" />
      <div className="mx-auto w-full max-w-7xl mt-10">
        <div className="mb-15 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            {/* <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
              Selected Work
            </p> */}
            <h3 className="mt-3 text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase tracking-[-0.07em] leading-[0.9] text-slate-900">
              Featured Projects
            </h3>
            {/* <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              A curated view of the work I&apos;ve been building, mixing live GitHub data with a polished preview when the API is unavailable locally.
            </p> */}
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            {/* <span
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium shadow-sm ${
                apiState === 'live'
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                  : 'border-slate-200 bg-white text-slate-600'
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  apiState === 'live'
                    ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)]'
                    : 'bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.95)]'
                }`}
              />
              {apiState === 'live' ? 'ive' : 'Local preview'}
            </span> */}

            <a
              href="https://github.com/AayushBarik07"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-black hover:text-white"
            >
              View All Projects
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative mt-8">
          {loading ? (
            <div className="rounded-[2rem] border border-black/5 bg-white px-6 py-10 text-center text-slate-600 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              Loading pinned projects...
            </div>
          ) : error ? (
            <div className="rounded-[2rem] border border-black/5 bg-white px-6 py-10 text-center text-slate-600 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Project