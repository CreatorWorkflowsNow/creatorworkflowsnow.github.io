// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    telework_201: [
        
        'vancouver',

        {   type: 'category',
            label: 'Telework 201',
            items: [
                'exercise-00-Introduction/Overview'
            ],
        },
        {   type: 'category',
            label: '1. Data',
            items: [
                'exercise-01-Data/Overview',
            ],
        },
        {   type: 'category',
            label: '2. Security',
            items: [
                'exercise-02-Security/Overview',
                'exercise-02-Security/Restrict-access-from-Admins',
            ],
        },
        {   type: 'category',
            label: '3. Portal',
            items: [
                'exercise-03-Portal/Overview',
            ],
        },
        {   type: 'category',
            label: '4. Flow',
            items: [
                'exercise-04-Flow/Overview',
            ],
        },
        {   type: 'category',
            label: '5. Integration',
            items: [
                'exercise-05-Integration/Overview',
            ],
        },

        'Lab-Review',
        'CHANGELOG',
        
    ],
};

module.exports = sidebars;