import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  compact = false,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className={compact ? 'mb-6' : 'mb-12 md:mb-14'}
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="font-display italic text-base font-medium tabular-nums text-[#B45D7B] dark:text-[#E69FB5]">
          {number}
        </span>
        <span
          className="h-px w-10 bg-gradient-to-r from-[#D98CA5] via-[#C5B5E8] to-[#E8D5C4]"
          aria-hidden="true"
        />
      </div>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight text-[#40313D] dark:text-[#FAF5F7] text-balance leading-[1.12]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 max-w-2xl text-sm sm:text-base leading-[1.75] text-[#6E5B68] dark:text-[#C7B6C1]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
