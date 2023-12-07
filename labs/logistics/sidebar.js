// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    logistics: [

        'vancouver',

        {
            type: 'category',
            label: 'Logistics Lab',
            items: [
                '0.0-overview',
                '0.1-usecase',
                '0.2-setup',
            ],
        },

        {
            type: 'category',
            label: '1. Build an App',
            items: [
                '1.0-overview',
                '1.1-create-app',
                '1.2-create-data',
                '1.3-table-builder-data',
                '1-review',
            ],
        },

        {
            type: 'category',
            label: '2. Create Workspace',
            items: [
                '2.0-overview',
                '2.1-create-workspace',
                '2.2-configure-workspace',
                '2.3-test-workspace',
                '2.4-review',
            ],
        },

        {
            type: 'category',
            label: '3. Add Automation',
            items: [
                '3.0-overview',
                '3.1-add-a-flow',
                '3.2-test-the-flow',
                '3.3-review',
            ],
        },

        {
            type: 'category',
            label: '4. Mobile',
            items: [
                '4.0-overview',
                '4.1-create-mobile',
                '4.2-review',
            ],
        },

        {
            type: 'category',
            label: 'Conclusion',
            items: [
                '5.0-lab-review',
                '5.1-supplemental-resources',
            ],
        },

        'lab-guide-pdf',

        {
            type: 'link',
            label: 'Post Workshop Survey', 
            href: 'https://forms.office.com/r/KcNQR6ApJ3',
        },

    ],


};

module.exports = sidebars;