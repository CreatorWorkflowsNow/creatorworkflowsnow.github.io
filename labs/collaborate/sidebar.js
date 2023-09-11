// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    labaemc: {
        'Get started': [
            'get_started/intro',
            'get_started/common',
            'get_started/solutions',
            'get_started/lab-structure',
            'get_started/tips',
        ],

        '1. Implementation': [
            {
                '1. Prod': [
                    'implementation/prod/credential',
                    'implementation/prod/environments',
                    'implementation/prod/pipeline',
                    'implementation/prod/user-provisioning',
                    'implementation/prod/intake',
                    'implementation/prod/admins-group',
                    'implementation/prod/complete',
                ],

                '2. Dev': [
                    'implementation/dev/credential',
                    'implementation/dev/environment',
                    'implementation/dev/collaboration',
                    'implementation/dev/complete',
                ],
            },
        ],

        '2. Simulation': [
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

        'Extra Content': [
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
};

module.exports = sidebars;