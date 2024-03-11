// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    teleworkvancouver: [
        {
            type: 'category',
            label: 'Introduction',
            items: [
                'Introduction/vancouver',
                'Introduction/Overview',
                'Introduction/takeoff',
                'Introduction/Import-App',
            ],
        },
        {
            type: 'category',
            label: '1. Flow',
            items: [
                'Flow/Create-People-Finder-Spoke',
                'Flow/Create-Decision-Table',
                'Flow/Modify-Main-Flow',
            ],
        },
        {
            type: 'category',
            label: '2. Smarter Forms',
            items: [
                'Smarter-Forms/Playbook',
                'Smarter-Forms/Record-Producer',
            ],
        },
        {
            type: 'category',
            label: '3. Portal',
            items: [
                'Portal/3.1 Branding',
                'Portal/3.2 Add a Widget',
                'Portal/3.3 Create a Widget',
            ],
        },
        'Conclusion/index',
        'Survey',
        'CHANGELOG',
        'lab-guide-pdf',
    ],
};

module.exports = sidebars;
