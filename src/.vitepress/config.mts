import { defineConfig } from 'vitepress'

// Will be displayed in left side bar and navigation
const links = [
  { text: 'Introduction', link: '/introduction' },
  { text: 'Languages', items: [
    { text: 'Rust', link: '/languages/Rust'},
      { text: 'javascript', link: '/languages/javascript'},
      { text: 'C++', link: '/languages/C++'},
      { text: 'Java', link: '/languages/Java'},
      { text: 'PHP', link: '/languages/PHP'},

    ]},
  { text: 'Projects', items: [
      { text: 'Tic Tac Toe', link: '/projects/TicTacToe'},
      { text: 'Todo Liste', link: '/projects/rust-todo'},
      { text: 'Html CSS', link: '/projects/integrationWeb'},
      { text: 'WebSite', link: '/projects/website'},
      { text: 'Application Michael', link: '/projects/rust-todo'},

    ]},

  { text: 'Framework', items: [

    ]},
  { text: 'Database', items: [
      { text: 'MySQL', link: '/database/mysql'},
      { text: 'PGSQL', link: '/database/pgsql'},
    ]},
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with user name
  title: "My Training-report - Bilal",
  description: "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: 'en',
  base: "/Training-report/",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      ...links,
      { text: 'How to', link: '/how-to-use' }
    ],

    outline: [2,3],
    sidebar: [
      ...links,
      {
        text: 'Others',
        items: [
          { text: 'How to use', link: '/how-to-use'}
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or github profile
      { icon: 'github', link: 'https://github.com/Bilaljanir/Training-report' }
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern: 'https://github.com/Bilaljanir/Training-report/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    }
  }
  })
