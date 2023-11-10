// @ts-check

// deptsvc-sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    deptsvc: [
        'utah',
        {
            type: 'category',
            label: 'Department Services',
            items: [
                'lab-introduction',
                'lab-overview',
            ],

        },

        {
            type: 'category',
            label: '1. App Creation',
            items: [
                'exercise-1-1-overview',
                'exercise-1-2-create-app-in-aes',
            ],
        },

        {
            type: 'category',
            label: '2. Data',
            items: [
                'exercise-2-0-overview',
                'exercise-2-1-app-data-model',
                'exercise-2-2-dept-req-table',
                'exercise-2-3-dept-issue-table',
                'exercise-2-4-dept-inq-table',
            ],
        },

        {
            type: 'category',
            label: '3. Experiences',
            items: [
                'exercise-3-0-overview',
                'exercise-3-1-customize-workspace',
                'exercise-3-2-dept-request',
                'exercise-3-3-dept-issue',
                'exercise-3-4-dept-inquiry',
                'exercise-3-5-sc-setup',
            ],
        },

        {
            type: 'category',
            label: '4. Employee Center Config',
            items: [
                'exercise-4-0-overview',
                'exercise-4-1-submit-request',
                'exercise-4-2-ec-setup',
            ],
        },

        {
            type: 'category',
            label: '5. Bonus Exercises',
            items: [
                'exercise-5-0-overview',
                'exercise-5-1-bonus-exercise-1',
                'exercise-5-2-bonus-exercise-2',
            ],
        },

        'lab-review',
        'download-pdf',
        {
            type: 'link',
            label: 'Post Workshop Survey', 
            href: 'https://forms.office.com/r/KcNQR6ApJ3',
        },

    ],

};

module.exports = sidebars;