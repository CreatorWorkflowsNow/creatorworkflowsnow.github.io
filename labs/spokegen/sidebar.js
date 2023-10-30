// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    spokegen: [
        
        'vancouver',
        'overview',

        {
            type: 'category',
            label: 'Main Lab',
            items: [
                'use-case',
                'create-the-spoke',
                'test-the-spoke',
                'use-spoke-in-a-flow',
            ],
        },

        {
            type: 'category',
            label: 'Optional Lab',
            items: [
                'optional-lab-section-1',
                'optional-lab-section-2',
            ],
        },

    ],
};

module.exports = sidebars;
