import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { EducationEntry } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface EducationProps {
  entries: EducationEntry[];
}

export const Education: React.FC<EducationProps> = ({ entries }) => {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 border-t border-[#F4C8D5]/70 dark:border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          number="04"
          title="Education"
          subtitle="Academic progression from elementary and high school through undergraduate Information Technology studies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {entries.map((entry, idx) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.42, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 sm:p-8 shadow-[0_12px_32px_-18px_rgba(217,140,165,0.28)] flex flex-col justify-between gap-6"
            >
              {/* Top Institution Details */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-[#FCEEF2] dark:bg-[#2D2128] border border-[#F4C8D5] dark:border-[#D98CA5]/30 text-[#B45D7B] dark:text-[#E69FB5]">
                      <GraduationCap className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-display italic text-sm tabular-nums font-medium text-[#B45D7B] dark:text-[#E69FB5]">
                      {entry.academicYear}
                    </span>
                  </div>
                  <span className="font-display italic text-xs tabular-nums text-[#6E5B68] dark:text-[#C7B6C1]">
                    0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-[#40313D] dark:text-[#FAF5F7] leading-snug text-balance">
                    {entry.schoolName}
                  </h3>
                  {entry.campusLocation && (
                    <p className="mt-1.5 text-xs sm:text-sm text-[#6E5B68] dark:text-[#C7B6C1]">
                      <span>{entry.campusLocation}</span>
                    </p>
                  )}
                </div>

                {entry.degreeOrProgram && (
                  <p className="pt-3 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] text-sm font-medium text-[#40313D] dark:text-[#F4EBF0]">
                    {entry.degreeOrProgram}
                  </p>
                )}
              </div>

              {/* Bottom Coursework & Achievements */}
              {((entry.relevantCoursework && entry.relevantCoursework.length > 0) ||
                (entry.academicAchievements && entry.academicAchievements.length > 0)) && (
                <div className="pt-5 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {entry.relevantCoursework && entry.relevantCoursework.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-4 h-4 text-[#B45D7B] dark:text-[#E69FB5]" aria-hidden="true" />
                        <h4 className="font-display text-sm font-semibold text-[#40313D] dark:text-[#FAF5F7]">
                          Relevant Coursework
                        </h4>
                      </div>
                      <ul className="space-y-2">
                        {entry.relevantCoursework.map((course) => (
                          <li
                            key={course}
                            className="text-xs sm:text-sm text-[#5E4D59] dark:text-[#C7B6C1] leading-relaxed"
                          >
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {entry.academicAchievements && entry.academicAchievements.length > 0 && (
                    <div>
                      <h4 className="font-display text-sm font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-3">
                        Academic Achievements
                      </h4>
                      <ul className="space-y-2">
                        {entry.academicAchievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-xs sm:text-sm text-[#5E4D59] dark:text-[#C7B6C1] leading-relaxed"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      {entry.note && (
                        <p className="mt-4 pt-3 border-t border-[#F4C8D5]/60 dark:border-white/[0.07] text-[11px] text-[#6E5B68] dark:text-[#C7B6C1] leading-relaxed">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
