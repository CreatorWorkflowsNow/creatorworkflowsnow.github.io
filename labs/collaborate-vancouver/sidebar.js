// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    labaemc: [
        'vancouver',
        {
            type: 'category',
            label: 'Collaborate to Accelerate',
            items: [
                '0.0-get_started/intro',
                '0.0-get_started/common',
                '0.0-get_started/solutions',
                '0.0-get_started/lab-structure',
                '0.0-get_started/tips',
            ],
        },

        /*
        {
            type: 'category',
            label: 'guides',
            link: {
                type: 'generated-index',
                title: 'Guides',
                description: 'learn stuff',
            },
            items: ['simulation/build-app-from-template'],
        },
        */
        
        {
            type: 'category',
            label: '1. Implementation',
            items: [
                {
                    type: 'category',
                    label: '1. Prod',
                    items: [
                        '1.0-implementation/1.1-prod/credential',
                        '1.0-implementation/1.1-prod/environments',
                        '1.0-implementation/1.1-prod/pipeline',
                        '1.0-implementation/1.1-prod/user-provisioning',
                        '1.0-implementation/1.1-prod/intake',
                        '1.0-implementation/1.1-prod/admins-group',
                        '1.0-implementation/1.1-prod/complete',
                    ],
                },
                {
                    type: 'category',
                    label: '2. Dev',
                    items: [
                        '1.0-implementation/1.2-dev/credential',
                        '1.0-implementation/1.2-dev/environment',
                        '1.0-implementation/1.2-dev/collaboration',
                        '1.0-implementation/1.2-dev/complete',
                    ],
                },
            ],
        },

        {
            type: 'category',
            label: '2. Simulation',
            items: [
                '2.0-simulation/overview',
                '2.0-simulation/intake',
                '2.0-simulation/intake-approval',
                '2.0-simulation/build-app-from-template',
                '2.0-simulation/collaboration-request',
                '2.0-simulation/collaboration-approval',
                '2.0-simulation/configure-integration',
                '2.0-simulation/deployment-request',
                '2.0-simulation/deployment-approval',
                '2.0-simulation/lab-complete',
            ],
        },

        {
            type: 'category',
            label: 'Extra Content',
            items: [
                '3.0-additional_content/aes-vs-studio',
                '3.0-additional_content/cloning',
                '3.0-additional_content/faqs',
                '3.0-additional_content/install-reqs',
                '3.0-additional_content/optional-tasks',
                '3.0-additional_content/personas',
                '3.0-additional_content/prepare-env',
                '3.0-additional_content/docs',
                '3.0-additional_content/admin-guide',
            ],
        },

        'lab-guide-pdf',
    ],

};

module.exports = sidebars;