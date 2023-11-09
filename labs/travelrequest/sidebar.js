// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    travelrequest: [
        'utah',
        {
            type: 'category',
            label: 'Travel Request',
            items: [
                'introduction',
            ],
        },
        'exercise-1',
        {
            type: 'category',
            label: '2. Tables',
            items: [
                'exercise-2-0',
                'exercise-2-1',
                'exercise-2-2',
                'exercise-2-3',
            ],
        },

        'exercise-3',
        'exercise-4',
        'exercise-5-1',


        // {
        //     type: 'category',
        //     label: '5. Testing',
        //     items: [
        //         'exercise-5-0',
        //         'exercise-5-1',
        //         'exercise-5-2',

        //     ],
        // },

        'lab-recap',

        {
            type: 'category',
            label: 'Bonus Exercises',
            items: [
                'exercise-bonus-0',
                
                {
                    type: 'category',
                    label: '1. Auto Calculate Trip Cost',
                    items: [
                        'exercise-bonus-1-0',
                        'exercise-bonus-1-1',
                        'exercise-bonus-1-2',
                    ],
                },
                {
                    type: 'category',
                    label: '2. Add a Workspace',
                    items: [
                        'exercise-bonus-2-0',
                        'exercise-bonus-2-1',
                        'exercise-bonus-2-2',
                    ],
                },
                {
                    type: 'category',
                    label: '3. Integrating via APIs',
                    items: [
                        'exercise-bonus-3-0',
                        'exercise-bonus-3-1',
                        'exercise-bonus-3-2',
                    ],
                },
            ],
        },
        'lab-guide-pdf',
    ],

};

module.exports = sidebars;