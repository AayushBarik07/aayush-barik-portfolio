import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Play } from 'lucide-react'

const formatDate = (value) => {
  if (!value) return 'Recently updated'
  const parsed = new Date(value)
  if (Number.isNaN(parsed.getTime())) return 'Recently updated'
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
      <div className="relative h-full overflow-hidden bg-linear-to-br from-[#f2f2f0] via-[#ece7df] to-[#ded6ca]">
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
    <div className="relative h-full overflow-hidden bg-linear-to-br from-[#f6f3ef] via-[#f1ede7] to-[#e2ddd3]">
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

/* ── Marquee strip shown before grid is revealed ── */
const ProjectMarquee = ({ projects, onReveal }) => {
  const [hovered, setHovered] = useState(false)
  // Duplicate projects enough times to fill strip seamlessly
  const tiles = [...projects, ...projects, ...projects, ...projects]

  return (
    <div
      className="relative w-full overflow-hidden cursor-pointer"
      style={{ height: '22rem' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onReveal}
    >
      {/* Scrolling track */}
      <div
        className="flex h-full gap-4"
        style={{
          width: 'max-content',
          animation: hovered
            ? 'marquee 30s linear infinite paused'
            : 'marquee 30s linear infinite',
        }}
      >
        {tiles.map((project, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={`${project.title}-${i}`}
            className="h-full shrink-0 rounded-[1.5rem] overflow-hidden"
            style={{ width: '28rem' }}
          >
            <ProjectArtwork variant={project.variant} />
          </div>
        ))}
      </div>

      {/* Hover overlay — blur + darken */}
      <div
        className="absolute inset-0 transition-all duration-400 pointer-events-none"
        style={{
          backdropFilter: hovered ? 'blur(6px)' : 'blur(0px)',
          background: hovered ? 'rgba(15,23,42,0.28)' : 'rgba(15,23,42,0)',
          transition: 'backdrop-filter 0.35s ease, background 0.35s ease',
        }}
      />

      {/* Pop-up circular "View Projects" button */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'scale(1)' : 'scale(0.7)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-white text-slate-900 shadow-[0_24px_60px_rgba(0,0,0,0.25)] pointer-events-auto">
            <ArrowUpRight className="h-9 w-9" />
          </div>
          <span className="text-white font-bold text-lg tracking-wide uppercase drop-shadow-lg select-none">
            View Projects
          </span>
        </div>
      </div>

      {/* Keyframes injected inline */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

const ProjectCard = ({ project, onViewProject }) => (
  <article className="relative group overflow-hidden border border-black/5 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_0_0_2.5px_rgba(99,102,241,0.55),0_0_32px_6px_rgba(99,102,241,0.18),0_24px_70px_rgba(15,23,42,0.10)] flex flex-col h-full rounded-[2rem]">
    <div className="relative shrink-0 overflow-hidden rounded-t-[2rem]" style={{ height: '22rem' }}>
      <ProjectArtwork variant={project.variant} />
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
        className="absolute right-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500 text-white shadow-[0_18px_40px_rgba(99,102,241,0.35)] transition-transform duration-300 ease-out group-hover:scale-110 z-10"
      >
        <ArrowUpRight className="h-6 w-6" />
      </a>
    </div>
    <div className="px-6 pt-5 pb-16 sm:px-7 sm:pb-20 flex flex-col flex-1">
      <div className="flex items-center justify-between gap-4">
        <span className="inline-flex items-center border border-indigo-500/30 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
          {project.category}
        </span>
        <span className="text-sm text-slate-500">{project.date}</span>
      </div>
      <h3 className="mt-5 text-[clamp(2rem,3.8vw,3.35rem)] font-black uppercase tracking-[-0.06em] leading-[0.92] text-slate-900">
        {project.title}
      </h3>
      <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg flex-1">
        {project.description}
      </p>
      <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-zinc-700/60 to-transparent" />
    </div>
    <button
      type="button"
      onClick={() => onViewProject(project)}
      className="absolute right-6 bottom-6 inline-flex items-center gap-2 bg-black px-5 py-2.5 text-sm font-semibold text-white cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-indigo-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_20px_40px_rgba(99,102,241,0.35)]"
    >
      View Project
      <ArrowUpRight className="h-4 w-4" />
    </button>
  </article>
)

const Project = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const [gridRevealed, setGridRevealed] = useState(false)

  useEffect(() => {
    fetch('/api/pinned')
      .then((response) => {
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`)
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
      className="relative scroll-mt-24 overflow-hidden bg-[#f4f1ea] py-20"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] bg-[size:68px_68px]" />

        {/* Top Right Golden Rings */}
        <svg
          className="absolute top-0 right-0 w-[700px] h-[500px] opacity-70"
          viewBox="0 0 700 500"
          fill="none"
        >
          <circle
            cx="540"
            cy="70"
            r="65"
            stroke="#D6B05E"
            strokeWidth="1"
          />

          <circle
            cx="650"
            cy="50"
            r="80"
            stroke="#D6B05E"
            strokeWidth="1"
          />

          {/* Flow Line 1 */}
          <path
            d="M320 450C430 390 450 320 560 250C620 210 660 140 700 120"
            stroke="#D6B05E"
            strokeWidth="1.5"
          />

          {/* Flow Line 2 */}
          <path
            d="M360 500C500 430 520 360 620 290C680 250 710 180 740 150"
            stroke="#D6B05E"
            strokeWidth="1"
          />

          {/* Flow Line 3 */}
          <path
            d="M250 520C400 470 430 390 520 330C620 260 660 180 710 170"
            stroke="#D6B05E"
            strokeWidth="1"
          />
        </svg>

        {/* Bottom Left Ring */}
        <svg
          className="absolute -left-32 bottom-0 w-[350px] h-[350px] opacity-20"
          viewBox="0 0 350 350"
          fill="none"
        >
          <circle
            cx="175"
            cy="175"
            r="140"
            stroke="#D6B05E"
            strokeWidth="1"
          />
        </svg>

        {/* Decorative Dots */}
        <div className="absolute top-24 left-24 h-2 w-2 rounded-full bg-[#D6B05E]/40" />
        <div className="absolute bottom-32 right-32 h-2 w-2 rounded-full bg-[#D6B05E]/40" />

      </div>
      <span className="sr-only" />

      {/* Header */}
      <div className="w-full mt-10 px-6 sm:px-10 lg:px-20">
        <div className="mb-15 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="mt-3 text-[clamp(2.5rem,5vw,5.5rem)] font-black uppercase tracking-[-0.07em] leading-[0.9] text-slate-900">
              Featured Projects
            </h3>
          </div>
          <div className="flex items-center gap-3 self-start lg:self-auto">
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
      </div>

      {/* Content area — full bleed */}
      <div className="relative mt-8 w-screen" style={{ marginLeft: 'calc(50% - 50vw)' }}>
        {loading ? (
          <div className="mx-6 rounded-[2rem] border border-black/5 bg-white px-6 py-10 text-center text-slate-600 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            Loading pinned projects...
          </div>
        ) : error ? (
          <div className="mx-6 rounded-[2rem] border border-black/5 bg-white px-6 py-10 text-center text-slate-600 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
            {error}
          </div>
        ) : selectedProject ? (
          /* ── Detail View ── */
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20">
            <div className="rounded-[2rem] border border-black/5 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="min-h-[22rem] lg:min-h-[40rem] p-3 sm:p-4">
                  <div className="h-full min-h-[20rem] overflow-hidden rounded-[1.75rem]">
                    <ProjectArtwork variant={selectedProject.variant} />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 lg:p-10 text-left">
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-600">
                        {selectedProject.category}
                      </span>
                      <span className="text-sm text-slate-500">{selectedProject.date}</span>
                    </div>
                    <h3 className="text-[clamp(2.2rem,5vw,4.4rem)] font-black uppercase tracking-[-0.07em] leading-[0.95] text-slate-900">
                      {selectedProject.title}
                    </h3>
                    <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                      {selectedProject.description}
                    </p>
                    <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.95)]" />
                      {selectedProject.language}
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => { setSelectedProject(null) }}
                      className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-100"
                    >
                      ← Back
                    </button>
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:bg-indigo-500 hover:shadow-lg"
                    >
                      Open on GitHub
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : !gridRevealed ? (
          /* ── Marquee (pre-reveal) ── */
          <ProjectMarquee projects={projects} onReveal={() => setGridRevealed(true)} />
        ) : (
          /* ── 2-Column Portfolio Grid ── */
          <div
            className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-20"
            style={{ animation: 'fadeSlideIn 0.5s ease forwards' }}
          >
            {/* Collapse back to marquee */}
            <div className="mb-6 flex justify-start">
              <button
                type="button"
                onClick={() => setGridRevealed(false)}
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition-colors duration-200 hover:bg-slate-100"
              >
                ← Hide Projects
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch">
              {projects.map((project) => (
                <div key={project.title} className="flex flex-col h-full">
                  <ProjectCard project={project} onViewProject={setSelectedProject} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center mt-6 px-4">
        <p className="max-w-3xl text-center mt-7 px-5 py-3 rounded-full border border-black/5  text-black font-bold text-sm sm:text-base md:text-lg leading-relaxed tracking-[-0.02em]">
          Code. Create. Improve. Repeat.{' '}
          {/* <span className="bg-gradient-to-r from-black via-black to-gray-500 bg-clip-text text-transparent">
            Code. Create. Improve. Repeat.
          </span>
          . */}
        </p>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Project