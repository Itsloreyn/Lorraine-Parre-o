import { useMemo, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { portfolioData, ProjectItem } from './data/portfolio';
import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar, NavItem } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Education } from './sections/Education';
import { Contact } from './sections/Contact';

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const sectionIds = useMemo(
    () => ['home', 'about', 'skills', 'projects', 'education', 'contact'],
    []
  );
  const activeNavSection = useActiveSection(sectionIds);

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#FFF9F7] text-[#40313D] dark:bg-[#171316] dark:text-[#FAF5F7] transition-colors duration-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#40313D] focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar
          brandName={portfolioData.profile.brandName}
          navItems={NAV_ITEMS}
          activeSection={activeNavSection}
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main id="main-content" className="flex-1">
          <Hero profile={portfolioData.profile} />
          <About about={portfolioData.about} />
          <Skills skills={portfolioData.skills} />
          <Projects
            projects={portfolioData.projects}
            onSelectProject={setSelectedProject}
          />
          <Education entries={portfolioData.education} />
          <Contact contact={portfolioData.contact} />
        </main>

        <Footer
          brandName={portfolioData.profile.fullName}
          navItems={NAV_ITEMS}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </MotionConfig>
  );
}
