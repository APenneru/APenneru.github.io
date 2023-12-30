// gitprofile.config.js

const config = {
  github: {
    username: 'AaryaPenn', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: ['AaryaPenn'], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'aaryapenneru',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://aaryapenneru.vercel.app/',
    phone: '647-500-4535',
    email: 'aaryanaga@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/16p_QzJmrRfN4TF61Qrbux_6VTg4O88f-/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Typescript',
    'C++',
    'Rust',
    'JavaScript',
    'React.js',
    'Node.js',
    'React.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'CSS',
    'Ansible',
  ],
  experiences: [
    {
      company: 'Linamar',
      position: 'Product Management Intern (Digital)',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.linamar.com/',
    },
    {
      company: 'Manulife Financial',
      position: 'Software Engineer & PM',
      from: 'May 2023',
      to: 'January 2024',
      companyLink: 'https://www.manulife.ca/personal.html',
    },
    {
      company: 'Manulife Financial',
      position: 'Software Engineering Intern',
      from: 'January 2023',
      to: 'May 2023',
      companyLink: 'https://www.manulife.ca/personal.html',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'University of Waterloo',
      degree: 'Systems Design Engineering',
      from: '',
      to: '',
      
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [],
  
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'imjosef', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `<a 
      class="text-primary" href="https://www.linkedin.com/in/aaryapenneru/"
      target=""
      rel=""
    >Aarya Penneru`,
};

export default config;
