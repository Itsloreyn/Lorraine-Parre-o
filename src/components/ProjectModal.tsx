import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';
import { SafeImage } from './SafeImage';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#40313D]/50 dark:bg-black/65 backdrop-blur-xs"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.1] shadow-2xl"
          >
            <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-4 bg-white/95 dark:bg-[#231C21]/95 backdrop-blur-sm border-b border-[#F4C8D5]/70 dark:border-white/[0.08]">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#6E5B68] dark:text-[#C7B6C1] truncate">
                <span className="font-display italic tabular-nums font-medium text-[#B45D7B] dark:text-[#E69FB5]">
                  {project.index}
                </span>
                <span aria-hidden="true">·</span>
                <span className="truncate">{project.contextLabel}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#F4C8D5] dark:border-white/[0.1] text-[#40313D] dark:text-[#FAF5F7] hover:bg-[#FCEEF2] dark:hover:bg-[#2E242B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#F4C8D5]/80 dark:border-white/[0.08] bg-[#FFF9F7] dark:bg-[#1C161A]">
                <SafeImage
                  src={project.thumbnail}
                  alt={project.thumbnailAlt}
                  fallbackTitle={project.title}
                  className="w-full h-full object-cover"
                  containerClassName="w-full h-full"
                />
              </div>

              <div>
                <h3
                  id="project-modal-title"
                  className="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-[#40313D] dark:text-[#FAF5F7] text-balance"
                >
                  {project.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#5E4D59] dark:text-[#DECED8]">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4C8D5]/70 dark:border-white/[0.08]">
                <h4 className="font-display text-base font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-2">
                  Technologies Used
                </h4>
                <p className="text-sm text-[#6E5B68] dark:text-[#C7B6C1] leading-relaxed">
                  {project.technologies.join(' · ')}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] flex flex-wrap items-center gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#B45D7B] text-white hover:bg-[#9C4C68] dark:bg-[#D98CA5] dark:text-[#1F161B] dark:hover:bg-[#E5A3B9] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>GitHub Repository</span>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FCEEF2] dark:bg-[#2C2229] text-[#6E5B68] dark:text-[#C7B6C1] text-sm font-medium whitespace-nowrap shrink-0">
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>Repository Link Pending</span>
                  </span>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#F4C8D5] dark:border-white/[0.12] text-[#40313D] dark:text-[#FAF5F7] hover:bg-[#FCEEF2] dark:hover:bg-[#2C2229] text-sm font-medium transition-colors whitespace-nowrap shrink-0"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
