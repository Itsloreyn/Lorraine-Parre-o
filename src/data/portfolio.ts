export interface ProfileInfo {
  initials: string;
  brandName: string;
  greeting: string;
  fullName: string;
  title: string;
  location: string;
  intro: string;
  profileImage: string;
  profileImageAlt: string;
  profileImageCaption: string;
  resumeUrl: string;
  githubUrl: string;
}

export interface AboutInfo {
  headline: string;
  personalIntro: string;
  educationalBackground: string;
  programmingInterests: string[];
  careerGoals: string;
  specializations: {
    area: string;
    focus: string;
  }[];
}

export interface SkillCategory {
  id: string;
  category: string;
  description: string;
  iconName: 'code' | 'layout' | 'server' | 'database' | 'cpu' | 'wrench';
  items: string[];
}

export type ProjectCategory = 'All' | 'Web Design' | 'Academic Projects';

export interface ProjectItem {
  id: string;
  index: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  contextLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  thumbnail: string;
  thumbnailAlt: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  isPlaceholder?: boolean;
}

export interface EducationEntry {
  id: string;
  schoolName: string;
  campusLocation?: string;
  degreeOrProgram?: string;
  academicYear: string;
  relevantCoursework?: string[];
  academicAchievements?: string[];
  note?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  dateIssued: string;
  credentialNote: string;
  imageSrc?: string;
  imageAlt: string;
  isPlaceholder?: boolean;
}

export interface ContactInfo {
  email: string;
  githubUrl: string;
  githubHandle: string;
  linkedinUrl: string;
  linkedinLabel: string;
  otherLinks: {
    label: string;
    url: string;
    handle: string;
  }[];
  availabilityNote: string;
}

export const portfolioData: {
  profile: ProfileInfo;
  about: AboutInfo;
  skills: SkillCategory[];
  projects: ProjectItem[];
  education: EducationEntry[];
  certificates: CertificateItem[];
  contact: ContactInfo;
} = {
  profile: {
    initials: 'LP',
    brandName: 'Lorraine',
    greeting: "Hello, I'm",
    fullName: 'Lorraine B. Parreno',
    title: 'IT Student | Aspiring Software Developer',
    location: 'Iloilo, Philippines',
    intro:
      'A Bachelor of Science in Information Technology student at West Visayas State University - Lambunao Campus passionate about web design and development. I build clean, structured web pages and database-backed projects using HTML, CSS, PHP, and MySQL.',
    profileImage: '/assets/aistudio/566523639_1567344594466719_524386700442237307_n_dac39e12.jpg',
    profileImageAlt: 'Portrait of Lorraine B. Parreno',
    profileImageCaption: 'IT Student | Aspiring Software Developer',
    resumeUrl: '/resume.pdf',
    githubUrl: 'https://github.com/Itsloreyn',
  },

  about: {
    headline: 'Crafting clean web interfaces and practical database-backed systems.',
    personalIntro:
      'I am Lorraine B. Parreno, a Bachelor of Science in Information Technology student focused on writing clean, structured code and designing accessible web interfaces. Through coursework and personal web builds like Queen Poppy, My Portfolio, Weather, and Final Project, I continue sharpening my skills across frontend layout and backend scripting.',
    educationalBackground:
      'After completing elementary education at Malublub - Sinuagan Elementary School (2011 - 2017) and high school at Badiangan National High School (JHS 2017 - 2021; SHS HUMSS Track 2021 - 2023), I am now pursuing my Bachelor of Science in Information Technology at West Visayas State University - Lambunao Campus (2023 - Present).',
    programmingInterests: [
      'Semantic HTML structure and responsive CSS styling',
      'Server-side web development with PHP',
      'Relational database design using MySQL & MariaDB',
      'Local stack testing with XAMPP and GitHub workflows',
    ],
    careerGoals:
      'Seeking software and web development internship opportunities where I can contribute with my foundation in HTML, CSS, PHP, and relational databases while learning real-world engineering practices.',
    specializations: [
      {
        area: 'Frontend Web Design',
        focus: 'Clean page structure, visual hierarchy, and styled web layouts crafted with HTML and CSS.',
      },
      {
        area: 'Backend Scripting',
        focus: 'Server-side logic, form handling, and dynamic web functionality built with PHP and XAMPP.',
      },
      {
        area: 'Database Management',
        focus: 'Relational table design, SQL querying, and data administration in MySQL, MariaDB, and phpMyAdmin.',
      },
    ],
  },

  skills: [
    {
      id: 'frontend',
      category: 'Frontend Development',
      description: 'Semantic page markup, clean visual styling, and responsive web layouts.',
      iconName: 'layout',
      items: ['HTML', 'CSS'],
    },
    {
      id: 'backend',
      category: 'Backend Development',
      description: 'Server-side web scripting, form processing, and dynamic page logic.',
      iconName: 'server',
      items: ['PHP'],
    },
    {
      id: 'database',
      category: 'Database',
      description: 'Relational schema design, querying, and local database administration.',
      iconName: 'database',
      items: ['MySQL', 'MariaDB', 'phpMyAdmin'],
    },
    {
      id: 'tools',
      category: 'Development Tools',
      description: 'Daily tools for code editing, local PHP/MySQL testing, and GitHub hosting.',
      iconName: 'wrench',
      items: ['Visual Studio Code', 'XAMPP', 'GitHub'],
    },
  ],

  projects: [
    {
      id: 'project-slot-01',
      index: '01',
      title: 'Queen Poppy',
      category: 'Web Design',
      contextLabel: 'Web Showcase · HTML & CSS',
      summary:
        'A playful, character-themed showcase page featuring a bold coral welcome banner and a centered rounded illustration of Queen Poppy.',
      description:
        'Designed and built as a themed HTML and CSS web layout dedicated to Queen Poppy. It pairs a full-width top header banner with a centered rounded portrait card and vibrant visual styling.',
      technologies: ['HTML', 'CSS', 'Visual Studio Code', 'GitHub'],
      features: [
        'Full-width welcome banner with clean sans-serif typography',
        'Centered character card with rounded corners and soft framing',
        'Cohesive bright coral and pink visual color palette',
      ],
      thumbnail: '/assets/aistudio/image_f668e428.png',
      thumbnailAlt: 'Queen Poppy web page screenshot',
      githubUrl: 'https://github.com/Itsloreyn/Queen-Poppy',
      liveUrl: '',
      isPlaceholder: false,
    },
    {
      id: 'project-slot-02',
      index: '02',
      title: 'My Portfolio',
      category: 'Web Design',
      contextLabel: 'Personal Website · HTML & CSS',
      summary:
        'A dark-themed personal portfolio homepage introducing Lorraine Parreño as a 2nd Year BS Information Technology student with circular portrait framing.',
      description:
        'A personal web portfolio built with HTML and CSS featuring a sticky top navigation bar (Home, About Me, Hobbies, My Gallery, Contact), bold hero introduction, social link buttons, and an oval-framed portrait.',
      technologies: ['HTML', 'CSS', 'Visual Studio Code', 'GitHub'],
      features: [
        'Top navigation bar with Home, About Me, Hobbies, My Gallery, and Contact links',
        'High-contrast dark charcoal background with lime-green accent highlights',
        'Circular portrait frame paired with social profile icon buttons',
      ],
      thumbnail: '/assets/aistudio/image_fe353270.png',
      thumbnailAlt: 'My Portfolio web page screenshot',
      githubUrl: 'https://github.com/Itsloreyn/my-porfolio',
      liveUrl: '',
      isPlaceholder: false,
    },
    {
      id: 'project-slot-03',
      index: '03',
      title: 'Weather',
      category: 'Web Design',
      contextLabel: 'Weather UI · Lambunao, Iloilo',
      summary:
        'A weather forecast interface for Lambunao, Iloilo displaying current temperature, daily metrics, and a 5-day forecast strip over a sky backdrop.',
      description:
        'A clean atmospheric weather webpage presenting conditions for Lambunao, Iloilo. It highlights the date, current 26°C temperature and condition label, high/low/wind/rain/sunrise/sunset metrics, and Tuesday-to-Saturday forecast cards.',
      technologies: ['HTML', 'CSS', 'Visual Studio Code', 'GitHub'],
      features: [
        'Location header and prominent current temperature display for Lambunao, Iloilo',
        'Six-column daily weather readout (High, Wind, Sunrise, Low, Rain, Sunset)',
        'Next 5 days forecast strip with weather icons and temperature ranges',
      ],
      thumbnail: '/assets/aistudio/image_dc5952ac.png',
      thumbnailAlt: 'Weather web app screenshot showing Lambunao, Iloilo forecast',
      githubUrl: 'https://github.com/Itsloreyn/weather',
      liveUrl: '',
      isPlaceholder: false,
    },
    {
      id: 'project-slot-04',
      index: '04',
      title: 'Final Project',
      category: 'Academic Projects',
      contextLabel: 'Coursework Submission · BSIT',
      summary:
        'An academic final project website combining personal profile presentation, multi-section navigation, and structured web layout built for BSIT coursework.',
      description:
        'Developed as a culminating web development submission during BS Information Technology studies, showcasing structured HTML/CSS layout, navigation across Home, About Me, Hobbies, My Gallery, and Contact, and integrated social links.',
      technologies: ['HTML', 'CSS', 'PHP', 'Visual Studio Code', 'GitHub'],
      features: [
        'Multi-section navigation linking Home, About Me, Hobbies, My Gallery, and Contact',
        'Structured two-column hero layout with personal introduction and portrait',
        'Version-controlled academic submission hosted on GitHub',
      ],
      thumbnail: '/assets/aistudio/image_fe353270.png',
      thumbnailAlt: 'Final Project web page screenshot',
      githubUrl: 'https://github.com/Itsloreyn/final-project',
      liveUrl: '',
      isPlaceholder: false,
    },
  ],

  education: [
    {
      id: 'wvsu-lambunao',
      schoolName: 'West Visayas State University - Lambunao Campus',
      campusLocation: 'Bachelor of Science in Information Technology',
      academicYear: '2023 - Present',
    },
    {
      id: 'education-slot-02',
      schoolName: 'Badiangan National High School SHS',
      degreeOrProgram: 'HUMSS Track',
      academicYear: '2021 - 2023',
    },
    {
      id: 'education-slot-03',
      schoolName: 'Badiangan National High School JHS',
      academicYear: '2017 - 2021',
    },
    {
      id: 'education-slot-04',
      schoolName: 'Malublub - Sinuagan Elementary School',
      academicYear: '2011 - 2017',
    },
  ],

  certificates: [
    {
      id: 'cert-01',
      title: '[Certificate Title Placeholder 01]',
      issuer: '[Issuing Organization — e.g., Workshop / Platform]',
      dateIssued: '[Month Year]',
      credentialNote: 'Upload certificate image to public/certificates/ and set imageSrc in src/data/portfolio.ts.',
      imageAlt: 'Placeholder layout for Certificate 01',
      isPlaceholder: true,
    },
    {
      id: 'cert-02',
      title: '[Certificate Title Placeholder 02]',
      issuer: '[Issuing Organization — e.g., Technical Seminar]',
      dateIssued: '[Month Year]',
      credentialNote: 'Upload certificate image to public/certificates/ and set imageSrc in src/data/portfolio.ts.',
      imageAlt: 'Placeholder layout for Certificate 02',
      isPlaceholder: true,
    },
    {
      id: 'cert-03',
      title: '[Certificate Title Placeholder 03]',
      issuer: '[Issuing Organization — e.g., Online Course]',
      dateIssued: '[Month Year]',
      credentialNote: 'Upload certificate image to public/certificates/ and set imageSrc in src/data/portfolio.ts.',
      imageAlt: 'Placeholder layout for Certificate 03',
      isPlaceholder: true,
    },
    {
      id: 'cert-04',
      title: '[Certificate Title Placeholder 04]',
      issuer: '[Issuing Organization — e.g., Academic Recognition]',
      dateIssued: '[Month Year]',
      credentialNote: 'Upload certificate image to public/certificates/ and set imageSrc in src/data/portfolio.ts.',
      imageAlt: 'Placeholder layout for Certificate 04',
      isPlaceholder: true,
    },
  ],

  contact: {
    email: 'parrenolorraine8@gmail.com',
    githubUrl: 'https://github.com/Itsloreyn',
    githubHandle: 'github.com/Itsloreyn',
    linkedinUrl: 'https://linkedin.com/in/your-profile',
    linkedinLabel: 'linkedin.com/in/your-profile',
    otherLinks: [
      {
        label: 'Portfolio / Blog',
        url: 'https://example.com',
        handle: '[Optional Personal Website]',
      },
    ],
    availabilityNote:
      'Open to software development internships, junior developer roles, and technical collaborations.',
  },
};
