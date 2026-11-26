import React from 'react';
import { motion } from 'motion/react';
import { AboutInfo } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface AboutProps {
  about: AboutInfo;
}

export const About: React.FC<AboutProps> = ({ about }) => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#FCEEF2]/65 dark:bg-[#1E191C]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
            <SectionHeading
              number="01"
              title="About Me"
              subtitle={about.headline}
              compact
            />

            <div className="rounded-2xl bg-white/85 dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 shadow-[0_10px_28px_-16px_rgba(217,140,165,0.28)]">
              <h3 className="font-display text-lg font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-4">
                Programming Interests
              </h3>
              <ul className="space-y-3">
                {about.programmingInterests.map((interest, i) => (
                  <li
                    key={interest}
                    className="flex items-baseline gap-3 text-sm text-[#5E4D59] dark:text-[#C7B6C1]"
                  >
                    <span className="font-display italic text-xs tabular-nums text-[#B45D7B] dark:text-[#E69FB5]">
                      0{i + 1}
                    </span>
                    <span>{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Narrative & Specializations Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 sm:p-9 shadow-[0_12px_32px_-18px_rgba(217,140,165,0.28)] space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-[#40313D] dark:text-[#FAF5F7]">
                  Personal Introduction
                </h3>
                <p className="text-sm sm:text-[15px] leading-[1.85] text-[#5E4D59] dark:text-[#DECED8]">
                  {about.personalIntro}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-7 border-t border-[#F4C8D5]/70 dark:border-white/[0.08]">
                <div className="space-y-2.5">
                  <h3 className="font-display text-lg font-semibold text-[#40313D] dark:text-[#FAF5F7]">
                    Educational Background
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#6E5B68] dark:text-[#C7B6C1]">
                    {about.educationalBackground}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h3 className="font-display text-lg font-semibold text-[#40313D] dark:text-[#FAF5F7]">
                    Career Goals
                  </h3>
                  <p className="text-sm leading-[1.8] text-[#6E5B68] dark:text-[#C7B6C1]">
                    {about.careerGoals}
                  </p>
                </div>
              </div>
            </div>

            {/* 3-Column Editorial Specialization Cards */}
            <div>
              <h3 className="font-display text-xl font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-5">
                Areas of Specialization
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {about.specializations.map((spec, idx) => (
                  <div
                    key={spec.area}
                    className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 shadow-[0_10px_28px_-18px_rgba(217,140,165,0.25)] flex flex-col justify-between gap-4 transition-colors duration-200 hover:border-[#D98CA5]"
                  >
                    <span className="font-display italic text-sm tabular-nums text-[#B45D7B] dark:text-[#E69FB5]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-base text-[#40313D] dark:text-[#FAF5F7] mb-2">
                        {spec.area}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#6E5B68] dark:text-[#C7B6C1]">
                        {spec.focus}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
