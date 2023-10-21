// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    labaemc: [
        'utah',
        {
            type: 'category',
            label: 'Collaborate to Accelerate',
            items: [
                'get_started/intro',
                'get_started/common',
                'get_started/solutions',
                'get_started/lab-structure',
                'get_started/tips',
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
                        'implementation/prod/credential',
                        'implementation/prod/environments',
                        'implementation/prod/pipeline',
                        'implementation/prod/user-provisioning',
                        'implementation/prod/intake',
                        'implementation/prod/admins-group',
                        'implementation/prod/complete',
                    ],
                },
                {
                    type: 'category',
                    label: '2. Dev',
                    items: [
                        'implementation/dev/credential',
                        'implementation/dev/environment',
                        'implementation/dev/collaboration',
                        'implementation/dev/complete',
                    ],
                },
            ],
        },

        {
            type: 'category',
            label: '2. Simulation',
            items: [
                'simulation/overview',
                'simulation/intake',
                'simulation/intake-approval',
                'simulation/build-app-from-template',
                'simulation/collaboration-request',
                'simulation/collaboration-approval',
                'simulation/configure-integration',
                'simulation/deployment-request',
                'simulation/deployment-approval',
                'simulation/lab-complete',
            ],
        },

        {
            type: 'category',
            label: 'Extra Content',
            items: [
                'additional_content/aes-vs-studio',
                'additional_content/cloning',
                'additional_content/faqs',
                'additional_content/install-reqs',
                'additional_content/optional-tasks',
                'additional_content/personas',
                'additional_content/prepare-env',
                'additional_content/docs',
                'additional_content/admin-guide',
            ],
        },

        'lab-guide-pdf',
    ],

};

module.exports = sidebars;