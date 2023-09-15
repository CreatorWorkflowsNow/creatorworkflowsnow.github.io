const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'Creator Workshop Lab Guides',
  tagline: 'Ready to learn something new?',
  url: 'https://creatorworkflowsnow.github.io', // Set the production url of your site here
  baseUrl: '/', // Set the /<baseUrl>/ pathname under which your site is served. For GitHub pages deployment, it is often '/<projectName>/'
  favicon: 'img/favicon.ico',
  organizationName: 'CreatorWorkflowsNow', // GitHub pages deployment config.
  projectName: 'CreatorWorkflowsNow.github.io',

  staticDirectories: ['static'],

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    'docusaurus-plugin-sass',
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'collaborate',
        path: 'labs/collaborate',
        routeBasePath: 'labs/collaborate',
        sidebarPath: require.resolve('./labs/collaborate/sidebar.js'),
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'complaint',
        path: 'labs/complaint',
        routeBasePath: 'labs/complaint',
        sidebarPath: require.resolve('./labs/complaint/sidebar.js'),
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'logistics',
        path: 'labs/logistics',
        routeBasePath: 'labs/logistics',
        sidebarPath: require.resolve('./labs/logistics/sidebar.js'),
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'travelrequest',
        path: 'labs/travelrequest',
        routeBasePath: 'labs/travelrequest',
        sidebarPath: require.resolve('./labs/travelrequest/sidebar.js'),
      },
    ],

  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: false,
        blog: false, // Optional: disable the blog plugin        
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-P6HQJZPT0C',
          anonymizeIP: false,
        }
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
          src: 'img/servicenow-logo.png',
          srcDark: 'img/servicenow-logo_dark.png',
          href: '/',
          target: '_self',
        },
        items: [{
          label: 'Lab Guides Home',
          href: '/',
          position: 'right',
          target: '_self',
        }, ],
      },
      footer: {
        style: 'light',
        links: [{
            title: 'Learn',
            items: [{
                label: 'Developer Blog',
                href: 'https://developer.servicenow.com/blog.do'
              },
              {
                label: 'Developer Community',
                href: 'https://www.servicenow.com/community/developer/ct-p/Developer'
              },
              {
                label: 'Developer Learning Paths',
                href: 'https://developer.servicenow.com/dev.do#!/learn'
              },
              {
                label: 'FREE ServiceNow Instance',
                href: 'https://developer.servicenow.com/',
              },
              {
                label: 'Now Learning Training',
                href: 'https://nowlearning.servicenow.com/',
              },
              {
                label: 'ServiceNow Community',
                href: 'https://www.servicenow.com/community/',
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
            title: 'About ServiceNow',
            items: [{
                label: 'Customer Success Center',
                href: 'https://www.servicenow.com/success.html',
              },
              {
                label: 'Knowledge Conference',
                href: 'https://knowledge.servicenow.com/',
              },
              {
                label: 'LowCodeWorkshops.com',
                href: 'http://lowcodeworkshops.com/',
              },
              {
                label: 'ServiceNow.com',
                href: 'https://www.servicenow.com/',
              },
              {
                label: 'ServiceNow Blogs',
                href: 'https://www.servicenow.com/blogs.html',
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
};