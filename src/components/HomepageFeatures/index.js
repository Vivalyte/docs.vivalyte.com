import clsx from 'clsx';
import Link from "@docusaurus/Link";
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Guides',
    icon: '📚',
    link: '/docs/guides',
    description: (
      <>
        Need help choosing a product?
      </>
    ),
  },
  {
    title: 'Tutorials',
    icon: '🎞️',
    link: '/docs/tutorials',
    description: (
      <>
        Let's build something amazing.
      </>
    ),
  },
  {
    title: 'Cheat Sheets',
    icon: '📃',
    link: '/docs/Cheat%20Sheets',
    description: (
      <>
        Need that one little pinout?
      </>
    ),
  },
  {
    title: 'Help',
    icon: '❔',
    link: '/docs/help',
    description: (
      <>
        Troubleshooting together.
      </>
    ),
  },
];

function Feature({icon, title, description,link}) {
  return (
    <div className={clsx('col col--3')}>
      <Link to={link} className={styles.featureCard}>
      <div className="text--center padding-horiz--md padding-vert--lg shadow--md rounded">
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{icon}</div>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
