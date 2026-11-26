import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NavItem } from './Navbar';

interface FooterProps {
  brandName: string;
  navItems: NavItem[];
}

export const Footer: React.FC<FooterProps> = ({ brandName, navItems }) => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#F4C8D5]/70 dark:border-white/[0.08] bg-[#FCEEF2]/65 dark:bg-[#1E191C]">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-display text-lg font-semibold text-[#40313D] dark:text-[#FAF5F7]">
            {brandName}
          </p>
          <p className="text-sm text-[#6E5B68] dark:text-[#C7B6C1]">
            © {year} · IT Student &amp; Aspiring Software Developer Portfolio
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-[#6E5B68] hover:text-[#40313D] dark:text-[#C7B6C1] dark:hover:text-[#FAF5F7] transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B45D7B] dark:text-[#E69FB5] hover:underline whitespace-nowrap shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5] rounded px-1"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
