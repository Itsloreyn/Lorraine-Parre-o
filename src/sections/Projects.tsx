import React, { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';
import { SafeImage } from '../components/SafeImage';

interface ProjectsProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Web Design',
  'Academic Projects',
];

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 bg-[#FCEEF2]/65 dark:bg-[#1E191C] border-t border-[#F4C8D5]/70 dark:border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <SectionHeading
              number="03"
              title="Selected Projects"
              subtitle="Web pages and academic coursework built with HTML, CSS, and PHP—complete with previews and GitHub repositories."
              compact
            />
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1.5 rounded-xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] self-start shadow-xs"
          >
            {CATEGORIES.map((category) => {
              const isSelected = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5] ${
                    isSelected
                      ? 'bg-[#B45D7B] text-white dark:bg-[#D98CA5] dark:text-[#1F161B]'
                      : 'text-[#6E5B68] hover:text-[#40313D] dark:text-[#C7B6C1] dark:hover:text-[#FAF5F7]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4 Equal-Sized Project Placeholders in a Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="group h-full rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] shadow-[0_12px_32px_-18px_rgba(217,140,165,0.28)] overflow-hidden flex flex-col transition-colors duration-200 hover:border-[#D98CA5]"
            >
              {/* Uniform 4:3 Thumbnail */}
              <div className="relative overflow-hidden bg-[#FFF9F7] dark:bg-[#2B2228] aspect-[4/3] shrink-0">
                <SafeImage
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  fallbackTitle={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  containerClassName="w-full h-full"
                />
              </div>

              {/* Uniform Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-5">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#6E5B68] dark:text-[#C7B6C1]">
                    <span className="font-display italic tabular-nums font-medium text-[#B45D7B] dark:text-[#E69FB5]">
                      {project.index}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold tracking-tight text-[#40313D] dark:text-[#FAF5F7] text-balance leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] leading-relaxed text-[#5E4D59] dark:text-[#DECED8] line-clamp-3">
                    {project.summary}
                  </p>
                </div>

                {/* Uniform Card Actions */}
                <div className="pt-4 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-[#B45D7B] text-white hover:bg-[#9C4C68] dark:bg-[#D98CA5] dark:text-[#1F161B] dark:hover:bg-[#E5A3B9] text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>

                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-[#F4C8D5] dark:border-white/[0.12] text-[#40313D] dark:text-[#FAF5F7] hover:border-[#D98CA5] hover:bg-[#FCEEF2]/60 dark:hover:bg-[#2E242B] text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>GitHub</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl border border-[#F4C8D5]/80 dark:border-white/[0.09] text-[#6E5B68] dark:text-[#C7B6C1] hover:text-[#40313D] dark:hover:text-[#FAF5F7] hover:bg-[#FCEEF2]/50 dark:hover:bg-[#2E242B] text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                      title="Repository URL can be added in src/data/portfolio.ts"
                    >
                      <Github className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>GitHub</span>
                    </button>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-[#B45D7B] dark:text-[#E69FB5] hover:bg-[#FCEEF2] dark:hover:bg-[#2E242B] text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
                    >
                      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
