import React from 'react';
import { motion } from 'motion/react';
import { Code2, Cpu, Database, Layout, Server, Wrench } from 'lucide-react';
import { SkillCategory } from '../data/portfolio';
import { SectionHeading } from '../components/SectionHeading';

interface SkillsProps {
  skills: SkillCategory[];
}

const iconMap: Record<SkillCategory['iconName'], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  cpu: Cpu,
  wrench: Wrench,
};

const iconAccentStyles = [
  'bg-[#FCEEF2] text-[#B45D7B] border-[#F4C8D5] dark:bg-[#2D2128] dark:text-[#E69FB5] dark:border-[#D98CA5]/30',
  'bg-[#C5B5E8]/25 text-[#5D4C86] border-[#C5B5E8]/60 dark:bg-[#272336] dark:text-[#C5B5E8] dark:border-[#C5B5E8]/30',
  'bg-[#E8D5C4]/45 text-[#6D5241] border-[#E8D5C4] dark:bg-[#2D2621] dark:text-[#E8D5C4] dark:border-[#E8D5C4]/30',
];

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section
      id="skills"
      className="py-20 sm:py-28 border-t border-[#F4C8D5]/70 dark:border-white/[0.08]"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        <SectionHeading
          number="02"
          title="Technical Skills"
          subtitle="Core web languages, server-side scripting, databases, and development tools used across academic and personal projects."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((group, index) => {
            const Icon = iconMap[group.iconName];
            const accentClass = iconAccentStyles[index % iconAccentStyles.length];
            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl bg-white dark:bg-[#231C21] border border-[#F4C8D5] dark:border-white/[0.09] p-6 sm:p-7 shadow-[0_10px_28px_-18px_rgba(217,140,165,0.28)] flex flex-col justify-between gap-6 transition-colors duration-200 hover:border-[#D98CA5]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-2xl border flex items-center justify-center ${accentClass}`}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="font-display italic text-sm tabular-nums text-[#6E5B68] dark:text-[#C7B6C1]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-[#40313D] dark:text-[#FAF5F7] mb-2">
                    {group.category}
                  </h3>

                  <p className="text-sm text-[#6E5B68] dark:text-[#C7B6C1] leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <ul className="pt-5 border-t border-[#F4C8D5]/70 dark:border-white/[0.08] grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm font-medium text-[#40313D] dark:text-[#F4EBF0] flex items-center gap-2"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#D98CA5] shrink-0"
                        aria-hidden="true"
                      />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
