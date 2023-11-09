// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

    psdsutah: [
        'utah',

        'lab-overview',
        {
            'Street Light Service Offering': [
                'exercise_1_service_offering/overview',
                'exercise_1_service_offering/service-offering',
                'exercise_1_service_offering/verification',
            ],


            'Service Request Modifications': [
                'exercise_2_service_request_modifications/overview',
                'exercise_2_service_request_modifications/field-additions',
                'exercise_2_service_request_modifications/verification',
            ],

            'Create a New Record Producer': [
                'exercise_3_record_producer/overview',
                'exercise_3_record_producer/record-producer',
                'exercise_3_record_producer/verification',
            ],

            'Modify OOB Playbook': [
                'exercise_4_playbook_modifications/overview',
                'exercise_4_playbook_modifications/playbook-modification',
                'exercise_4_playbook_modifications/verification',
            ],


         
        },
    ],

};

module.exports = sidebars;

