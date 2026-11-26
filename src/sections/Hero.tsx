import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Github, MapPin } from 'lucide-react';
import { ProfileInfo } from '../data/portfolio';
import { SafeImage } from '../components/SafeImage';
import { EditorialRibbonCurve, HeroBotanicalAccent } from '../components/DecorativeCurves';

interface HeroProps {
  profile: ProfileInfo;
}

const FOCUS_RIBBON = [
  'HTML & CSS',
  'PHP Development',
  'MySQL & MariaDB',
  'XAMPP Local Stack',
  'GitHub Workflow',
];

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-[#F4C8D5]/70 dark:border-white/[0.08] overflow-hidden bg-gradient-to-b from-[#FFF9F7] via-[#FFF9F7] to-[#FCEEF2]/40 dark:from-[#171316] dark:via-[#171316] dark:to-[#1E191C]"
    >
      {/* Subtle Pastel Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 w-[440px] h-[440px] rounded-full bg-gradient-to-br from-[#F4C8D5]/30 via-[#C5B5E8]/20 to-transparent blur-3xl dark:from-[#D98CA5]/10 dark:via-[#C5B5E8]/10"
      />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        {/* Delicate Editorial Masthead Rule */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 sm:mb-12 border-b border-[#F4C8D5]/80 dark:border-white/[0.08]"
        >
          <p className="font-display italic text-lg sm:text-xl text-[#B45D7B] dark:text-[#E69FB5]">
            {profile.greeting}
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#6E5B68] dark:text-[#C7B6C1]">
            <MapPin className="w-3.5 h-3.5 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
            <span>{profile.location}</span>
            <span aria-hidden="true">·</span>
            <span>Open to Internships</span>
          </p>
        </motion.div>

        {/* Asymmetrical 12-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-10 lg:gap-14">
          {/* Left Portrait Column with Delicate Abstract Petal Curves */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 flex flex-col relative"
          >
            <HeroBotanicalAccent className="hidden sm:block pointer-events-none absolute -top-10 -left-10 w-64 h-64 opacity-80 -scale-x-100" />

            <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] lg:min-h-0">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute -bottom-3 -left-3 inset-0 rounded-3xl border border-[#C5B5E8]/80 dark:border-[#C5B5E8]/30 bg-gradient-to-br from-[#FCEEF2]/40 to-[#E8D5C4]/30 dark:from-transparent dark:to-transparent pointer-events-none"
              />
              <figure className="relative h-full w-full overflow-hidden rounded-3xl border border-[#F4C8D5] dark:border-white/[0.12] bg-white dark:bg-[#231C21] shadow-[0_18px_40px_-20px_rgba(64,49,61,0.22)]">
                <SafeImage
                  src={profile.profileImage}
                  alt={profile.profileImageAlt}
                  fallbackTitle={profile.fullName}
                  className="w-full h-full object-cover object-top lg:h-full"
                  containerClassName="w-full h-full min-h-[340px]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-5 py-3.5 bg-gradient-to-t from-[#40313D]/80 via-[#40313D]/40 to-transparent text-xs text-white/95">
                  {profile.profileImageCaption}
                </figcaption>
              </figure>
            </div>
          </motion.div>

          {/* Right Editorial Typographic Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-between"
          >
            <div>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[4.15rem] font-semibold tracking-tight text-[#40313D] dark:text-[#FAF5F7] leading-[1.06] text-balance">
                {profile.fullName}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3">
                <p className="text-lg sm:text-xl font-medium text-[#6E5B68] dark:text-[#DECED8]">
                  {profile.title}
                </p>
                <EditorialRibbonCurve className="w-24 h-6 hidden sm:block" />
              </div>

              <p className="mt-6 max-w-xl text-sm sm:text-base leading-[1.8] text-[#5E4D59] dark:text-[#C7B6C1]">
                {profile.intro}
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-[#F4C8D5]/80 dark:border-white/[0.08] flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#B45D7B] text-white hover:bg-[#9C4C68] dark:bg-[#D98CA5] dark:text-[#1F161B] dark:hover:bg-[#E5A3B9] text-sm font-medium shadow-[0_8px_20px_-8px_rgba(180,93,123,0.5)] transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
              >
                <span>View My Projects</span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[#6E5B68] dark:text-[#C7B6C1] hover:text-[#40313D] dark:hover:text-[#FAF5F7] hover:bg-[#FCEEF2]/80 dark:hover:bg-[#231C21] transition-colors duration-150 whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Editorial Discipline Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-12 sm:mt-16 pt-6 border-t border-[#F4C8D5]/80 dark:border-white/[0.08] flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs sm:text-sm text-[#6E5B68] dark:text-[#C7B6C1]"
        >
          {FOCUS_RIBBON.map((discipline, idx) => (
            <React.Fragment key={discipline}>
              <span className="font-medium text-[#40313D] dark:text-[#FAF5F7]">
                {discipline}
              </span>
              {idx < FOCUS_RIBBON.length - 1 && (
                <span className="hidden sm:inline text-[#D98CA5]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
