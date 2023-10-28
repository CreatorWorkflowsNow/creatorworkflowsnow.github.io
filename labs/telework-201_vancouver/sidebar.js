// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    telework_201: [
        
        'vancouver',

        {
            type: 'category',
            label: 'Overview',
            items: [
                'exercise-00-Introduction/Overview'
            ],
        },

        {
            type: 'category',
            label: '1. Data',
            items: [
                'exercise-01-Data/overview',
            ],
        },

        
        {
            type: 'category',
            label: '2-Security',
            items: [
                'exercise-02-Security/Overview',
            ],
        },

        {
            type: 'category',
            label: '3-Portal',
            items: [
                'exercise-03-Portal/Overview',
            ],
        },

        {
            type: 'category',
            label: '4-Flow',
            items: [
                'exercise-04-Flow/Overview',
            ],
        },

        {
            type: 'category',
            label: '5-Integration',
            items: [
                'exercise-05-Integration/Overview',
            ],
        },
    ],
};

module.exports = sidebars;
