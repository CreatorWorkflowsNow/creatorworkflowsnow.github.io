import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

const FeatureList = [
  {
    title: 'App Innovation',
    Svg: require('../../static/img/AES_logo.svg').default,
    description: (
      <>
        Telework Case Management
      </>
    ),
    //to: "/docs/telework-utah/Introduction/",
    to: "https://low-code.guide/docs/Telework/Introduction",
  },
  {
    title: 'EWF+CrWF Department Services',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Read more
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab-deptsvc/",
  },
  {
    title: 'App Governance',
    Svg: require('../../static/img/bus-management-console.svg').default,
    description: (
      <>
        Collaborate to Accelerate
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/lab-aemc-utah-v3/docs/Introduction/before-you-begin/",
  },
  {
    title: 'Automation Engine',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Read more
      </>
    ),
    to: "https://creatorworkflowsnow.github.io/docs/autoengine",
  },
];

function Feature({Svg, title, description, to}) {
  return (
    <Link to={to} className={clsx(styles.featureLink)}>
      <div className={clsx(styles.featureRow, styles.featureBox)}>
        <div className={styles.featureSvgContainer}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureContent}>
          <h3>{title}</h3>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <p style={{marginRight: '10px'}}>{description} <FontAwesomeIcon icon={faArrowRight} /></p>
          </div>
        </div>
      </div>
    </Link>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featureContainer)}>
        {FeatureList.map((props, idx) => (
          <Link to={props.to} className={clsx(styles.featureLink)} target="_self">
            <div className={clsx(styles.featureRow, styles.featureBox)}>
              <div className={styles.featureSvgContainer}>
                <props.Svg className={styles.featureSvg} alt={props.title} />
              </div>
              <div className={styles.featureContent}>
                <h3>{props.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <p style={{ marginRight: '10px' }}>
                    {props.description} <FontAwesomeIcon icon={faArrowRight} />
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

