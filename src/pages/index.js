import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";
import "../css/custom.css";

function HomepageHeader() {
  return (
<header className={clsx("hero hero--primary", styles.heroBanner)}>
  <div className={styles.videoBackground}>
    <video autoPlay muted loop playsInline className={styles.video}>
      <source src="/video/video.mp4" type="video/mp4" />
    </video>
  </div>

  <div className={styles.overlay} />

  <div className={`${styles.content} container`}>
    <Heading as="h1" className="hero__title">
      Learn @ Vivalyte
    </Heading>
    <p className="hero__subtitle">
      Explore Vivalyte’s guides, How To's, and so much more.
    </p>
    <div className={styles.buttons}>
      <Link
        className="button button--secondary button--lg"
        to="/docs/intro"
      >
        Let's Explore
      </Link>
    </div>
  </div>
</header>

  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      description="Organize your documentation"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
