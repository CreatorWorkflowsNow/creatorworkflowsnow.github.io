// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    examplelab: [
        
        'vancouver',
        'overview',

        {
            type: 'category',
            label: '1. Exercise ABC',
            items: [
                '1.0-exercise-1-abc/overview',
                '1.0-exercise-1-abc/activity-1',
                '1.0-exercise-1-abc/activity-2',
                '1.0-exercise-1-abc/review',
            ],
        },

        {
            type: 'category',
            label: '2. Exercise DEF',
            items: [
                '2.0-exercise-2-def/overview',
                '2.0-exercise-2-def/activity-1',
                '2.0-exercise-2-def/activity-2',
                '2.0-exercise-2-def/review',
            ],
        },

        {
            type: 'category',
            label: '3. Additional Resources',
            items: [
                '3.0-additional-resources/admonitions',
                '3.0-additional-resources/front-matter',
            ],
        },

        'review',
        'download-pdf',

    ],
};

module.exports = sidebars;
