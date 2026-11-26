import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Theme } from '../hooks/useTheme';

export interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  brandName: string;
  navItems: NavItem[];
  activeSection: string;
  theme: Theme;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName,
  navItems,
  activeSection,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FFF9F7]/90 dark:bg-[#171316]/90 backdrop-blur-md border-b border-[#F4C8D5]/70 dark:border-white/[0.08] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Personal Logo / Initials */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex items-center gap-3 whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5] rounded-full px-1 py-1"
          aria-label="Go to top of page"
        >
          <span className="font-display font-semibold text-lg tracking-tight text-[#40313D] dark:text-[#FAF5F7]">
            {brandName}
          </span>
        </a>

        {/* Zone 2: Clean Single-Line Navigation Links */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-6 lg:gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5] rounded px-1 ${
                  isActive
                    ? 'text-[#B45D7B] dark:text-[#E69FB5]'
                    : 'text-[#6E5B68] hover:text-[#40313D] dark:text-[#C7B6C1] dark:hover:text-[#FAF5F7]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavUnderline"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    className="absolute left-1 right-1 bottom-0.5 h-[2px] rounded-full bg-[#D98CA5]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F4C8D5] dark:border-white/[0.12] bg-white dark:bg-[#231C21] text-[#40313D] dark:text-[#FAF5F7] hover:border-[#D98CA5] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
          >
            {theme === 'dark' ? (
              <Sun className="w-[17px] h-[17px] text-[#E69FB5]" aria-hidden="true" />
            ) : (
              <Moon className="w-[17px] h-[17px] text-[#40313D]" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#F4C8D5] dark:border-white/[0.12] bg-white dark:bg-[#231C21] text-[#40313D] dark:text-[#FAF5F7] hover:border-[#D98CA5] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D98CA5]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden border-t border-[#F4C8D5]/70 dark:border-white/[0.08] bg-[#FFF9F7] dark:bg-[#171316]"
          >
            <nav aria-label="Mobile Navigation" className="px-5 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-[#FCEEF2] dark:bg-[#282026] text-[#B45D7B] dark:text-[#E69FB5]'
                        : 'text-[#40313D] dark:text-[#FAF5F7] hover:bg-[#FCEEF2]/60 dark:hover:bg-[#231C21]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="font-display italic text-xs text-[#B45D7B] dark:text-[#E69FB5]">
                        Current
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
