const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Creator Workshop Lab Guides',
  tagline: 'Ready to learn something new?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://creatorworkflowsnow.github.io',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'CreatorWorkflowsNow',
  projectName: 'CreatorWorkflowsNow.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: ['docusaurus-plugin-sass'],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: false, // Optional: disable the blog plugin        
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Creator Workshop Lab Guides',
          /** src: 'img/ServiceNow_logo_RGB_BL_WasabiGreen.svg', **/
          src: 'img/servicenow-logo.png',
          srcDark: 'img/servicenow-logo_dark.png',
        },
        items: [{
          href: 'http://lowcodeworkshops.com/',
          label: 'LowCodeWorkshops.com',
          position: 'right',
        }, ],
      },
      footer: {
        style: 'light',
        links: [{
            title: 'Learn',
            items: [{
                label: 'Developer Learning Paths',
                href: 'https://developer.servicenow.com/dev.do#!/learn'
              },
              {
                label: 'Now Learning Training',
                href: 'https://nowlearning.servicenow.com/',
              },
            ],
          },
          {
            title: 'Reference',
            items: [{
                label: 'API Reference',
                href: 'https://developer.servicenow.com/dev.do#!/reference'
              },
              {
                label: 'Developer Glossary',
                href: 'https://developer.servicenow.com/dev.do#!/guides/vancouver/now-platform/glossary/developer-glossary'
              },
              {
                label: 'Now Create',
                href: 'https://nowlearning.servicenow.com/nowcreate',
              },
              {
                label: 'Product Documentation',
                href: 'https://docs.servicenow.com/',
              },
            ]
          },
          {
            title: 'Connect with us',
            items: [{
                label: 'Free ServiceNow Instance',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'Developer Blog',
                href: 'https://developer.servicenow.com/blog.do'
              },
              {
                label: 'Developer Community',
                href: 'https://www.servicenow.com/community/developer/ct-p/Developer'
              },
              {
                label: 'ServiceNow Community',
                href: 'https://www.servicenow.com/community/',
              },
            ]
          },

          {
            title: 'About ServiceNow',
            items: [{
                label: 'ServiceNow.com',
                href: 'https://www.servicenow.com/',
              },
              {
                label: 'ServiceNow Blogs',
                href: 'https://www.servicenow.com/blogs.html',
              },
              {
                label: 'Customer Success Center',
                href: 'https://www.servicenow.com/success.html',
              },
              {
                label: 'Knowledge Conference',
                href: 'https://knowledge.servicenow.com/',
              },
            ],
          }, 
          {
            title: 'Social',
            items: [{
                label: 'Facebook',
                href: 'https://www.facebook.com/servicenow',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/servicenow/',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/servicenow',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/servicenow',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@servicenow',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/user/servicenowinc',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ServiceNow`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});