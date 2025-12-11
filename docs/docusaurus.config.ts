import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Comprehensive textbook for Physical AI and Humanoid Robotics course',
  favicon: 'img/favicon.ico',

  // Production URL for your site
  url: 'https://ayesha1130.github.io',
  // Base URL for GitHub Pages deployment (exact repo name)
  baseUrl: '/Physical-AI-Humanoid-Robotics/',

  // GitHub Pages deployment config
  organizationName: 'Ayesha1130',
  projectName: 'Physical-AI-Humanoid-Robotics',

  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  customFields: {
    apiUrl: process.env.REACT_APP_API_URL || 'https://ai-rative-book-backend-production.up.railway.app',
    apiKey: process.env.REACT_APP_API_KEY || '',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/Ayesha1130/Physical-AI-Humanoid-Robotics/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Physical AI',
      logo: {
        alt: 'Physical AI Logo',
        src: 'img/ai-logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Start Learning',
        },
        {
          type: 'dropdown',
          label: 'Modules',
          position: 'left',
          items: [
            {label: 'Module 1: ROS 2 Fundamentals', to: '/docs/module1/week1-intro-physical-ai'},
            {label: 'Module 2: Gazebo Simulation', to: '/docs/module2/week6-gazebo'},
            {label: 'Module 3: NVIDIA Isaac', to: '/docs/module3/week8-isaac'},
            {label: 'Module 4: Conversational Robotics', to: '/docs/module4/week13-conversational-robotics'},
          ],
        },
        {
          href: 'https://github.com/Ayesha1130/Physical-AI-Humanoid-Robotics',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Course Material',
          items: [
            {label: 'Introduction', to: '/docs'},
            {label: 'ROS 2 Setup', to: '/docs/module1/week1-intro-physical-ai'},
          ],
        },
        {
          title: 'Community',
          items: [
            {label: 'Ayesha1130 GitHub', href: 'https://github.com/Ayesha1130'},
            {label: 'LinkedIn', href: 'https://www.linkedin.com/in/ayesha-iqbal-2613402b4/'},
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/Ayesha1130/Physical-AI-Humanoid-Robotics',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
