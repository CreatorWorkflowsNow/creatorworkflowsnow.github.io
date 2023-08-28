import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const HomepageFeatures = () => (
  <div className={clsx('container max-w-xl mx-auto px-4 md:px-6 lg:px-8 lg:max-w-screen-xl pt-4 md:pt-6 lg:pt-8 ')}>
      <ul className={clsx('grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-gap-4 md:col-gap-6 lg:col-gap-8 lg:grid lg:gap-y-50')}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </ul>
  </div>
);

const Feature = ({ Svg, title, description, to }) => (
  //<Link to={to} className={clsx('py-4 mb-4 text-green-700 no-underline')}>
  <Link to={to} className={clsx('')}>
    <li className={clsx('p-6 md:mt-6 lg:mt-8 pb-6 md:pb-8 lg:pb-10')}>
      <div className={clsx('flex')}>
        <div className={clsx('flex-shrink-0')}>
          <div className={clsx('flex items-center justify-center h-10 w-10 rounded-md bg-blue-950')}>
            <Svg alt={title} />
          </div>
        </div>
        <div className={clsx('ml-4 mr-4 text-blue-950')}>
            <h4 className={clsx('text-xl leading-6 font-medium text-blue-950 dark:text-green-400 hover:no-underline')}>
              {title}
            </h4>
            <p className={clsx('text-sm mt-2 leading-6 dark:text-green-400')}>
              {description}
            </p>
        </div>
      </div>
    </li>
  </Link>
);

export default HomepageFeatures;

const FeatureList = [
  {
    title: 'App Innovation',
    Svg: require('../../static/img/AES_logo.svg').default,
    description: (
      <>
      Telework Case Management<br/>
      <i>Learn to use App Engine studio to build your first app.</i>
      </>
    ),
    //to: "/docs/telework-utah/Introduction/",
    to: "https://low-code.guide/docs/Telework/Introduction",
  },
  {
    title: 'EWF+CrWF',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <i>Create new Departmental Services and how to publish them to the enterprise using Employee Center.</i>
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab-deptsvc/",
  },
  {
    title: 'App Governance',
    Svg: require('../../static/img/bus-management-console.svg').default,
    description: (
      <>
      Collaborate to Accelerate<br/>
      <i>Revolutionizing the way applications are crafted on the ServiceNow Platform, empowered by the capabilities of the App Engine Management Center.</i>
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab-aemc-utah-v3/docs/Before-you-begin/about-this-lab/",
  },
  {
    title: 'Travel Request',
    Svg: require('../../static/img/AES_logo.svg').default,
    description: (
      <>
      <i>Create a Travel Request application using the ServiceNow platform using concepts such as Building Tables, Record Producers, Integrations and Workflows within App Engine Studio.</i>
      </>
    ),
    to: "https://shaoservicenow.github.io/travelrequest/",
  },
  {
    title: 'Automation Engine',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <i>
      Get hands-on experience with Automation Engine products such as:
      <ol>
        <li>Automation Center</li>
        <li>Document Intelligence</li>
        <li>Integration Hub</li>
        <li>RPA Hub</li>
      </ol>
      </i>
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab_autoengine",
  },
];