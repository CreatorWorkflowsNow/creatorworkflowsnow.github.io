// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    teleworkvancouver: [

        'vancouver',

        {
            type: 'category',
            label: 'Telework Case Management',
            items: [
                '0.0-introduction/app-engine-overview',
                '0.0-introduction/lab-goals',
                '0.0-introduction/use-case',
                '0.0-introduction/planning',
                '0.0-introduction/takeoff',
            ],
        },

        {
            type: 'category',
            label: '1. Build the Foundation',
            items: [
                '1.0-Build-the-Foundation/overview',
                '1.0-Build-the-Foundation/create-app',
                '1.0-Build-the-Foundation/create-arrangement-table',
                '1.0-Build-the-Foundation/create-telework-case-table',
                '1.0-Build-the-Foundation/data-in-table-builder',
                '1.0-Build-the-Foundation/configure-telework-form',
                '1.0-Build-the-Foundation/review',
            ],
        },

        {
            type: 'category',
            label: '2. User Experience',
            items: [
                '2.0-The-User-Experience/overview',
                '2.0-The-User-Experience/create',
                '2.0-The-User-Experience/add-fields',
                '2.0-The-User-Experience/preview-in-aes',
                '2.0-The-User-Experience/preview-in-portal',
                '2.0-The-User-Experience/review',
            ]
        },

        {
            type: 'category',
            label: '3. Automate Work',
            items: [
                '3.0-Automate-Work/overview',
                '3.0-Automate-Work/create-workflow',
                '3.0-Automate-Work/test-workflow',
                '3.0-Automate-Work/review',
            ],
        },

        {
            type: 'category',
            label: '4. Manage the Work',
            items: [
                '4.0-Manage-Work/overview',
                '4.0-Manage-Work/create-workspace',
                '4.0-Manage-Work/configure-workspace',
                '4.0-Manage-Work/use-workspace',
                '4.0-Manage-Work/review',
            ],
        },

        {
            type: 'category',
            label: 'Conclusion',
            items: [
                '5.0-conclusion/lab-review',
                '5.0-conclusion/resources',
                '5.0-conclusion/appendix',
            ],
        },

        'changelog',

    ],
};

module.exports = sidebars;
