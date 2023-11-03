// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    complaintutah: [

        'utah',
        {
            'ESM Experience': [
                'overview',
                'audience',
                'definitions',
            ],

            '1. Agent Workspace': [
                'exercise_1_workspace/overview',
                'exercise_1_workspace/configure',
                'exercise_1_workspace/available',
            ],
            '2. Complaint Management': [
                'exercise_2_demo/overview',
                'exercise_2_demo/portal',
                'exercise_2_demo/agent',
            ],
            '3. Reporting': [
                'exercise_3_reporting/overview',
                'exercise_3_reporting/insights',
            ],
            '4. Scale Digital Innovation ': [
                'exercise_4_customize/overview',
                'exercise_4_customize/configure',
                'exercise_4_customize/test',
            ],

            '5. Create with App Engine': [
                'exercise_5-build/overview',
                'exercise_5-build/apply',
                'exercise_5-build/create',
                'exercise_5-build/data-model',
                'exercise_5-build/workspace',
                'exercise_5-build/automation',
            ],

            'Review': [
                'review',
            ],

        }
    ],
};

module.exports = sidebars;