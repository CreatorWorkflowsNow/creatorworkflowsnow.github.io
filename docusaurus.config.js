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

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        items: [
          {
            href: 'http://lowcodeworkshops.com/',
            label: 'LowCodeWorkshops.com',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Product Documentation',
                href: 'https://docs.servicenow.com/',
              },
              {
                label: 'Now Create',
                href: 'https://nowlearning.servicenow.com/nowcreate',
              },
              {
                label: 'Now Learning',
                href: 'https://nowlearning.servicenow.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'ServiceNow Community',
                href: 'https://www.servicenow.com/community/',
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
                label: 'YouTube',
                href: 'https://www.youtube.com/user/servicenowinc',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/servicenow',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/servicenow/',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@servicenow',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'ServiceNow Developer',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CreatorWorkflowsNow/',
              },
            ],
          },
          {
            title: 'Connect with Us',
            items: [
              {
                label: 'ServiceNow Developer',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/CreatorWorkflowsNow/',
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
