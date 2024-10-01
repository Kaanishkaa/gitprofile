const CONFIG = {
  github: {
    username: 'Kaanishkaa', // Your GitHub username
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'manual',
      manual: {
        projects: ['Kaanishkaa/Ecoplate-Analytics', 'CI-CMG/OceanAcoustics-LabManual'],
      },
    },
  },
  seo: {
    title: 'Portfolio of Kanishka Ghodke',
    description: 'CIRES Professional Research Assistant | MS in Data Science at the University of Colorado Boulder. Experienced in data visualization, machine learning, and acoustic monitoring research.',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/kanishka-ghodke-a723921b7/',
    twitter: 'KaniSpeaks',
    instagram: 'kanishkag',
    youtube: 'Kanishka-Ghodke',
    email: 'kanishka.ghodke@colorado.edu',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
    'Data source identification',
    'Audit processes',
    'API integration',
    'Python',
    'Tableau',
    'Machine Learning',
    'R programming',
    'Git',
    'YAML',
  ],
  languages: [
    'Sanskrit (Limited Working)',
    'Hindi (Elementary)',
    'English (Full Professional)',
    'Marathi (Elementary)',
  ],
  experiences: [
    {
      company: 'NOAA: National Oceanic & Atmospheric Administration',
      position: 'CIRES Professional Research Assistant',
      from: 'August 2024',
      to: 'Present',
      companyLink: 'https://www.noaa.gov/',
    },
    {
      company: 'RAIT ACM Women Chapter',
      position: 'Founder and Treasurer',
      from: 'January 2023',
      to: 'August 2023',
      companyLink: '',
    },
    {
      company: 'RAIT ACM Student Chapter',
      position: 'Treasurer',
      from: 'September 2022',
      to: 'August 2023',
      companyLink: '',
    },
    // Add more experiences as needed...
  ],
  certifications: [
    {
      name: 'Introduction to Artificial Intelligence',
      body: 'IBM',
      year: '2023',
      link: '',
    },
    {
      name: 'GIT and Version Control',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'L1-Robotics',
      body: '',
      year: '',
      link: '',
    },
    {
      name: 'Introduction to HTML5',
      body: 'University of Michigan',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'University of Colorado Boulder',
      degree: 'Master of Science in Data Science',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'University of Mumbai',
      degree: 'Bachelor of Engineering in Information Technology',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Delhi Public School - Navi Mumbai',
      degree: 'High School',
      from: '2017',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Determination of Accuracy of Neural Network Method Using Magnetic Resonance Images in Finding Liver Cancer Level',
      conferenceName: '',
      journalName: '',
      authors: 'Kanishka Ghodke',
      link: '',
      description: 'Research on using convolutional neural networks for liver cancer detection using MRI data.',
    },
  ],
  blog: {
    source: '', 
    username: '', 
    limit: 0,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'lofi',
      'business',
      'coffee',
      'winter',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a class="text-primary" href="https://github.com/arifszn/gitprofile" target="_blank" rel="noreferrer">GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
