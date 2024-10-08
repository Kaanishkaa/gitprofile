const CONFIG = {
  github: {
    username: 'Kaanishkaa', // Your GitHub username
  },
  base: '/gitprofile/',
  projects: {
  github: {
    display: true, // Display GitHub projects?
    header: 'Github Projects',
    mode: 'manual', // Mode can be: 'automatic' or 'manual'
    manual: {
      // Manually specifying projects
      projects: ['Kaanishkaa/Ecoplate-Analytics', 'CI-CMG/OceanAcoustics-LabManual', 'Kaanishkaa/gitprofile'], // Your GitHub project repositories
    },
    automatic: {
      sortBy: 'stars', // Sort projects by 'stars' or 'updated'
      limit: 8, // How many projects to display
      exclude: {
        forks: false, // Forked projects will not be displayed if set to true
        projects: [], // Projects to exclude
      },
    },
  },
  external: {
    header: 'My Projects',
    projects: [
      {
        title: 'Ecoplate Analytics',
        description: `Conducted a machine learning project, analyzing global food loss and waste data from 1965 to 2022.
                      Objective: Map regional patterns of food loss and waste.
                      Methods: Classification, outlier detection, time series analysis, and geospatial mapping.
                      Key Insights: Identified regions with high food loss, detected anomalies, and provided actionable insights to improve supply chain efficiency.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: 'https://kagh3581.wixsite.com/ecoplate-analytics',
      },
      {
        title: 'Forethinker',
        description: `Forethinker - The Future of News Delivery: Integrating AI, Big Data, and Cloud Services to Revolutionize Journalism.
                      This project filters and aggregates industry-specific content to deliver tailored news summaries for C-level executives.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: 'https://drive.google.com/file/d/1eBK2FcbKt95gdbf-ihBcacphVr1YaBlZ/view',
      },
      {
        title: 'Analysing the Impact of Movie Run Time on Ratings and Box Office Collections',
        description: `Examined the impact of movie runtime on ratings and box office earnings using z-test methodology and web-scraping 1000 movies from IMDb.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: 'https://www.linkedin.com/in/kanishka-ghodke-a723921b7/details/projects/1710615420156/single-media-viewer/?profileId=ACoAADJsgHYBF3SVD77XwZjubGDJBhoZbUeoOrs',
      },
      {
        title: 'CineCipher',
        description: `Developed a content recommendation algorithm using Natural Language Processing (NLP) to match movies to user preferences.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: 'https://cinecipher.ccbp.tech',
      },
     
       {
        title: 'Sentiment Analysis of Product Reviews',
        description: `This project focused on sentiment analysis of product reviews, leveraging machine learning techniques to classify sentiments as positive, negative, or neutral. Utilizing ratings as labels, we explored models such as Bernoulli Naive Bayes, Logistic Regression, and Support Vector Machines, achieving accuracies ranging from 85.63% to 95.04%. These results provide valuable insights for businesses to understand customer sentiments and make data-driven decisions to enhance product quality and customer satisfaction.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: ' https://github.com/TrinayG/Sentimental_Analysis_of_Product_Reviews',
      },
      {
        title: 'Deep Fake Detection System',
        description: `Used deep learning methods like ResNet and LSTM for deepfake detection in video media, utilizing transfer learning and developing the proprietary model WHYNet for accurate detection.`,
        imageUrl: 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        link: 'https://www.linkedin.com/in/kanishka-ghodke-a723921b7/details/projects/1710615854917/single-media-viewer/?profileId=ACoAADJsgHYBF3SVD77XwZjubGDJBhoZbUeoOrs',
      },
    ],
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
    instagram: 'kanishkag_',
    youtube: 'Kanishka-Ghodke',
    email: 'kanishka.ghodke@colorado.edu',
  },
  resume: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
  },
  skills: [
  'C++',
  'Python',
  'JavaScript',
  'R',
  'SQL',
  'Pandas',
  'NumPy',
  'Matplotlib',
  'scikit-learn',
  'Git',
  'GitHub',
  'MATLAB',
  'TensorFlow',
  'PyTorch',
  'GeoPandas',
  'AWS (S3, Aurora)',
  'Tableau',
  'PowerBI',
  'Looker',
  'ETL',
  'SSIS',
  'Datastage',
  'Hadoop',
  'Spark',
  'Redshift',
  'MapReduce',
  'Hive',
  'PostgreSQL',
  'MongoDB',
  'NoSQL'
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
    description: `Project: Evaluating and Automating Soundscape Condition Methods Using Unsupervised Separation.
      - Updated and generalized existing code to work with standardized passive acoustic monitoring data using Triton, a MATLAB-based acoustic data processing program.
      - Researched, applied, and evaluated methodologies for separating soundscape data into dominant conditions, including data from Stellwagen Bank, Chukchi Sea, and Gray’s Reef.
      - Contributed to a scientific publication by co-authoring methods descriptions, graphics, and editing, and maintained code and documentation on GitHub.`
  },
  {
    company: 'NOAA: National Oceanic & Atmospheric Administration',
    position: 'CIRES Data Assistant',
    from: 'May 2024',
    to: 'September 2024',
    companyLink: 'https://ci-cmg.github.io/OceanAcoustics-LabManual/content/',
    description: `- Leading data visualization projects using Tableau.
      - Developing a comprehensive "lab manual" in GitHub.
      - Working with Python, R programming, and YAML.
      - Collaborating with and mentoring fellow students in data science tasks.
      - Fostering team growth and skill development in data management and visualization.`
  },
  {
    company: 'RAIT ACM Women Chapter',
    position: 'Founder and Treasurer',
    from: 'January 2023',
    to: 'August 2023',
    companyLink: '',
    description: `Pioneered the establishment of the ACM Women’s Chapter at Navi Mumbai's RAIT, catalyzing a platform for women's involvement and empowerment in the tech community.
      - Organized events, workshops, and talks to promote skill development, networking, and collaboration among female students.`
  },
  {
    company: 'RAIT ACM Student Chapter',
    position: 'Treasurer',
    from: 'September 2022',
    to: 'August 2023',
    companyLink: '',
    description: `Handled all financial aspects of RAIT ACM Student Chapter, demonstrating meticulous attention to budgeting, reporting, and expenditure control.
      - Organizer of Kleos, the largest student-run hackathon in Navi Mumbai.`
  },
  {
    company: 'RAIT ACM Student Chapter',
    position: 'Vice Chairperson',
    from: 'August 2021',
    to: 'September 2022',
    description: `Promoted tech innovation and leadership, led RAIT ACM to rank 10th out of 200+ ACM chapters across India.
      - Organized major events like Elixir 2022 and took on the role of Editor-in-Chief for Kyros 2022 Magazine.`
  },
  {
    company: 'Onelogica',
    position: 'ML Intern',
    from: 'March 2023',
    to: 'June 2023',
    description: `Led deep learning research, developed a ChatGPT clone for enhanced understanding, and contributed to advancements in NLP and AI models.`
  },
  {
    company: 'Solar Secure Solutions',
    position: 'Data Science Intern',
    from: 'January 2023',
    to: 'March 2023',
    description: `Worked remotely on data analysis, AI, machine learning, and statistical data analysis using Python, R, and SQL.`
  },
  {
    company: 'ACM, Association for Computing Machinery',
    position: 'Chapter Vice Chair',
    from: 'August 2021',
    to: 'September 2022',
    description: `Led initiatives for technical development, community building, and organized major tech events, securing top rankings for the chapter.`
  },
  {
    company: 'Swap Infotech',
    position: 'Python Developer',
    from: 'May 2022',
    to: 'July 2022',
    description: `Worked on machine learning projects using Python and artificial neural networks.`
  },
  {
    company: 'Unschool',
    position: 'ULead Youth Influencer',
    from: 'October 2021',
    to: 'November 2021',
    description: `Involved in social media marketing, public speaking, and sales as part of a youth influencer program.`
  },
  {
    company: 'Indian Institute of Management, Indore',
    position: 'Campus Ambassador',
    from: 'October 2021',
    to: 'November 2021',
    description: `Promoted events and opportunities, leveraging communication and marketing skills.`
  },
  {
    company: 'MEDCAFE Solutions',
    position: 'Web Development Intern',
    from: 'August 2021',
    to: 'October 2021',
    description: `Built a website for the company using WordPress, MySQL, and JavaScript.`
  },
  {
    company: 'International MUN',
    position: 'Campus Ambassador',
    from: 'September 2021',
    to: 'September 2021',
    description: `Served as a campus ambassador for promoting the International Model United Nations.`
  },
  {
    company: 'Anicodedigital Information Technology Services',
    position: 'Content Writer',
    from: 'August 2021',
    to: 'September 2021',
    description: `Produced 500 pages of content and ghostwrote a book on data analytics and immunity development during the COVID-19 pandemic.`
  },
  {
    company: 'Ramrao Adik Institute of Technology',
    position: 'Summer Intern',
    from: 'June 2021',
    to: 'August 2021',
    description: `Engaged in research and practical tech applications during the summer internship.`
  },
  // Keeping previous experiences...
],
certifications: [
  {
    name: 'Expressway to Data Science: R Programming and Tidyverse Specialization',
    body: 'University of Colorado Boulder',
    year: 'August 2023',
    credentialId: 'JUHYBAKCXSFY',
    link: '',
  },
  {
    name: 'Python Bootcamp',
    body: 'CodeOS',
    year: 'September 2021',
    credentialId: 'M793-ANUK-KA4K-U8PI',
    link: '',
  },
  {
    name: 'Interactivity with Javascript',
    body: 'University of Michigan',
    year: 'August 2021',
    credentialId: '2QUYXRACQQEA',
    link: '',
  },
  {
    name: 'Introduction to Artificial Intelligence',
    body: 'IBM',
    year: 'July 2021',
    credentialId: 'D96JUXLNNDNB',
    link: '',
  },
  {
    name: 'Introduction to CSS3',
    body: 'University of Michigan (Coursera)',
    year: 'July 2021',
    credentialId: 'P46LHMAKXEVS',
    link: '',
  },
  {
    name: 'Introduction to HTML5',
    body: 'University of Michigan (Coursera)',
    year: 'July 2021',
    credentialId: 'FFNHZFJXJSNE',
    link: '',
  },
  {
    name: 'Getting Started with Python',
    body: 'University of Michigan (Coursera)',
    year: 'June 2021',
    credentialId: 'DG5NFD35DAW8',
    link: '',
  },
  {
    name: 'Game Development using Java',
    body: 'RAIT ACM Student Chapter',
    year: 'March 2021',
    credentialId: '183227',
    link: '',
  },
  {
    name: 'Hour of Code',
    body: 'RAIT ACM Student Chapter',
    year: 'December 2020',
    link: '',
  },
  {
    name: 'GIT and Version Control',
    body: 'RAIT ACM Student Chapter',
    year: 'November 2020',
    link: '',
  },
  {
    name: 'Game Development Workshop',
    body: 'RAIT ACM Student Chapter',
    year: 'November 2020',
    link: '',
  },
  {
    name: 'Data Visualisation with R',
    body: 'RAIT ACM Student Chapter',
    year: 'January 2020',
    credentialId: 'ID183227',
    link: '',
  },
  {
    name: 'L1-Robotics',
    body: 'IEEE Student Chapter at RAIT',
    year: 'September 2019',
    credentialId: 'IEEE2019L116ASOD',
    link: '',
  },
],

 educations: [
  {
    institution: 'The University of Colorado Boulder',
    degree: 'Master of Science in Data Science',
    from: '2023',
    to: '2025',
    description: 'GPA: 3.93'
  },
  {
    institution: 'Mumbai University',
    degree: 'Bachelor of Engineering in Information Technology',
    from: '2019',
    to: '2023',
    description: 'GPA: 3.6'
  },
],
 publications: [
  {
    title: 'Forethinker - The Future of News Delivery',
    journalName: '',
    link: '',
    description: `A project under Google expert integrating AI, Big Data, and Cloud Services to revolutionize journalism.`,
  },
  {
    title: 'Determination of Accuracy of Neural Network Method Using MRI for Liver Cancer Detection',
    journalName: 'IEEE Explore (Scopus Indexed)',
    link: '',
    description: `Utilized Convolutional Neural Networks for liver cancer detection, comparing accuracy with K-Nearest Neighbor Classifier.`
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
