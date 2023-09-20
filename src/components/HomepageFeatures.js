import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faUsers, faCog, faPlane, faRobot, faTruck, faHeadset } from '@fortawesome/free-solid-svg-icons';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-xl mx-auto px-4 md:px-6 md:py-7 lg:px-8 lg:py-9 lg:max-w-screen-xl pt-4 md:pt-6 lg:pt-8 ')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ title, description, to, icon, target }) => (
  <li className={clsx('p-6 md:mt-6 lg:mt-8 pb-2 md:pb-2 lg:pb-2')}>
    <div className={clsx('flex')}>
        <div className={clsx('flex-shrink-0')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <div className={clsx('flex items-center justify-center h-10 w-10 rounded-md bg-nowinfblue-100 hover:bg-nowinfblue-200 text-nowwasabi hover:text-nowwasabi/70 dark:bg-nowwasabi dark:hover:bg-nowwasabi/70 dark:text-white dark:hover:text-white')}>
            <FontAwesomeIcon className={clsx('')} icon={icon} alt={title} />
            </div>
          </Link>
        </div>
        <div className={clsx('ml-4 mr-4')}>
          <Link to={to} className={clsx('hover:no-underline')} target={target}>
            <h4 className={clsx('text-xl leading-6 font-extrabold text-nowinfblue-100 hover:text-nowwasabi dark:text-white dark:hover:text-white/70')}>
              {title}
            </h4>
            <p className={clsx('text-md mt-2 leading-6 text-nowinfblue-100 hover:text-nowwasabi dark:text-nowwasabi dark:hover:text-nowwasabi/70')}>
              {description}
            </p>
          </Link>
        </div>
    </div>
  </li>
);

export default HomepageFeatures;

const FeatureList = [
  {
    title: 'App Innovation',
    icon: faFileCode,
    description: (
      <>
      Gain valuable experience through hands-on exercises with App Engine Studio.
      </>
    ),
    //to: "/docs/telework-utah/Introduction/",
    to: "https://low-code.guide/docs/Telework/Introduction",
    target: '_blank',
  },

  {
    title: 'EWF+CrWF',
    icon: faUsers,
    description: (
      <>
      Create new Departmental Services and publish them to the enterprise using Employee Center.
      </>
    ),
    to: 'labs/deptsvc/exercise-0-1-introduction/',
    target: '_self',
  },

  {
    title: 'Collaborate to Accelerate',
    icon: faCog,
    description: (
      <>
      Learn to build and govern low-code applications with App Engine Management Center. 
      </>
    ),
    to: '/labs/collaborate/get_started/intro',
    target: '_self',
  },
  {
    title: 'Travel Request',
    icon: faPlane,
    description: (
      <>
      Create a Travel Request application using concepts such as Building Tables, Record Producers, Integrations and Workflows within App Engine Studio.
      </>
    ),
    to: '/labs/travelrequest/introduction',
    target: '_self',
  },

  {
    title: 'Automation Engine',
    icon: faRobot,
    description: (
      <>
      Get hands-on experience with products such as Automation Center, Document Intelligence, Integration Hub, and RPA Hub.
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab_autoengine",
    target: '_self',
  },

  {
    title: 'Logistics',
    icon: faTruck,
    description: (
      <>
      Empower Joe Shipman to revolutionize logistics with ServiceNow, driving efficiency and data integration.
      </>
    ),
    to: '/labs/logistics/get_started/overview',
    target: '_self',
  },

  {
    title: 'Complaints Management',
    icon: faHeadset,
    description: (
      <>
      Unstoppable resolution: Enhance CSM capabilities with the power of low-code using App Engine. 
      </>
    ),
    to: '/labs/complaint/overview/',
    target: '_self',
  },

];